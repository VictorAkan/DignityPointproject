import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const ReelsPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[72px] w-full">
        <div className="flex flex-col gap-[27px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1080px] mx-auto md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
              <div className="flex flex-row gap-[11px] items-center justify-center mt-1 w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown"
                />
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                  size="txtPoppinsSemiBold26"
                >
                  Reels
                </Text>
              </div>
              <Button
                className="cursor-pointer flex h-[37px] items-center justify-center rounded-[9px] w-[164px]"
                rightIcon={
                  <div className="ml-3 w-[9px] bg-green-700 my-[7px]">
                    <Img src="images/img_plus_green_700.svg" alt="plus" />
                  </div>
                }
                shape="round"
                color="green_700"
                size="sm"
                variant="outline"
              >
                <div className="font-medium leading-[normal] text-[16.03px] text-left">
                  Add Reel
                </div>
              </Button>
            </div>
            <div className="bg-black-900_01 md:h-[748px] h-[759px] md:px-10 sm:px-5 px-[290px] relative rounded-[20px] w-full">
              <div className="absolute bg-gray-700 flex flex-col h-full inset-[0] justify-center m-auto py-[25px] w-[38%]">
                <div className="flex flex-col mt-[75px] relative w-full">
                  <Img
                    className="h-[558px] m-auto object-cover w-full"
                    src="images/img_image91.png"
                    alt="imageNinetyOne"
                  />
                  <Img
                    className="h-[15px] mt-[-7px] mx-auto z-[1]"
                    src="images/img_group306.svg"
                    alt="group306"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start ml-2.5 md:ml-[0] mr-[200px] w-[48%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[190px]">
                    <div className="flex flex-row gap-[8.15px] items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_jonas_40x40.png"
                        alt="jonas_One"
                      />
                      <div className="flex flex-col gap-[1.63px] items-start justify-center w-auto">
                        <Text
                          className="text-[13.05px] text-center text-white-A700 w-auto"
                          size="txtPoppinsSemiBold1305"
                        >
                          Alexander Peru
                        </Text>
                        <div className="flex flex-row gap-[16.31px] items-center justify-start w-auto">
                          <Text
                            className="text-[10.6px] text-white-A700 w-auto"
                            size="txtPoppinsMedium106"
                          >
                            @alexander_jnr
                          </Text>
                          <div className="flex flex-row gap-[4.08px] items-center justify-start w-auto">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_whatsappstatus.svg"
                              alt="whatsappstatus"
                            />
                            <Text
                              className="text-[10.6px] text-white-A700"
                              size="txtPoppinsMedium106"
                            >
                              1hr
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] text-white-A700 text-xs"
                    size="txtPoppinsSemiBold12WhiteA700"
                  >
                    Caption goes here
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-10 inset-[0] m-auto w-[500px]"
                src="images/img_frame9052.svg"
                alt="frame9052"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReelsPage;
