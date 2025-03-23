import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses =
    "focus:outline-none cursor-pointer font-medium rounded-full transition text-center";

  const variantClasses = {
    primary:
      "text-white bg-green-700 hover:bg-green-800 shadow-lg shadow-green-100",
    secondary: "text-gray-800 bg-gray-200 hover:bg-gray-300",
  };

  const sizeClasses = {
    small: "text-sm px-4 py-2",
    medium: "text-lg px-8 py-2",
    large: "text-lg px-12 py-2",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
