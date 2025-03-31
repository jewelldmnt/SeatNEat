import React from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import StarRating from "../../UI/StarRating";


const restaurant = {
  id: 1,
  name: "Jollibee",
  category: "American",
  price: 1200,
  reviews: 56,
  rating: 4.5,
};

const RestaurantHeading = () => {
  return (
    <section className="container pt-20 min-h-auto flex flex-col">
      <h2 className="text-xl font-semibold pb-5">{restaurant.name}</h2>
      <div className="flex flex-row items-center gap-8 text-sm font-medium">
        {/* ratings */}
        <div className="flex flex-row items-center space-x-2">
          <StarRating rating={restaurant.rating} />
          <span>{restaurant.rating.toFixed(1)}</span>
        </div>

        {/* number of reviews */}
        <div className="flex flex-row items-center space-x-2">
          <MdOutlineModeComment className="h-5 w-5" />
          <span>{restaurant.reviews}</span>
        </div>

        {/* price range */}
        <div className="flex flex-row items-center space-x-2">
          <BsCash className="h-6 w-6" />
          <span>{restaurant.price}</span>
        </div>

        {/* category */}
        <div className="flex flex-row items-center space-x-2">
          <ImSpoonKnife className="h-5 w-5" />
          <span>{restaurant.category}</span>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{restaurant.overview}</p>
    </section>
  );
};

export default RestaurantHeading;
