import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, SelectBox, Text } from "components";
import Header2 from "components/Header2";
import TribeEntryLevelsSignUpStackprogressline from "components/TribeEntryLevelsSignUpStackprogressline";

const choosepackageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TribeentrylevelsSignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[78px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-green-700 flex flex-col items-start justify-start max-w-[1412px] mt-[9px] mx-auto md:px-5 px-[500px] py-2.5 rounded-[20px] w-full">
          <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                size="txtPoppinsSemiBold32"
              >
                Sign Up
              </Text>
              <TribeEntryLevelsSignUpStackprogressline className="bg-white-A700 md:h-11 h-12 pt-1 px-1 relative rounded-lg w-[67%] sm:w-full" />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start mt-[53px] md:px-5 px-[30px] py-5 w-auto md:w-full">
          <Img
            className="h-[66px] md:h-auto object-cover w-[70px] sm:w-full"
            src="images/img_malipoma.png"
            alt="malipomaOne"
          />
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  Sponsor ID*
                </Text>
                <Input
                  name="frame8754"
                  placeholder="Enter Sponsor ID"
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="indigo_50"
                  size="xl"
                  variant="fill"
                ></Input>
                <CheckBox
                  className="font-medium leading-[normal] text-[13px] text-left"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="checkifyoudo"
                  id="checkifyoudo"
                  label="Check if you do not have a refferer"
                ></CheckBox>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  e-pin Code*
                </Text>
                <Input
                  name="frame8754_One"
                  placeholder="Enter e-pin code"
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                  wrapClassName="w-full"
                  type="number"
                  shape="round"
                  color="indigo_50"
                  size="xl"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <SelectBox
              className="font-semibold leading-[normal] text-base text-left w-full"
              placeholderClassName="text-gray-500_01"
              indicator={
                <Img
                  className="h-2 w-3.5"
                  src="images/img_arrowdown_gray_700.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="choosepackage"
              options={choosepackageOptionsList}
              isSearchable={false}
              placeholder="Starter Membership DignityPoint Account (N6,000)"
              shape="round"
              color="indigo_50"
              size="md"
              variant="fill"
            />
            <div className="flex flex-col gap-[5px] items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-gray-700 w-auto"
                size="txtPoppinsSemiBold16Gray700"
              >
                Bank Name*
              </Text>
              <Input
                name="frame8762"
                placeholder="Select Bank"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                wrapClassName="flex w-[550px] sm:w-full"
                suffix={
                  <div className="mt-[7px] mb-2 ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-gray-700">
                    <Img
                      className="my-auto"
                      src="images/img_arrowdown_gray_700.svg"
                      alt="arrow_down"
                    />
                  </div>
                }
                shape="round"
                color="indigo_50"
                size="xl"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  Account Name*
                </Text>
                <Input
                  name="frame8754_Two"
                  placeholder="Enter Sponsor ID"
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="indigo_50"
                  size="xl"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  Account Number*
                </Text>
                <Input
                  name="frame8754_Three"
                  placeholder="Enter e-pin code"
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                  wrapClassName="w-full"
                  type="number"
                  shape="round"
                  color="indigo_50"
                  size="xl"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              onClick={() => navigate("/payments")}
              color="light_blue_900"
              size="md"
              variant="fill"
            >
              Sign up to package
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TribeentrylevelsSignupPage;
