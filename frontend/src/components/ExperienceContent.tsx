import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle
} from "react-icons/fa";

import "../styles/experience.css";

function ExperienceContent() {
  return (
    <section className="experience-section">

      <div className="experience-header">
        <h1>Experience</h1>

        <p>
          Professional internship experience and
          hands-on industry exposure in backend
          development and analytics solutions.
        </p>
      </div>

      <div className="experience-timeline">

        <div className="timeline-line"></div>

        <div className="experience-card">

          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div className="experience-content">

            <div className="experience-top">

              <h2>Backend Developer Intern</h2>

              <span className="experience-badge">
                Internship
              </span>

            </div>

            <h3>
              Nutmeg Software Solutions
            </h3>

            <p className="experience-summary">
              Worked as a Backend Developer Intern
              contributing to a Business Intelligence
              Analytics platform focused on secure
              data processing, reporting and
              dashboard generation solutions.
            </p>

            <div className="experience-meta">

              <span>
                <FaCalendarAlt />
                Jan 02, 2026 - Mar 31, 2026
              </span>

              <span>
                <FaMapMarkerAlt />
                Hosur, Tamil Nadu
              </span>

            </div>

            <div className="tech-stack">
              <span>Flask</span>
              <span>MongoDB</span>
              <span>Pandas</span>
              <span>Linux Mint</span>
              <span>JWT</span>
              <span>Twilio</span>
              <span>SendGrid</span>
            </div>

            <div className="experience-highlights">

              <div className="highlight-card">
                <h4>BI Analytics Platform</h4>

                <p>
                  Contributed to development of a
                  real-time Business Intelligence
                  analytics platform.
                </p>
              </div>

              <div className="highlight-card">
                <h4>Authentication System</h4>

                <p>
                  Implemented JWT authentication,
                  OTP verification and secure
                  session tracking.
                </p>
              </div>

              <div className="highlight-card">
                <h4>Data Processing</h4>

                <p>
                  Built CSV, Excel and JSON
                  ingestion pipelines with
                  validation workflows.
                </p>
              </div>

            </div>

            <div className="responsibilities">

              <div>
                <FaCheckCircle />
                Developed backend APIs using Flask
                for analytics and reporting services.
              </div>

              <div>
                <FaCheckCircle />
                Processed structured datasets using
                Pandas for business insights.
              </div>

              <div>
                <FaCheckCircle />
                Built data aggregation modules and
                dashboard analytics features.
              </div>

              <div>
                <FaCheckCircle />
                Implemented JWT authentication,
                OTP verification and session tracking.
              </div>

              <div>
                <FaCheckCircle />
                Integrated Twilio and SendGrid
                notification services.
              </div>

              <div>
                <FaCheckCircle />
                Worked with MongoDB for storage,
                querying and data management.
              </div>

              <div>
                <FaCheckCircle />
                Followed Linux Mint development
                workflows and version control
                best practices.
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ExperienceContent;