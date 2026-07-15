import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © 2026 Naveen Kumar.
          Full-Stack Developer
          Made with{" "}
          <FaHeart className="heart-icon" />
          {" "}love & care.
        </p>
      </div>
    </footer>
  );
}

export default Footer;