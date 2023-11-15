import React from "react";
import Offer from "./Offer.jsx";
import "../assets/styles/body.css";
import Service from "./service.jsx";
import AboutUs from "./aboutUs.jsx";
import Location from "./location.jsx";
import Testimonials from "./testimonial.jsx";
import ContactUs from "./contactUs.jsx";

const body = () => {
  return (
    <>
      <Offer />
      <AboutUs />
      <Testimonials />
      <Service />
      <Location />
      <ContactUs />
    </>
  );
};

export default body;
