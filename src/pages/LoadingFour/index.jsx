import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const LoadingFourPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[289px] items-center justify-start mx-auto pb-[345px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start p-5 md:px-5 rounded-lg w-auto">
          <Img
            className="h-[60px] md:h-auto object-cover w-[60px]"
            src="images/img_spinner31.png"
            alt="spinnerThirtyOne"
          />
          <Text
            className="text-base text-center text-gray-700 w-auto"
            size="txtPoppinsSemiBold16Gray700"
          >
            Loading...please wait!
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoadingFourPage;
