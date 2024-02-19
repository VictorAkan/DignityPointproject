import React from "react";

import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";

import { Button, Img, Text } from "components";

const Header3 = (props) => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1352px] w-full">
          <div className="header-row mt-3 mb-[11px]">
            <div className="flex order-1 sm:order-2 flex-row gap-[5px] items-center justify-center">
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

            {/* sidebar mobile menu */}
            <div className={clsx("fixed h-full w-screen hidden sm:block bg-green-600/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isMenuOpen && "translate-x-0")}>
              <section className="text-black-900 bg-white-A700 flex-col absolute left-0 top-0
              h-screen p-8 gap-8 z-50 flex w-56">
                <IoCloseOutline onClick={() => setMenuOpen(false)} className="mt-0 mb-8 text-3xl cursor-pointer" />
                <Button onClick={() => navigate("/home1")}>
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Home
                </Text>
                </Button>
                <Button onClick={() => navigate("/about")}>
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  About
                </Text>
                </Button>
                <Button onClick={() => navigate("/support")}>
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Support
                </Text>
                </Button>
                <Text
                className="common-pointer text-green-700 text-center text-lg w-auto"
                size="txtPoppinsSemiBold18"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </Text>
              <Button
                className="common-pointer cursor-pointer font-poppins text-green-700 font-semibold leading-[normal] min-w-[120px] rounded-[12px] text-center text-lg"
                onClick={() => navigate("/createnewaccount")}
                color="black_900"
                size="sm"
                variant="fill"
              >
                SIGNUP
              </Button>
              </section>
            </div>

            <Button onClick={() => setMenuOpen(true)} className="mobile-menu cursor-pointer">
              <div></div>
              <div></div>
              <div></div>
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row gap-[30px] h-[55px] md:h-auto sm:hidden items-center justify-start w-auto">
            <div className="flex flex-row gap-[30px] items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start py-2.5 w-auto">
                <Button onClick={() => navigate("/home1")}>
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Home
                </Text>
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start py-2.5 w-auto">
                <Button onClick={() => navigate("/about")}>
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  About
                </Text>
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start py-2.5 w-auto">
                <Button onClick={() => navigate("/support")}>
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Support
                </Text>
                </Button>
              </div>
            </div>
            <div className="bg-black-900_33 flex flex-row gap-[33px] items-center justify-between px-2.5 py-[7px] rounded-[12px] w-auto">
              <Text
                className="common-pointer text-black-900_01 text-center text-lg w-auto"
                size="txtPoppinsSemiBold18"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </Text>
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold leading-[normal] min-w-[120px] rounded-[12px] text-center text-lg"
                onClick={() => navigate("/createnewaccount")}
                color="black_900_4c"
                size="sm"
                variant="fill"
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

Header3.defaultProps = {};

export default Header3;
