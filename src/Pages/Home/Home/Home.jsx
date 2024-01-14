import React from "react";
import AppointmentSection from "../AppointmentSection/AppointmentSection.jsx";
import Banner from "../Banner/Banner.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";
import Intro from "../Intro/Intro.jsx";
import ServicesSection from "../ServicesSection/ServiceSection.jsx";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <AppointmentSection></AppointmentSection>
    </div>
  );
};

export default Home;
