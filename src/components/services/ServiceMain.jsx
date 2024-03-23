import React from "react";
import ServiceTitle from "./ServiceTitle";
import ServiceCard from "./ServiceCard";

export default function ServiceMain() {
    let servicesArr = [
        {
            service: 'Web Development',
            description: 'Elevate your online presence with my expertly crafted web development solutions.',
            delay: 0
        },
        {
            service: 'Web Design',
            description: 'Transform your digital presence with my cutting-edge web design solutions.',
            delay: 100
        },
        {
            service: 'Web Maintenance',
            description: 'Ensure your online success with my reliable and efficient web maintenance services.',
            delay: 200
        },
        {
            service: 'Web Scraping',
            description: 'Unlock valuable insights effortlessly my our powerful web scraping solutions.',
            delay: 300
        },
        {
            service: 'Web Management',
            description: 'Streamline your online operations with my comprehensive web management solutions.',
            delay: 400
        },
        {
            service: 'Web Consultation',
            description: 'Elevate your digital strategy with our expert web consultation services.',
            delay: 500
        },
    ]
  return (
    <div id="main">
      <section id="services" className="services">
        <div className="container">
          <ServiceTitle />
          <div className="row">
                {
                    servicesArr.map((ele, i )=> (
                        <ServiceCard key={i} service={ele.service} description={ele.description} delay={ele.delay} />  
                    ))
                }
          </div>
        </div>
      </section>
    </div>
  );
}
