import { motion } from "framer-motion";

interface SceneNavigatorProps {
  currentIndex: number;
  totalScenes: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  previousLabel: string;
  nextLabel: string;
  progressLabel: string;
  getJumpLabel: (index: number) => string;
}

export function SceneNavigator({
  currentIndex,
  totalScenes,
  onPrevious,
  onNext,
  onSelect,
  previousLabel,
  nextLabel,
  progressLabel,
  getJumpLabel,
}: SceneNavigatorProps) {
  const progress = totalScenes > 1 ? (currentIndex + 1) / totalScenes : 1;

  return (
    <>
      <motion.button
        className="edge-nav edge-nav-left"
        type="button"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        aria-label={previousLabel}
        whileHover={currentIndex > 0 ? { scale: 1.08, x: 4 } : {}}
        whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
      >
        <motion.span
          className="edge-nav-arrow"
          animate={currentIndex > 0 ? { x: [0, -2, 0] } : {}}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          ←
        </motion.span>
      </motion.button>

      <motion.button
        className="edge-nav edge-nav-right"
        type="button"
        onClick={onNext}
        disabled={currentIndex === totalScenes - 1}
        aria-label={nextLabel}
        whileHover={currentIndex < totalScenes - 1 ? { scale: 1.08, x: -4 } : {}}
        whileTap={currentIndex < totalScenes - 1 ? { scale: 0.95 } : {}}
      >
        <motion.span
          className="edge-nav-arrow"
          animate={currentIndex < totalScenes - 1 ? { x: [0, 2, 0] } : {}}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.button>

      <div className="scene-progress-wrapper" aria-label={progressLabel}>
        <div className="scene-progress-track">
          <motion.div
            className="scene-progress-fill"
            layout
            initial={false}
            animate={{ width: `${progress * 100}%` }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          />
        </div>
        <div className="scene-progress scene-progress-dots">
          {Array.from({ length: totalScenes }).map((_, index) => (
            <motion.button
              key={index}
              className={`scene-dot${index === currentIndex ? " is-active" : ""}`}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={getJumpLabel(index + 1)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex ? (
                <motion.span
                  className="scene-dot-glow"
                  layoutId="scene-dot-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              ) : null}
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
}
