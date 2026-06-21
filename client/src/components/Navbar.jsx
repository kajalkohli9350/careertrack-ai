import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">
       <span style={{ color: "black", fontWeight: "bold" }}>Tracktern</span> AI
      </h2>

      <button
        className="hamburger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        <Link to="/login" className="nav-link2" onClick={() => setOpen(false)}>
          Login
        </Link>

        <Link to="/register" className="nav-link2" onClick={() => setOpen(false)}>
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;