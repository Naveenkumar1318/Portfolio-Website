import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman
} from "react-icons/si";

import "../styles/skills.css";

function SkillsContent() {
  return (
    <section className="skills-section">

      <div className="skills-header">
        <h1>Technical Skills</h1>

        <p>
          Technologies, frameworks, databases and tools
          I use to build scalable modern web applications.
        </p>
      </div>

      {/* FRONTEND */}

      <div className="main-card">
        <h2>Frontend Development</h2>

        <div className="divider"></div>

        <div className="category-grid">

          <div className="category-card">
            <h3>Languages</h3>

            <div className="tech-list">
              <div className="tech-card">
                <FaHtml5 />
                <span>HTML5</span>
              </div>

              <div className="tech-card">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>

              <div className="tech-card">
                <FaJs />
                <span>JavaScript</span>
              </div>

              <div className="tech-card">
                <SiTypescript />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>Frameworks</h3>

            <div className="tech-list">
              <div className="tech-card">
                <FaReact />
                <span>React.js</span>
              </div>

              <div className="tech-card">
                <FaVuejs />
                <span>Vue.js</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>Libraries / UI</h3>

            <div className="tech-list">
              <div className="tech-card">
                <SiTailwindcss />
                <span>Tailwind CSS</span>
              </div>

              <div className="tech-card">
                <SiBootstrap />
                <span>Bootstrap</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BACKEND */}

      <div className="main-card">
        <h2>Backend Development</h2>

        <div className="divider"></div>

        <div className="category-grid">

          <div className="category-card">
            <h3>Languages</h3>

            <div className="tech-list">
              <div className="tech-card">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="tech-card">
                <FaPython />
                <span>Python</span>
              </div>

              <div className="tech-card">
                <FaPhp />
                <span>PHP</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>Databases</h3>

            <div className="tech-list">
              <div className="tech-card">
                <SiPostgresql />
                <span>PostgreSQL</span>
              </div>

              <div className="tech-card">
                <SiMysql />
                <span>MySQL</span>
              </div>

              <div className="tech-card">
                <SiMongodb />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>API</h3>

            <div className="tech-list">
              <div className="tech-card">
                <span>REST API</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DEVELOPMENT TOOLS */}

      <div className="main-card">
        <h2>Development Tools</h2>

        <div className="divider"></div>

        <div className="tools-grid">

          <div className="tech-card">
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div className="tech-card">
            <FaGithub />
            <span>GitHub</span>
          </div>

          <div className="tech-card">
            <span>VS Code</span>
          </div>

          <div className="tech-card">
            <SiPostman />
            <span>Postman</span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default SkillsContent;