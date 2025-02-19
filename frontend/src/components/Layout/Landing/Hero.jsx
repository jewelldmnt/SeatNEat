import React from "react";
import Button from "../../UI/Button";

const Hero = () => {
  return (
    <section className="container min-h-[40rem] flex flex-col items-center justify-center text-center">
      <h1 className="max-w-7xl text-[2.75rem] font-extrabold">
        Skip the Lines, Secure Your Seat, and Enjoy Exclusive Dining Experiences
        With Just One Click
      </h1>
      <h2 className="max-w-3xl py-[3.12rem] text-neutral-600 text-2xl">
        Never worry about restaurant availability again! Book ahead, skip the
        wait, and enjoy hassle-free dining with SeatN’Eat.
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
