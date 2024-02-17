import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[475px] sm:h-[540px] md:h-[815px] mb-3.5 mt-[39px] mx-auto relative w-[90%] md:w-full">
          <Img
            className="absolute h-[475px] inset-[0] justify-center m-auto object-cover w-[37%]"
            src="images/img_malipomawhite2.png"
            alt="malipomawhiteTwo"
          />
          <div className="absolute flex flex-col gap-[47px] inset-x-[0] items-center justify-start mx-auto top-[4%] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1352px] w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-[9.04px] items-center justify-center w-auto">
                  <Img
                    className="h-[52px] md:h-auto object-cover w-[55px]"
                    src="images/img_malipoma.png"
                    alt="malipoma_One"
                  />
                  <Text
                    className="sm:text-[32.16px] md:text-[34.16px] text-[36.16px] text-center text-white-A700 w-auto"
                    size="txtPoppinsBold3616"
                  >
                    DignityPoint
                  </Text>
                </div>
                <Text
                  className="max-w-[893px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtPoppinsSemiBold50WhiteA700"
                >
                  Connecting people, empowering financial prosperity
                </Text>
                <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-auto md:w-full">
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
                        +44 123 456 7890
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsSemiBold16WhiteA700"
                      >
                        example@email.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtOpenSansBold20"
                    >
                      Follow us on
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-center w-[18%] md:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_facebook.svg"
                        alt="facebook_Two"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtJostRomanMedium16WhiteA700"
                      >
                        Facebook
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-center w-[14%] md:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_trash.svg"
                        alt="trash_One"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtJostRomanMedium16WhiteA700"
                      >
                        Twitter
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-center w-[16%] md:w-full">
                      <Img
                        className="h-[22px] mt-0.5 w-[22px]"
                        src="images/img_link.svg"
                        alt="link_One"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtJostRomanMedium16WhiteA700"
                      >
                        LinkedIn
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-[18%] md:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtJostRomanMedium16WhiteA700"
                      >
                        Instagram
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[200px] rounded-[12px] text-center text-xl"
                color="green_100"
                size="md"
                variant="fill"
              >
                Get Started
              </Button>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
              <Line className="bg-white-A700 h-0.5 rounded-[1px] w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1352px] w-full">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPoppinsSemiBold20"
                >
                  © 2024 DignityPoint
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsSemiBold20"
                  >
                    Terms and Conditions
                  </Text>
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsSemiBold20"
                  >
                    Privacy Policy
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
