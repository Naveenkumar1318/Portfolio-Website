import { useState, useMemo } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaTools,
  FaCode,
  FaCheckCircle,
  FaShieldAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiFastapi,
  SiFlask,
  SiSupabase,
  SiVercel,
  SiRender,
  SiPandas,
  SiOpencv,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbApi, TbBrandOauth } from "react-icons/tb";

import "../styles/skills.css";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "security" | "tools";
  categoryLabel: string;
  tag: string;
  level: "Advanced" | "Proficient" | "Intermediate";
  description: string;
  icon: React.ReactNode;
  brandColor: string;
  glowColor: string;
}

const SKILLS_DATA: SkillItem[] = [
  // BACKEND & LANGUAGES
  {
    name: "Python",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Core Programming",
    level: "Advanced",
    description: "Object-oriented programming, data structures, scripting, and web backends",
    icon: <FaPython />,
    brandColor: "#3776AB",
    glowColor: "rgba(55, 118, 171, 0.25)",
  },
  {
    name: "FastAPI",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Python API Framework",
    level: "Advanced",
    description: "High-performance async APIs, Pydantic data validation & Swagger docs",
    icon: <SiFastapi />,
    brandColor: "#009688",
    glowColor: "rgba(0, 150, 136, 0.25)",
  },
  {
    name: "Flask",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Microframework",
    level: "Advanced",
    description: "REST services, Blueprints, modular routing & backend data pipelines",
    icon: <SiFlask />,
    brandColor: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "REST APIs",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Architecture",
    level: "Advanced",
    description: "Clean endpoint design, request validation, CORS, error handling & status codes",
    icon: <TbApi />,
    brandColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    name: "JavaScript",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Core Language",
    level: "Advanced",
    description: "ES6+ syntax, asynchronous programming, Promises & DOM APIs",
    icon: <FaJs />,
    brandColor: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.25)",
  },
  {
    name: "TypeScript",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Type System",
    level: "Proficient",
    description: "Strict static typing, interfaces, generics & robust codebase architecture",
    icon: <SiTypescript />,
    brandColor: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.25)",
  },
  {
    name: "PHP",
    category: "backend",
    categoryLabel: "Backend & Languages",
    tag: "Server Scripting",
    level: "Intermediate",
    description: "Server-side web scripting, form handling & database interactions",
    icon: <FaPhp />,
    brandColor: "#777BB4",
    glowColor: "rgba(119, 123, 180, 0.25)",
  },

  // FRONTEND
  {
    name: "React (Vite)",
    category: "frontend",
    categoryLabel: "Frontend",
    tag: "UI Library",
    level: "Advanced",
    description: "Hooks, SPA architecture, state management & ultra-fast Vite builds",
    icon: <FaReact />,
    brandColor: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.25)",
  },
  {
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend",
    tag: "Markup & Structure",
    level: "Advanced",
    description: "Semantic elements, SEO optimization, and web accessibility (a11y)",
    icon: <FaHtml5 />,
    brandColor: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.25)",
  },
  {
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Frontend",
    tag: "Styling & UI",
    level: "Advanced",
    description: "Flexbox, CSS Grid, custom keyframe animations & responsive design",
    icon: <FaCss3Alt />,
    brandColor: "#1572B6",
    glowColor: "rgba(21, 114, 182, 0.25)",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    tag: "CSS Framework",
    level: "Advanced",
    description: "Utility-first design tokens, responsive layouts & rapid prototyping",
    icon: <SiTailwindcss />,
    brandColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    categoryLabel: "Frontend",
    tag: "UI Toolkit",
    level: "Proficient",
    description: "Grid systems, utility classes & responsive components",
    icon: <SiBootstrap />,
    brandColor: "#7952B3",
    glowColor: "rgba(121, 82, 179, 0.25)",
  },

  // DATABASES
  {
    name: "PostgreSQL",
    category: "database",
    categoryLabel: "Databases",
    tag: "Relational SQL",
    level: "Advanced",
    description: "ACID transactions, indexed schemas, complex queries & relational design",
    icon: <SiPostgresql />,
    brandColor: "#4169E1",
    glowColor: "rgba(65, 105, 225, 0.25)",
  },
  {
    name: "Supabase",
    category: "database",
    categoryLabel: "Databases",
    tag: "BaaS & Postgres",
    level: "Advanced",
    description: "Managed PostgreSQL, Row Level Security (RLS), Realtime & Storage",
    icon: <SiSupabase />,
    brandColor: "#3ECF8E",
    glowColor: "rgba(62, 207, 142, 0.25)",
  },
  {
    name: "MongoDB",
    category: "database",
    categoryLabel: "Databases",
    tag: "NoSQL Store",
    level: "Proficient",
    description: "JSON document modeling, indexing & aggregation pipelines",
    icon: <SiMongodb />,
    brandColor: "#47A248",
    glowColor: "rgba(71, 162, 72, 0.25)",
  },
  {
    name: "MySQL",
    category: "database",
    categoryLabel: "Databases",
    tag: "Relational SQL",
    level: "Proficient",
    description: "Database normalization, relational integrity & CRUD operations",
    icon: <SiMysql />,
    brandColor: "#4479A1",
    glowColor: "rgba(68, 121, 161, 0.25)",
  },

  // AUTHENTICATION & SECURITY
  {
    name: "JWT Authentication",
    category: "security",
    categoryLabel: "Auth & Security",
    tag: "Security Token",
    level: "Advanced",
    description: "Token generation, validation, refresh cycles & stateless session management",
    icon: <TbBrandOauth />,
    brandColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
  {
    name: "Supabase Auth & RBAC",
    category: "security",
    categoryLabel: "Auth & Security",
    tag: "Role-Based Access",
    level: "Advanced",
    description: "Role-based access control, user permission guards & authenticated routes",
    icon: <FaShieldAlt />,
    brandColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    name: "OTP Verification",
    category: "security",
    categoryLabel: "Auth & Security",
    tag: "2FA / Multi-Factor",
    level: "Proficient",
    description: "SMS and email one-time passcode verification workflows (Twilio/SendGrid)",
    icon: <FaShieldAlt />,
    brandColor: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.25)",
  },

  // TOOLS, CLOUD & PLATFORMS
  {
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Tools & Cloud",
    tag: "Version Control & CI/CD",
    level: "Advanced",
    description: "Branching strategies, pull requests, code reviews & collaborative workflows",
    icon: <FaGithub />,
    brandColor: "#FFFFFF",
    glowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "Vercel & Render",
    category: "tools",
    categoryLabel: "Tools & Cloud",
    tag: "Cloud Hosting",
    level: "Advanced",
    description: "Production deployments, custom domain routing, HTTPS & serverless functions",
    icon: <SiVercel />,
    brandColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    name: "Linux",
    category: "tools",
    categoryLabel: "Tools & Cloud",
    tag: "Operating System",
    level: "Proficient",
    description: "Bash shell scripting, process management & server environment configurations",
    icon: <FaLinux />,
    brandColor: "#FCC624",
    glowColor: "rgba(252, 198, 36, 0.25)",
  },
  {
    name: "Postman",
    category: "tools",
    categoryLabel: "Tools & Cloud",
    tag: "API Testing",
    level: "Proficient",
    description: "Endpoint testing, collections, environment variables & automated API mocks",
    icon: <SiPostman />,
    brandColor: "#FF6C37",
    glowColor: "rgba(255, 108, 55, 0.25)",
  },
  {
    name: "Pandas & OpenCV",
    category: "tools",
    categoryLabel: "Tools & Cloud",
    tag: "Data & Computer Vision",
    level: "Proficient",
    description: "Data parsing, CSV/Excel aggregation pipelines, and facial recognition models",
    icon: <SiPandas />,
    brandColor: "#150458",
    glowColor: "rgba(99, 102, 241, 0.25)",
  },
];

