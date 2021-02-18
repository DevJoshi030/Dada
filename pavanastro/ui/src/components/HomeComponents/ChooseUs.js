import React from "react";

const ChooseUs = () => {
  return (
    <section class="sectoion-100px why-choose">
      <div class="container">
        <div class="sec-choose">
          {/* Nav tabs */}
          <div class="choose-tab col-md-5 no-padding">
            <h4 class="padding-left-30 padding-top-30">Why Choose us?</h4>
            <h6 class="padding-left-30 padding-top-20 padding-bottom-20">
              our capabilities
            </h6>
            <p class="padding-left-30 padding-right-40">
              Then along come two they got nothin' but their jeans. Just two
              good ol' boys Never meanin' no harm beats all you've ever saw been
            </p>
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a
                  href="#unique"
                  aria-controls="unique"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  <i class="fa fa-rocket"></i> Unique
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#elegant"
                  aria-controls="elegant"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  <i class="fa fa-dot-circle-o"></i> elegant
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#clean"
                  aria-controls="clean"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa fa-leaf"></i> clean
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#minimal"
                  aria-controls="minimal"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa fa-pencil"></i> minimal
                </a>
              </li>
            </ul>
          </div>
          {/* Tab panels */}
          <div class="col-md-7 no-padding">
            {/* Tab Content */}
            <div class="tab-content">
              {/* Unique */}
              <div role="tabpanel" class="tab-pane active" id="unique">
                <div class="detail-in">
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div class="text-content col-md-8">
                    {" "}
                    <i class="fa fa-rocket"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>
              {/* Elegant */}
              <div role="tabpanel" class="tab-pane" id="elegant">
                <div class="detail-in">
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div class="text-content col-md-8">
                    {" "}
                    <i class="fa fa-dot-circle-o"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>
              {/* Clean */}
              <div role="tabpanel" class="tab-pane" id="clean">
                <div class="detail-in">
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div class="text-content col-md-8">
                    {" "}
                    <i class="fa fa-leaf"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>
              {/* Minimal */}
              <div role="tabpanel" class="tab-pane" id="minimal">
                <div class="detail-in">
                  {" "}
                  <img
                    class="img-responsive"
                    src="/static/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div class="text-content col-md-8">
                    {" "}
                    <i class="fa fa-pencil"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
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
};

export default ChooseUs;
