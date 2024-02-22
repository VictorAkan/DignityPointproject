import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header3 from "components/Header3";

const RecoverAccountPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex px-2 flex-col font-poppins sm:gap-10 md:gap-10 gap-[233px] items-center justify-start mx-auto pb-[317px] w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 rounded-[20px] shadow-bs5 w-auto md:w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start w-auto sm:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
              size="txtPoppinsSemiBold32Black900"
            >
              Account Recovery
            </Text>
            <Text
              className="text-base text-center text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              Lost access to your Malipoma account? Let’s help you get back in.
            </Text>
          </div>
          <Button
            className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
            onClick={() => navigate("/resetpassword")}
            color="light_blue_900"
            size="md"
            variant="fill"
          >
            Recover Account
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecoverAccountPage;
