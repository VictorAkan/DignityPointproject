import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    green_50_01: "bg-green-50_01 text-blue_gray-900",
    white_A700: "bg-white-A700 text-black-900_01",
    black_900_44: "bg-black-900_44",
    white_A700_4c: "bg-white-A700_4c",
    green_100: "bg-green-100 text-black-900_01",
    black_900_4c: "bg-black-900_4c text-black-900_01",
    blue_gray_50: "bg-blue_gray-50 text-gray-700",
    light_blue_900_01: "bg-light_blue-900_01",
    indigo_50: "bg-indigo-50 text-black-900_01",
    blue_gray_100: "bg-blue_gray-100 text-blue_gray-900",
    blue_gray_100_01: "bg-blue_gray-100_01",
    green_700: "bg-green-700 text-white-A700",
    green_100_02: "bg-green-100_02 text-blue_gray-900",
    light_blue_900: "bg-light_blue-900 text-white-A700",
  },
  outline: {
    red_A700: "border border-red-A700 border-solid text-red-A700",
    white_A700:
      "bg-gradient  border-2 border-solid border-white-A700 shadow-bs1 text-white-A700",
    gray_500_01: "border-b-2 border-gray-500_01 border-solid text-gray-700",
    gray_700: "border border-gray-700 border-solid text-black-900",
    green_700: "border border-green-700 border-solid text-green-700",
  },
  gradient: { black_900_00_black_900_66: "bg-gradient1  text-white-A700" },
};
const sizes = { xs: "p-0.5", sm: "p-[5px]", md: "p-2.5", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "green_50_01",
    "white_A700",
    "black_900_44",
    "white_A700_4c",
    "green_100",
    "black_900_4c",
    "blue_gray_50",
    "light_blue_900_01",
    "indigo_50",
    "blue_gray_100",
    "blue_gray_100_01",
    "green_700",
    "green_100_02",
    "light_blue_900",
    "red_A700",
    "gray_500_01",
    "gray_700",
    "black_900_00_black_900_66",
  ]),
};

export { Button };
