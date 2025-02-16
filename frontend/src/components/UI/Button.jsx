import React from "react";
import clsx from "clsx"; // Helps with conditional class merging

const Button = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  // Define size styles
  const sizeClasses = {
    sm: "p-[0.62rem] h-[2.375rem] text-label-lg font-semibold",
    md: "px-[1.75rem] py-[1.25rem] text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Define variant styles
  const variantClasses = {
    default: "bg-accent text-black",
    filled: "bg-neutral-300 text-black",
    outlined: "bg-transparent text-primary border border-accent",
  };

  return (
    <button
      className={clsx(
        "transition duration-200 hover:bg-secondary",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
