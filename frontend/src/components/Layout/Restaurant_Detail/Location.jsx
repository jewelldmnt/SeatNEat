import React from "react";

const Location = () => {
  const location = "228 Dr. Pilapil St. San Miguel, Pasig City"
  const latitude = 14.5522;
  const longitude = 121.0747;
  const bboxSize = 0.001; // Adjust for zoom level
  const bbox = `${longitude - bboxSize},${latitude - bboxSize},${
    longitude + bboxSize
  },${latitude + bboxSize}`;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <section className="container min-h-auto">
      <h3 className="font-semibold text-base mb-4">Location</h3>
      <span className="text-sm">
        {location}
      </span>
      <iframe
        className="w-235 h-110 rounded-lg mt-5"
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </section>
  );
};
export default Location;
