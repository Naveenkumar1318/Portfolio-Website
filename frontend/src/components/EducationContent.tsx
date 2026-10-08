import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBookOpen,
  FaCheckCircle,
  FaCompass,
  FaCodeBranch,
} from "react-icons/fa";

import "../styles/education.css";

interface MilestoneItem {
  id: string;
  step: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
  description: string;
  skillsLearned: string[];
  icon: React.ReactNode;
  status: "In Progress" | "Completed";
  badge: string;
  color: string;
}

const ROADMAP_DATA: MilestoneItem[] = [
  {
    id: "mca",
    step: "04",
    degree: "Master of Computer Applications (MCA)",
    institution: "Adhiyamaan College of Engineering",
    period: "2024 – 2026",
    location: "Hosur, Tamil Nadu",
    score: "CGPA: 8.4",
    description:
      "Specialized in full-stack architecture, Python & FastAPI/Flask backend systems, distributed database modeling, REST API engineering, and cloud deployment pipelines.",
    skillsLearned: ["Python & FastAPI", "React & TypeScript", "PostgreSQL & MongoDB", "Cloud Deployment"],
    icon: <FaGraduationCap />,
    status: "In Progress",
    badge: "Current Milestone • Master's Degree",
    color: "#3b82f6",
  },
  {
    id: "bcom",
    step: "03",
    degree: "Bachelor of Commerce (B.Com)",
    institution: "MGR Arts and Science College",
    period: "2021 – 2024",
    location: "Hosur, Tamil Nadu",
    score: "CGPA: 6.48",
    description:
      "Developed deep understanding of business operational logic, financial management systems, data analysis, and structural problem-solving.",
    skillsLearned: ["Business Analytics", "Data Logic", "Organizational Workflow", "Financial Analysis"],
    icon: <FaUniversity />,
    status: "Completed",
    badge: "Undergraduate Degree",
    color: "#8b5cf6",
  },
  {
    id: "hsc",
    step: "02",
    degree: "Higher Secondary Education (12th Standard)",
    institution: "Government Higher Secondary School",
    period: "2020 – 2021",
    location: "Hosur, Tamil Nadu",
    score: "Score: 72.60%",
    description:
      "Built rigorous foundation in mathematics, analytical reasoning, academic discipline, and core logical concepts.",
    skillsLearned: ["Mathematics", "Logical Reasoning", "Analytical Thinking"],
    icon: <FaSchool />,
    status: "Completed",
    badge: "Higher Secondary (HSC)",
    color: "#06b6d4",
  },
  {
    id: "sslc",
    step: "01",
    degree: "Secondary School Leaving Certificate (10th Standard)",
    institution: "Parimalam Matric Higher Secondary School",
    period: "2018 – 2019",
    location: "Hosur, Tamil Nadu",
    score: "Score: 65.40%",
    description:
      "Completed secondary curriculum establishing strong analytical habits, science fundamentals, and basic computing concepts.",
    skillsLearned: ["Computer Basics", "Science & Math", "Foundational Problem Solving"],
    icon: <FaBookOpen />,
    status: "Completed",
    badge: "Secondary Education (SSLC)",
    color: "#10b981",
  },
];

function EducationContent() {
  return (
    <section id="education" className="education-section reveal-on-scroll">
      {/* AMBIENT GLOWS */}
      <div className="edu-ambient-glow glow-1"></div>
      <div className="edu-ambient-glow glow-2"></div>

      <div className="education-container">
        {/* HEADER */}
        <header className="education-header">
          <div className="education-pill">
            <span className="pill-pulse"></span>
            Academic Roadmap
          </div>
          <h1 className="education-title">
            Education <span className="text-gradient">Journey</span>
          </h1>
          <p className="education-subtitle">
            A chronological roadmap tracing my academic milestones, computer science specialization,
            and the foundational knowledge powering my engineering craft.
          </p>
        </header>

        {/* ROADMAP OVERVIEW SUMMARY CARDS */}
        <div className="roadmap-stats-strip">
          <div className="roadmap-stat">
            <div className="stat-icon-wrap">
              <FaCompass />
            </div>
            <div>
              <span className="stat-val">4 Major Stages</span>
              <span className="stat-lbl">From Schooling to MCA Master's</span>
            </div>
          </div>

          <div className="roadmap-stat">
            <div className="stat-icon-wrap branch-icon">
              <FaCodeBranch />
            </div>
            <div>
              <span className="stat-val">Computer Applications</span>
              <span className="stat-lbl">Full-Stack Specialization</span>
            </div>
          </div>

          <div className="roadmap-stat">
            <div className="stat-icon-wrap success-icon">
              <FaCheckCircle />
            </div>
            <div>
              <span className="stat-val">Active Degree (2026)</span>
              <span className="stat-lbl">Adhiyamaan College of Engineering</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE ROADMAP TREE */}
        <div className="roadmap-tree-wrapper">
          {/* Continuous Glowing Central Root Spine */}
          <div className="roadmap-center-line">
            <div className="line-pulse-tracker"></div>
          </div>

          <div className="roadmap-nodes-container">
            {ROADMAP_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`roadmap-node-row ${isEven ? "align-left" : "align-right"}`}
                  style={{ "--node-color": item.color } as React.CSSProperties}
                >
                  {/* Central Node Pin / Milestone Marker */}
                  <div className="roadmap-node-pin">
                    <div className="pin-halo"></div>
                    <div className="pin-core">
                      <span className="pin-number">{item.step}</span>
                    </div>
                  </div>

                  {/* Horizontal Connector Branch */}
                  <div className="node-connector-branch"></div>

                  {/* Milestone Content Card */}
                  <div className="roadmap-card">
                    <div className="card-top-bar">
                      <div className="stage-indicator">
                        <span className="stage-tag">{item.badge}</span>
                      </div>
                      <span className={`status-pill ${item.status === "In Progress" ? "in-progress" : "completed"}`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="card-main-header">
                      <div className="card-icon-bubble" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <div>
                        <h2 className="milestone-degree">{item.degree}</h2>
                        <h3 className="milestone-institution">{item.institution}</h3>
                      </div>
                    </div>

                    <p className="milestone-desc">{item.description}</p>

                    {/* KEY COMPETENCIES / SKILLS CHIPS */}
                    <div className="skills-learned-section">
                      <span className="chips-label">Key Learning Areas:</span>
                      <div className="chips-list">
                        {item.skillsLearned.map((skill) => (
                          <span key={skill} className="skill-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="card-footer-meta">
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{item.period}</span>
                      </div>

                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{item.location}</span>
                      </div>

                      {item.score && (
                        <div className="meta-score-badge">
                          <span>{item.score}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROADMAP DESTINATION BANNER */}
        <div className="roadmap-destination-card">
          <div className="dest-icon">
            <FaGraduationCap />
          </div>
          <div className="dest-text">
            <h3>Continuous Lifelong Learning & Engineering Excellence</h3>
            <p>
              Combining rigorous computer science academic theory with modern production-grade
              internship and freelance experience to engineer impactful software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationContent;