import React from "react";

const Portfolio = () => {
  return (
    <section class="sectoion-100px no-padding-b portfolio padding-left-50 padding-right-50">
      <div class="container">
        {/* Tittle */}
        <div class="tittle">
          <h4>our latest works</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
          </p>
        </div>
      </div>
      <div class="container-fluid">
        <ul class="port-folio-row no-margin-t folio-simple row col-4">
          {/* Project 1 */}
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-1.jpg" alt="" />
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
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-2.jpg" alt="" />
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
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-3.jpg" alt="" />
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
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-4.jpg" alt="" />
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
          <li class="item int arch">
            <article>
              {" "}
              <img src="/static/images/folio-img-5.jpg" alt="" />
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
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-6.jpg" alt="" />
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
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-7.jpg" alt="" />
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
          <li class="item">
            <article>
              {" "}
              <img src="/static/images/folio-img-8.jpg" alt="" />
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
      </div>
      <div class="container">
        <div class="padding-50">
          <h4 class="pull-left text-bold no-margin-b margin-top-20">
            Do you want to explore all our works?{" "}
          </h4>
          <a href="#." class="btn btn-1 pull-right no-margin-top">
            view all works
          </a>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
