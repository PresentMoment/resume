import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              California born and bred, I built a successful career as a
              Location Scout/Manager in the film and television industry before
              transitioning to web development. I love making things work, and
              especially revel in the visual feedback of Frontend Development. I
              enjoy communicating with people as well as machines, and believe
              the best solutions in life arise from open, honest communication.
              <br />
              In addition to the MERN stack, I am an experienced video editor
              (Adobe Premiere), music producer (Logic/Live) and an okay surfer.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Robert Girardin</span>
                  <br />
                  <span>
                    <a href="tel:+49 1762930116">+49 1762930116</a>
                  </span>
                  <br />
                  <span>
                    <a href="whatsapp://tel:12137693973">
                      What's App: +1 (213) 769-3973
                    </a>
                  </span>
                  <br />
                  <span>
                    <a
                      href="mailto:robertlgirardin@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      robertlgirardin@gmail.com
                    </a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1MuTUti9eAbvmtat6PlxtwZOqqqaFJCxw"
                    className="button"
                    download="resume.pdf"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}
