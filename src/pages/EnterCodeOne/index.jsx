import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header3 from "components/Header3";

const EnterCodeOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-52 items-center justify-start mx-auto pb-[291px] w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 shadow-bs5 w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
            size="txtPoppinsSemiBold32Black90001"
          >
            Enter code sent to your email
          </Text>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Img
              className="h-[50px] w-[550px]"
              src="images/img_frame8389.svg"
              alt="frame8389"
            />
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              onClick={() => navigate("/name")}
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

export default EnterCodeOnePage;
