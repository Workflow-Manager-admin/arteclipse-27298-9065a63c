import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

// Placeholder components for each route (minimalist)
function Home() {
  // PUBLIC_INTERFACE
  /** Home placeholder page */
  return (
    <div className="hero">
      <div className="subtitle">ArtEclipse Home</div>
      <h1 className="title">Welcome to ArtEclipse</h1>
      <div className="description">
        Discover, learn, and showcase art in a distraction-free space.
      </div>
    </div>
  );
}

function Lessons() {
  // PUBLIC_INTERFACE
  /** Lessons placeholder page */
  return (
    <div className="hero">
      <div className="subtitle">Interactive Lessons</div>
      <h1 className="title">Coming Soon</h1>
      <div className="description">
        Step-by-step art lessons and interactive tutorials will appear here.
      </div>
    </div>
  );
}

function Gallery() {
  // PUBLIC_INTERFACE
  /** Gallery placeholder page */
  return (
    <div className="hero">
      <div className="subtitle">Art Gallery</div>
      <h1 className="title">Coming Soon</h1>
      <div className="description">
        Browse and share artworks. The gallery will be available soon.
      </div>
    </div>
  );
}

function Profile() {
  // PUBLIC_INTERFACE
  /** User Profile placeholder page */
  return (
    <div className="hero">
      <div className="subtitle">User Profile</div>
      <h1 className="title">Profile Preview</h1>
      <div className="description">
        Personalized profiles and progress tracking are on the way.
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Main layout wrapper for ArtEclipse */
  return (
    <Router>
      <div className="app">
        <nav className="navbar accent-nav">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo" style={{ userSelect: "none", fontFamily: "inherit" }}>
              <span
                className="logo-symbol"
                style={{
                  background: "linear-gradient(90deg, #E87A41 0%, #4b006e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  marginRight: "6px"
                }}
                aria-label="ArtEclipse logo"
              >
                ◐
              </span>
              ArtEclipse
            </div>
            <nav className="nav-links" aria-label="Main Navigation">
              <a href="/" className="nav-link" style={{ textDecoration: "none", color: "var(--text-color)", fontWeight: 500, marginRight: 24, padding: "2px 0", borderBottom: "2px solid transparent", transition: "border 0.15s"  }}>Home</a>
              <a href="/lessons" className="nav-link" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: 500, marginRight: 24, padding: "2px 0", borderBottom: "2px solid transparent", transition: "border 0.15s"  }}>Lessons</a>
              <a href="/gallery" className="nav-link" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: 500, marginRight: 24, padding: "2px 0", borderBottom: "2px solid transparent", transition: "border 0.15s"  }}>Gallery</a>
              <a href="/profile" className="nav-link" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: 500, padding: "2px 0", borderBottom: "2px solid transparent", transition: "border 0.15s"  }}>Profile</a>
            </nav>
          </div>
        </nav>
        <main style={{ flex: 1, paddingTop: 96 }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;