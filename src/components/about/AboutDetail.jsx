import React from "react";
import img from "../../assets/img/profileUmer.png";

export default function AboutDetail({ birthDay, gpa, phone, city, age, degree, email, certification }) {
  return (
    <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
            <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer  &amp; Designer.</h3>
            <p className="fst-italic">
            Insightful Tech Profile & Personal Portfolio: Unveiling Key Details and Technical Skills for a Comprehensive Perspective and Deep Understanding!
            </p>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                    <li>
                        <i className="bi bi-chevron-right" /> <strong>Birthday:</strong>{" "}
                        <span>{birthDay}</span>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                        <span>{degree}</span>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                        <span>{phone}</span>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                        <span>{city}</span>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                    <li>
                        <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                        <span>{age}</span>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right" /> <strong>GPA:</strong>{" "}
                        <span>{gpa}</span>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong> <span>{email}</span>
                    </li>
                    <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Certification:</strong> <span>{certification}</span>
                    </li>
                    </ul>
                </div>
            </div>
            <p>
            As a passionate web developer and designer, I bring creativity and technical expertise to every project. Beyond coding, I enjoy exploring the nature and spending time with loved ones. Let's collaborate to bring your ideas to life while enjoying the journey together. Feel free to reach out—I'd love to connect and discuss how we can create something amazing!
            </p>
        </div>
    </div>
  );
}
