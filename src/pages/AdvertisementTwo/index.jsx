import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const AdvertisementTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-12 items-center justify-start mx-auto pb-[62px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[30px] md:px-5 rounded-[20px] shadow-bs4 w-3/5 md:w-full">
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
              size="txtPoppinsMedium30"
            >
              Step2
            </Text>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-100 w-auto"
              size="txtPoppinsMedium30Bluegray100"
            >
              /2
            </Text>
          </div>
          <Img
            className="h-[9px] mt-3 w-[805px]"
            src="images/img_frame9231.svg"
            alt="frame9231"
          />
          <Text
            className="mt-9 text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtPoppinsMedium30"
          >
            Aim
          </Text>
          <div className="flex flex-col gap-4 items-start justify-start mt-8 w-[96%] md:w-full">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtPoppinsRegular18Bluegray900"
            >
              Aim of Advertisement
            </Text>
            <div className="bg-indigo-50_02 flex flex-col items-start justify-start p-2.5 rounded-[9px] w-full">
              <Text
                className="mb-[123px] md:ml-[0] ml-[3px] text-center text-gray-500 text-sm"
                size="txtPoppinsRegular14Gray500"
              >
                Enter Description
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium h-12 leading-[normal] mb-[216px] md:ml-[0] ml-[253px] mt-[95px] rounded-[12px] sm:text-[16.61px] md:text-[18.61px] text-[20.61px] text-center w-[335px]"
            color="green_700"
            size="md"
            variant="fill"
          >
            Done
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdvertisementTwoPage;
