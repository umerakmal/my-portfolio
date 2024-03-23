import React from 'react'

export default function ServiceCard({service, description, delay}) {
  return (
    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={delay}>
              <div className="icon">
                <i className="bi bi-card-checklist" />
              </div>
              <h4 className="title">
                <a href="">{service}</a>
              </h4>
              <p className="description">
                {description}
              </p>
            </div>
  )
}
