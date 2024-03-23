import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>
            <i className="bx bx-home" /> <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            <i className="bx bx-user" /> <span>About</span>
          </a>
        </li>
        <li>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
            <i className="bx bx-user" /> <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#resume" className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}>
            <i className="bx bx-file-blank" /> <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>
            <i className="bx bx-book-content" /> <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>
            <i className="bx bx-server" /> <span>Services</span>
          </a>
        </li>
        <li>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
            <i className="bx bx-envelope" /> <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
