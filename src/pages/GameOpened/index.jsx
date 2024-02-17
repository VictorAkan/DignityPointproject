import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const GameOpenedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-poppins h-[982px] mx-auto relative w-full">
        <div className="flex flex-col m-auto md:px-5 w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center mx-auto md:px-10 sm:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="bg-green-200 md:h-[813px] h-[927px] mt-[-1px] p-12 md:px-10 sm:px-5 w-[66%] md:w-full z-[1]">
            <Img
              className="h-[814px] m-auto object-cover rounded-[20px] w-[89%]"
              src="images/img_rectangle1611_814x867.png"
              alt="rectangle1611"
            />
            <div className="absolute bg-black-900_99 bottom-[17%] flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto p-[19px] rounded-[20px] w-[54%]">
              <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
                <Img
                  className="h-[102px] md:h-auto object-cover rounded-[49px] w-[99px] sm:w-full"
                  src="images/img_rectangle1611_102x99.png"
                  alt="rectangle1611_One"
                />
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  <>
                    Spiderman 2 will get access to your email
                    <br />
                    via Dignity Point{" "}
                  </>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] mb-4 rounded-[12px] text-center text-xl w-[329px]"
                color="white_A700"
                size="md"
                variant="outline"
              >
                Start Playing
              </Button>
            </div>
            <Button
              className="absolute border border-solid border-white-A700 flex h-9 items-center justify-center left-[8%] rounded-[50%] top-[9%] w-9"
              shape="circle"
              color="black_900_44"
              size="md"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_plus_white_a700.svg"
                alt="plus"
              />
            </Button>
          </div>
          <div className="flex flex-col gap-12 items-start justify-start ml-auto mt-[-NaNpx] w-[33%] z-[1]">
            <div className="flex flex-col gap-[7px] items-start justify-start w-[89%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-[46px] items-start justify-between w-full">
                <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                  <Img
                    className="common-pointer h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_hannah_3.png"
                    alt="hannah"
                    onClick={() => navigate("/homeviewprofile")}
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-900 w-auto"
                        size="txtPoppinsSemiBold2057"
                      >
                        Spiderman.CO
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_crownsvgrepocom.svg"
                        alt="crownsvgrepocom"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-[16.71px] text-gray-700 w-auto"
                        size="txtPoppinsMedium1671"
                      >
                        @gamesforkids
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium h-[37px] leading-[normal] sm:mt-0 mt-2 rounded-[9px] text-[16.03px] text-center w-[132px]"
                  shape="round"
                  color="green_700"
                  size="sm"
                  variant="outline"
                >
                  Follow
                </Button>
              </div>
              <div className="flex flex-row font-inter gap-2 items-center justify-start w-auto">
                <div className="flex relative w-[51px]">
                  <div className="flex my-auto w-[71%]">
                    <Img
                      className="h-[21px] my-auto rounded-[50%] w-[21px]"
                      src="images/img_hannah_21x21.png"
                      alt="hannah_One"
                    />
                    <Img
                      className="common-pointer h-[21px] ml-[-7.29px] my-auto rounded-[50%] w-[21px] z-[1]"
                      src="images/img_hannah_4.png"
                      alt="hannah_Two"
                      onClick={() => navigate("/homeviewprofile")}
                    />
                  </div>
                  <Img
                    className="h-[21px] ml-[-7.29px] my-auto rounded-[50%] w-[21px] z-[1]"
                    src="images/img_hannah_5.png"
                    alt="hannah_Three"
                  />
                </div>
                <Text
                  className="text-[8px] text-black-900 w-auto"
                  size="txtInterRegular8"
                >
                  Followed by David Daniel and 2.5k People
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24Gray900"
              >
                Similar Games
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[21%] flex flex-col items-center justify-start md:px-5 right-[2%] w-[453px] sm:w-full">
          <List
            className="flex flex-col gap-9 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="bg-white-A700 flex sm:flex-1 flex-col gap-3 justify-start pb-[11px] rounded-[11px] shadow-bs12 w-[44%] sm:w-full">
                <Img
                  className="h-[166px] md:h-auto object-cover rounded-tl-[11px] rounded-tr-[11px] w-full"
                  src="images/img_rectangle1611_166x194.png"
                  alt="rectangle1611"
                />
                <div className="flex flex-col gap-[1.96px] items-start justify-start md:ml-[0] ml-[7px] w-auto">
                  <Text
                    className="text-[13.04px] text-blue_gray-900 w-auto"
                    size="txtPoppinsMedium1304"
                  >
                    Super Mario Brothers
                  </Text>
                  <Text
                    className="text-[9.78px] text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular978"
                  >
                    150k players
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-1 flex-col gap-3 justify-start pb-[11px] rounded-[11px] shadow-bs12 w-[227px] sm:w-full">
                <Img
                  className="h-[166px] md:h-auto object-cover rounded-tl-[11px] rounded-tr-[11px] w-full"
                  src="images/img_rectangle1611_166x227.png"
                  alt="rectangle1611_One"
                />
                <div className="flex flex-col gap-[1.96px] items-start justify-start md:ml-[0] ml-[7px] w-auto">
                  <Text
                    className="text-[13.04px] text-blue_gray-900 w-auto"
                    size="txtPoppinsMedium1304"
                  >
                    Super Mario Brothers
                  </Text>
                  <Text
                    className="text-[9.78px] text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular978"
                  >
                    150k players
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="bg-white-A700 flex sm:flex-1 flex-col gap-2.5 justify-start pb-2.5 rounded-[10px] shadow-bs13 w-[211px] sm:w-full">
                <Img
                  className="h-[155px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_rectangle1611_155x211.png"
                  alt="rectangle1611"
                />
                <div className="flex flex-col gap-[1.82px] items-start justify-start md:ml-[0] ml-[7px] w-auto">
                  <Text
                    className="text-[12.14px] text-blue_gray-900 w-auto"
                    size="txtPoppinsMedium1214"
                  >
                    Super Mario Brothers
                  </Text>
                  <Text
                    className="text-[9.11px] text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular911"
                  >
                    150k players
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-1 flex-col gap-2.5 justify-start pb-2.5 rounded-[10px] shadow-bs13 w-[211px] sm:w-full">
                <Img
                  className="h-[155px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_rectangle1611_3.png"
                  alt="rectangle1611_One"
                />
                <div className="flex flex-col gap-[1.82px] items-start justify-start md:ml-[0] ml-[7px] w-auto">
                  <Text
                    className="text-[12.14px] text-blue_gray-900 w-auto"
                    size="txtPoppinsMedium1214"
                  >
                    Super Mario Brothers
                  </Text>
                  <Text
                    className="text-[9.11px] text-blue_gray-900 w-auto"
                    size="txtPoppinsRegular911"
                  >
                    150k players
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default GameOpenedPage;
