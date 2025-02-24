import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({
  data,
  renderItem,
  slidesToShow = 3,
  slidesToScroll = 1,
  autoplay = false,
}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="absolute -top-10 right-0 flex gap-2">
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

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-2">
            {renderItem(item)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
