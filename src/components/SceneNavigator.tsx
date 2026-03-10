interface SceneNavigatorProps {
  currentIndex: number;
  totalScenes: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export function SceneNavigator({
  currentIndex,
  totalScenes,
  onPrevious,
  onNext,
  onSelect,
}: SceneNavigatorProps) {
  return (
    <>
      <button
        className="edge-nav edge-nav-left"
        type="button"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        aria-label="上一幕"
      >
        <span className="edge-nav-arrow">←</span>
      </button>

      <button
        className="edge-nav edge-nav-right"
        type="button"
        onClick={onNext}
        disabled={currentIndex === totalScenes - 1}
        aria-label="下一幕"
      >
        <span className="edge-nav-arrow">→</span>
      </button>

      <div className="scene-progress" aria-label="故事进度">
        {Array.from({ length: totalScenes }).map((_, index) => (
          <button
            key={index}
            className={`scene-dot${index === currentIndex ? " is-active" : ""}`}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`跳转到第 ${index + 1} 幕`}
          />
        ))}
      </div>
    </>
  );
}
