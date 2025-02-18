import React from "react";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <section className="container min-h-[40rem] flex flex-col items-center justify-center text-center">
      <h1 className="max-w-7xl text-display-sm font-extrabold md:text-5xl">
        Skip the Lines, Secure Your Seat, and Enjoy Exclusive Dining Experiences
        With Just One Click
      </h1>
      <h2 className="max-w-3xl py-[3.12rem] text-2xl md:text-2xl">
        Never worry about restaurant availability again! SeatN’Eat gives you
        instant access to the best dining spots, allowing you to book ahead,
        avoid the rush, and enjoy your meals without the hassle of waiting in
        line.
      </h2>
      <div className="flex gap-4">
        <Button variant="filled" size="md">
          Reserve Now
        </Button>
        <Button variant="outlined" size="md">
          Be Our Partner
        </Button>
      </div>
    </section>
  );
};

export default Hero;
