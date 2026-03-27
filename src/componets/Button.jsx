import React from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 relative overflow-hidden rounded-full font-medium focus:outline-none focus:visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_18px_35px_rgba(32,178,166,0.25)]";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({ className = "", size = "default", children = "Contact Me", ...props }) => {
  const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.default} ${className}`;

  return (
    <button type="button" className={classes.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
