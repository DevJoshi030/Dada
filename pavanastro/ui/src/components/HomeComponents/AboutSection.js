import React from "react";

const AboutSection = () => {
  return (
    <section class="sectoion-100px about">
      <div class="container">
        {/* Tittle */}
        <div class="tittle">
          <h4>About our agency</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
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
              Can you tell me how to get how to get to SesaStreet. Now the world
              don't move to the beat of just one um. What might be right for you
              the.
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
              Can you tell me how to get how to get to SesaStreet. Now the world
              don't move to the beat of just one um. What might be right for you
              the.
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
              Can you tell me how to get how to get to SesaStreet. Now the world
              don't move to the beat of just one um. What might be right for you
              the.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
