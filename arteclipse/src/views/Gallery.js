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

  // Updated artworks: Each entry uses a hand-drawn/sketch-style public domain or open-license image and a description reflecting traditional art media.
  const artworks = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Landscape_sketch_by_W._Bond_PD.jpg",
      title: "Quiet Valley (Pencil Sketch, c.1900)",
      artist: "Public domain, Wikimedia Commons. Pencil lines evoke calm hills and textured earth with gentle, sketchy strokes."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Quercus_robur%2C_pen_and_ink_study_PD.jpg",
      title: "Oak in Pen & Ink",
      artist: "PD, Wikimedia Commons. Individual hatches show structure & shadow—a botanical study in crisp, monochrome linework."
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/02/25/20/58/woman-1228342_1280.jpg",
      title: "Portrait: Old-Fashioned Gaze",
      artist: "Pixabay PD. Graphite and charcoal blend softly for expressive facial features, true to sketch traditions."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Old_town_street_sketch_PD.jpg",
      title: "Old Town, Morning (Ink Line Drawing)",
      artist: "Public domain, Wikimedia Commons. Flowing urban architecture with purposeful, uneven strokes for a lively sense of place."
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/04/28/18/53/tree-2276843_1280.jpg",
      title: "Mountain Shadow (Pencil Study)",
      artist: "Pixabay PD. Layered pencil shading defines ridges and a moody sky, channeling plein air observations."
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/12/21/23/28/flower-579437_1280.png",
      title: "Botanical Line Sketch",
      artist: "Pixabay PD. Clean hand-drawn lines celebrate plant form, simplicity, and classic still life training."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hand-drawn_Bicycle_PD.JPG",
      title: "Bicycle Study",
      artist: "Wikimedia Commons PD. Minimalist sketch captures structure, rhythm, and the dynamic of wheels in motion."
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/09/21/09/31/owl-3695347_1280.jpg",
      title: "Owl: Watchful Eyes",
      artist: "Pixabay PD. Soft marks, layered graphite, and keen detail highlight classic wildlife drawing."
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/01/24/08/25/children-3950996_1280.jpg",
      title: "Sketch: Kids at Play",
      artist: "Pixabay PD. Whimsical lines describe joyful motion, echoing the directness of spontaneous sketching."
    },
    {
      image: "https://openclipart.org/download/176950/Geometric-shape-practice-handdrawn.svg",
      title: "Geometric Forms Sheet",
      artist: "Openclipart PD. Study of cubes, spheres, and cones using bold, deliberate pencil lines—for beginners’ practice."
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/07/03/10/28/charcoal-3514240_960_720.jpg",
      title: "Charcoal Figure (Expressive)",
      artist: "Pixabay PD. Bold, erratic lines and rich black give depth and movement to a human pose, in the charcoal tradition."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Flower_sketch_PD_ink.png",
      title: "Botanical Doodle (Ink Pen)",
      artist: "PD, Wikimedia Commons. Spirals and lines—botanical doodling as a playful hand-drawn tradition."
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
