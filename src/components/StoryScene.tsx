import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from "framer-motion";

import { getResearchReferences } from "../content/research";
import type { Locale, ReclaimOption, StoryScene as StorySceneData } from "../content/types";
import { assertNever } from "../content/types";
import { uiCopyByLocale } from "../i18n";
import sceneChoiceImage from "../assets/storyboards/scene-choice-storyboard.jpg";
import sceneDriftImage from "../assets/storyboards/scene-drift-storyboard.jpg";
import sceneHomeImage from "../assets/storyboards/scene-home-storyboard.jpg";
import futureSelfChoiceImage from "../assets/storyboards/future-self-choice-storyboard.jpg";
import futureSelfDriftImage from "../assets/storyboards/future-self-drift-storyboard.jpg";
import futureSelfHomeImage from "../assets/storyboards/future-self-home-storyboard.jpg";
import futureSelfLossImage from "../assets/storyboards/future-self-loss-storyboard.jpg";
import futureSelfReclaimImage from "../assets/storyboards/future-self-reclaim-storyboard.jpg";
import lateNightSleepChoiceImage from "../assets/storyboards/late-night-sleep-choice-storyboard.jpg";
import lateNightSleepDriftImage from "../assets/storyboards/late-night-sleep-drift-storyboard.jpg";
import lateNightSleepHomeImage from "../assets/storyboards/late-night-sleep-home-storyboard.jpg";
import lateNightSleepLossImage from "../assets/storyboards/late-night-sleep-loss-storyboard.jpg";
import lateNightSleepReclaimImage from "../assets/storyboards/late-night-sleep-reclaim-storyboard.jpg";
import sceneLossImage from "../assets/storyboards/scene-loss-storyboard.jpg";
import sceneReclaimImage from "../assets/storyboards/scene-reclaim-storyboard.jpg";
import shortVideoFocusChoiceImage from "../assets/storyboards/short-video-focus-choice-storyboard.jpg";
import shortVideoFocusDriftImage from "../assets/storyboards/short-video-focus-drift-storyboard.jpg";
import shortVideoFocusHomeImage from "../assets/storyboards/short-video-focus-home-storyboard.jpg";
import shortVideoFocusLossImage from "../assets/storyboards/short-video-focus-loss-storyboard.jpg";
import shortVideoFocusReclaimImage from "../assets/storyboards/short-video-focus-reclaim-storyboard.jpg";
import workSelfChoiceImage from "../assets/storyboards/work-self-choice-storyboard.jpg";
import workSelfDriftImage from "../assets/storyboards/work-self-drift-storyboard.jpg";
import workSelfHomeImage from "../assets/storyboards/work-self-home-storyboard.jpg";
import workSelfLossImage from "../assets/storyboards/work-self-loss-storyboard.jpg";
import workSelfReclaimImage from "../assets/storyboards/work-self-reclaim-storyboard.jpg";

interface StorySceneProps {
  storyId: string;
  locale: Locale;
  scene: StorySceneData;
  onAdvance?: () => void;
  onNextStory?: () => void;
  nextStoryTitle?: string;
}

interface SceneArtwork {
  src: string;
  positionClass: string;
}

function getDefaultOption(scene: StorySceneData): ReclaimOption {
  const option = scene.reclaimOptions?.find((entry) => entry.minutes === 30);

  if (!option) {
    throw new Error(`Scene ${scene.id} is missing a 30-minute reclaim option.`);
  }

  return option;
}

function getResearchIds(scene: StorySceneData): string[] {
  if (!scene.researchIds) {
    throw new Error(`Scene ${scene.id} is missing researchIds.`);
  }

  return scene.researchIds;
}

