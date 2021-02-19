import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import Header from "./Header";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";

const Contact = (props) => {
  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header active="contact" />
        {/*======= SUB BANNER =========*/}
        <section class="sub-banner">
          <div class="container">
            <div class="position-center-center">
              <h2>CONTACT US</h2>
            </div>
          </div>
        </section>
        {/*======= Contact Section =========*/}
        <section class="sectoion-100px contact contact-page">
          <div class="container">
            {/* Tittle */}
            <div class="tittle">
              <h4>contact us</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>
            <div class="row">
              {/* Contact Info */}
              <div class="col-sm-4">
                <div class="contct-info">
                  <h5>Get in touch</h5>
                  <ul>
                    {/* ADDRESS */}
                    <li class="media">
                      <div class="media-left">
                        <div class="icon">
                          {" "}
                          <i class="fa fa-map-marker"></i>{" "}
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading">ADDRESS</h6>
                        <p>09 Design Street, Downtown Victoria, Australia</p>
                      </div>
                    </li>
                    {/* call */}
                    <li class="media">
                      <div class="media-left">
                        <div class="icon">
                          {" "}
                          <i class="fa fa-mobile-phone"></i>{" "}
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading">call us</h6>
                        <p>
                          +10 123 456 78
                          <br />
                          +10 123 456 98
                        </p>
                      </div>
                    </li>
                    {/* e-mail */}
                    <li class="media">
                      <div class="media-left">
                        <div class="icon">
                          {" "}
                          <i class="fa fa-envelope-o"></i>{" "}
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading">e-mail</h6>
                        <p>Info@Ourdomain.com </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="contact-form">
                  {/*======= FORM =========*/}
                  <ContactForm />
                </div>
              </div>
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
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
