import React from "react";
import preview2 from "../../assets/img/app_preview_2.png";

export default function Section2() {
  return (
    <section id="section2">
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 py-3">
              <div className="img-place mobile-preview shadow wow zoomIn">
                <img src={preview2} alt="" />
              </div>
            </div>
            <div className="col-lg-6 py-3 mt-lg-5">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                    <span className="mai-cube"></span>
                  </div>
                  <div className="iconic-content">
                    <h5>Powerful Features</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                    <span className="mai-shield"></span>
                  </div>
                  <div className="iconic-content">
                    <h5>Fully Secured</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                    <span className="mai-desktop-outline"></span>
                  </div>
                  <div className="iconic-content">
                    <h5>Easy Monitoring</h5>
                    <p className="fs-small">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
