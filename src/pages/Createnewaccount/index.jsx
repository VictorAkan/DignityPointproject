import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header3 from "components/Header3";

const CreatenewaccountPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-[53px] items-center justify-start mx-auto pb-[78px] w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 shadow-bs5 w-[610px] md:w-full">
          <Img
            className="h-[66px] md:h-auto object-cover w-[70px] sm:w-full"
            src="images/img_malipoma.png"
            alt="malipomaOne"
          />
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
                size="txtPoppinsSemiBold32Black90001"
              >
                Create a new account
              </Text>
              <Text
                className="max-w-[550px] md:max-w-full text-base text-center text-gray-700"
                size="txtPoppinsSemiBold16Gray700"
              >
                Networking people, places and things towards delivering a
                sustainable and dignified future for all
              </Text>
            </div>
            <Input
              name="input"
              placeholder="Email Address"
              className="font-semibold leading-[normal] md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-base text-left w-full"
              wrapClassName="flex w-full"
              type="email"
              prefix={
                <Img
                  className="mt-px mb-auto h-6 mr-2.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              }
              shape="round"
              color="blue_gray_50"
              size="2xl"
              variant="fill"
            ></Input>
            <Input
              name="input_One"
              placeholder="Create a Password"
              className="font-semibold leading-[normal] md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-base text-left w-full"
              wrapClassName="flex w-full"
              type="password"
              prefix={
                <Img
                  className="mt-auto mb-px h-6 mr-2.5"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
              suffix={
                <Img
                  className="h-4 ml-[35px] my-1"
                  src="images/img_eye.svg"
                  alt="eye"
                />
              }
              shape="round"
              color="blue_gray_50"
              size="2xl"
              variant="fill"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              onClick={() => navigate("/entercodeone")}
              color="light_blue_900"
              size="md"
              variant="fill"
            >
              Create Account
            </Button>
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[550px] sm:w-full">
              <Text
                className="common-pointer text-base text-center text-indigo-A200 w-auto"
                size="txtPoppinsSemiBold16IndigoA200"
                onClick={() => navigate("/login")}
              >
                Login instead
              </Text>
              <Text
                className="text-base text-center text-indigo-A200 w-auto"
                size="txtPoppinsSemiBold16IndigoA200"
              >
                Problems signing in?
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-between w-[550px] sm:w-full">
              <Input
                name="signinoption"
                placeholder="Continue with Google"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                wrapClassName="border border-gray-500_01 border-solid flex sm:w-full"
                prefix={
                  <Img
                    className="h-[30px] mr-2.5 my-auto"
                    src="images/img_google.svg"
                    alt="google"
                  />
                }
                shape="round"
                color="blue_gray_50"
                size="md"
                variant="fill"
              ></Input>
              <Button
                className="border border-gray-500_01 border-solid cursor-pointer flex items-center justify-center min-w-[272px]"
                leftIcon={
                  <Img
                    className="h-[30px] mr-2.5"
                    src="images/img_facebook_white_a700.png"
                    alt="Facebook"
                  />
                }
                shape="round"
                color="blue_gray_50"
                size="md"
                variant="fill"
              >
                <div className="font-semibold leading-[normal] text-base text-left">
                  Continue with Facebook
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatenewaccountPage;
