import AboutIntro from "./AboutIntro";
import AboutDetail from "./AboutDetail";

import React from "react";

export default function AboutMain() {
  const info = {
    birthDay: '4 July 2002', 
    gpa: '3.20', 
    phone: '+92 307 5601663', 
    city: 'Lahore, Pakistan', 
    age: 22, 
    degree: 'BSCS', 
    email: 'umerakmal721@gmail.com', 
    certification: 'Trainee Software Enginner'
  };
  return (
    <div id="main">
      <section id="about" className="about">
        <div className="container">
          <AboutIntro />
          <AboutDetail {...info}/>
        </div>
      </section>
    </div>
  );
}
