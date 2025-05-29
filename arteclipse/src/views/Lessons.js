import React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import "../components/FloatingActionButton.css";

// PUBLIC_INTERFACE
/** Lessons view with FAB for starting new lesson */
function Lessons() {
  // Minimalist Play/Start icon (triangle in circle)
  const playIcon = (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.2" fill="none"/>
      <polygon points="13,10 24,16 13,22" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="hero">
      <div className="subtitle">Interactive Lessons</div>
      <h1 className="title">Lessons - Coming Soon</h1>
      <div className="description">
        Step-by-step art lessons and interactive tutorials will appear here.
      </div>
      <FloatingActionButton
        icon={playIcon}
        label="Start Lesson"
        onClick={() => { /* TODO: launch lesson activity (future) */ }}
      />
    </div>
  );
}

export default Lessons;
