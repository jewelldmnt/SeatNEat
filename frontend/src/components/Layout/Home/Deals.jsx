import React from "react";
import Carousel from "../../UI/Carousel";

const deals = [
  {
    id: 1,
    name: "Placeholder",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Placeholder",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Placeholder",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "Placeholder",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "Placeholder",
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "Placeholder",
    image: "https://placehold.co/600x400",
  },
];

const Deals = () => {
  return (
    <section className="container py-10 min-h-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Exclusive Deals & Special Offers
          </h2>
          <span className="mt-2 text-neutral-500 block">
            Savor more, spend less! Grab our latest discounts, limited-time
            specials, and exclusive perks
          </span>
        </div>
      </div>

      {/* Carousel Component */}
      <div className="mt-6">
        <Carousel
          data={deals}
          slidesToShow={3}
          slidesToScroll={1}
          renderItem={(deal) => (
            <div className="w-[32.5rem] h-[14.375rem] px-4 flex justify-center items-center overflow-hidden">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Deals;
