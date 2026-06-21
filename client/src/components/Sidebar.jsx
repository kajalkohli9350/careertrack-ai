import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="asidetop">
        <h2 className="logo">Tracktern AI</h2>
        <a href="/profile"> Profile</a>

        <button
          className="sidebar-toggle"
          aria-label="Toggle sidebar"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <aside className={`nav-links2 ${open ? "mobile-open" : ""}`}>
        <Link to="/dashboard" onClick={() => setOpen(false)}>
          Dashboard
        </Link>
        <Link to="/applications" onClick={() => setOpen(false)}>
          Applications
        </Link>
        <Link to="/interviews" onClick={() => setOpen(false)}>
          Interviews
        </Link>
        <Link to="/notes" onClick={() => setOpen(false)}>
          Notes
        </Link>
        <Link to="/AIassistant" onClick={() => setOpen(false)}>
          AI Assistant
        </Link>
        <Link to="/analytics" onClick={() => setOpen(false)}>
          Analytics
        </Link>

        <Link to="/profile" onClick={() => setOpen(false)}>
          Profile
        </Link>

        <button className="logout-btn">Logout</button>
      </aside>
    </div>
  );
}

export default Sidebar;
