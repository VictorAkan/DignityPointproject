import React from "react";

import { Button, Img, SelectBox, Input, Text } from "components";
import Header3b from "components/Header3b";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputcontentOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const inputcontentOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AgeGenderPage = () => {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date")
  }

  const handleBlur = () => {
    if (!e.target.value.trim()) {
      setInputType("text")
    }
  }

  return (
    <>
      <div className="bg-white-A700_01 sm:px-2 flex flex-col font-poppins gap-[43px] items-center justify-start mx-auto pb-[125px] w-full">
        <Header3b className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 shadow-bs5 w-auto md:w-full">
          <Img
            className="h-[66px] md:h-auto object-cover w-[70px]"
            src="images/img_malipoma.png"
            alt="malipomaOne"
          />
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="h-[5px] overflow-hidden relative w-full">
              <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
              <div
                className="h-full absolute bg-gradient-to-r from-[#4dbd6d] to-[#279b48]  rounded-[2px]"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="flex flex-col gap-[5px] items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
                size="txtPoppinsSemiBold32Black90001"
              >
                Age, Gender, Country
              </Text>
              <Text
                className="text-base text-center text-gray-700 w-auto"
                size="txtPoppinsSemiBold16Gray700"
              >
                Enter your personal info and choose an account privacy setting
              </Text>
            </div>
            <input
              className="!text-gray-700 font-semibold p-4 bg-indigo-50 border-0 rounded-md leading-[normal] text-base text-left w-full"
              type={inputType}
              name="input"
              placeholder="Date of birth"
              onFocus={handleFocus}
              onBlur={handleBlur}
            // Other attributes such as placeholderClassName, indicator, isMulti, options, isSearchable, shape, color, size, and variant are not applicable to input[type=date].
            />

            {/* <SelectBox
              className="!text-gray-700 font-semibold leading-[normal] text-base text-left w-full"
              placeholderClassName="!text-gray-700"
              indicator={
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_700_16x16.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="input"
              options={inputOptionsList}
              isSearchable={false}
              placeholder="Date of birth"
              shape="round"
              color="indigo_50"
              size="xl"
              variant="fill"
            /> */}
            <div className="flex sm:flex-col flex-row gap-[30px] h-[52px] md:h-auto items-center justify-start w-[550px] sm:w-full">
              <SelectBox
                className="!text-gray-700 font-semibold h-[52px] leading-[normal] text-base text-left w-[48%] sm:w-full"
                placeholderClassName="!text-gray-700"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_700_16x16.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="inputcontent"
                options={inputcontentOptionsList}
                isSearchable={false}
                placeholder="Country"
                shape="round"
                color="indigo_50"
                size="xl"
                variant="fill"
              />
              <SelectBox
                className="!text-gray-700 font-semibold h-[52px] leading-[normal] text-base text-left w-[48%] sm:w-full"
                placeholderClassName="!text-gray-700"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_700_16x16.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="inputcontent_One"
                options={inputcontentOneOptionsList}
                isSearchable={false}
                placeholder="State/City"
                shape="round"
                color="indigo_50"
                size="xl"
                variant="fill"
              />
            </div>
            {/* <div className="flex sm:flex-col flex-row gap-[30px] h-[52px] md:h-auto items-center justify-start w-[550px] sm:w-full">
              <SelectBox
                className="font-medium h-[52px] leading-[normal] text-base text-left w-[48%] sm:w-full"
                placeholderClassName="text-gray-700"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_700_16x16.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="inputcontent_Two"
                options={inputcontentTwoOptionsList}
                isSearchable={false}
                placeholder="Country"
                shape="square"
                color="blue_gray_50"
                size="xl"
                variant="fill"
              />
              <SelectBox
                className="font-medium h-[52px] leading-[normal] text-base text-left w-[48%] sm:w-full"
                placeholderClassName="text-gray-700"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_700_16x16.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="inputcontent_Three"
                options={inputcontentThreeOptionsList}
                isSearchable={false}
                placeholder="State/City"
                shape="square"
                color="blue_gray_50"
                size="xl"
                variant="fill"
              />
            </div> */}
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              color="light_blue_900"
              size="md"
              variant="fill"
              onClick={() => navigate("/interests")}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeGenderPage;
