import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1352px] w-full">
          <div className="header-row mt-2 mb-1.5">
            <div className="flex order-1 sm:order-2 flex-row gap-[5.75px] items-center justify-center">
              <Img
                className="h-[33px] md:h-auto object-cover w-[35px]"
                src="images/img_malipoma.png"
                alt="malipoma"
              />
              <Button onClick={() => navigate("/home1")}>
              <Text
                className="sm:text-[19.01px] md:text-[21.01px] text-[23.01px] text-center text-white-A700 w-auto"
                size="txtPoppinsBold2301"
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
          <div className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start w-auto">
            <div className="flex flex-row gap-[30px] items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start py-2.5 w-auto">
                <Button onClick={() => navigate("/home1")}>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold16WhiteA700"
                >
                  Home
                </Text>
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start py-2.5 w-auto">
                <Button onClick={() => navigate("/about")}>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold16WhiteA700"
                >
                  About
                </Text>
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start py-2.5 w-auto">
                <Button onClick={() => navigate("/support")}>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold16WhiteA700"
                >
                  Support
                </Text>
                </Button>
              </div>
            </div>
            <div className="bg-white-A700_33 flex flex-row gap-[33px] items-center justify-between px-2.5 py-[7px] rounded-[12px] w-auto">
              <Button onClick={() => navigate("/login")}>
              <Text
                className="text-center text-lg text-white-A700 w-auto"
                size="txtPoppinsSemiBold18WhiteA700"
              >
                LOGIN
              </Text>
              </Button>
              <Button
                className="!text-white-A700 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[120px] rounded-[12px] text-center text-lg"
                color="white_A700_4c"
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
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
