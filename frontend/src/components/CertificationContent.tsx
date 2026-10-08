import { useState, useMemo } from "react";
import {
  FaTrophy,
  FaBriefcase,
  FaCertificate,
  FaEye,
  FaUniversity,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaCalendarAlt,
} from "react-icons/fa";

import "../styles/certification.css";

interface CredentialItem {
  id: string;
  title: string;
  category: "hackathon" | "internship" | "course";
  categoryLabel: string;
  badge: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  pdfUrl: string;
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
}

const CREDENTIALS_DATA: CredentialItem[] = [
  // HACKATHONS
  {
    id: "exploit-x",
    title: "EXPLOIT-X KPR CTF",
    category: "hackathon",
    categoryLabel: "Cybersecurity & CTF",
    badge: "National CTF Competition",
    issuer: "KPR Institute of Engineering & Technology",
    date: "2025",
    description:
      "Participated in national-level Capture The Flag (CTF) security challenge, solving complex web exploitation, cryptography, and reverse engineering tasks.",
    skills: ["Web Security", "Cryptography", "CTF Challenges", "Problem Solving"],
    pdfUrl: "/certificates/Hackathons/exploit-x.pdf",
    icon: <FaShieldAlt />,
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
  {
    id: "cosmohacks",
    title: "CosmoHacks'25",
    category: "hackathon",
    categoryLabel: "National Hackathon",
    badge: "36-Hour Hackathon",
    issuer: "Guru Nanak Dev University",
    date: "2025",
    description:
      "Collaborated in an intensive national hackathon building an end-to-end full-stack software prototype under strict deadlines with real-time judging.",
    skills: ["Rapid Prototyping", "Full-Stack Development", "Teamwork", "Agile Execution"],
    pdfUrl: "/certificates/Hackathons/cosmohacks.pdf",
    icon: <FaRocket />,
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    id: "openhack",
    title: "OpenHack 2025",
    category: "hackathon",
    categoryLabel: "Premier Hackathon",
    badge: "Open Innovation Hackathon",
    issuer: "Indian Institute of Science (IISc)",
    date: "2025",
    description:
      "Competed among top engineering teams at IISc, engineering scalable software architectures and innovative algorithmic solutions for industry problems.",
    skills: ["System Architecture", "Algorithmic Solutions", "Cloud Integration", "Innovation"],
    pdfUrl: "/certificates/Hackathons/openhack.pdf",
    icon: <FaTrophy />,
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    id: "kihacks",
    title: "K! Hacks 2.0",
    category: "hackathon",
    categoryLabel: "Collegiate Hackathon",
    badge: "Tech Symposium Hackathon",
    issuer: "Anna University",
    date: "2025",
    description:
      "Engineered real-time web application solutions and UI interfaces competing at Kurukshetra national technical fest at Anna University.",
    skills: ["Web Applications", "UI/UX Engineering", "Collaborative Coding", "Presentation"],
    pdfUrl: "/certificates/Hackathons/kihacks.pdf",
    icon: <FaTrophy />,
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },

  // INTERNSHIPS
  {
    id: "shripriti",
    title: "Web Development Intern",
    category: "internship",
    categoryLabel: "Industry Internship",
    badge: "Verified Industry Training",
    issuer: "Shripriti Educational & IT Hub",
    date: "Jul 2025 – Sep 2025",
    description:
      "Completed intensive hands-on web development internship working with modern HTML5, CSS3, JavaScript component architectures, and responsive layout standards.",
    skills: ["Web Development", "Component Systems", "Responsive Design", "Frontend Best Practices"],
    pdfUrl: "/certificates/Internships/internship1.pdf",
    icon: <FaBriefcase />,
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },

  // COURSES
  {
    id: "data-science",
    title: "Data Science Using Python",
    category: "course",
    categoryLabel: "Technical Course",
    badge: "Certified Specialization",
    issuer: "Network Systems & ACE",
    date: "Dec 2024",
    description:
      "Comprehensive certification in Python data analytics, statistical modeling, data manipulation with Pandas, NumPy, and visualization libraries.",
    skills: ["Python Programming", "Pandas & NumPy", "Data Analytics", "Statistical Modeling"],
    pdfUrl: "/certificates/Courses/datascience-python.pdf",
    icon: <FaCertificate />,
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.25)",
  },
];

