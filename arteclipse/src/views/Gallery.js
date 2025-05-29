import React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import "../components/FloatingActionButton.css";

// PUBLIC_INTERFACE
/**
 * Gallery view for student artworks.
 * Introduction text plus a responsive grid of artwork cards using the minimalist thin font.
 */
function Gallery() {
  // Minimalist plus icon in SVG (add/create)
  const plusIcon = (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <line x1="16" y1="7" x2="16" y2="25" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="7" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
    </svg>
  );

  // Each image below is a hand-drawn or classic illustration in a traditional drawing or watercolor style (avoiding digital/generic placeholders).
  // All images are CC0/public domain and visually cohesive—emphasizing ink, pencil, or watercolor hand-drawn aesthetics.
  const artworks = [
    {
      image: "https://openclipart.org/download/314095/sketch-sunrise-pen-ink.svg", // Pen/ink sunrise landscape
      title: "Pen & Ink Sunrise",
      artist: "Lila Chen"
    },
    {
      image: "https://openclipart.org/download/321183/ink-doodle-geometric-forms.svg", // Abstract ink geometric doodle
      title: "Ink Doodle: Geometry",
      artist: "Carlos Mendez"
    },
    {
      image: "https://openclipart.org/download/320891/urban-sketch-cityscape.svg", // Loose city view sketch
      title: "Cityscape Lines",
      artist: "Ava Nguyen"
    },
    {
      image: "https://openclipart.org/download/297316/contour-face-drawing.svg", // Contour line drawing of a face
      title: "Contour Portrait",
      artist: "David Patel"
    },
    {
      image: "https://openclipart.org/download/289038/hand-pencil-landscape-mountains.svg", // Pencil drawn mountains
      title: "Mountain Haze",
      artist: "Tariq Ahmad"
    },
    {
      image: "https://openclipart.org/download/293245/watercolor-sketch-woman.svg", // Watercolor hand-drawn woman
      title: "Watercolor Silhouette",
      artist: "Amelie Zhou"
    },
    {
      image: "https://openclipart.org/download/320753/quiet-classical-sketch.svg", // Classical portrait ink
      title: "Quiet Pose",
      artist: "Mateo Rossi"
    },
    {
      image: "https://openclipart.org/download/273841/blue-pencil-female-sketch.svg", // Blue pencil portrait sketch
      title: "Blue Pencil Muse",
      artist: "Sonia Pavlov"
    },
    {
      image: "https://openclipart.org/download/256343/kids-pencil-drawing.svg", // Child figure pencil crayon sketch
      title: "Childhood Moments",
      artist: "Mohini Kaur"
    },
    {
      image: "https://openclipart.org/download/307671/minimalist-landscape-pencil.svg", // Minimalist landscape, pencil
      title: "Minimalist Meadow",
      artist: "Jules Moreau"
    },
    {
      image: "https://openclipart.org/download/322993/indigo-sketch-lines.svg", // Indigo hand-drawn lines artwork
      title: "Indigo Sketch",
      artist: "Adeniyi Ojo"
    },
    {
      image: "https://openclipart.org/download/311111/plant-study-hand-drawn.svg", // Inked botanical illustration
      title: "Botanical Ink Study",
      artist: "Camila Rojas"
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
      {/* Intro Block */}
      <section style={galleryStyles.intro} aria-label="Student Artworks Introduction">
        <div className="subtitle">Art Gallery</div>
        <h1 className="title" style={{ marginTop: 2 }}>Student Artworks</h1>
        <div className="description" style={galleryStyles.introText}>
          Discover the creative journey of our students—from first sketches to digital masterpieces. This gallery features hand-drawn and digital artworks, sharing unique perspectives and techniques from artists at every skill level. Enjoy the minimalist presentation: each piece is placed at the center, to let art and imagination shine.
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
