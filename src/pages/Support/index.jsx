import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header3 from "components/Header3";
import Header1 from "components/Header1";

const SupportPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div
            className="bg-cover bg-no-repeat sm:h-[300px] md:h-[454px] h-[481px] md:px-5 relative w-full"
            style={{ backgroundImage: "url('images/img_support.png')" }}
          >
            <div className="absolute bg-gradient3  flex flex-col h-max sm:h-[300px] inset-[0] items-center justify-center m-auto p-[133px] md:px-10 sm:px-5 w-full">
              <div className="h-32 md:h-[188px] mb-[83px] relative w-[470px] sm:w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto mt-0 sm:mt-[50px] md:text-5xl sm:text-[40px] text-[70px] xs:text-[30px] text-center text-white-A700 top-[0] w-max"
                  size="txtPoppinsSemiBold70"
                >
                  Contact Us
                </Text>
                <Text
                  className="absolute bottom-[-1%] sm:bottom-[-160px] sm:w-[275px] inset-x-[0] mt-0 sm:mt-[173px] mx-auto text-white-A700 sm:text-[16px] text-xl sm:text-center sm:w-full w-max"
                  size="txtPoppinsSemiBold20"
                >
                  Get in touch with us directly to make enquiries
                </Text>
              </div>
            </div>
            <Header1 className="absolute sm:hidden bg-black-900_33_01 flex gap-2.5 inset-x-[0] items-center justify-center mx-auto md:px-10 px-20 sm:px-5 py-5 top-[0] w-full" />
            <Header3 className="absolute bg-white-A700 hidden md:flex gap-2.5 inset-x-[0] items-center justify-center px-20 md:px-5 top-[0] py-3.5 w-full" />
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
              <textarea 
                className="bg-blue_gray-100_01 flex text-base text-gray-700 flex-col md:gap-10 
                gap-[172px] justify-start pl-4 pt-4 rounded-lg w-full h-[213px]"
                placeholder="Type your message here"
              >
                {/* <Text
                  className="mr-[323px] text-base text-gray-700"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  Type your messagee here
                </Text> */}
                {/* <Img
                  className="h-[29px] md:h-auto md:ml-[0] ml-[505px] object-cover w-[29px]"
                  src="images/img_image95.png"
                  alt="imageNinetyFive"
                /> */}
              </textarea>
              <Button
                className="cursor-pointer font-semibold sm:bg-green-700 leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
                color="light_blue_900"
                size="md"
                variant="fill"
              >
                Send Message
              </Button>
            </div>
            <div className="flex flex-col mt-0 sm:mt-[100px] gap-[30px] items-start sm:items-center justify-start w-auto">
              <div className="flex flex-col gap-2.5 items-start sm:items-center justify-start w-auto">
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
              <div className="flex flex-col gap-2.5 items-start sm:items-center justify-start w-auto">
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
              <div className="flex xs:flex-col flex-row font-jost gap-6 items-start sm:items-center sm:justify-center justify-start w-auto">
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
                <div className="flex flex-row gap-[15px] items-start sm:justify-start justify-center w-[26%]">
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
          <Footer className="bg-gradient md:hidden flex items-center justify-center mt-[156px] md:px-5 w-full" />
          <footer className="bg-gradient hidden md:block pb-7 h-[529px] mm:h-[1300] md:h-[678px] sm:h-[1200px] mt-[203px] p-3.5 md:px-5 relative w-full">
          <Img
            className="absolute bottom-[3%] h-[475px] md:w-[350.48px] md:h-[333px] inset-x-[0] mx-auto object-cover w-[34%]"
            src="images/img_malipomawhite2.png"
            alt="malipomawhiteTwo"
          />
          <div className="absolute flex mm:block md:block sm:space-y-10 md:space-y-2 md:p-6 inset-x-[0] mx-auto top-[3%] w-[1352px] md:w-full">
            <div className="flex flex-col md:block md:p-3 gap-5 items-start justify-start my-auto w-auto">
              <div className="flex flex-row gap-[9.04px] items-center justify-center md:justify-start w-auto">
                <Img
                  className="h-[52px] md:h-auto object-cover w-[55px]"
                  src="images/img_malipoma.png"
                  alt="malipoma_One"
                />
                <Text
                  className="sm:text-[32.16px] xs:text-[20px] md:text-[34.16px] text-[36.16px] text-center md:text-left text-white-A700 w-auto"
                  size="txtPoppinsBold3616"
                >
                  DignityPoint
                </Text>
              </div>
              <Text
                className="max-w-[1158px] md:mt-5 md:max-w-full sm:text-[36px] xs:text-[30px] md:text-[46px] text-[50px] text-white-A700"
                size="txtPoppinsSemiBold50WhiteA700"
              >
                The world is waiting for the sustainable solutions you can
                create and connect globally.
              </Text>
              <div className="flex flex-col items-center sm:items-start justify-start w-auto">
                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_claritytalkbubblesline.svg"
                    alt="claritytalkbubb"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16WhiteA700"
                    >
                      +234 8123017178
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16WhiteA700"
                    >
                      example@email.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[200px] ml-[-6px] my-auto rounded-[12px] text-center text-xl z-[1]"
              color="green_100"
              size="md"
              variant="fill"
              onClick={() => navigate("/createnewaccount")}
            >
              Get Started
            </Button>
            <div className="hidden space-x-5 mb-10 sm:flex flex-row">
              <div className="items-start">
              <Text className="text-left text-white-A700 text-[20px] font-opensans" size="txtPoppinsSemiBold16WhiteA700">
                Follow us on
              </Text>
              </div>
              <div className="space-y-3">
                <Button className="items-center flex">
                  <Img src="images/img_facebook.svg" />
                  <Text className="text-[16px] text-white-A700 pl-4">Facebook</Text>
                </Button>
                <Button className="items-center flex">
                  <Img src="images/twitter.png" />
                  <Text className="text-[16px] text-white-A700 pl-4">Twitter</Text>
                </Button>
                <Button className="items-center flex">
                  <Img src="images/linkedin.png" />
                  <Text className="text-[16px] text-white-A700 pl-4">LinkedIn</Text>
                </Button>
                <Button className="items-center flex">
                  <Img src="images/insta.png" />
                  <Text className="text-[16px] text-white-A700 pl-4">Instagram</Text>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[13%] mm:bottom-[2%] md:bottom-[2%] mt-[100px] flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-auto w-auto">
            <Line className="bg-white-A700 h-0.5 rounded-[1px] w-full xs:w-[250px] mm:w-[313px] sm:w-[313px]" />
            <div className="flex md:flex-col sm:p-5 md:mt-2 mm:mt-10 flex-row md:gap-10 items-start justify-between max-w-[1352px] w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPoppinsSemiBold20"
              >
                © 2024 DignityPoint
              </Text>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[30px] md:gap-[10px] items-start justify-start w-auto sm:w-full">
                <a
                  href="javascript:"
                  className="text-white-A700 text-xl w-auto"
                >
                  <Text size="txtPoppinsSemiBold20">Terms and Conditions</Text>
                </a>
                <a
                  href="javascript:"
                  className="text-white-A700 text-xl w-auto"
                >
                  <Text size="txtPoppinsSemiBold20">Privacy Policy</Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
