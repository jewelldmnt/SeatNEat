import React, { useState, useEffect, useRef } from "react";
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
  const maxHeightRef = useRef(0);
  const textRefs = useRef([]);

  useEffect(() => {
    const heights = textRefs.current.map((ref) => ref?.offsetHeight || 0);
    maxHeightRef.current = Math.max(...heights);
  }, []);

  const maxAvatars = 4;
  const remaining = testimonials.length - maxAvatars;

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container py-20 px-12 flex flex-col relative">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div
          className="w-[53rem] flex flex-col"
          style={{ minHeight: maxHeightRef.current }}
        >
          <div className="flex flex-row justify-between items-center h-12">
            <div className="flex -space-x-6">
              <div
                className="w-18.5 h-18.5 bg-blue-500 flex items-center justify-center rounded-full text-sm font-bold text-white border-2 border-white"
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
                  className="w-18.5 h-18.5 bg-gray-300 flex items-center justify-center rounded-full text-sm font-bold text-gray-700 border-2 border-white"
                  style={{ zIndex: maxAvatars - (i + 1) }}
                >
                  {getInitials(testimonial.name)}
                </div>
              ))}
              {(remaining > 0 || testimonials.length > maxAvatars) && (
                <div className="w-18.5 h-18.5 bg-gray-400 flex items-center justify-center rounded-full text-sm font-bold text-white border-2 border-white">
                  +{Math.min(remaining, testimonials.length - maxAvatars + 1)}
                </div>
              )}
            </div>

            <div className="flex">
              <button
                className="w-18.5 h-18.5 flex items-center justify-center text-[32px] text-neutral-500 font-bold"
                onClick={prevTestimonial}
              >
                ←
              </button>
              <button
                className="w-18.5 h-18.5 flex items-center justify-center text-[32px] text-neutral-500 font-bold"
                onClick={nextTestimonial}
              >
                →
              </button>
            </div>
          </div>

          <p
            ref={(el) => (textRefs.current[index] = el)}
            className="mt-10 mb-5 text-neutral-500 text-justify text-xl italic font-semibold"
            style={{ minHeight: maxHeightRef.current }}
          >
            "{testimonials[index].text}"
          </p>
          <p className="text-2xl text-neutral-500 font-semibold">
            {testimonials[index].name}
          </p>
          <p className="text-neutral-400 text-xl">Verified User</p>
        </div>

        <div className="w-[28rem] h-full flex flex-col self-center text-right">
          <h3 className="mb-2 text-xl text-neutral-400 font-semibold">TESTIMONIALS</h3>
          <h2 className="text-[2.75rem] font-bold">
            What our customers think about us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
