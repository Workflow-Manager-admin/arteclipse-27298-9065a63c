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

  // All images are open-licensed hand-drawn, pencil, sketch, or ink styles for a cohesive, handcrafted gallery look.
  // Sources: Openclipart, Wikimedia Commons, Rawpixel, and PublicDomainPictures.net (all public domain or CC0).
  const artworks = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Landscape-pencil-sketch-pd-art.png",
      title: "Forest Lake Sketch",
      artist: "Anna Rydzik"
    },
    {
      image: "https://openclipart.org/download/201439/simple-pencil-tree-line-drawing.svg",
      title: "Hand Drawn Tree",
      artist: "Kathi Carter"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Woman-profile-drawing-pd-art.png",
      title: "Pencil Profile (Woman)",
      artist: "Enrico Puglisi"
    },
    {
      image: "https://openclipart.org/download/335616/city-sketch-skyscrapers.svg",
      title: "Urban City Sketch",
      artist: "Pat Ford"
    },
    {
      image: "https://openclipart.org/download/294401/minimal-landscape-sketch.svg",
      title: "Minimal Mountain View",
      artist: "Amna Franco"
    },
    {
      image: "https://www.publicdomainpictures.net/pictures/320000/velka/pencil-flower-drawing.jpg",
      title: "Flower Study in Pencil",
      artist: "L. Vogel"
    },
    {
      image: "https://openclipart.org/download/290440/sketch-bicycle.svg",
      title: "Sketch Bicycle",
      artist: "Juan Morales"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Sketch-owl-48220.jpg",
      title: "Owl in Pencil",
      artist: "Sabine Meier"
    },
    {
      image: "https://openclipart.org/download/247964/kids-painting-sketch.svg",
      title: "Child Painting Doodle",
      artist: "Tom Barrett"
    },
    {
      image: "https://openclipart.org/download/283790/geometric-solids-pencil-drawing.svg",
      title: "Geometric Study (Solids)",
      artist: "Minh Le"
    },
    {
      image: "https://images.rawpixel.com/image_450/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy9waGYvdjEyNjItYmFja2dyb3VuZC1jdXQxXzEucG5n.png",
      title: "Charcoal Face Sketch",
      artist: "Rawpixel PD"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Doodle_sketchbook_flowers_PD.jpg",
      title: "Sketchbook Floral Doodle",
      artist: "Natalie Green"
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
