import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import MemoriesMyMemoriesNavigation from "components/MemoriesMyMemoriesNavigation";
import MemoriesMyMemoriesReactionbar from "components/MemoriesMyMemoriesReactionbar";

const MemoriesMyMemoriesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 font-poppins h-[824px] mx-auto relative w-full">
        <div className="absolute flex flex-col gap-2.5 items-start justify-start left-[0] md:px-5 top-[0] w-[56%]">
          <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between max-w-[842px] sm:px-5 px-6 py-2.5 rounded-lg w-full">
            <Text
              className="text-black-900_01 text-xl w-auto"
              size="txtPoppinsSemiBold20Black90001"
            >
              Posts in My Memories
            </Text>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Button
                className="flex items-center justify-center rounded-[18px] w-[37px]"
                color="blue_gray_100_01"
                size="md"
                variant="fill"
              >
                <Img
                  src="images/img_thumbsup_black_900_01_38x37.svg"
                  alt="thumbsup"
                />
              </Button>
              <Text
                className="text-base text-gray-700 w-auto"
                size="txtPoppinsSemiBold16Gray700"
              >
                Filters
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-2.5 items-center w-auto"
            orientation="vertical"
          >
            <div className="flex flex-col items-start justify-start my-0 w-[607px] md:w-full">
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col h-[527px] md:h-auto items-start justify-start px-5 py-2.5 rounded-[20px] shadow-bs w-[607px] md:w-full">
                <div className="flex flex-col gap-2.5 h-[501px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] w-[570px] sm:w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-[185px]">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_jonas.png"
                        alt="jonas"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 text-center w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          Endurance Alex
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          @alexander_jnr
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_morevertfill1.svg"
                      alt="morevertfillOne"
                    />
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900_01 w-auto"
                      size="txtPoppinsSemiBold16Black90001"
                    >
                      Just bought a new whip
                    </Text>
                    <Img
                      className="h-3.5 w-[50px]"
                      src="images/img_frame8906.svg"
                      alt="frame8906"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                      <Img
                        className="h-[360px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_image69.png"
                        alt="imageSixtyNine"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start">
                        <Img
                          className="h-[175px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                          src="images/img_image70.png"
                          alt="imageSeventy"
                        />
                        <Img
                          className="h-[175px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                          src="images/img_image71.png"
                          alt="imageSeventyOne"
                        />
                      </div>
                    </div>
                  </div>
                  <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between w-[570px] sm:w-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start my-0 w-[607px] md:w-full">
              <div className="flex flex-col items-start justify-start w-[607px] md:w-full">
                <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col h-[154px] md:h-auto items-start justify-start px-5 py-2.5 rounded-[20px] shadow-bs w-[607px] md:w-full">
                  <div className="flex flex-col gap-2.5 h-36 md:h-auto items-start justify-start w-auto sm:w-full">
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] w-[570px] sm:w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-[185px]">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_jonas.png"
                          alt="jonas"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 text-center w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Endurance Alex
                          </Text>
                          <Text
                            className="text-[13px] text-gray-700 w-auto"
                            size="txtPoppinsMedium13"
                          >
                            @alexander_jnr
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_morevertfill1.svg"
                        alt="morevertfillOne"
                      />
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Come join me for breakfast
                      </Text>
                      <Img
                        className="h-9 w-[34px]"
                        src="images/img_play.svg"
                        alt="play"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-bl-[19px] rounded-br-[19px] w-full"
                        src="images/img_image74.png"
                        alt="imageSeventyFour"
                      />
                    </div>
                    <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between w-[570px] sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <MemoriesMyMemoriesNavigation className="absolute bg-white-A700 flex flex-col gap-2.5 inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[50px] py-2.5 shadow-bs top-[0] w-auto md:w-full" />
        <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[3%] p-2.5 md:px-5 w-[22%]">
          <div className="flex flex-col gap-5 items-start justify-start mb-[496px] mt-[7px] w-[300px]">
            <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
              <Text
                className="text-black-900_01 text-center text-xl w-auto"
                size="txtPoppinsSemiBold20Black90001"
              >
                Memories
              </Text>
              <div
                className="common-pointer flex flex-row gap-[5px] items-center justify-start w-auto"
                onClick={() => navigate("/memoriescreatenew")}
              >
                <Button
                  className="flex items-center justify-center rounded-[17px] w-[33px]"
                  shape="circle"
                  color="indigo_50"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_plus_black_900_01.svg" alt="plus" />
                </Button>
                <Text
                  className="text-[13px] text-gray-700 w-auto"
                  size="txtPoppinsMedium13"
                >
                  Create New
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-[300px] sm:w-full">
              <Input
                name="frame8817"
                placeholder="Feed"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                wrapClassName="flex w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-6 mr-[30px]"
                    src="images/img_heart.svg"
                    alt="heart"
                  />
                }
                shape="round"
                color="blue_gray_100_01"
                size="2xl"
                variant="outline"
              ></Input>
              <Input
                name="frame8820"
                placeholder="My Memories"
                className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-6 mr-[30px]"
                    src="images/img_heart.svg"
                    alt="heart"
                  />
                }
                shape="round"
                color="green_700"
                size="2xl"
                variant="fill"
              ></Input>
              <Input
                name="frame8819"
                placeholder="Settings"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                wrapClassName="flex w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-6 mr-[30px]"
                    src="images/img_heart.svg"
                    alt="heart"
                  />
                }
                shape="round"
                color="blue_gray_100_01"
                size="2xl"
                variant="outline"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoriesMyMemoriesPage;
