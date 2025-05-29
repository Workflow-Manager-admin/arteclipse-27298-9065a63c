import React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import "../components/FloatingActionButton.css";

/**
 * Array of 16 minimalist lesson objects covering beginner to advanced drawing.
 */
const lessons = [
  {
    title: "Lesson 1: Basics of Drawing",
    level: "Beginner · Foundations",
    desc: "Understanding lines, shapes, and simple forms.",
  },
  {
    title: "Lesson 2: Contour Drawing",
    level: "Beginner",
    desc: "Develop hand-eye coordination and outline perception.",
  },
  {
    title: "Lesson 3: Gesture Sketching",
    level: "Beginner",
    desc: "Capturing movement and flow with rapid sketches.",
  },
  {
    title: "Lesson 4: Value & Shading",
    level: "Beginner",
    desc: "Light, shadow, and three-dimensional illusion.",
  },
  {
    title: "Lesson 5: Perspective Basics",
    level: "Upper Beginner",
    desc: "One- and two-point perspective for space & depth.",
  },
  {
    title: "Lesson 6: Simple Still Life",
    level: "Upper Beginner",
    desc: "Arranging and drawing real objects from observation.",
  },
  {
    title: "Lesson 7: Proportion & Measurement",
    level: "Intermediate",
    desc: "Achieving correct size relationships and accurate drawings.",
  },
  {
    title: "Lesson 8: Drawing from Reference",
    level: "Intermediate",
    desc: "Using photos and real life to improve accuracy.",
  },
  {
    title: "Lesson 9: Texture & Surfaces",
    level: "Intermediate",
    desc: "Techniques to render wood, metal, fabric, and more.",
  },
  {
    title: "Lesson 10: Portrait Fundamentals",
    level: "Intermediate",
    desc: "Basic steps in constructing the human face.",
  },
  {
    title: "Lesson 11: Advanced Anatomy",
    level: "Upper Intermediate",
    desc: "Skeletal and muscular forms for dynamic figures.",
  },
  {
    title: "Lesson 12: Complex Perspectives",
    level: "Upper Intermediate",
    desc: "Curvilinear, multi-point & atmospheric perspective.",
  },
  {
    title: "Lesson 13: Drawing from Imagination",
    level: "Advanced",
    desc: "Visualizing and creating original scenes.",
  },
  {
    title: "Lesson 14: Composition & Design",
    level: "Advanced",
    desc: "Arranging visual elements for balance and focus.",
  },
  {
    title: "Lesson 15: Creative Illustration",
    level: "Advanced",
    desc: "Building stories, characters, and mood in your art.",
  },
  {
    title: "Lesson 16: Advanced Illustration",
    level: "Expert",
    desc: "Mastering execution: complex scenes, polish, and personal style.",
  }
];

// Minimalist video thumbnail placeholder (SVG)
function VideoThumbnail() {
  return (
    <div className="lesson-card-thumbnail" aria-label="Video thumbnail placeholder">
      <svg width="72" height="46" viewBox="0 0 72 46" fill="none" style={{ display: "block" }}>
        <rect x="1.5" y="1.5" width="69" height="43" rx="8" fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.13)" strokeWidth="2"/>
        <polygon points="30,16 48,23 30,30" fill="rgba(232,122,65,0.26)"/>
      </svg>
    </div>
  );
}

// PUBLIC_INTERFACE
/** Lessons view: horizontally scrollable 16 minimalist video lecture cards with clean UI */
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
      <h1 className="title">Video Drawing Course: Beginner to Advanced</h1>
      <div className="description" style={{maxWidth: 530}}>
        16 immersive, minimalist video lessons—explore drawing from the simplest mark to advanced illustration mastery. Each card is a complete 10-hour journey.
      </div>
      {/* Horizontally scrollable lessons section */}
      <section className="lessons-scroll-container" aria-label="Drawing Video Lessons">
        <div className="lessons-card-row">
          {lessons.map((lesson, idx) => (
            <div className="lesson-card" key={lesson.title}>
              <VideoThumbnail />
              <div className="lesson-card-title">{lesson.title}</div>
              <div className="lesson-card-level">{lesson.level}</div>
              <div className="lesson-card-desc">{lesson.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <FloatingActionButton
        icon={playIcon}
        label="Start Lesson"
        onClick={() => { /* TODO: launch lesson activity (future) */ }}
      />
    </div>
  );
}

export default Lessons;
