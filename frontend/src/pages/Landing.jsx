import React from "react";
import Hero from "../components/Layout/Landing/Hero";
import Feature from "../components/Layout/Landing/Feature";
import About from "../components/Layout/Landing/About";
import Testimonial from "../components/Layout/Landing/Testimonial";
import FAQs from "../components/Layout/Landing/FAQs";

const Landing = () => {
  return (
    <div className="pt-[4rem] min-h-[calc(100vh-4rem)]">
      <Hero />
      <Feature />
      <About />
      <Testimonial />
      <FAQs />
    </div>
  );
};

export default Landing;
