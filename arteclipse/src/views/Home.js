import React from "react";

// PUBLIC_INTERFACE
/**
 * Home view for ArtEclipse
 */
function Home() {
  // Placeholder minimalist teacher image (SVG - user silhouette with circle border)
  const TeacherImage = ({ alt }) => (
    <div
      style={{
        width: 84,
        height: 84,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.01)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1.3px solid var(--border-color,rgba(255,255,255,0.12))",
        marginBottom: 16,
        marginTop: 2,
        boxShadow: "none",
        overflow: "hidden"
      }}
      aria-label={alt}
    >
      {/* minimalist SVG for user */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.16)" strokeWidth="2"/>
        <ellipse cx="24" cy="20.5" rx="7.7" ry="7.2" fill="rgba(255,255,255,0.12)"/>
        <path d="M12.5 38.5c1.2-7.6 21.2-7.6 23 0" stroke="rgba(255,255,255,0.18)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      </svg>
    </div>
  );

  // Teachers' data
  const teachers = [
    {
      name: "Elena Rivera",
      journey: "Elena started sketching urban landscapes in the early mornings of Barcelona. Through art, she found a meditative escape. Her focus is capturing mood with as little as possible—teaching students how to say more by drawing less.",
    },
    {
      name: "Kenji Mori",
      journey: "Kenji left a corporate tech career in Tokyo to explore abstract watercolors. His lessons guide beginners through freeing their imagination, untethering creativity, and building a daily mindful sketching habit.",
    },
    {
      name: "Nia Adewale",
      journey: "Nia's journey began with mural painting in Lagos. She now explores digital minimalism and color theory, inspiring others to express powerful stories using just shape, space, and light.",
    },
  ];

  return (
    <div className="hero" style={{ gap: "22px" }}>
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
      {/* Vertical Teacher Sections */}
      <section
        style={{
          margin: "38px 0 0 0",
          width: "100%",
          maxWidth: 690,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "35px",
        }}
        aria-label="Meet the Online Teachers"
      >
        {teachers.map(({ name, journey }, idx) => (
          <div
            key={name}
            style={{
              width: "98%",
              maxWidth: 440,
              padding: "26px 24px 22px 24px",
              margin: 0,
              borderRadius: "19px",
              background: "rgba(255,255,255,0.011)",
              boxShadow: "0 2.5px 24px 0 #30184e13",
              border: "1.1px solid var(--border-color,rgba(255,255,255,0.09))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minHeight: 182,
              fontFamily: "var(--font-main)",
              fontWeight: 200,
              transition: "box-shadow 0.17s"
            }}
          >
            <TeacherImage alt={`Portrait of ${name}`} />
            <div
              style={{
                fontFamily: "var(--font-main)",
                fontWeight: 200,
                fontSize: "1.21rem",
                letterSpacing: "0.018em",
                marginBottom: "3px",
                color: "var(--text-color, #fff)",
                lineHeight: 1.17,
                textAlign: "center"
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: "var(--font-main)",
                fontWeight: 200,
                fontSize: "1.04rem",
                color: "var(--text-secondary,rgba(255,255,255,0.72))",
                marginBottom: 2,
                marginTop: 0,
                letterSpacing: "0.012em",
                textAlign: "center",
                maxWidth: 350,
                lineHeight: 1.53
              }}
            >
              {journey}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
