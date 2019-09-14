import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/material.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Material</h5>
                        <p>Find public sculpture near you</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/simma.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Simma</h5>
                        <p>An interactive, browser-based aural map</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/just.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Just</h5>
                        <p>Using Tone.JS to learn about just intonation</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/primary.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Primary States</h5>
                        <p>Rendering with React States</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/finn.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Financial Auralizer</h5>
                        <p>Turn financial data into sound</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/api.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>API Calculator</h5>
                        <p>
                          Calculator built with Vue.JS that ties into external
                          API
                        </p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* portfolio-wrapper end */}
          </div>{" "}
          {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-material.png"
              alt=""
            />
            <div className="description-box">
              <h4>Material</h4>
              <p>
                A fully CRUD, location based app for users to find public
                sculpture near them and post public sculptures they find in the
                world.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                MongoDB, Express
              </span>
            </div>
            <div className="link-box">
              <a href="https://materialism.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-simma.png"
              alt=""
            />
            <div className="description-box">
              <h4>Simma</h4>
              <p>
                A spatial, sound exploration tool built with React and Tone.JS
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                React, Tone.JS
              </span>
            </div>
            <div className="link-box">
              <a href="http://simma.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-just.png"
              alt=""
            />
            <div className="description-box">
              <h4>Just</h4>
              <p>
                An educational tool to learn about just intonation. Built with
                P5 and Tone.JS
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                P5, Tone.JS, Education
              </span>
            </div>
            <div className="link-box">
              <a href="https://presentmoment.github.io/Just/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-primary.png"
              alt=""
            />
            <div className="description-box">
              <h4>Primary States</h4>
              <p>
                Using React to built a state managed voting app with conditional
                rendering
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                React
              </span>
            </div>
            <div className="link-box">
              <a href="https://presentmoment.github.io/Primary-States/">
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-finn.png"
              alt=""
            />
            <div className="description-box">
              <h4>Financial Auralizer</h4>
              <p>Using Tone.JS to 'auralize' financial data</p>
              <span className="categories">
                <i className="fa fa-tag" />
                React, Tone.JS
              </span>
            </div>
            <div className="link-box">
              <a href="https://presentmoment.github.io/Financial-Auralizer/">
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-api.png"
              alt=""
            />
            <div className="description-box">
              <h4>API Calculator</h4>
              <p>
                An exercise in Vue.JS building a state managed calculator which
                ties into an external API
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Vue.JS
              </span>
            </div>
            <div className="link-box">
              <a href="https://numbersapicalc.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
        </div>{" "}
        {/* row End */}
      </section>
    );
  }
}