function getSceneArtwork(storyId: string, kind: Exclude<StorySceneData["kind"], "placeholder">): SceneArtwork {
  switch (storyId) {
    case "phone-family":
      switch (kind) {
        case "home":
          return { src: sceneHomeImage, positionClass: "scene-backdrop-home" };
        case "choice":
          return { src: sceneChoiceImage, positionClass: "scene-backdrop-choice" };
        case "drift":
          return { src: sceneDriftImage, positionClass: "scene-backdrop-drift" };
        case "loss":
          return { src: sceneLossImage, positionClass: "scene-backdrop-loss" };
        case "reclaim":
          return { src: sceneReclaimImage, positionClass: "scene-backdrop-reclaim" };
        default:
          return assertNever(kind);
      }

    case "work-self":
      switch (kind) {
        case "home":
          return { src: workSelfHomeImage, positionClass: "scene-backdrop-work-self-home" };
        case "choice":
          return { src: workSelfChoiceImage, positionClass: "scene-backdrop-work-self-choice" };
        case "drift":
          return { src: workSelfDriftImage, positionClass: "scene-backdrop-work-self-drift" };
        case "loss":
          return { src: workSelfLossImage, positionClass: "scene-backdrop-work-self-loss" };
        case "reclaim":
          return { src: workSelfReclaimImage, positionClass: "scene-backdrop-work-self-reclaim" };
        default:
          return assertNever(kind);
      }

    case "short-video-focus":
      switch (kind) {
        case "home":
          return { src: shortVideoFocusHomeImage, positionClass: "scene-backdrop-short-video-focus-home" };
        case "choice":
          return { src: shortVideoFocusChoiceImage, positionClass: "scene-backdrop-short-video-focus-choice" };
        case "drift":
          return { src: shortVideoFocusDriftImage, positionClass: "scene-backdrop-short-video-focus-drift" };
        case "loss":
          return { src: shortVideoFocusLossImage, positionClass: "scene-backdrop-short-video-focus-loss" };
        case "reclaim":
          return {
            src: shortVideoFocusReclaimImage,
            positionClass: "scene-backdrop-short-video-focus-reclaim",
          };
        default:
          return assertNever(kind);
      }

    case "late-night-sleep":
      switch (kind) {
        case "home":
          return { src: lateNightSleepHomeImage, positionClass: "scene-backdrop-late-night-sleep-home" };
        case "choice":
          return { src: lateNightSleepChoiceImage, positionClass: "scene-backdrop-late-night-sleep-choice" };
        case "drift":
          return { src: lateNightSleepDriftImage, positionClass: "scene-backdrop-late-night-sleep-drift" };
        case "loss":
          return { src: lateNightSleepLossImage, positionClass: "scene-backdrop-late-night-sleep-loss" };
        case "reclaim":
          return {
            src: lateNightSleepReclaimImage,
            positionClass: "scene-backdrop-late-night-sleep-reclaim",
          };
        default:
          return assertNever(kind);
      }

    case "future-self":
      switch (kind) {
        case "home":
          return { src: futureSelfHomeImage, positionClass: "scene-backdrop-future-self-home" };
        case "choice":
          return { src: futureSelfChoiceImage, positionClass: "scene-backdrop-future-self-choice" };
        case "drift":
          return { src: futureSelfDriftImage, positionClass: "scene-backdrop-future-self-drift" };
        case "loss":
          return { src: futureSelfLossImage, positionClass: "scene-backdrop-future-self-loss" };
        case "reclaim":
          return {
            src: futureSelfReclaimImage,
            positionClass: "scene-backdrop-future-self-reclaim",
          };
        default:
          return assertNever(kind);
      }

    default:
      throw new Error(`Unhandled story artwork mapping: ${storyId}`);
  }
}

function getChoiceClasses(storyId: string): { buttonClass: string; focusClass: string } {
  switch (storyId) {
    case "phone-family":
      return {
        buttonClass: "phone-choice",
        focusClass: "choice-focus-ring",
      };

    case "work-self":
      return {
        buttonClass: "work-choice-button",
        focusClass: "work-choice-focus-ring",
      };

    case "short-video-focus":
      return {
        buttonClass: "focus-choice-button",
        focusClass: "focus-choice-ring",
      };

    case "late-night-sleep":
      return {
        buttonClass: "sleep-choice-button",
        focusClass: "sleep-choice-ring",
      };

    case "future-self":
      return {
        buttonClass: "growth-choice-button",
        focusClass: "growth-choice-ring",
      };

    default:
      throw new Error(`Unhandled choice scene mapping: ${storyId}`);
  }
}

function getRequiredActionLabel(scene: StorySceneData): string {
  if (!scene.actionLabel) {
    throw new Error(`Scene ${scene.id} is missing an actionLabel.`);
  }

  return scene.actionLabel;
}

