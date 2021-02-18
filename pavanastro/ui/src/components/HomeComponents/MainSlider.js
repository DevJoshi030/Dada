import React from "react";

const MainSlider = () => {
  return (
    <section class="home-slider">
      <div class="tp-banner-container">
        <div class="tp-banner">
          <ul>
            {/* Slider 1 */}
            <li
              data-transition="fade"
              data-slotamount="5"
              data-masterspeed="700"
            >
              {" "}
              <img
                src="/static/images/slides/slide-1.jpg"
                alt=""
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />
              {/* Layer */}
              <div
                class="tp-caption sft font-montserrat text-uppercase tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="40"
                data-speed="700"
                data-start="1000"
                data-easing="easeOutBack"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                data-captionhidden="on"
                style={{
                  color: "#fff",
                  fontSize: "48px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                {" "}
                Sprint true Minimal theme{" "}
              </div>
              {/* Layer */}
              <div
                class="tp-caption font-droid-serif sfb text-center text-uppercase tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="-30"
                data-speed="700"
                data-start="1500"
                data-easing="easeOutBack"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                data-captionhidden="on"
                style={{
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "bold",
                  letterSpacing: "4px",
                }}
              >
                {" "}
                design / development / branding
              </div>
            </li>
            {/* Slider 2 */}
            <li
              data-transition="fade"
              data-slotamount="5"
              data-masterspeed="700"
            >
              {" "}
              <img
                src="/static/images/slides/slide-2.jpg"
                alt=""
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />
              {/* Layer */}
              <div
                class="tp-caption sft font-montserrat uppercase tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="-60"
                data-speed="700"
                data-start="1000"
                data-easing="easeOutBack"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                data-captionhidden="on"
                style={{
                  color: "#fff",
                  fontSize: "45px",
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                }}
              >
                {" "}
                WE ARE BLOSSOM{" "}
              </div>
              {/* Layer */}
              <div
                class="tp-caption sft font-montserrat uppercase tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="0"
                data-speed="700"
                data-start="1300"
                data-easing="easeOutBack"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                data-captionhidden="on"
                style={{
                  color: "#fff",
                  fontSize: "45px",
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                }}
              >
                {" "}
                A CREATIVE DIGITAL AGENCY{" "}
              </div>
              {/* Layer */}
              <div
                class="tp-caption sfb text-center tp-resizeme"
                data-x="center"
                data-hoffset="0"
                data-y="center"
                data-voffset="60"
                data-speed="700"
                data-start="1600"
                data-easing="easeOutBack"
                data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0.1"
                data-endelementdelay="0.1"
                data-endspeed="300"
                data-captionhidden="on"
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "100",
                  fontStyle: "italic",
                  letterSpacing: "5px",
                }}
              >
                {" "}
                Extraordinary art studio & creative minimal
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
