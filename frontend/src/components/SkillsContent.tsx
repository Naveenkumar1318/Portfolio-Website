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
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

import "../styles/skills.css";

function SkillsContent() {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h1>Technical Skills</h1>

        <p>
          Technologies, frameworks, databases and tools I use to build scalable
          modern web applications.
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
                <FaHtml5 color="#E34F26" />
                <span>HTML5</span>
              </div>

              <div className="tech-card">
                <FaCss3Alt color="#1572B6" />
                <span>CSS3</span>
              </div>

              <div className="tech-card">
                <FaJs color="#F7DF1E" />
                <span>JavaScript</span>
              </div>

              <div className="tech-card">
                <SiTypescript color="#3178C6" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>Frameworks</h3>

            <div className="tech-list">
              <div className="tech-card">
                <FaReact color="#61DAFB" />
                <span>React.js</span>
              </div>

              <div className="tech-card">
                <FaVuejs color="#42B883" />
                <span>Vue.js</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>Libraries / UI</h3>

            <div className="tech-list">
              <div className="tech-card">
                <SiTailwindcss color="#06B6D4" />
                <span>Tailwind CSS</span>
              </div>

              <div className="tech-card">
                <SiBootstrap color="#7952B3" />
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
                <FaNodeJs color="#5FA04E" />
                <span>Node.js</span>
              </div>

              <div className="tech-card">
                <FaPython color="#3776AB" />
                <span>Python</span>
              </div>

              <div className="tech-card">
                <FaPhp color="#777BB4" />
                <span>PHP</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>Databases</h3>

            <div className="tech-list">
              <div className="tech-card">
                <SiPostgresql color="#4169E1" />
                <span>PostgreSQL</span>
              </div>

              <div className="tech-card">
                <SiMysql color="#4479A1" />
                <span>MySQL</span>
              </div>

              <div className="tech-card">
                <SiMongodb color="#47A248" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="category-card">
            <h3>API</h3>

              <div className="tech-list">
                <div className="tech-card">
                  <TbApi color="#38BDF8" />
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
            <FaGitAlt color="#F05032" />
            <span>Git</span>
          </div>

          <div className="tech-card">
            <FaGithub color="#FFFFFF" />
            <span>GitHub</span>
          </div>

          <div className="tech-card">
            <VscVscode color="#007ACC" />
            <span>VS Code</span>
          </div>

          <div className="tech-card">
            <SiPostman color="#FF6C37" />
            <span>Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsContent;