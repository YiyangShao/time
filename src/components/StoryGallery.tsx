import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { stories } from "../content/stories";
import { SceneNavigator } from "./SceneNavigator";
import { StoryScene } from "./StoryScene";

const defaultStory = stories[0];

if (!defaultStory) {
  throw new Error("Story registry is empty.");
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (target.isContentEditable) {
    return true;
  }

  return ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

export function StoryGallery() {
  const [selectedStoryId, setSelectedStoryId] = useState(defaultStory.id);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

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

  return (
    <div className="gallery-shell">
      <header className="gallery-header">
        <div>
          <p className="gallery-kicker">interactive story gallery</p>
          <h1>把时间拿回来</h1>
          <p className="gallery-intro">五个关于时间去向的互动故事。</p>
        </div>
      </header>

      <section className="gallery-stage">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={`${selectedStory.id}:${currentScene.id}`}
            className="scene-page"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 120 : -120, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -120 : 120, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {selectedStory.scenes.map((scene, index) =>
              index === activeSceneIndex ? (
                <StoryScene
                  key={`${selectedStory.id}:${scene.id}`}
                  storyId={selectedStory.id}
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
        />
      </section>

      <section className="exhibit-navigator" aria-label="展馆切换">
        {stories.map((story) => (
          <button
            key={story.id}
            className={`exhibit-pill${story.id === selectedStory.id ? " is-active" : ""}`}
            type="button"
            onClick={() => {
              setDirection(story.id === selectedStory.id ? direction : 1);
              setSelectedStoryId(story.id);
              setActiveSceneIndex(0);
            }}
          >
            {story.title}
          </button>
        ))}
      </section>
    </div>
  );
}
