import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/naveen_profile_pic-removebg-preview.png";

import {
  FaEye,
  FaEnvelope,
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";
import { useScrollReveal } from "../hooks/useScrollReveal";

import AboutContent from "../components/AboutContent";
import SkillsContent from "../components/SkillsContent";
import ExperienceContent from "../components/ExperienceContent";
import ProjectsContent from "../components/ProjectsContent";
import EducationContent from "../components/EducationContent";
import CertificationContent from "../components/CertificationContent";
import ContactContent from "../components/ContactContent";

import "../styles/homepage.css";

function HomePage() {
  // Activate scroll-triggered animations across the landing page
  useScrollReveal();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainLayout>
      <div className="landing-page-flow">
        {/* HERO SECTION */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              🚀 Full-Stack Python & Web Developer
            </div>

            <p className="intro-text">Hello, I'm</p>

            <h1>
              Naveen <span>Kumar B</span>
            </h1>

            <h2>
              <span className="highlight">
                <Typewriter
                  words={[
                    "Full-Stack Python Developer",
                    "FastAPI & Flask Backend Engineer",
                    "React & TypeScript Developer",
                    "PostgreSQL & Database Architect",
                    "Production Cloud & DevOps Engineer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              </span>
            </h2>

            <p className="hero-description">
              Passionate Full-Stack Python Developer with hands-on internship and
              freelance experience building production-ready web applications,
              REST APIs, and database-driven solutions using FastAPI, Flask, React,
              TypeScript, PostgreSQL, MongoDB, and Supabase.
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
                type="button"
                className="secondary-btn"
                onClick={() => handleScrollTo("contact")}
              >
                <FaEnvelope />
                Contact Me
              </button>
            </div>

            <div className="stats">
              <div className="stat-card">
                <h3>2+</h3>
                <p>Work Experiences</p>
              </div>

              <div className="stat-card">
                <h3>5+</h3>
                <p>Production Projects</p>
              </div>

              <div className="stat-card">
                <h3>18+</h3>
                <p>Tech Stack Tools</p>
              </div>

              <div className="stat-card">
                <h3>100%</h3>
                <p>Job Ready</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="floating-icon python" title="Python">
              <FaPython color="#3776AB" />
            </div>

            <div className="floating-icon fastapi" title="FastAPI">
              <SiFastapi color="#009688" />
            </div>

            <div className="floating-icon react" title="React">
              <FaReact color="#61DAFB" />
            </div>

            <div className="floating-icon postgres" title="PostgreSQL">
              <SiPostgresql color="#4169E1" />
            </div>

            <div className="image-wrapper">
              <img src={heroImage} alt="Naveenkumar B" />
            </div>
          </div>
        </section>

        {/* INTEGRATED LANDING PAGE SECTIONS */}
        <AboutContent />
        <SkillsContent />
        <ExperienceContent />
        <ProjectsContent />
        <EducationContent />
        <CertificationContent />
        <ContactContent />
      </div>
    </MainLayout>
  );
}

export default HomePage;