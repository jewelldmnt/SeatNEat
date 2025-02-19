import React from "react";

const features = [
  {
    title: "Instant Table Reservations",
    image: "https://placehold.co/400",
    description:
      "Book your favorite restaurants in just a few clicks. No more long queues or waiting lists—secure your seat instantly and dine without the hassle.",
  },
  {
    title: "Smart Restaurant Search & Filters",
    image: "https://placehold.co/400",
    description:
      "Easily find the perfect restaurant with advanced search options. Filter by cuisine, location, ratings, price range, and availability to match your preferences.",
  },
  {
    title: "Exclusive Deals & Discounts",
    image: "https://placehold.co/400",
    description:
      "Enjoy special promotions and member-only discounts at top-rated restaurants. Save on dining while experiencing the best food in town!",
  },
  {
    title: "Verified Reviews & Real-Time Ratings",
    image: "https://placehold.co/400",
    description:
      "Read trusted customer reviews and real-time ratings before making a reservation. Get insights from other diners to ensure the best experience.",
  },
];

const Feature = () => {
  return (
    <section className="container py-20 min-h-auto">
      <div className="flex items-start justify-center gap-24 text-center text-neutral-600">
        {features.map(({ title, image, description }, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image}
              alt={title}
              className="w-[4.625rem] h-[4.625rem] rounded-full mb-4"
            />
            <h3 className="pb-[1.44rem] text-2xl font-bold">{title}</h3>
            <p className="text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
