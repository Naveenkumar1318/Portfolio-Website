import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

import "../styles/experience.css";

function ExperienceContent() {
  return (
    <section id="experience" className="experience-section reveal-on-scroll">
      <div className="experience-header">
        <span className="experience-pill">Career Journey</span>
        <h1>Professional Experience</h1>
        <p>
          Hands-on industry exposure and freelance client delivery in full-stack
          web development, backend systems, database engineering, and cloud deployment.
        </p>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line"></div>

        {/* EXPERIENCE 1: WildFloral (Freelance) */}
        <div className="experience-card">
          <div className="experience-icon">
            <FaLaptopCode />
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <div>
                <h2>Freelance Full-Stack Developer</h2>
                <h3 className="company-name">WildFloral Beauty & Fashion Studio</h3>
              </div>

              <div className="badge-group">
                <span className="experience-badge client-badge">Freelance / Production</span>
                <a
                  href="https://www.wildfloral.online/"
                  target="_blank"
                  rel="noreferrer"
                  className="live-link-btn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>

            <p className="experience-summary">
              Architected, engineered, and deployed a production-ready full-stack
              web platform for a beauty and fashion studio with customer booking systems,
              administrative management, Supabase Auth with RBAC, PostgreSQL data models,
              and full SEO optimization.
            </p>

            <div className="experience-meta">
              <span>
                <FaCalendarAlt />
                Jul 2026 – Oct 2026
              </span>
              <span>
                <FaMapMarkerAlt />
                Hosur, Tamil Nadu
              </span>
            </div>

            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>Supabase</span>
              <span>PostgreSQL</span>
              <span>Vercel</span>
              <span>SEO</span>
              <span>RBAC</span>
            </div>

            <div className="experience-highlights">
              <div className="highlight-card">
                <h4>Client & Admin Workflows</h4>
                <p>
                  Built end-to-end booking pipelines, service catalogs, appointment
                  schedulers, and admin management dashboards.
                </p>
              </div>

              <div className="highlight-card">
                <h4>Auth & Database Architecture</h4>
                <p>
                  Implemented role-based access control (RBAC) via Supabase Auth
                  and designed relational PostgreSQL database schemas.
                </p>
              </div>

              <div className="highlight-card">
                <h4>SEO & Production Cloud</h4>
                <p>
                  Engineered canonical URLs, structured schema data, XML sitemaps,
                  custom domain routing, and HTTPS on Vercel.
                </p>
              </div>
            </div>

            <div className="responsibilities">
              <div>
                <FaCheckCircle />
                Designed and developed a production-ready full-stack web application for a beauty and fashion studio.
              </div>
              <div>
                <FaCheckCircle />
                Built responsive customer-facing interfaces for beauty services, fashion design, appointments, and consultations.
              </div>
              <div>
                <FaCheckCircle />
                Developed customer and admin workflows for managing bookings, enquiries, services, and business operations.
              </div>
              <div>
                <FaCheckCircle />
                Implemented authentication and role-based access for customer and administrative functionality using Supabase.
              </div>
              <div>
                <FaCheckCircle />
                Designed and integrated PostgreSQL database workflows for customer data, bookings, enquiries, and application operations.
              </div>
              <div>
                <FaCheckCircle />
                Implemented SEO optimization with canonical URLs, structured data, robots.txt, XML sitemap, and Google Search Console integration.
              </div>
              <div>
                <FaCheckCircle />
                Deployed and configured the production application on Vercel with a custom domain, HTTPS, routing, and production environment.
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE 2: Nutmeg Software Solutions (Internship) */}
        <div className="experience-card">
          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <div>
                <h2>Software Developer Intern</h2>
                <h3 className="company-name">Nutmeg Software Solutions</h3>
              </div>

              <span className="experience-badge">Internship</span>
            </div>

            <p className="experience-summary">
              Contributed to a high-volume Business Intelligence analytics
              platform focused on secure data processing, data ingest automation,
              JWT authentication, and real-time dashboard generation solutions.
            </p>

            <div className="experience-meta">
              <span>
                <FaCalendarAlt />
                Jan 2026 – Mar 2026
              </span>
              <span>
                <FaMapMarkerAlt />
                Hosur, Tamil Nadu
              </span>
            </div>

            <div className="tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>MongoDB</span>
              <span>Pandas</span>
              <span>JWT</span>
              <span>Twilio</span>
              <span>SendGrid</span>
              <span>Linux</span>
            </div>

            <div className="experience-highlights">
              <div className="highlight-card">
                <h4>BI Analytics Platform</h4>
                <p>
                  Built data processing engines to parse and analyze organizational
                  datasets for accelerated data-driven decision making.
                </p>
              </div>

              <div className="highlight-card">
                <h4>Secure Ingestion & APIs</h4>
                <p>
                  Developed REST APIs to ingest CSV, Excel, and JSON sources with
                  automated validation pipelines reducing manual cleaning effort.
                </p>
              </div>

              <div className="highlight-card">
                <h4>Auth & Third-Party Integrations</h4>
                <p>
                  Implemented JWT authentication, OTP verification, session tracking,
                  and automated SMS/Email pipelines via Twilio and SendGrid.
                </p>
              </div>
            </div>

            <div className="responsibilities">
              <div>
                <FaCheckCircle />
                Built a Business Intelligence platform to process and analyze organizational datasets, enabling faster data-driven decision-making.
              </div>
              <div>
                <FaCheckCircle />
                Developed and deployed REST APIs to ingest CSV, Excel, and JSON data sources, streamlining data intake across departments.
              </div>
              <div>
                <FaCheckCircle />
                Implemented JWT-based authentication, OTP verification, and session tracking to strengthen platform security.
              </div>
              <div>
                <FaCheckCircle />
                Designed analytics modules for data aggregation and reporting, giving stakeholders clearer visibility into key metrics.
              </div>
              <div>
                <FaCheckCircle />
                Integrated third-party communication services (Twilio, SendGrid) to automate notifications and verification workflows.
              </div>
              <div>
                <FaCheckCircle />
                Increased data processing efficiency by building automated validation pipelines that reduced manual data-cleaning effort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceContent;