import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StarRating from "../../UI/StarRating";

const Review = () => {
  const reviews = [
    {
      name: "Remy Sharp",
      image: "https://placehold.co/400",
      rating: 4,
      category: "good service",
      date: "February 14, 2025",
      text: "This platform has significantly improved our shopping experience! The seamless integration and product comparisons are top-notch. Highly recommended!",
    },
    {
      name: "Travis Howard",
      image: "https://placehold.co/400",
      rating: 4.4,
      category: "reasonable price",
      date: "February 14, 2025",
      text: "Absolutely love the convenience this platform offers. I can find the best deals without hopping between sites!",
    },
    {
      name: "Cindy Baker",
      image: "https://placehold.co/400",
      rating: 4,
      category: "good service",
      date: "February 14, 2025",
      text: "A game-changer for online shopping! Saves so much time and effort. I can’t shop without it anymore!",
    },
    {
      name: "Agnes Walker",
      image: "https://placehold.co/400",
      rating: 4,
      category: "reasonable price",
      date: "February 14, 2025",
      text: "A fantastic experience! The interface is user-friendly and helps me find the best deals quickly.",
    },
    {
      name: "Trevor Henderson",
      image: "https://placehold.co/400",
      rating: 4,
      category: "good service",
      date: "February 14, 2025",
      text: "Love this tool! It has transformed the way I shop online. Highly efficient!",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxHeight, setMaxHeight] = useState(0);

  const filteredReviews =
    selectedCategory === "all"
      ? [...reviews]
      : reviews.filter((review) => review.category === selectedCategory);

  const adjustedReviews =
    filteredReviews.length % 2 !== 0
      ? [...filteredReviews, filteredReviews[0]]
      : filteredReviews;

  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 2;

  useEffect(() => {
    const reviewElements = document.querySelectorAll(".review-item");
    let maxHeight = 0;
    reviewElements.forEach((el) => {
      maxHeight = Math.max(maxHeight, el.clientHeight);
    });
    setMaxHeight(maxHeight);
  }, [filteredReviews, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + reviewsPerPage < adjustedReviews.length ? prev + reviewsPerPage : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - reviewsPerPage >= 0
        ? prev - reviewsPerPage
        : adjustedReviews.length - reviewsPerPage
    );
  };

  const categoryCounts = {
    all: reviews.length,
    "reasonable price": reviews.filter((r) => r.category === "reasonable price")
      .length,
    "good service": reviews.filter((r) => r.category === "good service").length,
  };

  return (
    <section className="container min-h-auto">
      <h3 className="font-semibold text-base mb-4">
        What {reviews.length} people are saying
      </h3>
      <span className="text-sm">
        Reviews can only be made by diners who have eaten at this restaurant
      </span>
      <div className="flex space-x-4 mt-6 mb-4">
        {Object.entries(categoryCounts).map(([category, count]) => (
          <button
            key={category}
            className={`px-4 py-2 border text-xs font-medium ${
              selectedCategory === category ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
          </button>
        ))}
      </div>
      <div className="relative flex items-center">
        <button onClick={prevSlide} className="absolute left-0 z-10">
          <ChevronLeft size={32} className="text-gray-700" />
        </button>
        <div className="flex w-full justify-between px-10 relative">
          {adjustedReviews
            .slice(currentIndex, currentIndex + reviewsPerPage)
            .map((review, index) => (
              <div
                key={index}
                className="flex-1 p-5 relative review-item"
                style={{ minHeight: `${maxHeight}px` }}
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <StarRating rating={review.rating} />
                    <span className="text-xs text-gray-500">
                      Dined on {review.date}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-justify">{review.text}</p>
                {index === 0 && currentIndex + 1 < adjustedReviews.length && (
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400"></div>
                )}
              </div>
            ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 z-10">
          <ChevronRight size={32} className="text-gray-700" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(adjustedReviews.length / reviewsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * reviewsPerPage)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index * reviewsPerPage
                ? "bg-gray-800"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Review;
