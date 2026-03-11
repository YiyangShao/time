import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { stories } from "../content/stories";
import type { StoryDefinition } from "../content/types";
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
          <p className="gallery-intro">
            一个横向展开的故事展馆。每一次切换，只让你面对一个瞬间。
          </p>
        </div>
        <div className="gallery-help">
          <span>左右箭头</span>
          <span>键盘切换</span>
          <span>点击边缘箭头继续</span>
        </div>
      </header>

      <section className="story-selector" aria-label="故事列表">
        {stories.map((story, index) => (
          <StoryCard
            key={story.id}
            index={index}
            story={story}
            isActive={story.id === selectedStory.id}
            onSelect={() => {
              setDirection(1);
              setSelectedStoryId(story.id);
              setActiveSceneIndex(0);
            }}
          />
        ))}
      </section>

      <section className="gallery-stage">
        <div className="stage-overview">
          <div className="stage-overview-copy">
            <p className="stage-label">
              第 {selectedStoryIndex + 1} 展 / 共 {stories.length} 展
            </p>
            <div className="stage-overview-heading">
              <strong>{selectedStory.title}</strong>
              <span>{selectedStory.theme}</span>
            </div>
            <p className="stage-overview-summary">{selectedStory.summary}</p>
          </div>
          <div className="stage-scene-indicator" aria-label="当前场景">
            <span>Scene</span>
            <strong>
              {activeSceneIndex + 1} / {selectedStory.scenes.length}
            </strong>
            <span>{currentScene.title}</span>
          </div>
        </div>

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
    </div>
  );
}

function StoryCard({
  index,
  story,
  isActive,
  onSelect,
}: {
  index: number;
  story: StoryDefinition;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      className={`story-card${isActive ? " is-active" : ""}`}
      type="button"
      onClick={onSelect}
    >
      <div className="story-card-topline">
        <span>
          第 {index + 1} 展 · {story.theme}
        </span>
        <span>{story.status === "live" ? "可体验" : "策展中"}</span>
      </div>
      <strong>{story.title}</strong>
      <p>{story.summary}</p>
    </button>
  );
}
