import React from "react";
import { Star } from "lucide-react";

const RestaurantCard = ({
  restaurant,
  width = "17.5rem",
  height = "18rem",
  imageHeight = "9rem",
}) => {
  return (
    <div
      className=" bg-white shadow-lg rounded-[0.3125rem] border border-solid border-neutral-400 overflow-hidden flex flex-col"
      style={{ width, height }}
    >
      <div className="w-full" style={{ height: imageHeight }}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full px-2 pt-2 h-full object-cover"
        />
      </div>
      <div className="p-2 flex flex-col flex-grow">
        <div className="mb-1 flex flex-row justify-between">
          <h3 className="font-semibold text-base">{restaurant.name}</h3>
          <h4 className="font-semibold text-base">{restaurant.location}</h4>
        </div>
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-sm text-neutral-400">
            ({restaurant.reservations} reservations)
          </span>
          <div className="flex flex-row">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={20}
                fill={
                  index < Math.round(restaurant.rating) ? "#4b5563" : "gray"
                }
                stroke="none"
              />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-col-3 gap-2 flex-wrap">
          {restaurant.availableTimes.map((time, index) => (
            <span
              key={index}
              className="py-1 px-2 bg-neutral-400 font-semibold text-neutral-50 text-sm rounded-[0.3125rem]"
            >
              {time}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
