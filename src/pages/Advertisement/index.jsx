import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const AdvertisementPage = () => {
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
              Step1
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
            src="images/img_frame9232.svg"
            alt="frame9232"
          />
          <Text
            className="mt-[41px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtPoppinsMedium30"
          >
            Create Advertisement Campaign
          </Text>
          <div className="flex flex-col gap-[13px] items-start justify-start mt-[31px] w-[96%] md:w-full">
            <Text
              className="ml-0.5 md:ml-[0] text-blue_gray-900 text-center text-lg"
              size="txtPoppinsRegular18Bluegray900"
            >
              Campaign Description
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
          <div className="flex flex-col gap-[15px] items-start justify-start mt-8 w-[96%] md:w-full">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtPoppinsRegular18Bluegray900"
            >
              Campaign Cover/ Image
            </Text>
            <div className="bg-indigo-50_02 flex flex-col gap-6 items-center justify-end p-[25px] sm:px-5 rounded-[9px] w-full">
              <Img
                className="h-11 mt-[25px]"
                src="images/img_user_blue_gray_900_44x53.svg"
                alt="user"
              />
              <Text
                className="text-center text-gray-500 text-sm"
                size="txtPoppinsRegular14Gray500"
              >
                Add Image
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium h-12 leading-[normal] mb-[30px] md:ml-[0] ml-[253px] mt-10 rounded-[12px] sm:text-[16.61px] md:text-[18.61px] text-[20.61px] text-center w-[335px]"
            color="green_700"
            size="md"
            variant="fill"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdvertisementPage;
