import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/naveen profile pic.png";

import {
  FaEye,
  FaEnvelope,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

import "../styles/homepage.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🚀 Building Modern Web Experiences
          </div>

          <p className="intro-text">
            Hello, I'm
          </p>

          <h1>
            Naveen <span>Kumar</span>
          </h1>

          <h2>
            <span className="highlight">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Full-Stack Developer",
                  "React Developer"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>

          <p className="hero-description">
            Passionate Full-Stack Developer focused on
            building scalable web applications using
            React, TypeScript, Node.js, Express.js,
            PostgreSQL and modern technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              <FaEye />
              View Resume
            </a>

            <button
              className="secondary-btn"
              onClick={() => navigate("/contact")}
            >
              <FaEnvelope />
              Contact Me
            </button>

          </div>

          <div className="stats">

            <div className="stat-card">
              <h3>4+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Learning</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="floating-icon react">
            <FaReact />
          </div>

          <div className="floating-icon node">
            <FaNodeJs />
          </div>

          <div className="floating-icon ts">
            <SiTypescript />
          </div>

          <div className="floating-icon db">
            <SiPostgresql />
          </div>

          <div className="image-wrapper">
            <img
              src={heroImage}
              alt="Naveen Kumar"
            />
          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default HomePage;