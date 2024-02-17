import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const AdvertisementOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[188px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <Text
          className="mt-[528px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-900 text-center"
          size="txtPoppinsRegular23"
        >
          <>
            Amplify your business success with our tailored solutions – from
            <br />
            strategic marketing to digital dominance, we&#39;re your partner in
            <br />
            achieving unparalleled growth and impact in the market
          </>
        </Text>
        <Button
          className="cursor-pointer font-medium h-12 leading-[normal] mt-[57px] rounded-[12px] sm:text-[16.61px] md:text-[18.61px] text-[20.61px] text-center w-[433px]"
          color="green_700"
          size="md"
          variant="fill"
        >
          Get Started
        </Button>
      </div>
    </>
  );
};

export default AdvertisementOnePage;
