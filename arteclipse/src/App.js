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
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> ArtEclipse
              </div>
              {/* Nav buttons can be added here in the future if needed */}
            </div>
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