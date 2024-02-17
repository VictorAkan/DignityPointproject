import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header2 from "components/Header2";
import SuccessStackprogressline from "components/SuccessStackprogressline";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[197px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-green-700 flex flex-col items-start justify-start max-w-[1412px] mt-[9px] mx-auto md:px-5 px-[500px] py-2.5 rounded-[20px] w-full">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                size="txtPoppinsSemiBold32"
              >
                Success
              </Text>
              <SuccessStackprogressline className="bg-white-A700 md:h-11 h-12 pt-1 px-1 relative rounded-lg w-[65%] sm:w-full" />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start mt-16 md:px-5 px-[30px] py-5 rounded-[20px] w-auto md:w-full">
          <Img
            className="h-[120px] md:h-auto object-cover w-[115px] sm:w-full"
            src="images/img_partypopperjoypixels.png"
            alt="partypopperjoyp"
          />
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                size="txtPoppinsSemiBold32Black900"
              >
                Your purchase was successful
              </Text>
              <Text
                className="text-base text-center text-gray-700 w-auto"
                size="txtPoppinsSemiBold16Gray700"
              >
                Starter Membership DignityPoint Account gives you access to:
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
              <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                <Text
                  className="text-base text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  Earning Potentials:
                </Text>
                <Input
                  name="frame8737"
                  placeholder="Ad sales bonus"
                  className="font-semibold leading-[normal] p-0 placeholder:text-black-900_01 sm:pr-5 text-base text-black-900_01 text-left w-full"
                  wrapClassName="flex pr-[35px] w-full"
                  prefix={
                    <div className="mt-[5px] mb-1.5 mr-[5px] sm:w-full sm:mx-0 w-[4%] bg-green-700">
                      <Img
                        className="my-auto"
                        src="images/img_overflowmenu_green_700.svg"
                        alt="overflow_menu"
                      />
                    </div>
                  }
                  size="xs"
                ></Input>
                <div className="flex flex-row gap-[5px] items-center justify-start w-[173px]">
                  <Img
                    className="h-3"
                    src="images/img_overflowmenu_green_700.svg"
                    alt="overflowmenu"
                  />
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Matrix Domi Fund
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                <div className="flex flex-row gap-[5px] items-center justify-start w-[173px]">
                  <Img
                    className="h-2.5"
                    src="images/img_vector_yellow_800_01.svg"
                    alt="vector_One"
                  />
                  <Text
                    className="text-[13px] text-black-900_01 w-auto"
                    size="txtPoppinsMedium13Black90001"
                  >
                    Refferal bonus
                  </Text>
                </div>
                <div className="flex flex-row gap-[5px] items-center justify-start w-[173px]">
                  <Img
                    className="h-2.5"
                    src="images/img_vector_yellow_800_01.svg"
                    alt="vector_Two"
                  />
                  <Text
                    className="text-[13px] text-black-900_01 w-auto"
                    size="txtPoppinsMedium13Black90001"
                  >
                    Spill-over bonus
                  </Text>
                </div>
                <div className="flex flex-row gap-[5px] items-center justify-start w-[173px]">
                  <Img
                    className="h-2.5"
                    src="images/img_vector_yellow_800_01.svg"
                    alt="vector_Three"
                  />
                  <Text
                    className="text-[13px] text-black-900_01 w-auto"
                    size="txtPoppinsMedium13Black90001"
                  >
                    Leadership bonus
                  </Text>
                </div>
                <div className="flex flex-row gap-[5px] items-center justify-start w-[173px]">
                  <Img
                    className="h-2.5"
                    src="images/img_vector_yellow_800_01.svg"
                    alt="vector_Four"
                  />
                  <Text
                    className="text-[13px] text-black-900_01 w-auto"
                    size="txtPoppinsMedium13Black90001"
                  >
                    Incentives bonus
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              onClick={() => navigate("/membershiparea")}
              color="light_blue_900"
              size="md"
              variant="fill"
            >
              Proceed to Membership Area
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
