import React from "react";
import "./FloatingActionButton.css";

// PUBLIC_INTERFACE
/**
 * FloatingActionButton renders a minimalist circular button fixed to the lower-right.
 * Accepts an icon, aria-label for accessibility, and onClick handler.
 *
 * @param {JSX.Element} icon - Visual icon element (SVG recommended).
 * @param {string} label - Aria-label for accessibility.
 * @param {function} onClick - Click handler function.
 * @param {string} [className] - Extra classNames for custom placement.
 */
function FloatingActionButton({ icon, label, onClick, className = "" }) {
  return (
    <button
      className={`fab ${className}`}
      aria-label={label}
      title={label}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );
}

export default FloatingActionButton;
