import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import MemoriesMyMemoriesReactionbar from "components/MemoriesMyMemoriesReactionbar";

const PagePrototype = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-2.5 items-center justify-end w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[70px] p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[496px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Pages
                  </Text>
                  <div
                    className="common-pointer flex flex-row gap-[5px] items-center justify-start w-auto"
                    onClick={() => navigate("/createpage")}
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
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Create New
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-[300px] sm:w-full">
                  <Input
                    name="frame8819"
                    placeholder="Discover"
                    className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-auto h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="green_700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <Input
                    name="frame8817"
                    placeholder="Pages you follow"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame8818"
                    placeholder="My Pages"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
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
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[77%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div
                    className="bg-cover bg-no-repeat bg-white-A700 flex h-[143px] md:h-[63px] justify-end mx-auto pt-20 rounded-[20px] w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_frame8667_143x1080.png')",
                    }}
                  >
                    <div className="bg-gradient5  h-[63px] mt-auto mx-auto rounded-bl-[20px] rounded-br-[20px] shadow-bs w-full"></div>
                    <div className="absolute bottom-[12%] flex flex-row sm:gap-10 items-center justify-between max-w-[908px] right-[2%] w-full">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Pizza Hut
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[85px]"
                          leftIcon={
                            <div className="mt-0.5 mb-[3px] mr-[5px] bg-black-900_01">
                              <Img
                                src="images/img_settings_black_900_01.svg"
                                alt="settings"
                              />
                            </div>
                          }
                          shape="round"
                          color="indigo_50"
                          size="sm"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-[13px] text-left">
                            Follow
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[99px]"
                          leftIcon={
                            <div className="h-3.5 mt-px mb-[5px] mr-[5px] w-3.5 bg-white-A700">
                              <Img
                                className="h-3.5"
                                src="images/img_television_white_a700.svg"
                                alt="television"
                              />
                            </div>
                          }
                          shape="round"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-[13px] text-left">
                            Message
                          </div>
                        </Button>
                        <div className="bg-indigo-50 flex flex-col h-7 md:h-auto items-center justify-center px-2.5 py-[3px] rounded-lg w-7">
                          <Line className="bg-black-900_01 h-[17px] w-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[120px] ml-6 mt-[-52px] rounded-[50%] w-[120px] z-[1]"
                    src="images/img_frame8856_120x120.png"
                    alt="frame8856"
                  />
                  <div className="flex flex-row gap-2.5 items-center justify-center ml-[156px] mt-[-NaNpx] w-auto z-[1]">
                    <div className="border-b-2 border-light_blue-900 border-solid flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Post
                      </Text>
                      <Text
                        className="text-base text-center text-light_blue-900 w-auto"
                        size="txtPoppinsSemiBold16Lightblue900"
                      >
                        18.3k
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Followers
                      </Text>
                      <Text
                        className="text-base text-center text-light_blue-900 w-auto"
                        size="txtPoppinsSemiBold16Lightblue900"
                      >
                        18.3k
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[47%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          Photos
                        </Text>
                        <Text
                          className="text-base text-center text-light_blue-900 w-auto"
                          size="txtPoppinsSemiBold16Lightblue900"
                        >
                          700
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          Videos
                        </Text>
                        <Text
                          className="text-base text-center text-light_blue-900 w-auto"
                          size="txtPoppinsSemiBold16Lightblue900"
                        >
                          300
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1080px] mt-[5px] sm:px-5 px-6 py-2.5 rounded-lg w-full">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Posts
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
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-2.5 rounded-[20px] w-auto md:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_frame8856_50x50.png"
                        alt="frame8856_One"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          Pizza Hut
                        </Text>
                        <Input
                          name="frame8674"
                          placeholder="1hr"
                          className="font-medium leading-[normal] p-0 placeholder:text-gray-700 text-[13px] text-gray-700 text-left w-full"
                          wrapClassName="flex w-[55%]"
                          prefix={
                            <div className="h-3 mt-[3px] mb-1 mr-2.5 w-3 bg-gray-700">
                              <Img
                                className="h-3 my-auto"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            </div>
                          }
                          size="xs"
                        ></Input>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_morevertfill1.svg"
                      alt="morevertfillOne"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Name a better pizza than this, we’ll wait
                      </Text>
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_close_amber_300.svg"
                        alt="close"
                      />
                    </div>
                    <Text
                      className="text-base text-black-900_01 w-auto"
                      size="txtPoppinsSemiBold16Black90001"
                    >
                      Order online, link in bio
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <div className="bg-lime-50 h-[359px] w-[28%]"></div>
                    <Img
                      className="sm:flex-1 h-[359px] md:h-auto object-cover w-[46%] sm:w-full"
                      src="images/img_frame8401.png"
                      alt="frame8401"
                    />
                    <div className="bg-lime-50 h-[359px] w-[27%]"></div>
                  </div>
                  <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between max-w-[898px] w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagePrototype;
