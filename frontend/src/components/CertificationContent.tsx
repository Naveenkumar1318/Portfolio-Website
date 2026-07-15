import {
  FaBriefcase,
  FaTrophy,
  FaCertificate,
  FaEye
} from "react-icons/fa";

import "../styles/certification.css";

function CertificationContent() {
  return (
    <section className="certification-section">

      <div className="certification-header">
        <h1>Certifications & Achievements</h1>

        <p>
          Internships, hackathons and professional
          learning experiences throughout my journey.
        </p>
      </div>

      {/* INTERNSHIPS */}

      <div className="section-title">
        <FaBriefcase />
        <h2>Internships</h2>
      </div>

      <div className="certificate-grid">

        <div className="certificate-card">

          <div className="certificate-thumbnail">
            <FaBriefcase />
          </div>

          <span className="certificate-date">
            Jul 2025 - Sep 2025
          </span>

          <h3>Web Development Intern</h3>

          <p>
            Shripriti Educational & IT Hub
          </p>

          <a
            href="/certificates/Internships/internship1.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <FaEye />
            View Certificate
          </a>

        </div>

      </div>

      {/* HACKATHONS */}

      <div className="section-title">
        <FaTrophy />
        <h2>Hackathons</h2>
      </div>

      <div className="certificate-grid">

        <div className="certificate-card">

          <div className="certificate-thumbnail">
            <FaTrophy />
          </div>

          <span className="certificate-date">
            2025
          </span>

          <h3>EXPLOIT-X KPR CTF</h3>

          <p>
            KPR Institute of Engineering & Technology
          </p>

          <a
            href="/certificates/Hackathons/exploit-x.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <FaEye />
            View Certificate
          </a>

        </div>

        <div className="certificate-card">

          <div className="certificate-thumbnail">
            <FaTrophy />
          </div>

          <span className="certificate-date">
            2025
          </span>

          <h3>CosmoHacks'25</h3>

          <p>
            Guru Nanak Dev University
          </p>

          <a
            href="/certificates/Hackathons/cosmohacks.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <FaEye />
            View Certificate
          </a>

        </div>

        <div className="certificate-card">

          <div className="certificate-thumbnail">
            <FaTrophy />
          </div>

          <span className="certificate-date">
            2025
          </span>

          <h3>OpenHack 2025</h3>

          <p>
            Indian Institute of Science
          </p>

          <a
            href="/certificates/Hackathons/openhack.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <FaEye />
            View Certificate
          </a>

        </div>

        <div className="certificate-card">

          <div className="certificate-thumbnail">
            <FaTrophy />
          </div>

          <span className="certificate-date">
            2025
          </span>

          <h3>K! Hacks 2.0</h3>

          <p>
            Anna University
          </p>

          <a
            href="/certificates/Hackathons/kihacks.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <FaEye />
            View Certificate
          </a>

        </div>

      </div>

      {/* COURSES */}

      <div className="section-title">
        <FaCertificate />
        <h2>Courses</h2>
      </div>

      <div className="certificate-grid">

        <div className="certificate-card">

          <div className="certificate-thumbnail">
            <FaCertificate />
          </div>

          <span className="certificate-date">
            Dec 2024
          </span>

          <h3>Data Science Using Python</h3>

          <p>
            Network Systems & ACE
          </p>

          <a
            href="/certificates/Courses/datascience-python.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            <FaEye />
            View Certificate
          </a>

        </div>

      </div>

    </section>
  );
}

export default CertificationContent;