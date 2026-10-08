import heroImage from "../assets/about img.png";

import {
  FaLightbulb,
  FaUsers,
  FaPuzzlePiece,
  FaRocket,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/about.css";

function AboutContent() {
  return (
    <section id="about" className="about-section reveal-on-scroll">
      <div className="about-header">
        <span className="about-badge">Professional Profile</span>
        <h1>About Me</h1>
        <p>
          Learn more about my technical background, development philosophy, and passion for engineering modern web applications.
        </p>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={heroImage} alt="Naveenkumar B" />
        </div>

        <div className="about-content">
          <span className="about-tag">
            Full-Stack Python Developer
          </span>

          <h2>
            Hi, I'm Naveenkumar B 👋
          </h2>

          <p>
            I am a <strong>Full-Stack Python Developer</strong> with hands-on
            internship and freelance experience building production-ready web
            applications, REST APIs, and database-driven solutions using{" "}
            <strong>FastAPI, Flask, React, TypeScript, PostgreSQL, MongoDB, and Supabase</strong>.
          </p>

          <p>
            Experienced in authentication (JWT & Supabase Auth), role-based
            access control (RBAC), database architecture, responsive UI development,
            SEO optimization, and cloud deployment on Vercel & Render.
          </p>

          <p>
            I have a proven ability to translate business requirements into
            scalable, maintainable applications from initial conception through
            production release.
          </p>

          <div className="about-highlights-list">
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" />
              <span>Production deployment experience with custom domains & CI/CD</span>
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" />
              <span>Robust API design with FastAPI, Flask & SQLAlchemy</span>
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" />
              <span>Modern frontend SPAs with React, TypeScript & Vite</span>
            </div>
          </div>
        </div>
      </div>

      {/* CORE STRENGTHS */}
      <div className="traits-section">
        <h2>Core Strengths & Mindset</h2>

        <div className="traits-grid">
          <div className="trait-card">
            <FaPuzzlePiece />
            <h3>Problem Solving</h3>
            <p>
              Strong analytical approach to architecting clean software solutions and debugging complex systems.
            </p>
          </div>

          <div className="trait-card">
            <FaUsers />
            <h3>Team Collaboration</h3>
            <p>
              Comfortable collaborating across cross-functional teams, executing PR reviews, and communicating with clients.
            </p>
          </div>

          <div className="trait-card">
            <FaRocket />
            <h3>Adaptability</h3>
            <p>
              Quickly mastering emerging frameworks, tools, and best practices to deliver resilient products.
            </p>
          </div>

          <div className="trait-card">
            <FaLightbulb />
            <h3>Product-Minded</h3>
            <p>
              Balancing clean architecture with real-world user experience, SEO, performance, and business value.
            </p>
          </div>
        </div>
      </div>

      {/* QUICK FACTS / INFO CARDS */}
      <div className="info-section">
        <div className="info-card">
          <FaGraduationCap />
          <h3>Education</h3>
          <p>
            <strong>MCA (2024 – 2026)</strong>
          </p>
          <p className="sub-text">Adhiyamaan College of Engineering</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Hosur, Tamil Nadu, India</p>
          <p className="sub-text">Open to On-site & Remote</p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <h3>Email & Phone</h3>
          <p>naveenn13032004@gmail.com</p>
          <p className="sub-text">+91 9342303057</p>
        </div>

        <div className="info-card">
          <FaCode />
          <h3>Specialization</h3>
          <p>Full-Stack Python & React</p>
          <p className="sub-text">REST APIs & Cloud Deployment</p>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;