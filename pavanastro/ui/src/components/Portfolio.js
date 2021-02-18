import React, { useEffect } from "react";
import Header from "./Header";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";

const Portfolio = () => {
  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header />
        {/*======= SUB BANNER =========*/}
        <section class="sub-banner">
          <div class="container">
            <div class="position-center-center">
              <h2>portfolio</h2>
            </div>
          </div>
        </section>

        {/*======= PORTFOLIO =========*/}
        <section class="sectoion-100px portfolio">
          <div class="container">
            <ul class="port-folio-row no-margin-t folio-simple row col-3">
              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-1.jpg" alt="" />
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
                  <img src="/static/images/port-img-2.jpg" alt="" />
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
                  <img src="/static/images/port-img-3.jpg" alt="" />
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
                  <img src="/static/images/port-img-4.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>The mate was a mighty</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-5.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>The mate was a mighty</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-6.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>The mate was a mighty</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-7.jpg" alt="" />
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
                  <img src="/static/images/port-img-8.jpg" alt="" />
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
                  <img src="/static/images/port-img-2.jpg" alt="" />
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

            <div class="text-center">
              <a href="#." class="btn">
                {" "}
                see more works
              </a>
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

export default Portfolio;
