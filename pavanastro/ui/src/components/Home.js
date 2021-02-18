import React, { useEffect } from "react";

import Header from "./Header";
import AboutSection from "./HomeComponents/AboutSection";
import ChooseUs from "./HomeComponents/ChooseUs";
import ClientLogo from "./HomeComponents/ClientLogo";
import ContactSection from "./HomeComponents/ContactSection";
import Footer from "./Footer";
import MainSlider from "./HomeComponents/MainSlider";
import OurBlog from "./HomeComponents/OurBlog";
import ParallaxSection from "./HomeComponents/ParallaxSection";
import Portfolio from "./HomeComponents/Portfolio";
import ServiceSection from "./HomeComponents/ServiceSection";
import Testimonials from "./HomeComponents/Testimonials";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";

const Home = (props) => {
  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);

  return (
    <div id="wrap" class="no-padding">
      <div id="main-wrapper">
        <Header />
        {/*======= HOME MAIN SLIDER =========*/}
        <MainSlider />
        {/*======= ABOUT SECTION =========*/}
        <AboutSection />
        {/*======= SERVICE SECTION =========*/}
        <ServiceSection />
        {/*======= WHY CHOOSE US =========*/}
        <ChooseUs />
        {/*======= PORTFOLIO =========*/}
        <Portfolio />
        {/*======= Parallax Section =========*/}
        <ParallaxSection />
        {/*======= Our Blog Section =========*/}
        <OurBlog />
        {/*======= Tastimonial =========*/}
        <Testimonials />
        {/*======= clients-logo =========*/}
        <ClientLogo />
        {/*======= Con6atact Section =========*/}
        <ContactSection />
        {/*======= FOOTER UP =========*/}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
