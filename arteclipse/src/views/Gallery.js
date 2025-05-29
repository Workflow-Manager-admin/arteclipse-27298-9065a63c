// Minimalist Address Entry for Gallery, harmonized with Home/Lessons
import React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import "../components/FloatingActionButton.css";

/**
 * Gallery view for student artworks.
 * Introduction text plus a responsive grid of artwork cards using the minimalist thin font.
 */
function Gallery() {
  // Minimalist stateful address box, matches Home.js and Lessons.js
  const [address, setAddress] = React.useState("");

  // Minimalist plus icon in SVG (add/create)
  const plusIcon = (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <line x1="16" y1="7" x2="16" y2="25" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="7" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
    </svg>
  );

  // Hand-drawn/sketch artwork images from real, open-license and public domain sources.
  // Each card is unique and all illustrations are hand-drawn or sketched (pencil, pen, or ink).
  const artworks = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Vincent_van_Gogh_-_Landscape_with_Houses_%28Sketch%29_-_Google_Art_Project.jpg",
      title: "Landscape with Houses (Van Gogh, Sketch)",
      artist: "Vincent van Gogh, public domain (WikiArt). Lively farmhouse pen and ink drawing."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Vincent_van_Gogh_-_Pencil_Sketch_of_a_Woman_Seated_-_Google_Art_Project.jpg",
      title: "Seated Woman (Van Gogh, Sketch)",
      artist: "Vincent van Gogh, public domain. Pencil and chalk figure study."
    },
    {
      image: "https://www.rawpixel.com/image/6220555/vintage-engraving-drawing-cat",
      title: "Cat Crosshatch Drawing",
      artist: "Rawpixel, CC0. Classic 19th-century engraving style with delicate fur patterns."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Fritz_Bennewitz_-_Pencil_Drawing_-_Landscape_-_Google_Art_Project.jpg",
      title: "Hillside Pencil Scene",
      artist: "Fritz Bennewitz, public domain. Rolling hills with expressive pencil shading."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Leonardo_da_Vinci_-_Study_of_Old_Man_%28Drawing%29.jpg",
      title: "Da Vinci—Aged Man Study",
      artist: "Leonardo da Vinci, public domain (Wiki). Subtle lines from a Renaissance master."
    },
    {
      image: "https://www.rawpixel.com/image/430943/free-public-domain-hand-drawn-horse-drawing",
      title: "Horse Motion Study",
      artist: "Rawpixel, CC0. Energetic graphite sketch of galloping horse anatomy."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pencil_sketch_of_hands_by_Vincent_van_Gogh_%281885%29.jpg",
      title: "Hands (Van Gogh, Pencil, 1885)",
      artist: "Vincent van Gogh, public domain. Raw study of hands, pencil technique."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Henry_Holiday_-_Dream_Caravan_-_sketch.jpg",
      title: "Dream Caravan (Henry Holiday, 1870)",
      artist: "Henry Holiday, public domain (Wikimedia). Whimsical ink and pen fantasy illustration."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Old_Man_Sketch_%28free_hand_drawing%29.png",
      title: "Old Man—Freehand Sketch",
      artist: "Wikimedia Commons. Expressive graphite portrait with shading."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Onderdonk-Pencil-sketch,Texas-landscape.jpg",
      title: "Texas Landscape by Onderdonk (Pencil)",
      artist: "Julian Onderdonk, public domain (Wiki). Soft shading defines American Southwest."
    },
    {
      image: "https://www.rawpixel.com/image/3068927/hand-drawn-tree-sketch-on-white-background",
      title: "Tree Sketch (Rawpixel CC0)",
      artist: "Rawpixel, public domain. Minimalist and linear hand-drawn botanical study."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/7/71/John_Singer_Sargent_-_Sketch_of_Owl.jpg",
      title: "Owl Study (John Singer Sargent)",
      artist: "John Singer Sargent, public domain. Feather texture, brisk pencil strokes."
    }
  ];

  // Minimalist style for artwork grid (CSS-in-JS for local isolation)
  const galleryStyles = {
    root: {
      width: "100vw",
      minHeight: "100%",
      padding: 0,
      margin: 0,
      position: "relative",
      overflowX: "hidden",
      background: "none",
      fontFamily: "var(--font-main)",
    },
    intro: {
      width: "100vw",
      maxWidth: "100vw",
      margin: "0 0 8px 0",
      paddingTop: 120,
      paddingBottom: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      background: "none",
      boxShadow: "none",
      zIndex: 1,
    },
    introText: {
      marginLeft: 52,
      marginRight: 0,
      textAlign: "left",
      width: "100%",
      maxWidth: 600,
      color: "var(--text-secondary,rgba(255,255,255,0.76))",
      marginTop: 11,
      fontWeight: 200,
      fontSize: "1.17rem",
      letterSpacing: "0.016em",
      lineHeight: 1.54,
      fontFamily: "var(--font-main)"
    },
    gridSection: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "none",
      boxShadow: "none"
    },
    grid: {
      width: "100%",
      maxWidth: 1080,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "32px",
      padding: "16px 2vw 48px 2vw",
      background: "none",
      boxShadow: "none"
    },
    card: {
      background: "rgba(255,255,255,0.021)",
      border: "1px solid var(--border-color,rgba(255,255,255,0.11))",
      borderRadius: 16,
      minHeight: 319,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 2.5px 15px 0 #22113c0c",
      fontFamily: "var(--font-main)",
      fontWeight: 200,
      letterSpacing: "0.012em",
      gap: "7px",
      padding: "18px 15px 14px 15px",
      transition: "box-shadow 0.18s, border-color 0.15s",
      color: "var(--text-color,#fff)",
      textAlign: "center"
    },
    img: {
      width: "100%",
      maxWidth: 240,
      minHeight: 164,
      aspectRatio: "5/3",
      borderRadius: 9,
      objectFit: "cover",
      marginBottom: 12,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.016)",
      boxShadow: "0 1.5px 11px 0 #3a059015"
    },
    title: {
      fontFamily: "var(--font-main)",
      fontWeight: 200,
      fontSize: "1.12rem",
      color: "var(--text-color,#fff)",
      lineHeight: 1.19,
      letterSpacing: "0.014em",
      margin: "3px 0 0 0"
    },
    artist: {
      fontFamily: "var(--font-main)",
      fontWeight: 200,
      fontSize: "0.97rem",
      color: "var(--text-secondary,rgba(255,255,255,0.72))",
      margin: "1px 0 0 0"
    }
  };

  // Responsive tweak (for smaller screens) - could be migrated to CSS
  if (window.innerWidth < 700) {
    galleryStyles.intro.marginLeft = 12;
    galleryStyles.introText.marginLeft = 12;
    galleryStyles.grid.padding = "10px 1vw 28px 1vw";
    galleryStyles.grid.gap = "15px";
  }

  return (
    <div style={galleryStyles.root}>
      {/* Minimalist Address Box */}
      <div
        aria-label="Address Input or Display"
        style={{
          width: "100%",
          maxWidth: 370,
          margin: "24px 0 18px 52px", // Harmonized left margin with Lessons page
          padding: "15px 19px 13px 19px",
          background: "rgba(255,255,255,0.018)",
          border: "1.1px solid var(--border-color,rgba(255,255,255,0.11))",
          borderRadius: 9,
          boxShadow: "0 1.2px 9px 0 #18182108",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 8,
        }}
      >
        <label
          htmlFor="gallery-address-box"
          style={{
            fontFamily: "var(--font-main)",
            fontWeight: 200,
            fontSize: "1.09rem",
            color: "var(--kavia-blue, #2ec4fd)",
            marginBottom: 3,
            letterSpacing: "0.018em",
            background: "none",
            alignSelf: "flex-start",
          }}
        >
          Address
        </label>
        <input
          id="gallery-address-box"
          type="text"
          placeholder="Enter your address (optional)"
          value={address}
          onChange={e => setAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "11px 11px",
            border: "1.1px solid var(--border-color,rgba(255,255,255,0.13))",
            borderRadius: 6,
            background: "rgba(255,255,255,0.022)",
            color: "var(--text-color,#fff)",
            fontFamily: "var(--font-main)",
            fontWeight: 200,
            fontSize: "1.04rem",
            outline: "none",
            letterSpacing: "0.013em",
            marginBottom: 0,
            transition: "border-color 0.15s",
          }}
          autoComplete="street-address"
          spellCheck={false}
        />
        {address && (
          <div
            style={{
              marginTop: 5,
              fontSize: "0.99rem",
              color: "var(--text-secondary,rgba(255,255,255,0.67))",
              letterSpacing: "0.011em",
              background: "none"
            }}
          >
            <span
              style={{ color: "var(--kavia-blue, #2ec4fd)", marginRight: 6 }}
            >
              Address:
            </span>
            {address}
          </div>
        )}
      </div>
      {/* Intro Block */}
      <section style={galleryStyles.intro} aria-label="Student Artworks Introduction">
        <div className="subtitle">Art Gallery</div>
        <h1 className="title" style={{ marginTop: 2 }}>Student Artworks</h1>
        <div className="description" style={galleryStyles.introText}>
          Discover the creative journey of our students through strictly hand-drawn sketches and studies. Every piece in this gallery is crafted in pencil, pen, or ink—celebrating traditional techniques and the tactile quality of art on paper. Enjoy the unity of style: minimalism lets every nuanced mark and organic imperfection shine.
        </div>
      </section>

      {/* Artwork Grid */}
      <section style={galleryStyles.gridSection} aria-label="Artwork Gallery Grid">
        <div style={galleryStyles.grid}>
          {artworks.map((art, idx) => (
            <div key={idx} style={galleryStyles.card} aria-label={`Artwork ${art.title}`}>
              <img
                src={art.image}
                alt={art.title}
                style={galleryStyles.img}
                loading="lazy"
              />
              <div style={galleryStyles.title}>{art.title}</div>
              <div style={galleryStyles.artist}>{art.artist}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Artwork Button */}
      <FloatingActionButton
        icon={plusIcon}
        label="New Artwork"
        onClick={() => { /* TODO: open new artwork modal (future) */ }}
      />
    </div>
  );
}

export default Gallery;
