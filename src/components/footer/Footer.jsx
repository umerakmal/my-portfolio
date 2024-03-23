import React from "react";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Umer Akmal</span>
            </strong>
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://www.github.com/umerakmal">Umer Akmal</a>{" "}
            on React.
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
