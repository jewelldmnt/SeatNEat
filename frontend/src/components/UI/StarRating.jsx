import { Star } from "lucide-react";

const StarRating = ({
  rating,
  size = 20,
  filledColor = "#4b5563",
  emptyColor = "#D1D5DB",
}) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, id) => {
        const fillPercent = Math.min(Math.max(rating - id, 0), 1);
        return (
          <div
            key={id}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Background (Empty Star) */}
            <Star
              size={size}
              fill={emptyColor}
              stroke="none"
              style={{ width: "100%", height: "100%" }}
              className="absolute top-0 left-0"
            />

            {/* Foreground (Partially Filled Star) */}
            <Star
              size={size}
              fill={filledColor}
              stroke="none"
              style={{
                width: "100%",
                height: "100%",
                clipPath: `inset(0 ${100 - fillPercent * 100}% 0 0)`,
              }}
              className="absolute top-0 left-0"
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
