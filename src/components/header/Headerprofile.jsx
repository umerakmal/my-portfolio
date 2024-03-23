import React from 'react'
import img from "../../assets/img/profileUmer.png";

export default function Headerprofile() {
  return (
    <div className="profile">
            <img src={img} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Umer Akmal</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/gostudy_umer" className="twitter" target='_blank'>
                <i className="bx bxl-twitter" />
              </a>
              <a href="https://www.facebook.com/UmerAkmal.4" className="facebook" target='_blank'>
                <i className="bx bxl-facebook" />
              </a>
              <a href="https://www.instagram.com/gostudy_umer" className="instagram" target='_blank'>
                <i className="bx bxl-instagram" />
              </a>
              <a href="https://github.com/umerakmal" className="github" target='_blank'>
                <i className="bx bxl-github" />
              </a>
              <a href="https://www.linkedin.com/in/umer-akmal-7722bb219/" className="linkedin" target='_blank'>
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
  )
}
