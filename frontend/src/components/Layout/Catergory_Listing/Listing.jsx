import React, { useState } from "react";
import RestaurantCard from "../../UI/RestaurantCard";
import Filter from "../../UI/Filter";
import Pagination from "@mui/material/Pagination";

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
    name: "Steak Haven",
    location: "Taguig, Philippines",
    reservations: 65,
    rating: 4.6,
    availableTimes: ["1:30 PM", "5:00 PM", "9:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "Vegan Delights",
    location: "Pasig, Philippines",
    reservations: 80,
    rating: 4.8,
    availableTimes: ["10:30 AM", "2:30 PM", "6:30 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    name: "Ocean Bites",
    location: "Cebu, Philippines",
    reservations: 90,
    rating: 4.3,
    availableTimes: ["12:45 PM", "3:45 PM", "7:45 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 7,
    name: "Sakura Sushi",
    location: "Manila, Philippines",
    reservations: 120,
    rating: 4.5,
    availableTimes: ["12:00 PM", "2:00 PM", "6:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 8,
    name: "La Bella Pasta",
    location: "Makati, Philippines",
    reservations: 98,
    rating: 4.7,
    availableTimes: ["11:30 AM", "3:00 PM", "7:00 PM"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 9,
    name: "Grill House",
    location: "Quezon City, Philippines",
    reservations: 75,
    rating: 4.2,
    availableTimes: ["1:00 PM", "4:00 PM", "8:00 PM"],
    image: "https://placehold.co/600x400",
  },
];

const restaurantsPerPage = 6;

const Listing = () => {
  const [page, setPage] = useState(1);

  // Calculate the index range for pagination
  const startIndex = (page - 1) * restaurantsPerPage;
  const endIndex = startIndex + restaurantsPerPage;
  const paginatedRestaurants = restaurants.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section className="container py-14 h-screen">
      <div className="flex gap-24 h-full w-full">
        {/* Sidebar (Filters) */}
        <Filter />

        {/* Main Content (Restaurant Grid + Pagination) */}
        <div className="w-3/4 flex flex-col h-full">
          <h2 className="text-2xl font-semibold">Restaurants</h2>
          <div className="my-6 w-full flex flex-row justify-between">
            <span className="text-xl font-semibold text-neutral-700">
              {restaurants.length} Restaurants found
            </span>
            <Pagination
              count={Math.ceil(restaurants.length / restaurantsPerPage)}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </div>

          {/* Grid takes available space & maintains min height */}
          <div className="grid grid-cols-3 gap-2 flex-grow">
            {paginatedRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                width="23.75rem"
                height="22rem"
                imageHeight="12.1875rem"
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Listing;
