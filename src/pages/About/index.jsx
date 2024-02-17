import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center px-20 md:px-5 py-3.5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1352px] w-full">
            <div className="header-row mt-3 mb-[11px]">
              <div className="flex flex-row gap-[5px] items-center justify-center">
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
            className="max-w-[561px] md:max-w-full text-gray-700 text-xl"
            size="txtPoppinsMedium20"
          >
            DignityPoint is more than just a social networking platform – we are
            a dynamic space designed with features that empower you to connect,
            engage, and thrive in a world of endless possibilities.
          </Text>
        </div>
        <Img
          className="h-[450px] max-w-[1352px] mt-[61px] mx-auto w-full"
          src="images/img_frame9093.svg"
          alt="frame9093"
        />
        <Footer className="bg-gradient  flex items-center justify-center mt-[314px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
