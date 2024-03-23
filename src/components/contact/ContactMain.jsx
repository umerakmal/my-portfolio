import React from "react";
import ContactTitle from "./ContactTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactMain() {
  return (
    <div id="main">
      <section id="contact" className="contact">
        <div className="container">

          <ContactTitle />

          <div className="row" data-aos="fade-in">
            
            <ContactInfo location="Garhi Shahu Lahore, Pakistan" email="umerakmal721@gmail.com" phone="+92 307 5601663"/>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
