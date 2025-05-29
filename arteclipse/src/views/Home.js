import React from "react";

/**
 * Home view for ArtEclipse
 */
function Home() {
  // Teacher photos (copyright/CC0 or public domain links encouraged)
  const teacherPhotos = [
    // Elena Rivera
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=160&q=80",
    // Kenji Mori - Unsplash, valid working minimalist headshot
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=160&q=80",
    // Nia Adewale
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=160&q=80"
  ];

  // Teachers' data
  const teachers = [
    {
      name: "Elena Rivera",
      journey: "Elena started sketching urban landscapes in the early mornings of Barcelona. Through art, she found a meditative escape. Her focus is capturing mood with as little as possible—teaching students how to say more by drawing less.",
      photo: teacherPhotos[0]
    },
    {
      name: "Kenji Mori",
      journey: "Kenji left a corporate tech career in Tokyo to explore abstract watercolors. His lessons guide beginners through freeing their imagination, untethering creativity, and building a daily mindful sketching habit.",
      photo: teacherPhotos[1]
    },
    {
      name: "Nia Adewale",
      journey: "Nia's journey began with mural painting in Lagos. She now explores digital minimalism and color theory, inspiring others to express powerful stories using just shape, space, and light.",
      photo: teacherPhotos[2]
    },
  ];

  // Circular teacher image component - uses actual photo passed via src
  const TeacherPhoto = ({ src, alt }) => (
    <div
      style={{
        width: 84,
        height: 84,
        minWidth: 84,
        minHeight: 84,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.018)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1.3px solid var(--border-color,rgba(255,255,255,0.14))",
        marginBottom: 16,
        marginTop: 2,
        boxShadow: "none",
        overflow: "hidden"
      }}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          background: "rgba(255,255,255,0)",
          boxShadow: "none"
        }}
        loading="lazy"
      />
    </div>
  );

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
      {/* Horizontal Teacher Sections */}
      <section
        style={{
          margin: "38px 0 0 0",
          width: "100%",
          maxWidth: 760,
          minWidth: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "center",
          gap: "36px",
          flexWrap: "nowrap", // never wrap, always row on desktop
          overflowX: "auto", // scroll smoothly on overflow
          scrollbarWidth: "none", // hide scrollbar in Firefox
          msOverflowStyle: "none", // hide scrollbar IE/Edge
        }}
        aria-label="Meet the Online Teachers"
      >
        {teachers.map(({ name, journey, photo }, idx) => (
          <div
            key={name}
            style={{
              width: 240,
              maxWidth: "92vw",
              padding: "26px 19px 22px 19px",
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
              transition: "box-shadow 0.17s",
              flex: "0 1 240px",
            }}
          >
            <TeacherPhoto src={photo} alt={`Photo of ${name}`} />
            <div
              style={{
                fontFamily: "var(--font-main)",
                fontWeight: 200,
                fontSize: "1.18rem",
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
                fontSize: "1.01rem",
                color: "var(--text-secondary,rgba(255,255,255,0.69))",
                marginBottom: 2,
                marginTop: 0,
                letterSpacing: "0.012em",
                textAlign: "center",
                maxWidth: 350,
                lineHeight: 1.44,
                minHeight: 82,
              }}
            >
              {journey}
            </div>
          </div>
        ))}
      </section>
      {/* Sign Up / Log In Form Section */}
      <section
        style={{
          width: "100%",
          marginTop: 56,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        aria-label="Sign Up or Log In"
      >
        <div
          className="auth-form-container"
          style={{
            width: "100%",
            maxWidth: 370,
            background: "rgba(255,255,255,0.018)",
            border: "1.1px solid var(--border-color,rgba(255,255,255,0.09))",
            borderRadius: 16,
            boxShadow: "0 1.5px 19px 0 #28144113",
            padding: "28px 23px 22px 23px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            fontFamily: "var(--font-main)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-main)",
              fontWeight: 200,
              fontSize: "1.17rem",
              color: "var(--text-color,#fff)",
              marginBottom: 2,
              letterSpacing: "0.006em",
            }}
          >
            Sign Up or Log In
          </div>
          <form
            className="auth-form"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
            autoComplete="off"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1.1px solid var(--border-color,rgba(255,255,255,0.14))",
                borderRadius: 6,
                background: "rgba(255,255,255,0.025)",
                color: "var(--text-color,#fff)",
                fontFamily: "var(--font-main)",
                fontWeight: 200,
                fontSize: "1.04rem",
                outline: "none",
                marginBottom: 2,
                letterSpacing: "0.013em",
                transition: "border-color 0.16s",
              }}
              autoCapitalize="off"
              autoCorrect="off"
              autoFocus={false}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1.1px solid var(--border-color,rgba(255,255,255,0.14))",
                borderRadius: 6,
                background: "rgba(255,255,255,0.025)",
                color: "var(--text-color,#fff)",
                fontFamily: "var(--font-main)",
                fontWeight: 200,
                fontSize: "1.04rem",
                outline: "none",
                letterSpacing: "0.013em",
                transition: "border-color 0.16s",
              }}
              minLength={6}
              required
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                marginTop: 2,
                justifyContent: "center",
              }}
            >
              <button
                type="submit"
                className="btn"
                style={{
                  fontWeight: 300,
                  fontFamily: "var(--font-main)",
                  letterSpacing: "0.01em",
                  fontSize: "1.08rem",
                  minWidth: 0,
                  flex: 1,
                  maxWidth: "49%",
                  borderRadius: 6,
                }}
              >
                Sign Up
              </button>
              <button
                type="submit"
                className="btn"
                style={{
                  fontWeight: 300,
                  fontFamily: "var(--font-main)",
                  letterSpacing: "0.01em",
                  fontSize: "1.08rem",
                  minWidth: 0,
                  flex: 1,
                  maxWidth: "49%",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text-color,#fff)",
                  border: "1.1px solid var(--border-color,rgba(255,255,255,0.15))",
                  marginLeft: 0,
                }}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
