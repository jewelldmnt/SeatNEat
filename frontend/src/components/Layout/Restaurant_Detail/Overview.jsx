import React, { useState } from "react";

const overview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
`;
const Overview = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const paragraphs = overview.split("\n\n");
  const MAX_LENGTH = 300;
  const displayedParagraphs = expanded
    ? paragraphs
    : [
        paragraphs[0].length > MAX_LENGTH
          ? paragraphs[0].slice(0, MAX_LENGTH) + "..."
          : paragraphs[0],
      ];

  return (
    <section className="container min-h-auto">
      {displayedParagraphs.map((paragraph, index) => (
        <p key={index} className="text-sm text-justify mb-4">
          {paragraph}
        </p>
      ))}
      {(paragraphs.length > 1 || paragraphs[0].length > MAX_LENGTH) && (
        <button
          onClick={toggleExpanded}
          className="text-sm font-medium text-red-800 hover:underline mt-2"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </section>
  );
};

export default Overview;