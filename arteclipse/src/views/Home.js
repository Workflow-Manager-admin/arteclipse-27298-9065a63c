import React from "react";

// PUBLIC_INTERFACE
/**
 * Home view for ArtEclipse
 */
function Home() {
  return (
    <div className="hero">
      <div className="subtitle">ArtEclipse Home</div>
      <h1 className="title">Welcome to ArtEclipse</h1>
      <div
        className="description"
        style={{
          fontSize: "1.27rem",
          lineHeight: "1.62",
          fontWeight: 200,
          color: "var(--text-color, #fff)",
          background: "none",
          boxShadow: "none",
          marginBottom: "8px",
          maxWidth: 720,
          letterSpacing: "0.018em",
        }}
        aria-label="Introduction"
      >
        ArtEclipse is a minimalist, interactive platform for learning and exploring art. Our mission is to foster creativity through clean design, immersive lessons, and a distraction-free environment. Experience art education with elegant simplicity—where the focus is entirely on ideas, techniques, and inspired practice.
      </div>
      <div className="description">
        Discover, learn, and showcase art in a distraction-free space.
      </div>
    </div>
  );
}

export default Home;
