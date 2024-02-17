import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_gray_100_01: "bg-blue_gray-100_01 text-gray-700",
    white_A700: "bg-white-A700 shadow-bs text-gray-700",
    indigo_50: "bg-indigo-50 text-gray-500_01",
    blue_gray_50: "bg-blue_gray-50 text-gray-700",
    indigo_50_02: "bg-indigo-50_02 text-gray-500",
    green_700: "bg-green-700 text-white-A700",
  },
  outline: {
    blue_gray_100_01:
      "border-b border-blue_gray-100_01 border-solid text-gray-700",
  },
};
const shapes = { round: "rounded-lg" };
const sizes = {
  xs: "pt-px",
  sm: "p-[5px]",
  md: "p-2",
  lg: "pb-[35px] pl-2.5 pr-[11px] pt-[11px]",
  xl: "pb-2.5 pt-[13px] px-2.5",
  "2xl": "pb-3.5 pt-[15px] px-3.5",
  "3xl": "pb-5 pt-[21px] px-5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_100_01",
    "white_A700",
    "indigo_50",
    "blue_gray_50",
    "indigo_50_02",
    "green_700",
    "blue_gray_100_01",
  ]),
};

export { Input };
