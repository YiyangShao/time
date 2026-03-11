import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Locale } from "../content/types";
import { getStories } from "../content/stories";
import { uiCopyByLocale } from "../i18n";
import { SceneNavigator } from "./SceneNavigator";
import { StoryScene } from "./StoryScene";

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (target.isContentEditable) {
    return true;
  }

  return ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

interface StoryGalleryProps {
  locale: Locale;
  onLocaleChange: () => void;
}

export function StoryGallery({ locale, onLocaleChange }: StoryGalleryProps) {
  const stories = useMemo(() => getStories(locale), [locale]);
  const copy = uiCopyByLocale[locale];
  const defaultStory = stories[0];
  const stageRef = useRef<HTMLElement | null>(null);
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "32%" });

  if (!defaultStory) {
    throw new Error(`Story registry is empty for locale ${locale}.`);
  }

  const [selectedStoryId, setSelectedStoryId] = useState(defaultStory.id);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setSelectedStoryId(defaultStory.id);
    setActiveSceneIndex(0);
    setDirection(1);
  }, [defaultStory.id, locale]);

  const selectedStory = useMemo(() => {
    const story = stories.find((entry) => entry.id === selectedStoryId);

    if (!story) {
      throw new Error(`Unable to resolve story: ${selectedStoryId}`);
    }

    return story;
  }, [selectedStoryId]);

  const currentScene = selectedStory.scenes[activeSceneIndex];

  if (!currentScene) {
    throw new Error(`Missing scene at index ${activeSceneIndex} for story ${selectedStory.id}`);
  }

  const selectedStoryIndex = stories.findIndex((story) => story.id === selectedStory.id);

  if (selectedStoryIndex === -1) {
    throw new Error(`Unable to locate story order for ${selectedStory.id}`);
  }

  const isLastScene = activeSceneIndex === selectedStory.scenes.length - 1;
  const nextStory = stories[(selectedStoryIndex + 1) % stories.length];

  if (!nextStory) {
    throw new Error(`Unable to resolve next story after ${selectedStory.id}`);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (event.key === "ArrowRight") {
        setDirection(1);
        setActiveSceneIndex((current) => Math.min(current + 1, selectedStory.scenes.length - 1));
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1);
        setActiveSceneIndex((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedStory.scenes.length]);

  const swipeHandlers = useMemo(() => {
    let touchStartX = 0;

    return {
      onTouchStart: (e: React.TouchEvent) => {
        touchStartX = e.touches[0]?.clientX ?? 0;
      },
      onTouchEnd: (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0]?.clientX ?? 0;
        const delta = touchStartX - touchEndX;
        const threshold = 60;
        if (Math.abs(delta) < threshold) return;
        if (delta > 0) {
          setDirection(1);
          setActiveSceneIndex((c) => Math.min(c + 1, selectedStory.scenes.length - 1));
        } else {
          setDirection(-1);
          setActiveSceneIndex((c) => Math.max(c - 1, 0));
        }
      },
    };
  }, [selectedStory.scenes.length]);

  return (
    <div className="gallery-shell">
      <header className="gallery-header">
        <div>
          <p className="gallery-kicker">{copy.galleryKicker}</p>
          <h1>{copy.title}</h1>
          <p className="gallery-intro">{copy.intro}</p>
        </div>
        <motion.button
          className="language-switch"
          type="button"
          onClick={onLocaleChange}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {copy.languageSwitchLabel}
        </motion.button>
      </header>

      <section
        ref={stageRef}
        className="gallery-stage"
        {...swipeHandlers}
        onPointerMove={(event) => {
          const el = stageRef.current;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          setSpotlight({
            x: `${event.clientX - rect.left}px`,
            y: `${event.clientY - rect.top}px`,
          });
        }}
        onPointerLeave={() => {
          setSpotlight({ x: "50%", y: "32%" });
        }}
      >
        <div
          className="gallery-spotlight"
          aria-hidden="true"
          style={
            {
              "--spotlight-x": spotlight.x,
              "--spotlight-y": spotlight.y,
            } as CSSProperties
          }
        />
        <motion.div
          className="gallery-stage-veil"
          aria-hidden="true"
          animate={{ opacity: [0.3, 0.48, 0.34] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="gallery-orb gallery-orb-a"
          aria-hidden="true"
          animate={{ x: [0, 36, 0], y: [0, -22, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="gallery-orb gallery-orb-b"
          aria-hidden="true"
          animate={{ x: [0, -30, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={`${selectedStory.id}:${currentScene.id}`}
            className="scene-page"
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 80 : -80,
              scale: 0.96,
              filter: "blur(12px)",
              rotateY: direction > 0 ? -4 : 4,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              rotateY: 0,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -80 : 80,
              scale: 0.98,
              filter: "blur(10px)",
              rotateY: direction > 0 ? 4 : -4,
            }}
            transition={{
              duration: 0.52,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            {selectedStory.scenes.map((scene, index) =>
              index === activeSceneIndex ? (
                <StoryScene
                  key={`${selectedStory.id}:${scene.id}`}
                  storyId={selectedStory.id}
                  locale={locale}
                  scene={scene}
                  nextStoryTitle={nextStory.title}
                  onNextStory={
                    index === selectedStory.scenes.length - 1
                      ? () => {
                          setDirection(1);
                          setSelectedStoryId(nextStory.id);
                          setActiveSceneIndex(0);
                        }
                      : undefined
                  }
                  onAdvance={
                    index < selectedStory.scenes.length - 1
                      ? () => {
                          setDirection(1);
                          setActiveSceneIndex(index + 1);
                        }
                      : undefined
                  }
                />
              ) : null,
            )}
          </motion.div>
        </AnimatePresence>

        <SceneNavigator
          currentIndex={activeSceneIndex}
          totalScenes={selectedStory.scenes.length}
          onPrevious={() => {
            setDirection(-1);
            setActiveSceneIndex((current) => Math.max(current - 1, 0));
          }}
          onNext={() => {
            setDirection(1);
            setActiveSceneIndex((current) =>
              Math.min(current + 1, selectedStory.scenes.length - 1),
            );
          }}
          onSelect={(index) => {
            setDirection(index >= activeSceneIndex ? 1 : -1);
            setActiveSceneIndex(index);
          }}
          previousLabel={copy.previousSceneLabel}
          nextLabel={copy.nextSceneLabel}
          progressLabel={copy.storyProgressLabel}
          getJumpLabel={copy.jumpToSceneLabel}
        />
      </section>

      <section className="exhibit-navigator" aria-label={copy.exhibitNavigatorLabel}>
        {stories.map((story) => (
          <motion.button
            key={story.id}
            className={`exhibit-pill${story.id === selectedStory.id ? " is-active" : ""}`}
            type="button"
            onClick={() => {
              setDirection(story.id === selectedStory.id ? direction : 1);
              setSelectedStoryId(story.id);
              setActiveSceneIndex(0);
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {story.id === selectedStory.id ? (
              <motion.span
                className="exhibit-pill-highlight"
                layoutId="active-exhibit-pill"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            ) : null}
            <span className="exhibit-pill-copy">{story.title}</span>
          </motion.button>
        ))}
      </section>
    </div>
  );
}
