import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Cusine = () => {
  const cuisines = [
    { name: "Italian", icon: "🍝" },
    { name: "Mexican", icon: "🌮" },
    { name: "Japanese", icon: "🍣" },
    { name: "Indian", icon: "🍛" },
    { name: "Chinese", icon: "🥡" },
    { name: "American", icon: "🍔" },
    { name: "Thai", icon: "🍜" },
    { name: "French", icon: "🥐" },
    { name: "Mediterranean", icon: "🥙" },
    { name: "Korean", icon: "🍲" },
    { name: "Vietnamese", icon: "🍜" },
    { name: "Greek", icon: "🥗" },
  ];

  const sliderRef = React.useRef(null);

  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container py-10 min-h-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Cuisine</h2>
          <span className="mt-2 text-neutral-500">
            Discover a Variety of Flavors: Explore Restaurants by Cuisine
          </span>
        </div>
        <div className="flex gap-2 text-neutral-600 font-bold">
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
      <div className="mt-6">
        <Slider ref={sliderRef} {...settings}>
          {cuisines.map((cuisine, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl">
                {cuisine.icon}
              </div>
              <p className="mt-2 text-sm font-medium">{cuisine.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Cusine;
