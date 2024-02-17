import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const SupportPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div
            className="bg-cover bg-no-repeat md:h-[454px] h-[481px] md:px-5 relative w-full"
            style={{ backgroundImage: "url('images/img_support.png')" }}
          >
            <div className="absolute bg-gradient3  flex flex-col h-max inset-[0] items-center justify-center m-auto p-[133px] md:px-10 sm:px-5 w-full">
              <div className="h-32 md:h-[188px] mb-[83px] relative w-[470px] sm:w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto md:text-5xl text-[70px] text-center text-white-A700 top-[0] w-max"
                  size="txtPoppinsSemiBold70"
                >
                  Contact Us
                </Text>
                <Text
                  className="absolute bottom-[-1%] inset-x-[0] mx-auto text-white-A700 text-xl w-max"
                  size="txtPoppinsSemiBold20"
                >
                  Get in touch with us directly to make enquiries
                </Text>
              </div>
            </div>
            <Header1 className="absolute bg-black-900_33_01 flex gap-2.5 inset-x-[0] items-center justify-center mx-auto md:px-10 px-20 sm:px-5 py-5 top-[0] w-full" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1040px] mt-[83px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
              <Input
                name="input"
                placeholder="Email Address"
                className="font-semibold leading-[normal] md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-base text-left w-full"
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
                color="blue_gray_100_01"
                size="2xl"
                variant="fill"
              ></Input>
              <div className="bg-blue_gray-100_01 flex flex-col md:gap-10 gap-[172px] justify-start pl-4 pt-4 rounded-lg w-full">
                <Text
                  className="mr-[323px] text-base text-gray-700"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  Type your messagee here
                </Text>
                <Img
                  className="h-[29px] md:h-auto md:ml-[0] ml-[505px] object-cover w-[29px]"
                  src="images/img_image95.png"
                  alt="imageNinetyFive"
                />
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
                color="light_blue_900"
                size="md"
                variant="fill"
              >
                Send Message
              </Button>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900_01 text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Email
                </Text>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  +44 123 456 7890
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900_01 text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Phone
                </Text>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  example@email.com
                </Text>
              </div>
              <div className="flex flex-row font-jost gap-6 items-start justify-start w-auto">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[32%]">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_facebook_black_900_01.svg"
                    alt="facebook"
                  />
                  <Text
                    className="text-base text-black-900_01"
                    size="txtJostRomanMedium16"
                  >
                    Facebook
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-center w-[26%]">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_trash_black_900_01.svg"
                    alt="trash"
                  />
                  <Text
                    className="text-base text-black-900_01"
                    size="txtJostRomanMedium16"
                  >
                    Twitter
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start w-[30%]">
                  <Img
                    className="h-[22px] mt-0.5 w-[22px]"
                    src="images/img_link_black_900_01.svg"
                    alt="link"
                  />
                  <Text
                    className="text-base text-black-900_01"
                    size="txtJostRomanMedium16"
                  >
                    LinkedIn
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gradient  flex items-center justify-center mt-[156px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SupportPage;
