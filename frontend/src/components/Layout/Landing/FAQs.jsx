import React, { useState } from "react";

const faqs = [
  {
    question: "How do I make a reservation?",
    answer:
      "You can make a reservation through our website or mobile app by selecting your preferred restaurant, date, and time.",
  },
  {
    question: "Can I modify my booking?",
    answer:
      "Yes, you can modify your booking by going to your profile and selecting the reservation you want to change.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards, debit cards, and digital payment options like PayPal and Apple Pay.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container py-20 pl-12 min-h-auto flex flex-row justify-between relative">
      {/* FAQs Heading */}
      <div className="w-[32rem]">
        <h2 className="text-[3.25rem] font-bold mb-5">Frequently Asked Questions</h2>
        <p className="text-neutral-500 text-xl max-w-full">
          Find answers to booking, reservations, and dining with SeatN’Eat for a
          seamless experience.
        </p>
      </div>

      {/* Accordion */}
      <div className="w-[57rem]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`overflow-hidden ${
              index === 0 ? "border-t border-b" : "border-b"
            } border-gray-300`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-lg font-medium bg-white hover:bg-gray-100"
            >
              <span className="text-neutral-800 font-semibold text-[1.75rem] text-left">{faq.question}</span>
              <span className="w-8 h-8 flex items-center justify-center rounded-full border text-neutral-400 font-semibold border-neutral-400">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="py-4 pl-4 pr-12 bg-gray-50 text-neutral-500 font-semibold text-2xl">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
