import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header3 from "components/Header3";

const SetNewPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex px-2 flex-col font-poppins sm:gap-10 md:gap-10 gap-32 items-center justify-start mx-auto pb-[212px] w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col font-outfit gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 shadow-bs5 w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
            size="txtOutfitSemiBold32"
          >
            Set a new password
          </Text>
          <div className="flex flex-col font-poppins gap-[30px] items-center justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Input
                name="input"
                placeholder="Create a strong password"
                className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-left text-sm w-full"
                wrapClassName="flex w-full"
                type="password"
                prefix={
                  <Img
                    className="h-6 mr-2.5 my-auto"
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
              <Text
                className="max-w-[550px] md:max-w-full text-gray-700 text-sm"
                size="txtPoppinsMedium14"
              >
                <span className="text-gray-700 font-poppins text-left font-medium">
                  Password must be at least{" "}
                </span>
                <span className="text-black-900_01 font-poppins text-left font-medium">
                  8 Characters
                </span>
                <span className="text-gray-700 font-poppins text-left font-medium">
                  {" "}
                  and must contain at least a{" "}
                </span>
                <span className="text-black-900_01 font-poppins text-left font-medium">
                  Capital Letter
                </span>
                <span className="text-gray-700 font-poppins text-left font-medium">
                  , a{" "}
                </span>
                <span className="text-black-900_01 font-poppins text-left font-medium">
                  Number
                </span>
                <span className="text-gray-700 font-poppins text-left font-medium">
                  {" "}
                  and a{" "}
                </span>
                <span className="text-black-900_01 font-poppins text-left font-medium">
                  Special Character
                </span>
                <span className="text-gray-700 font-poppins text-left font-medium">
                  .
                </span>
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Input
                name="input_One"
                placeholder="Confirm password"
                className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-left text-sm w-full"
                wrapClassName="flex w-full"
                type="password"
                prefix={
                  <Img
                    className="h-6 mr-2.5 my-auto"
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
              <Text
                className="text-center text-red-400 text-sm w-auto"
                size="txtPoppinsMedium14Red400"
              >
                Password doesn’t match
              </Text>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              onClick={() => navigate("/loadingthree")}
              color="light_blue_900"
              size="md"
              variant="fill"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPasswordPage;
