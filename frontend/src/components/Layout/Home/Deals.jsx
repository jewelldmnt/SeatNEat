import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="rounded-full hover:text-neutral-400"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="rounded-full hover:text-neutral-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings} className="mt-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="w-[32.5rem] h-[14.375rem] px-4 flex justify-center items-center overflow-hidden"
          >
            <img
              src={deal.image}
              alt={deal.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Deals;
