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
    sm: "p-[0.62rem] h-[2.375rem] text-base",
    md: "px-[1.75rem] py-[1.12rem] text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Define variant styles
  const variantClasses = {
    default: "bg-accent",
    filled: "bg-neutral-300",
    outlined: "bg-transparent border border-netural-400",
  };

  return (
    <button
      className={clsx(
        "text-black font-semibold text-label-lg transition duration-200 hover:bg-secondary",
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
