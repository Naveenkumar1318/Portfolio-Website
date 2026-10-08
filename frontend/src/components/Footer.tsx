import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            Naveen<span>kumar B</span>
          </div>
          <p className="footer-role">Full-Stack Python Developer</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Naveenkumar1318"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/naveen-kumar-14b99829a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:naveenn13032004@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom-text">
          <p className="copyright-text">
            © {new Date().getFullYear()} Naveenkumar B. All rights reserved.
          </p>
          <p className="crafted-text">
            Built with <FaHeart className="heart-icon" /> & engineered for high performance
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;