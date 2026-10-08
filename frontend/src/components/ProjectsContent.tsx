import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import wildFloral from "../assets/projects/wildfloral.png";
import studentPortal from "../assets/projects/student-portal.png";
import faceRecognition from "../assets/projects/face-recognition.png";
import portfolioImage from "../assets/projects/portfolio.png";

import "../styles/projects.css";

interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "wildfloral",
    title: "WildFloral Beauty & Fashion Studio",
    badge: "Production Client Web App",
    description:
      "Production-ready full-stack web application engineered for a premier beauty and fashion studio featuring appointment booking, custom admin management, Supabase Auth with RBAC, and SEO optimization.",
    image: wildFloral,
    techStack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Vercel", "SEO"],
    features: [
      "Customer booking, enquiry pipelines & service catalog",
      "Role-Based Access Control (RBAC) via Supabase Auth",
      "Full SEO suite: Canonical URLs, XML sitemap & Google Search Console",
      "Custom domain production hosting on Vercel with HTTPS",
    ],
    liveUrl: "https://www.wildfloral.online/",
  },
  {
    id: "student-portal",
    title: "Student Project Collaboration Portal",
    badge: "Full-Stack Web Platform",
    description:
      "End-to-end project collaboration system facilitating project lifecycles, join requests, mentor assignments, and completions with role-specific workflows for students, mentors, and administrators.",
    image: studentPortal,
    techStack: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "JWT", "Render", "Vercel"],
    features: [
      "Role-Based Access Control (RBAC) with secure JWT auth",
      "RESTful API architecture with SQLAlchemy ORM & validation",
      "Optimized query indexing & database relationship schema",
      "Deployed full-stack on Vercel (frontend) & Render (backend)",
    ],
    liveUrl: "https://college-project-portal.vercel.app/",
    githubUrl: "https://github.com/Naveenkumar1318/college_project_portal",
  },
  {
    id: "face-recognition",
    title: "Face Recognition Attendance System",
    badge: "AI & Computer Vision",
    description:
      "AI-powered attendance management application leveraging real-time facial recognition and geolocation validation to eliminate proxy check-ins with automated administrative report exports.",
    image: faceRecognition,
    techStack: ["Python", "Flask", "OpenCV", "MySQL", "NumPy"],
    features: [
      "Real-time facial detection & identity recognition with OpenCV",
      "Geolocation coordinate validation to prevent proxy check-ins",
      "Duplicate-prevention logic for high-accuracy logging",
      "Exportable Excel attendance reporting module for admins",
    ],
    githubUrl: "https://github.com/Naveenkumar1318/face_attendance_system",
  },
  {
    id: "portfolio-site",
    title: "Developer Portfolio Platform",
    badge: "Modern Web Showcase",
    description:
      "High-performance personal developer portfolio built with React 19, TypeScript, and modern glassmorphic styling showcasing technical skills, client projects, and verified credentials.",
    image: portfolioImage,
    techStack: ["React", "TypeScript", "Vite", "CSS3", "Vercel"],
    features: [
      "Interactive category filtering & dynamic skill matrix",
      "Responsive layout optimized across mobile, tablet & desktop",
      "Fast page loads with clean component architecture",
      "Production deployment with automated CI/CD",
    ],
    liveUrl: "https://portfolio-website-two-psi-59.vercel.app/",
    githubUrl: "https://github.com/Naveenkumar1318",
  },
];

function ProjectsContent() {
  return (
    <section id="projects" className="projects-section reveal-on-scroll">
      <div className="projects-header">
        <span className="projects-pill">Featured Engineering</span>
        <h1>Projects & Applications</h1>
        <p>
          Explore a curated selection of production-grade client platforms,
          full-stack applications, and AI-powered systems I've architected and shipped.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-image-overlay">
                <span className="project-category-badge">{project.badge}</span>
              </div>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="feature-bullet">
                    <FaCheckCircle className="feat-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsContent;