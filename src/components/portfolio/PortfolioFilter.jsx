import React from "react";

export default function PortfolioFilter() {
  return (
    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-ui">UI</li>
          <li data-filter=".filter-game">Game</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>
  );
}
