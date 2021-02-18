import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";

const About = () => {
  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header />

        <section class="sub-banner">
          <div class="container">
            <div class="position-center-center">
              <h2>About us</h2>
            </div>
          </div>
        </section>

        {/*======= ABOUT SECTION =========*/}
        <section class="sectoion-100px about">
          <div class="container">
            {/* Tittle */}
            <div class="tittle">
              <h4>About our agency</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>
            <ul class="row">
              <li class="col-sm-4">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/about-img-1.jpg"
                  alt=""
                />
                <h6 class="margin-top-20">Who we are</h6>
                <p>
                  Can you tell me how to get how to get to SesaStreet. Now the
                  world don't move to the beat of just one um. What might be
                  right for you the.
                </p>
              </li>
              <li class="col-sm-4">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/about-img-2.jpg"
                  alt=""
                />
                <h6 class="margin-top-20">our mission</h6>
                <p>
                  Can you tell me how to get how to get to SesaStreet. Now the
                  world don't move to the beat of just one um. What might be
                  right for you the.
                </p>
              </li>
              <li class="col-sm-4">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/about-img-3.jpg"
                  alt=""
                />
                <h6 class="margin-top-20">our vision</h6>
                <p>
                  Can you tell me how to get how to get to SesaStreet. Now the
                  world don't move to the beat of just one um. What might be
                  right for you the.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/*======= Parallax Section =========*/}
        <section class="sectoion-150px parallax-bg parallax-about">
          <div class="container">
            <h4>see how we work to create everything unique</h4>
            <a href="#." class="play-btn">
              <i class="ion-play"></i>{" "}
            </a>{" "}
          </div>
        </section>

        {/*======= Team Member Section =========*/}
        <section class="team sectoion-100px">
          <div class="container">
            {/* Tittle */}
            <div class="tittle">
              <h4>our awesome minds</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>

            {/* Row */}
            <ul class="row">
              {/* Team */}
              <li class="col-md-4">
                <article>
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/team-1.jpg"
                    alt=""
                  />
                  <div class="team-name">
                    <h6>Daniel Pasternak</h6>
                    <span>Web designer</span>{" "}
                  </div>
                </article>
              </li>

              {/* Team */}
              <li class="col-md-4">
                <article>
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/team-2.jpg"
                    alt=""
                  />
                  <div class="team-name">
                    <h6>TOM BURLY</h6>
                    <span>Developer </span>{" "}
                  </div>
                </article>
              </li>

              {/* Team */}
              <li class="col-md-4">
                <article>
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/team-3.jpg"
                    alt=""
                  />
                  <div class="team-name">
                    <h6>MICHAEL BRADLEY</h6>
                    <span>Designer</span>{" "}
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>

        {/*======= Clients-logo =========*/}
        <section class="sectoion-100px promo">
          <div class="container">
            <div class="position-center-center">
              <h5>Do you want to discuss with us?</h5>
              <a href="#." class="btn">
                CONTACT US
              </a>{" "}
            </div>
          </div>
        </section>

        {/*======= FOOTER UP =========*/}
        <Footer />
      </div>
    </div>
  );
};

export default About;
