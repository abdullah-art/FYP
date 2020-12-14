import React from "react";
import rocket from "../../assets/img/icons/rocket.svg";
import testimony from "../../assets/img/icons/testimony.svg";
import promotion from "../../assets/img/icons/promotion.svg";
import coins from "../../assets/img/icons/coins.svg";
import support from "../../assets/img/icons/support.svg";
import laptop from "../../assets/img/icons/laptop.svg";

export default function Section5() {
  return (
    <section id="section5">
      <div class="page-section bg-dark fg-white">
        <div class="container">
          <h1 class="text-center">Why Choose Me</h1>

          <div class="row justify-content-center mt-5">
            <div class="col-md-6 col-lg-3 py-3">
              <div class="card card-body border-0 bg-transparent text-center wow zoomIn">
                <div class="mb-3">
                  <img src={rocket} alt="" />
                </div>
                <p class="fs-large">Very Fast</p>
                <p class="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 py-3">
              <div
                class="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="200ms"
              >
                <div class="mb-3">
                  <img src={testimony} alt="" />
                </div>
                <p class="fs-large">Happy Client</p>
                <p class="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 py-3">
              <div
                class="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="400ms"
              >
                <div class="mb-3">
                  <img src={promotion} alt="" />
                </div>
                <p class="fs-large">Free Ads</p>
                <p class="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 py-3">
              <div
                class="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="600ms"
              >
                <div class="mb-3">
                  <img src={coins} alt="" />
                </div>
                <p class="fs-large">Save Money</p>
                <p class="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 py-3">
              <div
                class="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="800ms"
              >
                <div class="mb-3">
                  <img src={support} alt="" />
                </div>
                <p class="fs-large">24/7 Support</p>
                <p class="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 py-3">
              <div
                class="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="1000ms"
              >
                <div class="mb-3">
                  <img src={laptop} alt="" />
                </div>
                <p class="fs-large">Full Features</p>
                <p class="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
