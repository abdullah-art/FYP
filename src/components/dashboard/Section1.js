import React from "react";
import preview1 from "../../assets/img/app_preview_1.png";
import background from "../../assets/img/bg_hero_1.svg";

export default function Section1() {
  return (
    <section id="section1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp">
                <div className="badge mb-4">
                  <span className="icon mr-1">
                    <span className="mai-globe"></span>
                  </span>{" "}
                  #2 Editor Choice App of 2020
                </div>
                <h1>Social insights for the world's most impactful brands</h1>
                <p>From intelligence to impact</p>
                <a href="#" className="btn btn-primary rounded-pill mb-6">
                  Free Demo
                </a>
              </div>
              <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                <div className="img-place mobile-preview shadow floating-animate">
                  <img src={preview1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
