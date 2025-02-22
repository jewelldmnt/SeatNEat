import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Sakura Sushi",
    location: "Manila, Philippines",
    reservations: 120,
    rating: 4.5,
    availableTimes: ["12:00 PM", "2:00 PM", "6:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "La Bella Pasta",
    location: "Makati, Philippines",
    reservations: 98,
    rating: 4.7,
    availableTimes: ["11:30 AM", "3:00 PM", "7:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Grill House",
    location: "Quezon City, Philippines",
    reservations: 75,
    rating: 4.2,
    availableTimes: ["1:00 PM", "4:00 PM", "8:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "Sakura Sushi",
    location: "Manila, Philippines",
    reservations: 120,
    rating: 4.5,
    availableTimes: ["12:00 PM", "2:00 PM", "6:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "La Bella Pasta",
    location: "Makati, Philippines",
    reservations: 98,
    rating: 4.7,
    availableTimes: ["11:30 AM", "3:00 PM", "7:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "Grill House",
    location: "Quezon City, Philippines",
    reservations: 75,
    rating: 4.2,
    availableTimes: ["1:00 PM", "4:00 PM", "8:00 PM"],
    image: "https://placehold.co/600x400",
  },
];

const Popular = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <section className="container py-10 min-h-auto relative">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Popular Restaurants</h2>
          <span className="mt-2 text-neutral-500 block">
            Diners’ Choice Awards are based on where your fellow diners book,
            dine, and review. Only verified diners get to review restaurants on
            SeatN’Eat, so our data doesn’t lie.
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
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="px-4 flex justify-center">
            <div className="w-[17.5rem] h-[16.75rem] bg-white shadow-lg rounded-[0.3125rem] border border-solid border-neutral-400 overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full px-2 pt-2 h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <p className="text-sm text-neutral-500">
                  {restaurant.location}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={
                        index < Math.round(restaurant.rating) ? "gold" : "gray"
                      }
                      stroke="none"
                    />
                  ))}
                  <span className="text-sm text-neutral-600">
                    ({restaurant.reservations} reservations)
                  </span>
                </div>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {restaurant.availableTimes.map((time, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-400 text-sm rounded-[0.3125rem]"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Popular;
