import React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import "../components/FloatingActionButton.css";

/**
 * Array of 16 minimalist lesson objects covering beginner to advanced drawing.
 * (Content already reflects a progressive real-world journey.)
 */
const lessons = [
  {
    title: "Lesson 1: Introduction to Art & Mark Making",
    level: "Absolute Beginner",
    desc: "Discover the world of drawing. Get comfortable with your tools and make your first marks on the page, no experience needed.",
  },
  {
    title: "Lesson 2: Lines, Dots & Simple Shapes",
    level: "Beginner",
    desc: "Master lines, dots, circles, and essential geometric shapes—the building blocks for all drawing.",
  },
  {
    title: "Lesson 3: Feeling Form—From Shapes to Objects",
    level: "Beginner",
    desc: "Combine basic shapes to build easy objects. See everything as rectangles, triangles, and circles.",
  },
  {
    title: "Lesson 4: Understanding Light & Shadow",
    level: "Beginner",
    desc: "Explore how light creates shadows. Practice gentle shading; make flat shapes appear solid.",
  },
  {
    title: "Lesson 5: Seeing Like an Artist—Observation Skills",
    level: "Beginner",
    desc: "Train your eyes! Compare sizes and angles, and learn how to look at subjects for drawing.",
  },
  {
    title: "Lesson 6: Quick Sketching—Gesture & Movement",
    level: "Early Intermediate",
    desc: "Sketch quickly and loosely to capture movement. Learn how to warm up with flowy lines.",
  },
  {
    title: "Lesson 7: Space & Perspective Basics",
    level: "Intermediate",
    desc: "See 3D space on a flat page—learn one-point and two-point perspective for drawing rooms or streets.",
  },
  {
    title: "Lesson 8: Simple Still Life Composition",
    level: "Intermediate",
    desc: "Arrange and draw everyday objects with depth. Focus on overlap, spacing, and visual balance.",
  },
  {
    title: "Lesson 9: Texture—Making Surfaces Real",
    level: "Intermediate",
    desc: "Simulate wood, metal, glass, or cloth using lines, dots, and shading. Make drawings feel tactile.",
  },
  {
    title: "Lesson 10: Accurate Proportion & Measuring",
    level: "Intermediate",
    desc: "Learn tricks to compare distances. Draw anything to scale using your pencil as a ruler.",
  },
  {
    title: "Lesson 11: Drawing Human Faces Simply",
    level: "Upper Intermediate",
    desc: "Deconstruct the head into simple shapes. Learn how to place eyes, nose, and mouth realistically.",
  },
  {
    title: "Lesson 12: Drawing People in Action",
    level: "Upper Intermediate",
    desc: "Break down the human figure—stick figures to simplified anatomy. Draw poses, movement, and energy.",
  },
  {
    title: "Lesson 13: Imagination Sketching—From Idea to Image",
    level: "Advanced",
    desc: "Turn imagination into clear drawings! Visualize objects and scenes before you put pencil to paper.",
  },
  {
    title: "Lesson 14: Composition, Balance & Focus",
    level: "Advanced",
    desc: "Compose dynamic drawings. Guide the viewer’s eye, balance strong and calm areas in your art.",
  },
  {
    title: "Lesson 15: Storytelling Through Art",
    level: "Advanced",
    desc: "Illustrate a mood or story using character, setting, and symbolism. Combine all your skills for expressive results.",
  },
  {
    title: "Lesson 16: Exploring Digital Drawing Tools",
    level: "Expert",
    desc: "Move from paper to tablet. Learn digital painting basics and how to leverage technology in your creative workflow.",
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
/**
 * Lessons view: video lessons in vertical continuous flexbox strips (4 per row)
 */
function Lessons() {
  // Minimalist Play/Start icon (triangle in circle)
  const playIcon = (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.2" fill="none"/>
      <polygon points="13,10 24,16 13,22" fill="currentColor"/>
    </svg>
  );

  // Group lessons into strips of 4
  function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  const lessonStrips = chunkArray(lessons, 4);

  return (
    <div
      className="lessons-root"
      style={{
        width: "100vw",
        minHeight: "100%",
        padding: 0,
        margin: 0,
        position: "relative",
        overflowX: "hidden",
        background: "none"
      }}
    >
      {/* Intro block, visually distinct and aligned above strips */}
      <section className="lessons-intro" aria-label="Lessons Introduction">
        <div className="subtitle">Interactive Lessons</div>
        <h1 className="title">Video Drawing Course: Beginner to Advanced</h1>
        <div className="description">
          16 immersive, minimalist video lessons—explore drawing from the simplest mark to advanced illustration mastery. Each card is a complete 10-hour journey.
        </div>
      </section>
      {/* Strips each containing horizontally aligned lesson cards, expand container to full width */}
      <section
        className="lessons-strips-container"
        aria-label="Drawing Video Lessons"
      >
        {lessonStrips.map((strip, idx) => (
          <div className="lessons-strip-row" key={`strip-${idx}`}>
            {strip.map((lesson) => (
              <div className="lesson-card" key={lesson.title}>
                <VideoThumbnail />
                <div className="lesson-card-title">{lesson.title}</div>
                <div className="lesson-card-level">{lesson.level}</div>
                <div className="lesson-card-desc">{lesson.desc}</div>
              </div>
            ))}
          </div>
        ))}
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
