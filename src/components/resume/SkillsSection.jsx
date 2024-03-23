import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills section-bg">
        <div className="container">
            <div className="section-title">
                <h2>Skills</h2>
                <p>
                Innovative web developer with a flair for creating elegant solutions in the least amount of code. Proficient in HTML, CSS, JavaScript, plus modern libraries and frameworks. Passionate about usability and performance, I craft interactive experiences that delight and inform while maintaining clean and maintainable codebases.

                </p>
            </div>
            <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="progress">
                        <span className="skill">
                            HTML <i className="val">100%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{width: "100%"}}
                            />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">
                            CSS <i className="val">90%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{width: "90%"}}
                            />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">
                            JavaScript <i className="val">75%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{width: "75%"}}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                    <div className="progress">
                        <span className="skill">
                            React <i className="val">80%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{width: "80%"}}
                            />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">
                            Python <i className="val">70%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{width: "70%"}}
                            />
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">
                            Github <i className="val">90%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{width: "90%"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