function DepthPanel({
  className,
  children,
  intensity = 1,
  style,
  ...motionProps
}: HTMLMotionProps<"div"> & { intensity?: number }) {
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 140, damping: 18, mass: 0.4 });
  const shiftX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.5 });
  const shiftY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.5 });

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    shiftX.set(0);
    shiftY.set(0);
  };

  const handlePointerMove: NonNullable<HTMLMotionProps<"div">["onPointerMove"]> = (event) => {
    if (reducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(py * -10 * intensity);
    rotateY.set(px * 12 * intensity);
    shiftX.set(px * 8 * intensity);
    shiftY.set(py * 8 * intensity);
  };

  const interactiveStyle = reducedMotion
    ? style
    : {
        rotateX,
        rotateY,
        x: shiftX,
        y: shiftY,
        transformPerspective: 1400,
      };

  return (
    <motion.div
      className={[className, !reducedMotion && "depth-panel-3d"].filter(Boolean).join(" ") || undefined}
      style={interactiveStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      whileHover={reducedMotion ? undefined : { scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

function HomeOverlay({ storyId }: { storyId: string }) {
  switch (storyId) {
    case "phone-family":
      return (
        <>
          <motion.div
            className="room-glow"
            animate={{ opacity: [0.8, 1, 0.84] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="door-warmth"
            animate={{ opacity: [0.85, 1, 0.88], scale: [1, 1.02, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="steam-cloud steam-cloud-a"
            animate={{ y: [0, -10, 0], opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="steam-cloud steam-cloud-b"
            animate={{ y: [0, -12, 0], opacity: [0.28, 0.6, 0.28] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </>
      );

    case "work-self":
      return (
        <>
          <motion.div
            className="office-night-glow"
            animate={{ opacity: [0.72, 1, 0.78] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="office-screen-glow"
            animate={{ opacity: [0.32, 0.72, 0.4], scale: [0.98, 1.04, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );

    case "short-video-focus":
      return (
        <>
          <motion.div
            className="focus-room-glow"
            animate={{ opacity: [0.76, 1, 0.8] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="focus-lamp-glow"
            animate={{ opacity: [0.28, 0.6, 0.34], scale: [0.98, 1.03, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );

    case "late-night-sleep":
      return (
        <>
          <motion.div
            className="sleep-room-glow"
            animate={{ opacity: [0.78, 1, 0.82] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="sleep-lamp-glow"
            animate={{ opacity: [0.26, 0.56, 0.3], scale: [0.98, 1.02, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );

    case "future-self":
      return (
        <>
          <motion.div
            className="growth-room-glow"
            animate={{ opacity: [0.76, 1, 0.82] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="growth-desk-glow"
            animate={{ opacity: [0.26, 0.58, 0.32], scale: [0.98, 1.03, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );

    default:
      throw new Error(`Unhandled home overlay: ${storyId}`);
  }
}

export function StoryScene({
  storyId,
  locale,
  scene,
  onAdvance,
  onNextStory,
  nextStoryTitle,
}: StorySceneProps) {
  const [selectedMinutes, setSelectedMinutes] = useState<15 | 30 | 45>(30);
  const copy = uiCopyByLocale[locale];

  useEffect(() => {
    setSelectedMinutes(30);
  }, [scene.id]);

  const selectedOption =
    scene.kind === "reclaim"
      ? scene.reclaimOptions?.find((entry) => entry.minutes === selectedMinutes) ??
        getDefaultOption(scene)
      : null;

  switch (scene.kind) {
    case "home": {
      const artwork = getSceneArtwork(storyId, "home");

      return (
        <article className="story-scene story-scene-home">
          <SceneText scene={scene} />
          <DepthPanel className="scene-visual home-visual" aria-hidden="true" intensity={0.9}>
            <SceneBackdrop src={artwork.src} alt="" positionClass={artwork.positionClass} />
            <div className="scene-depth-haze scene-depth-haze-warm" />
            <HomeOverlay storyId={storyId} />
          </DepthPanel>
          {scene.actionLabel ? (
            <button className="scene-action click-target" type="button" onClick={onAdvance}>
              {scene.actionLabel}
              <span className="click-pulse" aria-hidden="true" />
            </button>
          ) : null}
        </article>
      );
    }

    case "choice": {
      const artwork = getSceneArtwork(storyId, "choice");
      const choiceClasses = getChoiceClasses(storyId);
      const choiceLabel = getRequiredActionLabel(scene);

      return (
        <article className="story-scene story-scene-choice">
          <SceneText scene={scene} />
          <DepthPanel className="scene-visual choice-visual" intensity={1.15}>
            <SceneBackdrop src={artwork.src} alt="" positionClass={artwork.positionClass} />
            <div className="scene-depth-haze scene-depth-haze-cold" />
            <motion.div
              className={choiceClasses.focusClass}
              animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.36, 0.9, 0.36] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.button
              className={`${choiceClasses.buttonClass} click-target`}
              type="button"
              aria-label={choiceLabel}
              onClick={onAdvance}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, -4, 0],
                boxShadow: [
                  "0 0 90px rgba(101, 117, 255, 0.18)",
                  "0 0 120px rgba(101, 117, 255, 0.34)",
                  "0 0 90px rgba(101, 117, 255, 0.18)",
                ],
              }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="phone-choice-screen"
                animate={{ opacity: [0.8, 1, 0.82] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="phone-choice-copy">{choiceLabel}</span>
              <span className="click-pulse click-pulse-cold" aria-hidden="true" />
            </motion.button>
          </DepthPanel>
        </article>
      );
    }

    case "drift": {
      const artwork = getSceneArtwork(storyId, "drift");

      return (
        <article className="story-scene story-scene-drift">
          <SceneText scene={scene} />
          <DepthPanel className="scene-visual drift-visual" aria-hidden="true" intensity={1.2}>
            <SceneBackdrop src={artwork.src} alt="" positionClass={artwork.positionClass} />
            <div className="scene-depth-haze scene-depth-haze-cold" />
            <motion.div
              className="drift-vortex"
              animate={{ scale: [0.96, 1.08, 0.96], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="particle-field">
              {Array.from({ length: 16 }).map((_, index) => (
                <motion.span
                  key={index}
                  className={`particle particle-${(index % 4) + 1}`}
                  animate={{
                    x: [0, 50 + (index % 4) * 18, 110 + index * 4],
                    y: [0, (index % 3) * 12 - 12, 40 + (index % 4) * 10],
                    opacity: [0, 1, 0],
                    scale: [0.6, 1, 0.2],
                  }}
                  transition={{
                    duration: 1.8 + (index % 5) * 0.22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.08,
                  }}
                />
              ))}
            </div>
          </DepthPanel>
          {scene.actionLabel ? (
            <button
              className="scene-action scene-action-prominent scene-action-drift click-target"
              type="button"
              onClick={onAdvance}
            >
              <span className="click-callout">{locale === "zh" ? "点击继续" : "Click to continue"}</span>
              {scene.actionLabel}
              <span className="click-pulse click-pulse-cold click-pulse-strong" aria-hidden="true" />
            </button>
          ) : null}
        </article>
      );
    }

    case "loss": {
      const artwork = getSceneArtwork(storyId, "loss");

      return (
        <article className="story-scene story-scene-loss">
          <SceneText scene={scene} />
          <DepthPanel className="scene-visual loss-visual" aria-hidden="true" intensity={1.05}>
            <SceneBackdrop src={artwork.src} alt="" positionClass={artwork.positionClass} />
            <div className="scene-depth-haze scene-depth-haze-shadow" />
            <div className="loss-dust">
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="loss-dust-dot"
                  animate={{ y: [0, 18], opacity: [0.45, 0] }}
                  transition={{
                    duration: 2.4 + index * 0.12,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: index * 0.18,
                  }}
                />
              ))}
            </div>
          </DepthPanel>
          {scene.actionLabel ? (
            <button className="scene-action scene-action-ghost click-target" type="button" onClick={onAdvance}>
              {scene.actionLabel}
              <span className="click-pulse" aria-hidden="true" />
            </button>
          ) : null}
        </article>
      );
    }

    case "reclaim": {
      const nowArtwork = getSceneArtwork(storyId, "loss");
      const futureArtwork = getSceneArtwork(storyId, "reclaim");
      const references = getResearchReferences(locale, getResearchIds(scene));

      if (!selectedOption) {
        throw new Error(`Scene ${scene.id} is missing a reclaim option for ${selectedMinutes} minutes.`);
      }

      return (
        <article className="story-scene story-scene-reclaim">
          <SceneText scene={scene} />
          <div className="reclaim-layout">
            <DepthPanel
              className="world-card world-card-now"
              aria-hidden="true"
              intensity={0.75}
              animate={{ opacity: [0.82, 1, 0.82] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SceneBackdrop
                src={nowArtwork.src}
                alt=""
                className="scene-backdrop-contained"
                positionClass={nowArtwork.positionClass}
              />
              <span className="world-label">{copy.currentLabel}</span>
              <div className="world-room world-room-cold" />
              <div className="world-glow world-glow-cold" />
            </DepthPanel>

            <DepthPanel
              className="reclaim-control-card click-target"
              intensity={0.65}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <label className="minutes-label" htmlFor="reclaim-range">
                <span>{copy.reclaimLabel}</span>
                <strong>{selectedMinutes}</strong>
                <span>{copy.minutesLabel}</span>
              </label>
              <input
                id="reclaim-range"
                className="minutes-range"
                type="range"
                min="15"
                max="45"
                step="15"
                value={selectedMinutes}
                onChange={(event) => {
                  const nextValue = Number(event.target.value);

                  if (nextValue !== 15 && nextValue !== 30 && nextValue !== 45) {
                    throw new Error(`Unexpected reclaim minutes: ${event.target.value}`);
                  }

                  setSelectedMinutes(nextValue);
                }}
              />
              <p className="reclaim-line">{selectedOption.line}</p>
              <span className="click-pulse click-pulse-warm" aria-hidden="true" />
              <div className="result-grid">
                {selectedOption.metrics.map((metric) => (
                  <ResultPill
                    key={`${scene.id}-${selectedMinutes}-${metric.label}`}
                    label={metric.label}
                    value={metric.value}
                    unit={metric.unit}
                  />
                ))}
              </div>
            </DepthPanel>

            <DepthPanel
              className="world-card world-card-future"
              aria-hidden="true"
              intensity={0.85}
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(0, 0, 0, 0.18)",
                  "0 24px 80px rgba(255, 208, 140, 0.18)",
                  "0 20px 60px rgba(0, 0, 0, 0.18)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SceneBackdrop
                src={futureArtwork.src}
                alt=""
                className="scene-backdrop-contained"
                positionClass={futureArtwork.positionClass}
              />
              <span className="world-label">{copy.afterLabel}</span>
              <div className="world-room world-room-warm" />
              <div className="world-streams">
                {Array.from({ length: 10 }).map((_, index) => (
                  <motion.span
                    key={index}
                    className={`world-stream world-stream-${(index % 3) + 1}`}
                    animate={{ y: [24, -20], opacity: [0, 1, 0], scale: [0.5, 1, 0.7] }}
                    transition={{
                      duration: 2.6 + (index % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.18,
                    }}
                  />
                ))}
              </div>
            </DepthPanel>
          </div>

          <section className="research-panel" aria-label={copy.dataPanelLabel}>
            {references.map((reference) => (
              <DepthPanel
                key={reference.id}
                className="research-card"
                intensity={0.45}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <p className="research-label">{reference.label}</p>
                {reference.displayValue ? <strong>{reference.displayValue}</strong> : null}
                <p>{reference.summary}</p>
                <p className="research-meta">{reference.methodology}</p>
                <a href={reference.url} target="_blank" rel="noreferrer">
                  {reference.source}
                </a>
              </DepthPanel>
            ))}
          </section>

          {onNextStory && nextStoryTitle ? (
            <section className="story-end-actions" aria-label={copy.nextExhibitLabel}>
              <button className="story-next-button click-target" type="button" onClick={onNextStory}>
                {copy.nextExhibitLabel}: {nextStoryTitle}
                <span className="click-pulse click-pulse-warm" aria-hidden="true" />
              </button>
            </section>
          ) : null}
        </article>
      );
    }

    case "placeholder":
      return (
        <article className="story-scene story-scene-placeholder">
          <SceneText scene={scene} />
          <div className="placeholder-card">
            <span className="placeholder-chip">{locale === "zh" ? "策展中" : "curating"}</span>
            <p>{scene.line}</p>
          </div>
        </article>
      );

    default:
      return assertNever(scene.kind);
  }
}

function SceneBackdrop({
  src,
  alt,
  className = "",
  positionClass = "",
}: {
  src: string;
  alt: string;
  className?: string;
  positionClass?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.img
      className={`scene-backdrop ${className} ${positionClass}`.trim()}
      src={src}
      alt={alt}
      initial={{ opacity: 0.72, scale: 1.08, filter: "blur(10px)" }}
      animate={
        reducedMotion
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : {
              opacity: 1,
              scale: [1.04, 1.01, 1.05],
              x: [0, -10, 0],
              y: [0, -6, 0],
              filter: "blur(0px)",
            }
      }
      transition={
        reducedMotion
          ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          : {
              opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              filter: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            }
      }
    />
  );
}

function SceneText({ scene }: { scene: StorySceneData }) {
  return (
    <motion.header
      className="scene-text"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.04,
          },
        },
      }}
    >
      <motion.p
        className="scene-kicker"
        variants={{
          hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {scene.kicker}
      </motion.p>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {scene.title}
      </motion.h2>
      {scene.line ? (
        <motion.p
          className="scene-line"
          variants={{
            hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {scene.line}
        </motion.p>
      ) : null}
    </motion.header>
  );
}

function ResultPill({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <motion.div
      className="result-pill"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
    >
      <span>{label}</span>
      <strong>{value}</strong>
      <span>{unit}</span>
    </motion.div>
  );
}
