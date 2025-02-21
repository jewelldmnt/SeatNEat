import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const locations = [
  {
    name: "Downtown",
    landmarks: [
      "Central Park",
      "City Mall",
      "Town Square",
      "Art Museum",
      "Food Street",
    ],
  },
  {
    name: "Uptown",
    landmarks: [
      "Luxury Plaza",
      "Greenway Park",
      "Skyline Tower",
      "Grand Theater",
      "Boutique Avenue",
    ],
  },
  {
    name: "Midtown",
    landmarks: [
      "Tech Hub",
      "Metro Station",
      "Library Central",
      "City Zoo",
      "Historical Museum",
    ],
  },
  {
    name: "Suburbs",
    landmarks: [
      "Sunset Park",
      "Lakeside Mall",
      "Community Center",
      "Fitness Hub",
      "Organic Market",
    ],
  },
  {
    name: "Waterfront",
    landmarks: [
      "Pier 21",
      "Beachside Cafe",
      "Harbor Walk",
      "Maritime Museum",
      "Lighthouse Point",
    ],
  },
  {
    name: "Eastside",
    landmarks: [
      "Botanic Garden",
      "Aquatic Center",
      "Fashion District",
      "Arena Stadium",
      "Cultural Hall",
    ],
  },
  {
    name: "Westside",
    landmarks: [
      "Adventure Park",
      "Tech Valley",
      "Film Studio",
      "Flea Market",
      "Sunset Boulevard",
    ],
  },
  {
    name: "Northside",
    landmarks: [
      "Ice Rink",
      "Outdoor Mall",
      "Music Hall",
      "Farmers Market",
      "Observatory",
    ],
  },
  {
    name: "Southside",
    landmarks: [
      "Petting Zoo",
      "Cinema Square",
      "Bowling Alley",
      "Gaming Cafe",
      "Jazz Club",
    ],
  },
  {
    name: "Old Town",
    landmarks: [
      "Historic Church",
      "Antique Market",
      "Old Pier",
      "Monument Plaza",
      "Clock Tower",
    ],
  },
  {
    name: "New City",
    landmarks: [
      "Corporate Tower",
      "High-End Mall",
      "Luxury Street",
      "Elite Gym",
      "Fine Dining Plaza",
    ],
  },
  {
    name: "Hillside",
    landmarks: [
      "Mountain Trail",
      "Resort Spa",
      "Vineyard Estate",
      "Nature Reserve",
      "Scenic Overlook",
    ],
  },
  {
    name: "Riverside",
    landmarks: [
      "Fishing Dock",
      "Kayak Station",
      "River Cafe",
      "Nature Walk",
      "Picnic Spot",
    ],
  },
  {
    name: "Lakeshore",
    landmarks: [
      "Lakeview Park",
      "Boating Dock",
      "Resort Hotel",
      "Camping Ground",
      "Bird Sanctuary",
    ],
  },
  {
    name: "Countryside",
    landmarks: [
      "Dairy Farm",
      "Horse Ranch",
      "Barnyard Market",
      "Windmill Valley",
      "Sunflower Field",
    ],
  },
];

const splitIntoColumns = (arr, numCols) => {
  const columns = Array.from({ length: numCols }, () => []);
  arr.forEach((item, index) => {
    columns[index % numCols].push(item);
  });
  return columns;
};

const Location = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const columns = splitIntoColumns(locations, 3);

  return (
    <section className="container py-10 min-h-auto">
      <h2 variant="h4" gutterBottom className="text-xl font-bold">
        Explore Seat N' Eat
      </h2>
      <span variant="subtitle1" className="text-gray-500">
        Find the Best Dining Spots in Your City
      </span>

      <Box className="grid grid-cols-3 gap-24 mt-4">
        {columns.map((column, colIndex) => (
          <Box key={colIndex} className="space-y-2">
            {column.map((loc, index) => (
              <Accordion
                key={index}
                expanded={openIndex === `${colIndex}-${index}`}
                onChange={() =>
                  setOpenIndex(
                    openIndex === `${colIndex}-${index}`
                      ? null
                      : `${colIndex}-${index}`
                  )
                }
                disableGutters
                square
                className="shadow-none border-none"
                sx={{
                  boxShadow: "none",
                  border: "none",
                  "&::before": { display: "none" }, // Removes default MUI border
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className="m-0" // Removed margin
                  sx={{
                    minHeight: "28px", // Reduced height
                    padding: "0px", // Removed padding
                    "& .MuiAccordionSummary-content": {
                      margin: "0px", // Remove inner spacing
                    },
                  }}
                >
                  <h3 className="text-neutral-900 font-semibold">{loc.name}</h3>
                </AccordionSummary>
                <AccordionDetails className="px-4 py-2 text-gray-600">
                  <ul className="list-none text-sm text-neutral-600">
                    <li className="pb-5 text-neutral-900">LANDMARKS</li>
                    {loc.landmarks.map((landmark, idx) => (
                      <li key={idx}>{landmark}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Location;
