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
          {/* NOTE: Inline styling here adjusts only layout, NOT color. 
              All color is forced in CSS for navbar and children via !important. */}
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo">
              <span
                className="logo-symbol"
                aria-label="ArtEclipse logo"
              >
                ◐
              </span>
              ArtEclipse
            </div>
            <nav className="nav-links" aria-label="Main Navigation">
              {/* nav-link classNames matched exactly to CSS -- color fully controlled via App.css */}
              <a href="/" className="nav-link">Home</a>
              <a href="/lessons" className="nav-link">Lessons</a>
              <a href="/gallery" className="nav-link">Gallery</a>
              <a href="/profile" className="nav-link">Profile</a>
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