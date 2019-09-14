import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
            <h3>
              I'm a{" "}
              <a
                href="https://materialism.herokuapp.com/search?term=berlin"
                target="_blank"
                rel="noopener noreferrer"
                id="berlin"
              >
                Berlin
              </a>{" "}
              based <span>{resumeData.role}.</span>
              <br />I strive to exist in the present moment and welcome new
              challenges and experiences, espcially in tech. .
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a
                  href="https://github.com/PresentMoment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/robert-girardin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="skype:+12137693973?call">
                  <i className="fa fa-skype" />
                </a>
              </li>
              <li>
                <a href="skype:+12137693973?call">
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
