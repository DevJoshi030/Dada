import React, { useEffect } from "react";
import Header from "./Header";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";

const PortfoiloDetail = () => {
  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header active="portfolio" />
        {/*======= PORTFLIO DETAIL =========*/}
        <section class="portfolio-detail">
          {" "}
          <img
            class="img-responsive"
            src="images/portfolio-detail.jpg"
            alt=""
          />
          {/*======= DETAIL =========*/}
          <div class="folio-detail sectoion-100px">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <h4>Magic branding</h4>
                  <h6>GOOGLE Inc</h6>
                  <h6>Branding and product design</h6>
                </div>
                <div class="col-md-9">
                  <p>
                    The Love Boat promises something for everyone. Knight Rider:
                    A shadowy flight into the dangerous world of a man who does
                    not exist. We're gonna do it. On your mark get set and go
                    now. Got a dream and we just know now we're gonna make our
                    dream come true. Come and dance on our floor. Take a step
                    that is new. We've a loveable space that needs your face
                    threes company too.
                  </p>

                  {/*======= SOCIAL =========*/}
                  <ul class="social_icons margin-top-20">
                    <li class="margin-right-20">
                      <h4 class="margin-top-15">Share this details</h4>
                    </li>
                    <li class="facebook">
                      <a href="#." class="facebook">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="twitter">
                      <a href="#." class="twitter">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="googleplus">
                      <a href="#." class="googleplus">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li class="linkedin">
                      <a href="#." class="linkedin">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/*======= PORTFOLIO =========*/}
              <section class="sectoion-100px no-padding-b portfolio">
                <ul class="port-folio-row no-margin-t folio-simple row col-2">
                  {/* Project 1 */}
                  <li class="item padding-15">
                    <article>
                      {" "}
                      <img src="images/folio-img-7.jpg" alt="" />
                      {/* Hover Info */}
                      <div class="hover-port">
                        <div class="position-center-center">
                          {" "}
                          <a href="#.">
                            <i class="fa fa-link"></i>
                          </a>
                          <h6>Awesome Projects</h6>
                        </div>
                      </div>
                    </article>
                  </li>

                  {/* Project 1 */}
                  <li class="item padding-15">
                    <article>
                      {" "}
                      <img src="images/folio-img-8.jpg" alt="" />
                      {/* Hover Info */}
                      <div class="hover-port">
                        <div class="position-center-center">
                          {" "}
                          <a href="#.">
                            <i class="fa fa-link"></i>
                          </a>
                          <h6>Awesome Projects</h6>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </section>
              <ul class="row up-links">
                <li class="col-md-4">
                  {" "}
                  <a href="#.">
                    {" "}
                    <i class="ion-ios-arrow-thin-left"></i>Previous
                  </a>{" "}
                </li>
                <li class="col-md-4">
                  {" "}
                  <a href="#.">go to homepage</a>{" "}
                </li>
                <li class="col-md-4">
                  {" "}
                  <a href="#.">
                    next <i class="ion-ios-arrow-thin-right pull-right"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/*======= clients-logo =========*/}
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
        <section class="footer-up">
          <div class="col-sm-6">
            <div class="work">
              {" "}
              <i class="ion-map"></i>
              <p>
                09 Design Street, Downtown <br />
                victoria, Australia
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="contact">
              {/*======= Social Icon =========*/}
              <ul class="social_icons">
                <li class="facebook">
                  <a class="facebook" href="#.">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="twitter">
                  <a class="twitter" href="#.">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="linkedin">
                  <a class="linkedin" href="#.">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <p>Copyright © 2015 - All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfoiloDetail;
