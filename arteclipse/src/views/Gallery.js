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

  // Hand-drawn/sketch artwork images from public domain and open/royalty-free sources.
  // Each image is attributed and selected for visibility and traditional style.
  const artworks = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Vincent_van_Gogh_-_Stolen_Sketch_-_Water_mill_at_Gennep_-_F1587R_-_Croquis%2C_1884.jpg",
      title: "Water Mill at Gennep (Van Gogh sketch, 1884)",
      artist: "Vincent van Gogh, public domain (Wiki). Expressive pen hatching captures rural Dutch architecture."
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/10/25/17/01/woman-1768792_1280.jpg",
      title: "Classical Portrait Study",
      artist: "Pixabay, public domain. Delicate, realistic graphite shading of a woman’s face."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Samuel_Palmer_-_Oak_Trees%2C_Lullingstone_Park_-_Google_Art_Project.jpg",
      title: "Oak Trees, Lullingstone Park",
      artist: "Samuel Palmer, public domain (Wiki). Dense cross-hatch creates dramatic woodland texture."
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/05/08/21/04/drawing-5145581_1280.jpg",
      title: "Expressive Cat Sketch",
      artist: "Pixabay, public domain. Fluid pencil marks highlight form in motion."
    },
    {
      image: "https://www.publicdomainpictures.net/pictures/200000/velka/rough-pencil-sketch-of-old-man.jpg",
      title: "Old Man (Pencil Texture)",
      artist: "PublicDomainPictures.net. Each line radiates age and emotion in portraiture."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tree_pen_and_ink_study_%281875%29_PD.jpg",
      title: "Tree Study (Pen & Ink, 1875)",
      artist: "Public domain (Wiki). Historic botanicals mapped with meticulous linework."
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/07/08/05/08/sketch-2480182_1280.jpg",
      title: "Urban Café (Quick Ink Sketch)",
      artist: "Pixabay, public domain. Energetic lines suggest place, people, and movement."
    },
    {
      image: "https://openclipart.org/download/383537/handdrawingcastlebychild.svg",
      title: "Castle by a Child (Hand-drawn)",
      artist: "Openclipart, public domain. Joyful, naïve composition brimming with whimsical line."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Velazquez_Estudio_para_La_Vieja_Ffriendo_Huevos_PD.jpg",
      title: "Study: Old Woman Frying Eggs (Velázquez)",
      artist: "Diego Velázquez, public domain (Wiki). Academic figure study in pencil."
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/01/31/19/08/drawing-2023761_1280.jpg",
      title: "Perspective Street Scene (Pencil)",
      artist: "Pixabay, public domain. Sharply angular lines create a classical depth illusion."
    },
    {
      image: "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435ZnZk.jpg",
      title: "Classic Botanical Linework",
      artist: "PublicDomainPictures.net. Fine and careful ink lines depict natural forms."
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/10/10/21/03/owl-482530_1280.jpg",
      title: "Owl Sketch (Graphite, Study)",
      artist: "Pixabay, public domain. Focused realism in detailed wildlife sketching."
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
