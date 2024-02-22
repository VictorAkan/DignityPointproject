import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header3b from "components/Header3b";

const NamePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col sm:px-2 font-poppins sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto pb-[179px] w-full">
        <Header3b className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start md:px-5 px-[30px] py-5 shadow-bs5 w-auto md:w-full">
          <Img
            className="h-[66px] md:h-auto object-cover w-[70px]"
            src="images/img_malipoma.png"
            alt="malipomaOne"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[5px] overflow-hidden relative w-full">
              <div className="w-full h-full absolute bg-blue_gray_50 rounded-[2px]"></div>
              <div
                className="h-full absolute bg-gradient-to-r from-[#4dbd6d] to-[#279b48]  rounded-[2px]"
                style={{ width: "25%" }}
              ></div>
            </div>
            <Text
              className="mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
              size="txtPoppinsSemiBold32Black90001"
            >
              What’s your name?
            </Text>
            <Input
              name="input"
              placeholder="First name"
              className="font-medium leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
              wrapClassName="flex mt-[26px] w-full"
              type="text"
              prefix={
                <Img
                  className="mt-px mb-auto h-6 mr-2.5"
                  src="images/img_personfill0wght400grad0opsz24_1.svg"
                  alt="person_FILL0_wght400_GRAD0_opsz24 1"
                />
              }
              shape="round"
              color="blue_gray_50"
              size="2xl"
              variant="fill"
            ></Input>
            <Input
              name="input_One"
              placeholder="Last name"
              className="font-medium leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
              wrapClassName="flex mt-[30px] w-full"
              type="text"
              prefix={
                <Img
                  className="mt-auto mb-px h-6 mr-2.5"
                  src="images/img_personfill0wght400grad0opsz24_1.svg"
                  alt="person_FILL0_wght400_GRAD0_opsz24 1"
                />
              }
              shape="round"
              color="blue_gray_50"
              size="2xl"
              variant="fill"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full mt-[30px] rounded-[12px] text-base text-center"
              onClick={() => navigate("/agegender")}
              color="light_blue_900"
              size="md"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NamePage;
