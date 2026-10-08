import { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

import "../styles/contact.css";

function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!subject.trim()) {
      setError("Subject is required");
      return;
    }

    if (message.trim().length < 10) {
      setError("Message should contain at least 10 characters");
      return;
    }

    // Direct mailto trigger fallback
    const mailtoUrl = `mailto:naveenn13032004@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.open(mailtoUrl, "_blank");

    setSuccess(
      "Thank you! Your email draft has been generated. You can send it directly."
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section reveal-on-scroll">
      <div className="contact-header">
        <span className="contact-pill">Get In Touch</span>
        <h1>Let's Connect</h1>
        <p>
          I am actively open to full-time Software Developer roles, full-stack
          internships, freelance client projects, and technical collaborations.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <a
            href="mailto:naveenn13032004@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon-box email-icon">
              <FiMail size={22} />
            </div>
            <div>
              <h3>Email</h3>
              <p>naveenn13032004@gmail.com</p>
              <span className="contact-action-hint">Send Email</span>
            </div>
          </a>

          <a
            href="tel:+919342303057"
            className="contact-card"
          >
            <div className="contact-icon-box phone-icon">
              <FiPhone size={22} />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+91 9342303057</p>
              <span className="contact-action-hint">Call Directly</span>
            </div>
          </a>

          <a
            href="https://github.com/Naveenkumar1318"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon-box github-icon">
              <FiGithub size={22} />
            </div>
            <div>
              <h3>GitHub</h3>
              <p>github.com/Naveenkumar1318</p>
              <span className="contact-action-hint">View Repositories</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/naveen-kumar-14b99829a/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon-box linkedin-icon">
              <FiLinkedin size={22} />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/naveen-kumar-14b99829a</p>
              <span className="contact-action-hint">Connect on LinkedIn</span>
            </div>
          </a>

          <a
            href="https://wa.me/919342303057"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon-box whatsapp-icon">
              <FaWhatsapp size={22} />
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p>+91 9342303057</p>
              <span className="contact-action-hint">Chat on WhatsApp</span>
            </div>
          </a>

          <div className="contact-card static-card">
            <div className="contact-icon-box location-icon">
              <FiMapPin size={22} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Hosur, Tamil Nadu, India</p>
              <span className="contact-action-hint">Open to Relocation & Remote</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Direct Message</h2>
          <p className="form-sub">
            Fill in the details below and reach out directly to my inbox.
          </p>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Job Opportunity / Project Inquiry"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          {success && (
            <p className="success-text">
              <FaCheckCircle /> {success}
            </p>
          )}

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactContent;