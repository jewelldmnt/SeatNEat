import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Remy Sharp",
    text: "This platform has significantly improved our shopping experience! The seamless integration and product comparisons are top-notch. Highly recommended!",
  },
  {
    name: "Travis Howard",
    text: "Absolutely love the convenience this platform offers. I can find the best deals without hopping between sites!",
  },
  {
    name: "Cindy Baker",
    text: "A game-changer for online shopping! Saves so much time and effort. I can’t shop without it anymore!",
  },
  {
    name: "Agnes Walker",
    text: "A fantastic experience! The interface is user-friendly and helps me find the best deals quickly.",
  },
  {
    name: "Trevor Henderson",
    text: "Love this tool! It has transformed the way I shop online. Highly efficient!",
  },
];

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const maxAvatars = 4;
  const remaining = testimonials.length - maxAvatars;

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container py-20 px-12 min-h-auto flex flex-col relative">
      {/* Layout Wrapper */}
      <div className="h-100 flex flex-col md:flex-row items-start justify-between">
        {/* Left Section: Testimonial, Avatars, and Navigation */}
        <div className="w-3/5 flex flex-col">
          {/* Overlapping Avatar Group */}
          <div className="flex flex-row justify-between items-center h-12">
            {/* Overlapping Avatar Group */}
            <div className="flex -space-x-2">
              <div
                className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-sm font-bold text-white border-2 border-white"
                style={{ zIndex: maxAvatars }}
              >
                {getInitials(testimonials[index].name)}
              </div>
              {[
                ...testimonials
                  .filter((_, i) => i !== index)
                  .slice(0, maxAvatars - 1),
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full text-sm font-bold text-gray-700 border-2 border-white"
                  style={{ zIndex: maxAvatars - (i + 1) }}
                >
                  {getInitials(testimonial.name)}
                </div>
              ))}
              {(remaining > 0 || testimonials.length > maxAvatars) && (
                <div className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded-full text-sm font-bold text-white border-2 border-white">
                  +{Math.min(remaining, testimonials.length - maxAvatars + 1)}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                className="w-10 h-10 flex items-center justify-start hover:bg-gray-300 text-4xl text-neutral-500 font-bold"
                onClick={prevTestimonial}
              >
                ←
              </button>
              <button
                className="w-10 h-10 flex items-center justify-end hover:bg-gray-300 text-4xl text-neutral-500 font-bold"
                onClick={nextTestimonial}
              >
                →
              </button>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="mt-10 mb-5 text-neutral-500 text-justify text-2xl italic font-semibold">
            "{testimonials[index].text}"
          </p>
          <p className="text-2xl text-neutral-500 font-semibold">
            {testimonials[index].name}
          </p>
          <p className="text-neutral-400 text-xl">Verified User</p>
        </div>

        {/* Right Section: Heading */}
        <div className="w-1/4 pt-20 flex flex-col justify-center text-right">
          <h3 className="text-neutral-400 font-semibold">TESTIMONIALS</h3>
          <h2 className="text-3xl font-bold">
            What our customers think about us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
