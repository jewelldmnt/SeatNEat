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
    <section className="container min-h-auto">
      <h3 className="font-semibold text-base mb-4">FAQs</h3>
      {/* Accordion */}
      <div className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center ${
                openIndex === index ? "pb-1 pt-4" : "py-4"
              } text-lg font-semibold bg-white`}
            >
              <span className="text-neutral-800 font-semibold text-sm text-left">
                {faq.question}
              </span>
              <span className="w-8 h-8 flex items-center justify-center rounded-full border text-neutral-400 font-semibold border-neutral-400">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="text-neutral-500 text-xs pb-5">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
