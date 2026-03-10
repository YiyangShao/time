import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getResearchReferences } from "../content/research";
import type { ReclaimOption, StoryScene as StorySceneData } from "../content/types";
import { assertNever } from "../content/types";
import sceneChoiceImage from "../assets/storyboards/scene-choice-storyboard.jpg";
import sceneDriftImage from "../assets/storyboards/scene-drift-storyboard.jpg";
import sceneHomeImage from "../assets/storyboards/scene-home-storyboard.jpg";
import sceneLossImage from "../assets/storyboards/scene-loss-storyboard.jpg";
import sceneReclaimImage from "../assets/storyboards/scene-reclaim-storyboard.jpg";

interface StorySceneProps {
  scene: StorySceneData;
  onAdvance?: () => void;
}

function getDefaultOption(scene: StorySceneData): ReclaimOption {
  const option = scene.reclaimOptions?.find((entry) => entry.minutes === 30);

  if (!option) {
    throw new Error(`Scene ${scene.id} is missing a 30-minute reclaim option.`);
  }

  return option;
}

export function StoryScene({ scene, onAdvance }: StorySceneProps) {
  const [selectedMinutes, setSelectedMinutes] = useState<15 | 30 | 45>(30);

  useEffect(() => {
    setSelectedMinutes(30);
  }, [scene.id]);

  const selectedOption =
    scene.kind === "reclaim"
      ? scene.reclaimOptions?.find((entry) => entry.minutes === selectedMinutes) ??
        getDefaultOption(scene)
      : null;

  switch (scene.kind) {
    case "home":
      return (
        <article className="story-scene story-scene-home">
          <SceneText scene={scene} />
          <div className="scene-visual home-visual" aria-hidden="true">
            <SceneBackdrop src={sceneHomeImage} alt="" positionClass="scene-backdrop-home" />
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
          </div>
          {scene.actionLabel ? (
            <button className="scene-action click-target" type="button" onClick={onAdvance}>
              {scene.actionLabel}
              <span className="click-pulse" aria-hidden="true" />
            </button>
          ) : null}
        </article>
      );

    case "choice":
      return (
        <article className="story-scene story-scene-choice">
          <SceneText scene={scene} />
          <div className="scene-visual choice-visual">
            <SceneBackdrop src={sceneChoiceImage} alt="" positionClass="scene-backdrop-choice" />
            <motion.div
              className="choice-focus-ring"
              animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.36, 0.9, 0.36] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.button
              className="phone-choice click-target"
              type="button"
              aria-label={scene.actionLabel}
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
              <span className="phone-choice-copy">{scene.actionLabel}</span>
              <span className="click-pulse click-pulse-cold" aria-hidden="true" />
            </motion.button>
          </div>
        </article>
      );

    case "drift":
      return (
        <article className="story-scene story-scene-drift">
          <SceneText scene={scene} />
          <div className="scene-visual drift-visual" aria-hidden="true">
            <SceneBackdrop src={sceneDriftImage} alt="" positionClass="scene-backdrop-drift" />
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
          </div>
          {scene.actionLabel ? (
            <button
              className="scene-action scene-action-prominent scene-action-drift click-target"
              type="button"
              onClick={onAdvance}
            >
              <span className="click-callout">点击继续</span>
              {scene.actionLabel}
              <span className="click-pulse click-pulse-cold click-pulse-strong" aria-hidden="true" />
            </button>
          ) : null}
        </article>
      );

    case "loss":
      return (
        <article className="story-scene story-scene-loss">
          <SceneText scene={scene} />
          <div className="scene-visual loss-visual" aria-hidden="true">
            <SceneBackdrop src={sceneLossImage} alt="" positionClass="scene-backdrop-loss" />
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
          </div>
          {scene.actionLabel ? (
            <button className="scene-action scene-action-ghost click-target" type="button" onClick={onAdvance}>
              {scene.actionLabel}
              <span className="click-pulse" aria-hidden="true" />
            </button>
          ) : null}
        </article>
      );

    case "reclaim": {
      const references = getResearchReferences(scene.researchIds ?? []);

      return (
        <article className="story-scene story-scene-reclaim">
          <SceneText scene={scene} />
          <div className="reclaim-layout">
            <motion.div
              className="world-card world-card-now"
              aria-hidden="true"
              animate={{ opacity: [0.82, 1, 0.82] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SceneBackdrop
                src={sceneLossImage}
                alt=""
                className="scene-backdrop-contained"
                positionClass="scene-backdrop-loss"
              />
              <span className="world-label">现在</span>
              <div className="world-room world-room-cold" />
              <div className="world-glow world-glow-cold" />
            </motion.div>

            <motion.div
              className="reclaim-control-card click-target"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <label className="minutes-label" htmlFor="reclaim-range">
                <span>拿回</span>
                <strong>{selectedMinutes}</strong>
                <span>分钟</span>
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
              <p className="reclaim-line">{selectedOption?.line}</p>
              <span className="click-pulse click-pulse-warm" aria-hidden="true" />
              <div className="result-grid">
                <ResultPill
                  label="一年多出"
                  value={selectedOption?.yearlyHours ?? 0}
                  unit="小时"
                />
                <ResultPill
                  label="来得及的晚饭"
                  value={selectedOption?.dinners ?? 0}
                  unit="次"
                />
                <ResultPill
                  label="安静陪伴"
                  value={selectedOption?.presence ?? 0}
                  unit="段"
                />
              </div>
            </motion.div>

            <motion.div
              className="world-card world-card-future"
              aria-hidden="true"
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
                src={sceneReclaimImage}
                alt=""
                className="scene-backdrop-contained"
                positionClass="scene-backdrop-reclaim"
              />
              <span className="world-label">拿回后</span>
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
            </motion.div>
          </div>

          <section className="research-panel" aria-label="现实数据">
            {references.map((reference) => (
              <motion.article
                key={reference.id}
                className="research-card"
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
              </motion.article>
            ))}
          </section>
        </article>
      );
    }

    case "placeholder":
      return (
        <article className="story-scene story-scene-placeholder">
          <SceneText scene={scene} />
          <div className="placeholder-card">
            <span className="placeholder-chip">策展中</span>
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
  return (
    <motion.img
      className={`scene-backdrop ${className} ${positionClass}`.trim()}
      src={src}
      alt={alt}
      initial={{ opacity: 0.72, scale: 1.01 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function SceneText({ scene }: { scene: StorySceneData }) {
  return (
    <motion.header
      className="scene-text"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="scene-kicker">{scene.kicker}</p>
      <h2>{scene.title}</h2>
      {scene.line ? <p className="scene-line">{scene.line}</p> : null}
      {scene.actionHint ? <p className="scene-hint">{scene.actionHint}</p> : null}
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
