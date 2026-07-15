import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaDownload,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY < 80) {
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);

  return (
    <nav className={showNavbar ? "navbar show" : "navbar hide"}>

      <div className="logo">
        <NavLink to="/">
          Naveen
        </NavLink>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Education
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Certifications
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>

        <li className="mobile-resume">
          <a
            href="/Resume.pdf"
            download="Naveen_Kumar_Resume.pdf"
            className="resume-btn"
          >
            <FaDownload />
            Resume
          </a>
        </li>

      </ul>

      <div className="nav-actions">
        <a
          href="/Resume.pdf"
          download="Naveen_Kumar_Resume.pdf"
          className="resume-btn"
        >
          <FaDownload />
          Resume
        </a>
      </div>

    </nav>
  );
}

export default Navbar;