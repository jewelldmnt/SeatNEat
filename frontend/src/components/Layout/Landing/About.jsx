import React from "react";

const images = [
  "https://placehold.co/400",
  "https://placehold.co/400",
  "https://placehold.co/400",
];

const About = () => {
  return (
    <section className="container py-20 min-h-auto flex flex-col">
      {/* How does it work */}
      <div className="px-12 flex flex-row items-center justify-between gap-12">
        <h2 className="w-[20rem] text-[3.25rem] font-bold">
          How does it work?
        </h2>
        <p className="w-2/3 text-xl text-neutral-600 text-justify">
          SeatN’Eat makes dining out effortless by allowing you to discover,
          book, and enjoy the best restaurants near you, all in just a few
          clicks. Whether you're planning a romantic dinner, a family gathering,
          or a casual meetup with friends, our platform provides real-time table
          availability, verified reviews, and exclusive deals to ensure a smooth
          and enjoyable dining experience. Say goodbye to long queues and
          last-minute disappointments, reserve your table instantly and dine
          with confidence. With SeatN’Eat, great food and great moments are
          always within reach.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5rem] mt-[6.5rem]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[32.5rem] h-[32.5rem] rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default About;
