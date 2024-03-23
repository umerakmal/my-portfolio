import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${isActive && 'active'}`} onClick={handleClick}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
