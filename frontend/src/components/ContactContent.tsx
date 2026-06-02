import { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/contact.css";

function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return;
    }

    if (!subject.trim()) {
      setError("Subject is required");
      return;
    }

    if (message.trim().length < 10) {
      setError(
        "Message should contain at least 10 characters"
      );
      return;
    }

    setSuccess(
      "Message validated successfully. Backend integration coming next."
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Let's Connect</h1>

        <p>
          Open to internships, freelance
          projects, full-time opportunities,
          and developer collaborations.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <a
            href="mailto:naveenn13032004@gmail.com"
            className="contact-card"
          >
            <FiMail size={24} />
            <div>
              <h3>Email</h3>
              <p>
                naveenn13032004@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Naveenkumar1318"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FiGithub size={24} />
            <div>
              <h3>GitHub</h3>
              <p>Naveenkumar1318</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/naveen-kumar-14b99829a/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FiLinkedin size={24} />
            <div>
              <h3>LinkedIn</h3>
              <p>View Profile</p>
            </div>
          </a>

          <a
            href="https://wa.me/919342303057"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaWhatsapp size={24} />
            <div>
              <h3>WhatsApp</h3>
              <p>+91 9342303057</p>
            </div>
          </a>

          <div className="contact-card">
            <FiMapPin size={24} />
            <div>
              <h3>Location</h3>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <h2>Send Message</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
          />

          <textarea
            rows={6}
            placeholder="Message"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          />

          {error && (
            <p className="error-text">
              {error}
            </p>
          )}

          {success && (
            <p className="success-text">
              {success}
            </p>
          )}

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactContent;