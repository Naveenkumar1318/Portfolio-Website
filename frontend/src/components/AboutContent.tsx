import heroImage from "../assets/about img.png";

import {
  FaLightbulb,
  FaUsers,
  FaPuzzlePiece,
  FaBookOpen,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaLanguage
} from "react-icons/fa";

import "../styles/about.css";

function AboutContent() {
  return (
    <section className="about-section">

      <div className="about-header">
        <h1>About Me</h1>

        <p>
          Get to know more about me, my skills,
          mindset, and passion for technology.
        </p>
      </div>

      <div className="about-container">

        <div className="about-image">
          <img
            src={heroImage}
            alt="Naveen Kumar"
          />
        </div>

        <div className="about-content">

          <span className="about-badge">
            Full-Stack Developer
          </span>

          <h2>
            Hi, I'm Naveen Kumar 👋
          </h2>

          <p>
            I am an aspiring Full-Stack Developer
            passionate about building modern,
            responsive, and scalable web applications.
            I enjoy working with React, TypeScript,
            Node.js, databases, and continuously
            learning new technologies.
          </p>

          <p>
            My goal is to create meaningful digital
            experiences while improving my technical,
            problem-solving, and teamwork skills.
          </p>

        </div>

      </div>

      <div className="traits-section">

        <h2>My Toolkit & Traits</h2>

        <div className="traits-grid">

          <div className="trait-card">
            <FaPuzzlePiece />
            <h3>Problem Solver</h3>
            <p>
              Enjoy solving technical challenges
              and finding efficient solutions.
            </p>
          </div>

          <div className="trait-card">
            <FaLightbulb />
            <h3>Creative Thinker</h3>
            <p>
              Love creating user-friendly and
              visually appealing applications.
            </p>
          </div>

          <div className="trait-card">
            <FaUsers />
            <h3>Team Player</h3>
            <p>
              Comfortable collaborating and
              working effectively with teams.
            </p>
          </div>

          <div className="trait-card">
            <FaBookOpen />
            <h3>Continuous Learner</h3>
            <p>
              Always exploring new technologies
              and improving my skills.
            </p>
          </div>

        </div>

      </div>

      <div className="info-section">

        <div className="info-card">
          <FaLanguage />
          <h3>Languages Known</h3>

          <ul>
            <li>Tamil,English
            Telugu</li>
            
          </ul>
        </div>

        <div className="info-card">
          <FaGraduationCap />
          <h3>Education</h3>

          <p>
            Master of Computer Applications (MCA)
          </p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>

          <p>
            Hosur, Tamil Nadu, India
          </p>
        </div>

        <div className="info-card">
          <FaCode />
          <h3>Focus</h3>

          <p>
            Full-Stack Web Development
          </p>
           <p>
              Mobile Application Development
           </p>
        </div>

      </div>

    </section>
  );
}

export default AboutContent;