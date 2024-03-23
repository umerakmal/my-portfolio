import React, { useEffect } from "react";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import PortfolioTitle from "./PortfolioTitle";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioMain() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".portfolio-item .portfolio-wrap a",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  }, []);

  return (
    <div id="main">
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          
            <PortfolioTitle />
            <PortfolioFilter />
          
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={100}
          >
                <PortfolioCard filter="filter-ui"/>
                <PortfolioCard filter="filter-web"/>
                <PortfolioCard filter="filter-game"/>
                <PortfolioCard filter="filter-ui"/>
                <PortfolioCard filter="filter-web"/>
                <PortfolioCard filter="filter-game"/>
                <PortfolioCard filter="filter-web"/>
                <PortfolioCard filter="filter-ui"/>
                <PortfolioCard filter="filter-game"/>           
          </div>
        </div>
      </section>
    </div>
  );
}
