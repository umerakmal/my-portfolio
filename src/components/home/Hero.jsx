import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import the Typed.js library

const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed('.typed', {
      strings: ['Developer', 'Illustrator', 'Designer', 'Learner'],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
      backDelay: 1500,
    });

    // Clean up Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Umer Akmal</h1>
        <p>I'm <span className="typed"></span></p>
      </div>
    </section>
  );
};

export default Hero;
