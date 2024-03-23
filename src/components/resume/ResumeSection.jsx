import React from "react";

export default function ResumeSection() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Hey there! 👋 Passionate Web Developer here, dedicated to crafting
            pixel-perfect, user-friendly websites that make the web a better
            place. With [X years] of experience and a knack for creativity, I
            thrive on turning ideas into stunning digital experiences. Let's
            team up and build something awesome together!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Umer Akmal</h4>
              <p>
                <em>
                  Experienced web developer with proficiency in frontend and
                  backend technologies. Strong problem-solving skills and a
                  passion for creating efficient and user-friendly digital
                  solutions.
                </em>
              </p>
              <ul>
                <li>Garhi Shahu, Lahore</li>
                <li>+92 307 5601663</li>
                <li>umerakmal721@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BS Computer Science</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>
                  National College of Business Administration &amp; Economics
                </em>
              </p>
              <p>
                Explored various aspects of computer science. Engaged in
                projects and coursework to develop problem-solving skills and
                deepen understanding of technology.
              </p>
            </div>
            <div className="resume-item">
              <h4>F.Sc Pre-Enigineering</h4>
              <h5>2016 - 2020</h5>
              <p>
                <em>Govt. Islamia College Civil Lines, Lahore</em>
              </p>
              <p>
                Explored principles of mathematics and physics. Engaged in
                practical experiments and projects to apply theoretical
                concepts. Engaged in extracurricular activities to broaden
                knowledge and develop essential skills.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Professional Experience</h3>
            
            <div className="resume-item">
              <h4>Web Developer &amp; Designer</h4>
              <h5>2023 - present</h5>
              <p>
                <em>Global IT Solutions, Seattle, United States</em>
              </p>
              <ul>
                <li>
                  Lead the development and maintenance of responsive websites
                  and web applications.
                </li>
                <li>
                  Provided technical guidance and support to team members,
                  fostering collaboration and skill development.
                </li>
                <li>
                  Implemented responsive design principles, optimizing websites
                  for performance and usability.
                </li>
                <li>
                  Collaborated with clients to gather requirements and provide
                  personalized design solutions, enhancing client satisfaction.
                </li>
              </ul>
              
            </div>
            <div className="resume-item">
              <h4>Jr. Web Developer</h4>
              <h5>2022 - 2023</h5>
              <p>
                <em>IT Genesis, Lahore, Pakistan</em>
              </p>
              <ul>
                <li>
                Contributed to the development of marketing-oriented web applications, landing pages, interactive features, and user interfaces.
                </li>
                <li>
                Successfully handled up to 5 coding tasks simultaneously, ensuring efficient project completion under tight deadlines.
                </li>
                <li>
                Provided valuable input and recommendations on frontend design decisions, collaborating closely with clients and senior developers.
                </li>
                <li>
                Regularly created and presented design mockups and proposals to clients and project managers, facilitating effective communication and project alignment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
