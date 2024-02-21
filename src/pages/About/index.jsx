import React from "react";
import Header3 from "components/Header3";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="flex sm:hidden flex-col items-center justify-center px-20 md:px-5 py-3.5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1352px] w-full">
            <div className="header-row mt-3 mb-[11px]">
              <div className="flex flex-row order-2 sm:order-1 gap-[5px] items-center justify-center">
                <Img
                  className="h-[29px] md:h-auto object-cover w-[30px]"
                  src="images/img_malipoma.png"
                  alt="malipoma"
                />
                <Button onClick={() => navigate("/home1")}>
                <Text
                  className="text-center text-green-700 text-xl w-auto"
                  size="txtPoppinsBold20"
                >
                  DignityPoint
                </Text>
                </Button>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[30px] h-[55px] md:h-auto sm:hidden items-center justify-start w-auto">
              <div className="flex flex-row gap-[30px] items-start justify-start w-auto">
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[49px] text-base text-black-900_01 text-center"
                  onClick={() => navigate("/home1")}
                  size="md"
                >
                  Home
                </Button>
                <Button
                  className="bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[50px] text-base text-black-900_01 text-center"
                  size="md"
                >
                  About
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[65px] text-base text-black-900_01 text-center"
                  onClick={() => navigate("/support")}
                  size="md"
                >
                  Support
                </Button>
              </div>
              <div className="bg-black-900_33 flex flex-row gap-[33px] items-center justify-between px-2.5 py-[7px] rounded-[12px] w-auto">
                <Button onClick={() => navigate("/login")}>
                <a
                  href="javascript:"
                  className="text-black-900_01 text-center text-lg w-auto"
                >
                  <Text size="txtPoppinsSemiBold18">LOGIN</Text>
                </a>
                </Button>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[120px] rounded-[12px] text-center text-lg"
                  color="black_900_4c"
                  size="sm"
                  variant="fill"
                  onClick={() => navigate("/createnewaccount")}
                >
                  SIGNUP
                </Button>
              </div>
            </div>
          </div>
        </header>
        <Header3 className="bg-white-A700 hidden sm:flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1352px] mt-[61px] mx-auto md:px-5 w-full">
          <Text
            className="max-w-[491px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01"
            size="txtPoppinsSemiBold50"
          >
            <span className="text-black-900_01 font-poppins text-left font-semibold">
              Explore{" "}
            </span>
            <span className="text-green-700 font-poppins text-left font-semibold">
              Endless
            </span>
            <span className="text-black-900_01 font-poppins text-left font-semibold">
              {" "}
              Possibilities
            </span>
          </Text>
          <Text
            className="max-w-[561px] md:max-w-full sm:text-[16px] text-gray-700 text-xl"
            size="txtPoppinsMedium20"
          >
            DignityPoint is more than just a social networking platform – we are
            a dynamic space designed with features that empower you to connect,
            engage, and thrive in a world of endless possibilities.
          </Text>
        </div>
        <Img
          className="h-[450px] sm:hidden max-w-[1352px] mt-[61px] mx-auto dd:flex w-full"
          src="images/img_frame9093.svg"
          alt="frame9093"
        />
        <div className="holder hidden items-center p-3 space-x-2 mt-24 sm:flex dd:hidden justify-center">
          <div className="">
            <div className="bg-blue_gray-100_01 rounded-[14.08px] h-[316.78px] w-[157.68px]"></div>
          </div>
          <div className="block space-y-2">
            <div className="bg-blue_gray-100_01 rounded-[14.08px] w-[155.57px] h-[154.87px]"></div>
            <div className="bg-blue_gray-100_01 rounded-[14.08px] w-[155.57px] h-[154.87px]"></div>
          </div>
        </div>
        <Footer className="bg-gradient md:hidden flex items-center justify-center mt-[314px] md:px-5 w-full" />
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
    </>
  );
};

export default AboutPage;
