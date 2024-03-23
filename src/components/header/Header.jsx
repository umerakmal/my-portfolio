import React from "react";


import Headerprofile from "./Headerprofile";
import Navbar from "./Navbar";

export default function () {
  function check(e){
  e.target.parentElement.parentElement.classList.toggle("mobile-nav-active")
   e.target.classList.toggle("bi-list")
   e.target.classList.toggle("bi-x")
  }
  return (
    <>
      <i onClick={check} className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      
      <header id="header">
        <div className="d-flex flex-column">
          <Headerprofile />
          <Navbar />
        </div>
      </header>
    </>
  );
}
