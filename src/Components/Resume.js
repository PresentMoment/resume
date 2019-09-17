import React, { Component } from "react";
export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  handleLeave = () => {
    this.setState({ image: "" });
  };

  handleEnter = e => {
    this.setState({ image: e.target.id });
  };

  render() {
    return (
      <section id="resume">
        {/* Education
----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Ironhack</h3>
                <p className="info">
                  Web Development Bootcamp <span>•</span>{" "}
                  <em className="date">August 2019</em>
                </p>
                <p>
                  MERN stack intensive program where I fell in love with React.
                  Experience building in Vanilla JS, Handlebars, React, MongoDB,
                  Express and Node.JS. Team collaboration on Git and testing
                  with Jasime. <br />
                  <a className="smoothscroll" href="#portfolio">
                    Check out some of the projects I built below.
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>San Francisco State University</h3>
                <p className="info">
                  B.S. Degree in Accounting <span>•</span>{" "}
                  <em className="date">March 2009</em>
                </p>
                <p>
                  Member ofthe Students Legal Counsel & Students Tax Preparation
                  Office
                </p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Education */}
        {/* Work
----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>NCIS: Los Angeles</h3>
                <p className="info">
                  Location Scout / Manager <span>•</span>{" "}
                  <em className="date">August 2016 - June 2019</em>
                </p>
                <p>
                  Led the scouting of locations, negotiated contracts between
                  property owners and CBS Studio, helmed logistical deliverables
                  to accommodate our mobile production facilities and a cast and
                  crew of 100 people. Managed this process for 50, one-hour
                  episodes, with each episode on a seven day production
                  schedule.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Various Film & Television Projects</h3>
                <p className="info">
                  Location Scout / Manager <span>•</span>{" "}
                  <em className="date">March 2015 - May 2018</em>
                </p>
                <p>
                  Credits available at{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.imdb.com/name/nm6521639/"
                  >
                    www.imdb.com
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="skillsImg">
            <img
              src="/images/skills/react.png"
              alt=""
              id="React"
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            />
            <img
              src="/images/skills/js.png"
              alt=""
              id="JavaScript"
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            />
            <img
              src="/images/skills/css.png"
              alt=""
              id="CSS"
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            />
            <img
              src="/images/skills/html.png"
              alt=""
              id="HTML"
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            />
            <img
              src="/images/skills/node.png"
              alt=""
              id="Node.JS"
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            />
            <img
              src="/images/skills/mongo.png"
              alt=""
              id="MongoDB"
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            />

            {/* end skill-bars */}
          </div>{" "}
          {/* main-col end */}
          <div
            className={
              this.state.image.length > 1 ? "skillsTitle" : "skillsHolder"
            }
          >
            <h5>{this.state.image.length > 1 ? this.state.image : "\u00A0"}</h5>
          </div>
        </div>{" "}
        {/* End skills */}
      </section>
    );
  }
}
