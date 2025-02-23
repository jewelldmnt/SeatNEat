import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Carousel from "../../UI/Carousel";
import RestaurantCard from "../../UI/RestaurantCard";

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
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Popular Restaurants</h2>
      <Carousel
        data={restaurants}
        renderItem={(restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        )}
        slidesToShow={5}
        autoplay={false}
      />
    </section>
  );
};

export default Popular;
