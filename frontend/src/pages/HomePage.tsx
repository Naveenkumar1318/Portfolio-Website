import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/naveen_profile_pic-removebg-preview.png";

import {
  FaEye,
  FaEnvelope,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiMongodb
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
                  "Full-Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
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
              href="/Naveenkumar_B_Resume.pdf"
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

<div className="floating-icon html">
  <FaHtml5 color="#E34F26" />
</div>

<div className="floating-icon js">
  <FaJs color="#F7DF1E" />
</div>

<div className="floating-icon react">
  <FaReact color="#61DAFB" />
</div>

<div className="floating-icon mongo">
  <SiMongodb color="#47A248" />
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