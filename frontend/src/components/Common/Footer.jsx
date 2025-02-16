import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Company Information",
    links: ["About Us", "Contact Us"],
  },
  {
    title: "Quick Links",
    links: ["How It Works", "FAQs"],
  },
  {
    title: "User Support",
    links: ["Help Center", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Partner with Seat N' Eat",
    links: ["Join Us"],
  },
];

export const Footer = () => {
  return (
    <footer className="min-h-[29.5rem] bg-primary flex flex-col items-center">
      <div className="container flex flex-wrap justify-between gap-12 pt-20 pb-36">
        {/* Left Side: Footer Branding */}
        <div className="w-1/3">
          <h6>Footer</h6>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex-1 flex justify-between text-xl">
          {footerLinks.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col gap-2.5">
              <h6 className="font-semibold text-neutral-600">{title}</h6>
              {links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to="#"
                  className="hover:underline font-semibold text-neutral-400"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container border-t-[0.0625rem] border-neutral-500 py-4 text-center">
        <p className="text-xl font-semibold text-neutral-600">
          &copy; 2025 Diamante & Rico. All rights reserved.
        </p>
      </div>
    </footer>
  );  
};
