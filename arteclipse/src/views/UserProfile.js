import React from "react";

// Minimalist SVG for user avatar
const MinimalAvatar = () => (
  <div
    style={{
      width: 74,
      height: 74,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.04)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1.1px solid var(--border-color,rgba(255,255,255,0.10))",
      marginBottom: 6,
      marginTop: 2,
      boxShadow: "none",
      overflow: "hidden"
    }}
    aria-label="User avatar"
  >
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="21" stroke="rgba(255,255,255,0.16)" strokeWidth="1.7"/>
      <ellipse cx="22" cy="16.8" rx="7.3" ry="6.5" fill="rgba(255,255,255,0.13)"/>
      <path d="M10 35c1-5.4 17-5.4 18.6 0" stroke="rgba(255,255,255,0.13)" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
    </svg>
  </div>
);

// Minimalist SVG graph for monthly uploads (mock data)
const ArtworkUploadsGraph = ({ data }) => {
  // Data: [{month: string, count: number}]
  const months = data.map(d => d.month);
  const counts = data.map(d => d.count);
  const maxCount = Math.max(...counts, 4);

  // Chart size
  const w = 272;
  const h = 85;
  const barWidth = Math.min(24, (w - 32) / data.length - 7);
  const chartLeft = 24;
  const chartBottom = h - 22;
  return (
    <svg width={w} height={h} style={{ display: "block", width: "100%", maxWidth: w, height: "auto" }} aria-label="Artwork Uploads Per Month">
      {/* Axis */}
      <line x1={chartLeft} y1={chartBottom} x2={w - 12} y2={chartBottom} stroke="rgba(255,255,255,0.20)" strokeWidth="1"/>
      {/* Bars */}
      {data.map((point, i) => {
        const bh = ((point.count / maxCount) * 42) || 2;
        return (
          <g key={i}>
            {/* Bar */}
            <rect
              x={chartLeft + 8 + i * (barWidth + 7)}
              y={chartBottom - bh}
              width={barWidth}
              height={bh}
              rx="4.5"
              fill="var(--kavia-blue, #2ec4fd)"
              opacity="0.72"
            />
            {/* Count Label */}
            <text
              x={chartLeft + 8 + i * (barWidth + 7) + barWidth / 2}
              y={chartBottom - bh - 7}
              fontFamily="Inter, var(--font-main)"
              fontWeight="200"
              fontSize="0.93rem"
              fill="rgba(255,255,255,0.79)"
              textAnchor="middle"
            >
              {point.count}
            </text>
            {/* Month Label */}
            <text
              x={chartLeft + 8 + i * (barWidth + 7) + barWidth / 2}
              y={chartBottom + 16}
              fontFamily="Inter, var(--font-main)"
              fontWeight="200"
              fontSize="0.93rem"
              fill="rgba(255,255,255,0.52)"
              textAnchor="middle"
            >
              {point.month}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// PUBLIC_INTERFACE
/**
 * UserProfile renders a minimalist, sectioned user profile with personal info, settings, account,
 * art lesson progress, and a graph.
 */
function UserProfile() {
  // Mock Data (would be fetched for real users)
  const user = {
    name: "Alex Rivera",
    email: "alex.rivera@email.com",
    joined: "March 2023",
    language: "English",
    notifications: "Enabled",
    premium: "Active",
    lessonsCompleted: 9,
    totalLessons: 16,
    artworksUploaded: 28
  };

  const artworkUploadData = [
    { month: "Jan", count: 2 },
    { month: "Feb", count: 4 },
    { month: "Mar", count: 5 },
    { month: "Apr", count: 2 },
    { month: "May", count: 7 },
    { month: "Jun", count: 1 },
    { month: "Jul", count: 6 },
  ];

  // Section card style (minimal): card-like with thin borders, rounded corners, bg subtle
  const cardStyle = {
    background: "rgba(255,255,255,0.015)",
    border: "1px solid var(--border-color,rgba(255,255,255,0.09))",
    borderRadius: "14px",
    boxShadow: "0 1.5px 13px 0 #2110340d",
    marginBottom: "25px",
    padding: "22px 22px 18px 22px",
    fontFamily: "var(--font-main)",
    fontWeight: 200,
    color: "var(--text-color)",
    letterSpacing: "0.01em",
    minWidth: 0,
    transition: "box-shadow 0.15s, border-color 0.11s",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  };

  // Label style: minimalist, thin, secondary
  const labelStyle = {
    fontSize: "1.01rem",
    color: "var(--text-secondary,rgba(255,255,255,0.69))",
    fontWeight: 200,
    marginBottom: 1,
    letterSpacing: "0.011em"
  };

  // Value style: thin, slight bold for visual focus
  const valueStyle = {
    fontSize: "1.16rem",
    color: "var(--text-color,#fff)",
    fontWeight: 200,
    letterSpacing: "0.013em"
  };

  // Section title in card
  const sectionTitleStyle = {
    fontSize: "1.27rem",
    color: "var(--kavia-blue, #2ec4fd)",
    fontWeight: 200,
    letterSpacing: "0.022em",
    marginBottom: 6
  };

  // Responsive horizontal sections style
  const profileGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "24px",
    marginTop: "30px"
  };

  // Progress bar
  const progress = Math.min(100, Math.round(user.lessonsCompleted / user.totalLessons * 100));

  return (
    <div style={{ width: "100%", paddingTop: 35 }}>
      <div className="subtitle">Profile</div>
      <h1 className="title gradient-headline" style={{ fontWeight: 600, fontSize: "2.40rem", marginBottom: 2 }}>
        Welcome back, <span style={{ fontWeight: 300, letterSpacing: 0.02 }}>Alex</span>
      </h1>
      <div className="description" style={{ fontWeight: 200, fontSize: "1.11rem", marginBottom: 10 }}>
        Your account, progress, and settings, organized and distraction-free.
      </div>
      <div style={profileGridStyle}>
        {/* Personal Info */}
        <section style={cardStyle} aria-label="Personal Information">
          <div style={sectionTitleStyle}>Personal Info</div>
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <MinimalAvatar />
            <div>
              <div style={labelStyle}>Name</div>
              <div style={valueStyle}>{user.name}</div>
              <div style={labelStyle}>Email</div>
              <div style={valueStyle}>{user.email}</div>
            </div>
          </div>
          <div style={{ ...labelStyle, marginTop: 9 }}>Member since</div>
          <div style={valueStyle}>{user.joined}</div>
        </section>

        {/* Account Details */}
        <section style={cardStyle} aria-label="Account Details">
          <div style={sectionTitleStyle}>Account</div>
          <div style={labelStyle}>Subscription</div>
          <div style={valueStyle}>{user.premium}</div>
          <div style={labelStyle}>Language</div>
          <div style={valueStyle}>{user.language}</div>
        </section>

        {/* Settings */}
        <section style={cardStyle} aria-label="Settings">
          <div style={sectionTitleStyle}>Settings</div>
          <div style={labelStyle}>Email Notifications</div>
          <div style={valueStyle}>{user.notifications}</div>
          <div style={labelStyle}>Privacy</div>
          <div style={valueStyle}>Artist Only (Private)</div>
        </section>

        {/* Progress (Lessons/Art journey) */}
        <section style={cardStyle} aria-label="Lesson Progress">
          <div style={sectionTitleStyle}>Art Journey Progress</div>
          <div style={labelStyle}>
            Lessons Completed:{" "}
            <span style={valueStyle}>{user.lessonsCompleted} / {user.totalLessons}</span>
          </div>
          {/* Minimalist thin progress bar */}
          <div
            style={{
              width: "100%",
              height: 8,
              borderRadius: 5,
              background: "rgba(255,255,255,0.11)",
              marginTop: 7,
              marginBottom: 7,
              overflow: "hidden"
            }}
            aria-label="Lessons progress bar"
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "var(--kavia-blue,#2ec4fd)",
                borderRadius: 5,
                transition: "width 0.2s"
              }}
            />
          </div>
          <div style={{ ...labelStyle, marginTop: 4 }}>
            Artworks uploaded: <span style={valueStyle}>{user.artworksUploaded}</span>
          </div>
        </section>

        {/* Artwork Uploaded Graph */}
        <section style={cardStyle} aria-label="Upload Activity Graph">
          <div style={sectionTitleStyle}>Monthly Uploads</div>
          <ArtworkUploadsGraph data={artworkUploadData} />
          <div style={{ ...labelStyle, marginTop: 8 }}>
            This shows your artwork uploads for each month (mock data).
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
