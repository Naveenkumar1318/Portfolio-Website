import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import studentPortal from "../assets/projects/student-portal.png";
import faceRecognition from "../assets/projects/face-recognition.png";
import portfolioImage from "../assets/projects/portfolio.png";

import "../styles/projects.css";

function ProjectsContent() {
  return (
    <section className="projects-section">

      <div className="projects-header">
        <h1>Projects</h1>

        <p>
          A collection of projects showcasing my
          skills in full-stack development and
          modern technologies.
        </p>
      </div>

      <div className="projects-grid">

        {/* Student Portal */}

        <div className="project-card">

          <div className="project-image">
            <img
              src={studentPortal}
              alt="Student Portal"
            />
          </div>

          <div className="project-content">

            <h2>Student Project Collaboration Portal</h2>

            <p>
              Full-stack platform supporting students,
              mentors and administrators with project
              management and collaboration.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>FastAPI</span>
              <span>MySQL</span>
              <span>SQLAlchemy</span>
            </div>

            <div className="project-links">

              <a
                href="https://college-project-portal-fxxh29yu7-naveenkumar1318s-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/Naveenkumar1318/college_project_portal"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Face Recognition */}

        <div className="project-card">

          <div className="project-image">
            <img
              src={faceRecognition}
              alt="Face Recognition"
            />
          </div>

          <div className="project-content">

            <h2>Face Recognition Attendance System</h2>

            <p>
              AI-powered attendance management system
              using facial recognition and automated
              reporting.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>OpenCV</span>
              <span>MySQL</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Naveenkumar1318/face_attendance_system"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Portfolio */}

        <div className="project-card">

          <div className="project-image">
            <img
              src={portfolioImage}
              alt="Portfolio Website"
            />
          </div>

          <div className="project-content">

            <h2>Developer Portfolio Website</h2>

            <p>
              Responsive portfolio website showcasing
              projects, skills, certifications,
              education and experience.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Naveenkumar1318"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectsContent;