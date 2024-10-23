import React from "react";
import Hero from "../../Components/Hero/Hero";
import OurServices from "../../Components/OurServices/OurServices";
import Jobs from "../../Components/Jobs/Jobs";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TrustedCompanies from "../../Components/TrustedCompanies/TrustedCompanies";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Metrics from "../../Components/Metrics/Metrics";

const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <Hero />
      <AboutUs />
      <OurServices />
      <TrustedCompanies />
      <Metrics />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;