type CategoryFilter = "all" | "hackathon" | "internship" | "course";

const CATEGORIES: { id: CategoryFilter; label: string; count: number }[] = [
  { id: "all", label: "All Credentials", count: CREDENTIALS_DATA.length },
  {
    id: "hackathon",
    label: "Hackathons & CTFs",
    count: CREDENTIALS_DATA.filter((c) => c.category === "hackathon").length,
  },
  {
    id: "internship",
    label: "Internships",
    count: CREDENTIALS_DATA.filter((c) => c.category === "internship").length,
  },
  {
    id: "course",
    label: "Courses & Certifications",
    count: CREDENTIALS_DATA.filter((c) => c.category === "course").length,
  },
];

function CertificationContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredCredentials = useMemo(() => {
    if (activeFilter === "all") return CREDENTIALS_DATA;
    return CREDENTIALS_DATA.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certifications" className="certification-section reveal-on-scroll">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="cert-ambient-glow glow-top"></div>
      <div className="cert-ambient-glow glow-bottom"></div>

      <div className="certification-container">
        {/* HEADER */}
        <header className="certification-header">
          <div className="certification-pill">
            <span className="pill-dot"></span>
            Verified Credentials & Milestones
          </div>
          <h1 className="certification-title">
            Certifications & <span className="text-gradient">Achievements</span>
          </h1>
          <p className="certification-subtitle">
            A verified record of national hackathons, technical cybersecurity CTFs,
            industry internships, and specialized course certifications.
          </p>
        </header>

        {/* STATS STRIP */}
        <div className="cert-stats-strip">
          <div className="cert-stat-card">
            <div className="stat-num">6</div>
            <div className="stat-text">
              <span className="stat-main">Verified Credentials</span>
              <span className="stat-sub">Official PDFs available</span>
            </div>
          </div>

          <div className="cert-stat-card">
            <div className="stat-num">4</div>
            <div className="stat-text">
              <span className="stat-main">National Hackathons</span>
              <span className="stat-sub">IISc, Anna Univ, GNDU, KPR</span>
            </div>
          </div>

          <div className="cert-stat-card">
            <div className="stat-num">100%</div>
            <div className="stat-text">
              <span className="stat-main">Hands-on Execution</span>
              <span className="stat-sub">Practical problem-solving</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CATEGORY FILTER TABS */}
        <div className="cert-filter-wrapper">
          <div className="cert-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`cert-tab-btn ${activeFilter === cat.id ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="cert-tab-badge">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CREDENTIALS GRID */}
        <div className="credentials-pro-grid">
          {filteredCredentials.map((cred) => (
            <div
              key={cred.id}
              className="credential-card-pro"
              style={
                {
                  "--accent-color": cred.accentColor,
                  "--glow-color": cred.glowColor,
                } as React.CSSProperties
              }
            >
              <div className="card-pro-inner">
                {/* TOP BAR: BADGE + DATE */}
                <div className="card-top-row">
                  <span className="cred-badge-pill">{cred.badge}</span>
                  <span className="cred-date">
                    <FaCalendarAlt /> {cred.date}
                  </span>
                </div>

                {/* HEADER: ICON + TITLE & ISSUER */}
                <div className="cred-header-block">
                  <div className="cred-icon-box" style={{ color: cred.accentColor }}>
                    {cred.icon}
                  </div>
                  <div>
                    <h2 className="cred-title">{cred.title}</h2>
                    <div className="cred-issuer">
                      <FaUniversity className="issuer-icon" />
                      <span>{cred.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="cred-desc">{cred.description}</p>

                {/* SKILLS CHIPS */}
                <div className="cred-skills-wrap">
                  {cred.skills.map((skill) => (
                    <span key={skill} className="cred-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* FOOTER: VERIFIED STATUS + VIEW PDF BUTTON */}
                <div className="card-bottom-actions">
                  <span className="verified-status-tag">
                    <FaCheckCircle className="check-icon" />
                    Verified
                  </span>

                  <a
                    href={cred.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="view-cert-btn"
                  >
                    <FaEye />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationContent;