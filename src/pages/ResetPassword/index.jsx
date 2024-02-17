import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header3 from "components/Header3";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[207px] items-center justify-start mx-auto pb-[290px] w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 rounded-[20px] shadow-bs5 w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
            size="txtPoppinsSemiBold32Black90001"
          >
            Reset your password
          </Text>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Input
              name="input"
              placeholder="Email Address"
              className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-base text-left w-full"
              wrapClassName="flex w-full"
              type="email"
              prefix={
                <Img
                  className="mt-px mb-auto h-6 mr-2.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              }
              shape="round"
              color="blue_gray_50"
              size="2xl"
              variant="fill"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
              onClick={() => navigate("/entercode")}
              color="light_blue_900"
              size="md"
              variant="fill"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
