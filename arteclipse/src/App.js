import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Lessons from './views/Lessons';
import Gallery from './views/Gallery';
import UserProfile from './views/UserProfile';

// Inject Inter (thin, light) font from Google Fonts for minimalist navbar & nav text
if (typeof document !== "undefined") {
  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Inter:wght@200;300&display=swap";
  document.head.appendChild(font);
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
              <Route path="/profile" element={<UserProfile />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;