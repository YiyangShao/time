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
  return (
    <>
      <button
        className="edge-nav edge-nav-left"
        type="button"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        aria-label={previousLabel}
      >
        <span className="edge-nav-arrow">←</span>
      </button>

      <button
        className="edge-nav edge-nav-right"
        type="button"
        onClick={onNext}
        disabled={currentIndex === totalScenes - 1}
        aria-label={nextLabel}
      >
        <span className="edge-nav-arrow">→</span>
      </button>

      <div className="scene-progress" aria-label={progressLabel}>
        {Array.from({ length: totalScenes }).map((_, index) => (
          <button
            key={index}
            className={`scene-dot${index === currentIndex ? " is-active" : ""}`}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={getJumpLabel(index + 1)}
          />
        ))}
      </div>
    </>
  );
}
