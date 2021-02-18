import React from "react";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section class="sectoion-100px contact">
      <div class="container">
        {/* Tittle */}
        <div class="tittle">
          <h4>contact us</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
          </p>
        </div>
        <div class="contact-form">
          {/*======= FORM =========*/}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
