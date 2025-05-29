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

  // Hand-drawn/sketch artwork images from real, open-license and public domain sources.
  // Each card is unique and all illustrations are hand-drawn or sketched (pencil, pen, or ink).
  const artworks = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rembrandt_-_Self-Portrait_as_a_Young_Man_-_Drawing_-_WGA19253.jpg",
      title: "Rembrandt Self-Portrait (c.1628, Drawing)",
      artist: "Rembrandt, public domain (WikiCommons). Charcoal & ink studies demonstrate old master draftsmanship."
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/05/19/19/36/pen-348343_1280.jpg",
      title: "Pen Landscape Study",
      artist: "Pixabay, public domain. Delicate pen and ink, laid lines form a tranquil field and distant trees."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Drawn_Cat_Crosshatch.jpg",
      title: "Cat Crosshatch Drawing",
      artist: "Wikimedia Commons. Lively crosshatch studies animal volume with classic penwork."
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/04/10/19/08/woman-3306018_1280.jpg",
      title: "Female Portrait—Graphite Study",
      artist: "Pixabay, public domain. Sensitive pencil rendering explores traditional face drawing."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Da_Vinci_-_sketch.jpg",
      title: "Da Vinci—Inventor’s Sketch",
      artist: "Leonardo da Vinci, public domain (Wiki). Ingenious lines from one of his journals."
    },
    {
      image: "https://www.publicdomainpictures.net/pictures/40000/velka/vintage-sketch-of-horse.jpg",
      title: "Vintage Horse Sketch",
      artist: "PublicDomainPictures.net. Expressive line emphasizes anatomy and motion."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pencil_sketch_of_hands_by_Vincent_van_Gogh_%281885%29.jpg",
      title: "Hands (Van Gogh, Pencil, 1885)",
      artist: "Vincent van Gogh, public domain. Raw study of hands, pencil technique."
    },
    {
      image: "https://openclipart.org/download/279499/house-sketch.svg",
      title: "Child’s House (Hand-Drawn)",
      artist: "Openclipart, public domain. Joyful, simple home, whimsical lines."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Seurat_-_Landscape_sketch.jpg",
      title: "Landscape Sketch (Georges Seurat)",
      artist: "Georges Seurat, public domain. Quick tonal massing, pencil and chalk."
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/09/18/20/21/architecture-943212_1280.jpg",
      title: "Perspective Architecture Drawing",
      artist: "Pixabay, public domain. Classical street view in pencil and ruler."
    },
    {
      image: "https://www.publicdomainpictures.net/pictures/90000/velka/tree-1408678647YiC.jpg",
      title: "Tree (Line Drawing)",
      artist: "PublicDomainPictures.net. Ink linework, careful hatching builds leafy texture."
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/06/19/22/09/owl-1462097_1280.jpg",
      title: "Owl Sketch (Detail Study)",
      artist: "Pixabay, public domain. Fine pencil textures bring wildlife to life."
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
