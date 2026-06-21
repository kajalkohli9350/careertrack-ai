import Navbar from "../components/Navbar";
import "./Home.css";
import careerimg from "../assests/careerimg.png";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaMicrophoneAlt,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <section className="landing-hero">
        <div className="hero-content">
          <h1>
            Track Jobs Smarter. <br />
            Prepare Better. <br />
            <span>Get Hired Faster.</span>
          </h1>

          <p>
            Manage applications, track interview progress, and stay organized
            during your internship and placement journey.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-btn">
              Get Started Free
            </Link>

            <a href="#preview" className="secondary-btn">
              Watch Demo
            </a>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-card-big">
            <div className="preview-header">
              <h3>Your Dashboard</h3>
              <span>Live</span>
            </div>

            <div className="preview-stats">
              <div>
                <h4>25</h4>
                <p>Applications</p>
              </div>
              <div>
                <h4>5</h4>
                <p>Interviews</p>
              </div>
              <div>
                <h4>2</h4>
                <p>Offers</p>
              </div>
            </div>

            <div className="mini-chart">
              <span style={{ height: "45%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "50%" }}></span>
              <span style={{ height: "85%" }}></span>
              <span style={{ height: "70%" }}></span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2>Everything you need for placements</h2>

        <div className="features-grid">
          <div className="feature-card">
            <FaBriefcase />
            <h3>Track Applications</h3>
            <p>Save company name, role, status, applied date, and notes.</p>
          </div>

          <div className="feature-card">
            <FaMicrophoneAlt />
            <h3>Interview Prep</h3>
            <p>Organize interview notes and prepare for upcoming rounds.</p>
          </div>

          <div className="feature-card">
            <FaRobot />
            <h3>AI Assistant</h3>
            <p>Future-ready AI help for resume review and interview practice.</p>
          </div>

          <div className="feature-card">
            <FaChartLine />
            <h3>Analytics</h3>
            <p>Understand your progress with clean dashboard insights.</p>
          </div>
        </div>
      </section>

      <section id="preview" className="dashboard-preview-section">
        <h2>Dashboard Preview</h2>

        <div className="preview-table-card">
          <div className="preview-row preview-title">
            <span>Company</span>
            <span>Role</span>
            <span>Status</span>
          </div>

          <div className="preview-row">
            <span>Google</span>
            <span>Frontend Intern</span>
            <b className="status applied">Applied</b>
          </div>

          <div className="preview-row">
            <span>Amazon</span>
            <span>React Developer</span>
            <b className="status interview">Interview</b>
          </div>

          <div className="preview-row">
            <span>Microsoft</span>
            <span>SDE Intern</span>
            <b className="status offer">Offer</b>
          </div>
        </div>
      </section>

      <section id="how" className="how-section">
        <h2>How Tracktern AI Works</h2>

        <div className="steps-grid">
          <div className="step-card">
            <span>1</span>
            <h3>Add Applications</h3>
            <p>Add every job or internship you apply for.</p>
          </div>

          <div className="step-card">
            <span>2</span>
            <h3>Track Progress</h3>
            <p>Update status from applied to interview, offer, or rejected.</p>
          </div>

          <div className="step-card">
            <span>3</span>
            <h3>Get Organized</h3>
            <p>Stay confident and prepared during placement season.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to manage your placement journey?</h2>
        <Link to="/register" className="primary-btn">
          Start Tracking Today
        </Link>
      </section>
      </div>
    </>
  );
}

export default Home;
