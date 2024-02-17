import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const MembershipAreaPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-[39px] items-center justify-start mx-auto pb-[680px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
          size="txtPoppinsSemiBold32Black900"
        >
          Membership Area
        </Text>
      </div>
    </>
  );
};

export default MembershipAreaPage;
