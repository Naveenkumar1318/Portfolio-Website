import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/education.css";

function EducationContent() {
  return (
    <section className="education-section">

      <div className="education-header">
        <h1>Education Journey</h1>

        <p>
        My educational background and learning journey.
        </p>
      </div>

      <div className="roadmap">

        {/* MCA */}

        <div className="edu-card left">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <span className="year-badge">
              2024 - 2026
            </span>

            <h2>
              Master of Computer Applications
            </h2>

            <h3>
              Adhiyamaan College of Engineering
            </h3>

            <div className="score-badge">
              CGPA : 8.4
            </div>

            <div className="location">
              <FaMapMarkerAlt />
              Hosur, Tamil Nadu
            </div>
          </div>
        </div>

        {/* UG */}

        <div className="edu-card right">
          <div className="edu-icon">
            <FaUniversity />
          </div>

          <div className="edu-content">
            <span className="year-badge">
              2021 - 2024
            </span>

            <h2>
              Bachelor of Commerce (B.Com)
            </h2>

            <h3>
              MGR Arts and Science College
            </h3>

            <div className="score-badge">
              CGPA : 6.48
            </div>

            <div className="location">
              <FaMapMarkerAlt />
              Hosur, Tamil Nadu
            </div>

          </div>
        </div>

        {/* 12th */}

        <div className="edu-card left">
          <div className="edu-icon">
            <FaSchool />
          </div>

          <div className="edu-content">
            <span className="year-badge">
              2020 - 2021
            </span>

            <h2>
              Higher Secondary Education (12th)
            </h2>

            <h3>
              Government Higher Secondary School
            </h3>

            <div className="score-badge">
              72.60%
            </div>

            <div className="location">
              <FaMapMarkerAlt />
              Hosur, Tamil Nadu
            </div>
          </div>
        </div>

        {/* 10th */}

        <div className="edu-card right">
          <div className="edu-icon">
            <FaSchool />
          </div>

          <div className="edu-content">
            <span className="year-badge">
              2018 - 2019
            </span>

            <h2>
              Secondary School (10th)
            </h2>

            <h3>
              Parimalam Matric Hr. Sec. School
            </h3>

            <div className="score-badge">
              65.40%
            </div>

            <div className="location">
              <FaMapMarkerAlt />
              Hosur, Tamil Nadu
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default EducationContent;