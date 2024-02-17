import React from "react";

import { Button, Img, Text } from "components";
import Header3 from "components/Header3";

const LoadingThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[262px] items-center justify-start mx-auto pb-[345px] w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
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

export default LoadingThreePage;
