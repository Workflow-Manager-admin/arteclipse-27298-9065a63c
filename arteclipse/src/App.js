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
        <nav className="navbar">
          <div className="container navbar-inner">
            <div className="logo" aria-label="Art Palette Logo">
              {/* Minimalist SVG Palette Icon */}
              <span className="logo-palette" aria-label="Art palette icon">
                <svg
                  width="38"
                  height="28"
                  viewBox="0 0 38 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block", minWidth: 32, minHeight: 26 }}
                >
                  {/* Palette base */}
                  <path
                    d="M19 26.7c-4.5 0-7.5-1.7-10.1-3.8C3.4 19.2 1.1 14 2.7 9.7 4.8 4.2 13.5 1 20 1c7.5 0 14.2 5.4 14.2 11.7 0 2.2-1.1 4-2.9 4-1.02 0-1.85.83-1.85 1.9 0 1.2 1.04 2.1 2.44 2.1.71 0 1.11.29 1.11 1.02 0 2.85-4.43 4.98-8.91 4.98H19Z"
                    stroke="url(#PaletteGradient)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="PaletteGradient" x1="6" y1="4" x2="32" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff5fa2" />
                      <stop offset="1" stopColor="#2ec4fd" />
                    </linearGradient>
                  </defs>
                  {/* Paint Dots */}
                  <circle cx="23.7" cy="9.5" r="1.2" fill="#ff5fa2" fillOpacity="0.83"/>
                  <circle cx="16.1" cy="7.6" r="1.3" fill="#fae062" fillOpacity="0.79"/>
                  <circle cx="13" cy="14.6" r="1.1" fill="#2ec4fd" fillOpacity="0.92"/>
                  <circle cx="25.5" cy="15.5" r="1" fill="#6cfdd4" fillOpacity="0.84"/>
                </svg>
              </span>
              {/* Visually subordinate text label for accessiblity/minor presence */}
              <span className="logo-text logo-sub">
                ArtS+
              </span>
            </div>
            <div className="nav-links" aria-label="Main Navigation">
              <a href="/" className="nav-link">Home</a>
              <a href="/lessons" className="nav-link">Lessons</a>
              <a href="/gallery" className="nav-link">Gallery</a>
              <a href="/profile" className="nav-link">Profile</a>
            </div>
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