import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaDownload,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "../styles/navbar.css";

const NAV_ITEMS = [
  { id: "hero", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "education", label: "Education", path: "/education" },
  { id: "certifications", label: "Certifications", path: "/certifications" },
  { id: "contact", label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const location = useLocation();
  const navigate = useNavigate();

  // Hide/Show navbar on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ScrollSpy: Detect currently visible section on the Landing Page
  useEffect(() => {
    if (location.pathname !== "/") {
      const current = NAV_ITEMS.find((item) => item.path === location.pathname);
      if (current) setActiveSection(current.id);
      return;
    }

    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleSectionScroll, { passive: true });
    handleSectionScroll();

    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, [location.pathname]);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleNavClick = (id: string, path: string) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Naveenkumar <span>B</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          type="button"
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-link-btn ${activeSection === item.id ? "active-link" : ""}`}
                onClick={() => handleNavClick(item.id, item.path)}
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* RENDERED ONLY ON MOBILE DRAWER */}
          {menuOpen && (
            <li className="mobile-resume-item">
              <a
                href="/Naveenkumar_B_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-btn"
                onClick={() => setMenuOpen(false)}
              >
                <FaDownload />
                Resume
              </a>
            </li>
          )}
        </ul>

        {/* DESKTOP RESUME CTA (EXACTLY 1 RESUME BUTTON ON DESKTOP) */}
        <div className="nav-actions">
          <a
            href="/Naveenkumar_B_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;