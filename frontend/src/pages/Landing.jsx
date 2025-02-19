import React from "react";
import Hero from "../components/Layout/Landing/Hero";
import Feature from "../components/Layout/Landing/Feature";
import About from "../components/Layout/Landing/About";
import Testimonial from "../components/Layout/Landing/Testimonial";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Testimonial />
    </div>
  );
};

export default Landing;
