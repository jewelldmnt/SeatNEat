import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "../../UI/Carousel";

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
const renderCuisine = (cuisine) => (
  <div className="text-center">
    <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl">
      {cuisine.icon}
    </div>
    <p className="mt-2 text-sm font-medium">{cuisine.name}</p>
  </div>
);

const Cusine = () => {
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Cuisines</h2>
      <Carousel
        data={cuisines}
        renderItem={renderCuisine}
        slidesToShow={12}
        slidesToScroll={3}
        autoplay={true}
      />
    </section>
  );
};

export default Cusine;
