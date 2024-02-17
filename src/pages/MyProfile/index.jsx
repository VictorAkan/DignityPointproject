import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import HomeCreateNewCreateJobPost from "components/HomeCreateNewCreateJobPost";

const MyProfilePage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-3 items-center justify-end w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[52px] p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[495px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    My profile
                  </Text>
                  <Img
                    className="h-[34px] w-[63px]"
                    src="images/img_user_indigo_50.svg"
                    alt="user"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-[300px] sm:w-full">
                  <Input
                    name="frame8816"
                    placeholder="Add People"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <div className="h-11 mr-5 w-11 bg-indigo-50 rounded-[50%] py-2.5 px-[5px] flex justify-center items-center">
                        <Img
                          className="my-auto"
                          src="images/img_settings_green_700.svg"
                          alt="settings"
                        />
                      </div>
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame8817"
                    placeholder="Friend request"
                    className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                    prefix={
                      <div className="h-11 mr-5 w-11 bg-indigo-50 rounded-[50%] py-2.5 px-[5px] flex justify-center items-center">
                        <Img
                          className="my-auto"
                          src="images/img_settings_green_700.svg"
                          alt="settings"
                        />
                      </div>
                    }
                    shape="round"
                    color="green_700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Input
                    name="frame8818"
                    placeholder="All Friends"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <div className="h-11 mr-5 w-11 bg-indigo-50 rounded-[50%] py-2.5 px-[5px] flex justify-center items-center">
                        <Img
                          className="my-auto"
                          src="images/img_settings_green_700.svg"
                          alt="settings"
                        />
                      </div>
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[77%] md:w-full">
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div className="h-[143px] mx-auto w-full">
                    <div className="h-[143px] m-auto w-full">
                      <Img
                        className="h-[143px] m-auto object-cover w-full"
                        src="images/img_image94.png"
                        alt="imageNinetyFour"
                      />
                      <div className="absolute bg-gradient5  bottom-[0] h-[63px] inset-x-[0] mx-auto rounded-bl-[20px] rounded-br-[20px] shadow-bs w-full"></div>
                    </div>
                    <div className="absolute bottom-[1%] flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[908px] right-[2%] w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                          size="txtPoppinsSemiBold24"
                        >
                          Endurance Alex
                        </Text>
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsSemiBold16WhiteA700"
                        >
                          @alexander_jnr
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[93px]"
                          leftIcon={
                            <div className="h-3.5 mt-px mb-1 mr-[5px] w-3.5 bg-black-900_01">
                              <Img
                                className="h-3.5"
                                src="images/img_search_black_900_01.svg"
                                alt="search"
                              />
                            </div>
                          }
                          shape="round"
                          color="indigo_50"
                          size="sm"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-[13px] text-left">
                            Settings
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
                  <div className="flex flex-row gap-2.5 items-center justify-center ml-[155px] mt-[-NaNpx] w-auto z-[1]">
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
                    <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Following
                      </Text>
                      <Text
                        className="text-base text-center text-light_blue-900 w-auto"
                        size="txtPoppinsSemiBold16Lightblue900"
                      >
                        2,567
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[36%]"
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
                  <Img
                    className="h-[120px] mb-[7px] ml-3 mt-[-60px] rounded-[50%] w-[120px] z-[1]"
                    src="images/img_jonas_120x120.png"
                    alt="jonas_One"
                  />
                </div>
                <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1080px] sm:px-5 px-6 py-2.5 rounded-lg w-full">
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
              <HomeCreateNewCreateJobPost className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[527px] md:h-auto items-start justify-start px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
