import React from 'react'
import img from "../../assets/img/portfolio/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio/portfolio-2.jpg";
export default function PortfolioCard({ filter }) {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${filter}`}>
                <div className="portfolio-wrap">
                    <img src={img} className="img-fluid" alt="" />
                    <div className="portfolio-links">
                    <a
                        href={img}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                    >
                        <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                    </a>
                    </div>
                </div>
                </div>
  )
}
