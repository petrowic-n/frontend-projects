import { useState } from "react";

export default function Flashcard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsFlipped((prev) => !prev);
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-face-front relative">
          <p className="font-display text-base">{front}</p>
          <span className="absolute bottom-3.5 text-[10px] font-mono tracking-wider text-text-muted">
            TAP TO REVEAL
          </span>
        </div>
        <div className="flip-face-back">
          <p className="text-sm text-text-primary leading-relaxed">{back}</p>
        </div>
      </div>
    </div>
  );
}