type CategoryFilter = "all" | "backend" | "frontend" | "database" | "security" | "tools";

const CATEGORIES: { id: CategoryFilter; label: string; icon: React.ReactNode; count: number }[] = [
  { id: "all", label: "All Skills", icon: <FaCode />, count: SKILLS_DATA.length },
  {
    id: "backend",
    label: "Python & Backend",
    icon: <FaServer />,
    count: SKILLS_DATA.filter((s) => s.category === "backend").length,
  },
  {
    id: "frontend",
    label: "Frontend & UI",
    icon: <FaLayerGroup />,
    count: SKILLS_DATA.filter((s) => s.category === "frontend").length,
  },
  {
    id: "database",
    label: "Databases",
    icon: <FaDatabase />,
    count: SKILLS_DATA.filter((s) => s.category === "database").length,
  },
  {
    id: "security",
    label: "Auth & Security",
    icon: <FaShieldAlt />,
    count: SKILLS_DATA.filter((s) => s.category === "security").length,
  },
  {
    id: "tools",
    label: "Cloud & Tools",
    icon: <FaTools />,
    count: SKILLS_DATA.filter((s) => s.category === "tools").length,
  },
];

const SECTIONS = [
  {
    id: "backend",
    title: "Python, Backend & API Architecture",
    badge: "Server-Side & APIs",
    description:
      "Developing high-performance RESTful APIs, asynchronous services, and business logic using FastAPI, Flask, Python, and TypeScript.",
    icon: <FaServer />,
  },
  {
    id: "frontend",
    title: "Frontend Engineering & SPAs",
    badge: "Client-Side & UI",
    description:
      "Crafting responsive, performant, and accessible user interfaces with React (Vite), TypeScript, Tailwind CSS, and HTML5/CSS3.",
    icon: <FaLayerGroup />,
  },
  {
    id: "database",
    title: "Databases & Storage Engines",
    badge: "Persistence & Data Modeling",
    description:
      "Architecting relational and document data layers with PostgreSQL, Supabase, MongoDB, and MySQL with optimized indexing.",
    icon: <FaDatabase />,
  },
  {
    id: "security",
    title: "Authentication & Application Security",
    badge: "Security & RBAC",
    description:
      "Implementing JWT authentication, Role-Based Access Control (RBAC), Supabase Auth, session guards, and OTP verification pipelines.",
    icon: <FaShieldAlt />,
  },
  {
    id: "tools",
    title: "Cloud Deployment, DevOps & Toolchain",
    badge: "Ecosystem & Delivery",
    description:
      "Leveraging Vercel, Render, Linux, Git/GitHub, Postman, and Pandas for reliable CI/CD, deployment, and data processing.",
    icon: <FaTools />,
  },
];

function SkillsContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredSkills = useMemo(() => {
    if (activeFilter === "all") return SKILLS_DATA;
    return SKILLS_DATA.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" className="skills-section reveal-on-scroll">
      <div className="skills-ambient-glow glow-top-left"></div>
      <div className="skills-ambient-glow glow-bottom-right"></div>

      <div className="skills-container">
        {/* HEADER */}
        <header className="skills-header">
          <div className="skills-pill">
            <span className="pill-dot"></span>
            Technical Capabilities
          </div>
          <h1 className="skills-title">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="skills-subtitle">
            A comprehensive overview of languages, frameworks, databases, authentication
            mechanisms, and cloud deployment tools I utilize to engineer production web systems.
          </p>
        </header>

        {/* METRICS / STATS STRIP */}
        <div className="skills-stats-grid">
          <div className="stat-card">
            <div className="stat-number">23+</div>
            <div className="stat-info">
              <span className="stat-label">Production Tools</span>
              <span className="stat-sub">Across full stack lifecycle</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">FastAPI & Flask</div>
            <div className="stat-info">
              <span className="stat-label">Python Backend</span>
              <span className="stat-sub">High throughput REST APIs</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">React + TS</div>
            <div className="stat-info">
              <span className="stat-label">Frontend SPAs</span>
              <span className="stat-sub">Vite, Tailwind CSS & State</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">RBAC & Cloud</div>
            <div className="stat-info">
              <span className="stat-label">Security & Hosting</span>
              <span className="stat-sub">Supabase, Vercel & Render</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CATEGORY FILTER TABS */}
        <div className="skills-filter-wrapper">
          <div className="skills-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-btn ${activeFilter === cat.id ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span className="filter-icon">{cat.icon}</span>
                <span className="filter-label">{cat.label}</span>
                <span className="filter-badge">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        {activeFilter === "all" ? (
          <div className="skills-sections-container">
            {SECTIONS.map((section) => {
              const sectionSkills = SKILLS_DATA.filter(
                (skill) => skill.category === section.id
              );
              return (
                <div key={section.id} className="skill-section-block">
                  <div className="section-block-header">
                    <div className="section-header-left">
                      <div className="section-icon-badge">{section.icon}</div>
                      <div>
                        <div className="section-pre-title">{section.badge}</div>
                        <h2 className="section-main-title">{section.title}</h2>
                      </div>
                    </div>
                    <span className="section-count-tag">
                      {sectionSkills.length} Technologies
                    </span>
                  </div>

                  <p className="section-block-desc">{section.description}</p>

                  <div className="skills-grid">
                    {sectionSkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="filtered-skills-view">
            <div className="filtered-header">
              <h3>
                Showing {filteredSkills.length}{" "}
                {CATEGORIES.find((c) => c.id === activeFilter)?.label} Technologies
              </h3>
            </div>
            <div className="skills-grid">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM PHILOSOPHY BANNER */}
        <div className="skills-banner">
          <div className="banner-content">
            <div className="banner-icon">
              <FaCheckCircle />
            </div>
            <div className="banner-text">
              <h4>Engineering Standards & Production Philosophy</h4>
              <p>
                Strict adherence to clean code architecture, type safety, stateless JWT authentication,
                Role-Based Access Control (RBAC), indexed database performance, automated testing,
                and seamless continuous deployment on Vercel and Render.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div
      className="tech-card-pro"
      style={
        {
          "--tech-color": skill.brandColor,
          "--tech-glow": skill.glowColor,
        } as React.CSSProperties
      }
    >
      <div className="tech-card-inner">
        <div className="tech-card-top">
          <div className="tech-icon-box" style={{ color: skill.brandColor }}>
            {skill.icon}
          </div>
          <span className={`level-pill level-${skill.level.toLowerCase()}`}>
            {skill.level}
          </span>
        </div>

        <div className="tech-card-body">
          <div className="tech-name-wrapper">
            <h3 className="tech-title">{skill.name}</h3>
            <span className="tech-tag">{skill.tag}</span>
          </div>
          <p className="tech-desc">{skill.description}</p>
        </div>

        <div className="tech-card-footer">
          <div className="proficiency-bar">
            <div
              className="proficiency-fill"
              style={{
                width:
                  skill.level === "Advanced"
                    ? "95%"
                    : skill.level === "Proficient"
                    ? "80%"
                    : "65%",
                background: skill.brandColor,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsContent;