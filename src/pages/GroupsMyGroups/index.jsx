import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header2 from "components/Header2";

const GroupsMyGroupsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[496px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Groups
                  </Text>
                  <div
                    className="common-pointer flex flex-row gap-[5px] items-center justify-start w-auto"
                    onClick={() => navigate("/creategroupfive")}
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
                    name="frame8819"
                    placeholder="Discover"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-auto h-6 mr-[30px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame8817"
                    placeholder="Groups you follow"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-[30px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame8818"
                    placeholder="My Groups"
                    className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 h-6 mr-[30px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="green_700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-[77%] md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start mb-[307px] w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1040px] w-full">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    My Groups
                  </Text>
                </div>
                <div className="bg-white-A700_01 flex flex-col items-center justify-start p-5 rounded-lg w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1000px] my-[5px] w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_frame8771_70x70.png"
                        alt="frame8771"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtPoppinsSemiBold20Black90001"
                        >
                          Africa Startup Festival
                        </Text>
                        <Input
                          name="frame8885"
                          placeholder="Notifications"
                          className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-center text-gray-700 w-full"
                          wrapClassName="flex w-[61%]"
                          prefix={
                            <Img
                              className="h-7 mr-[5px] my-auto"
                              src="images/img_television.svg"
                              alt="television"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[143px]"
                        leftIcon={
                          <div className="h-[18px] mt-0.5 mb-[3px] mr-2.5 w-[18px] bg-black-900_01">
                            <Img
                              className="h-[18px]"
                              src="images/img_vector_black_900_01_18x18.svg"
                              alt="Vector"
                            />
                          </div>
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Create Post
                        </div>
                      </Button>
                      <div className="bg-white-A700 flex flex-col h-7 md:h-auto items-center justify-center px-2.5 py-[3px] rounded-lg w-7">
                        <Line className="bg-black-900_01 h-[17px] w-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_01 flex flex-col items-center justify-start p-5 rounded-lg w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1000px] my-[5px] w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_image93.png"
                        alt="imageNinetyThree"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtPoppinsSemiBold20Black90001"
                        >
                          Historical Images
                        </Text>
                        <Input
                          name="frame8885_One"
                          placeholder="Notifications"
                          className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-center text-gray-700 w-full"
                          wrapClassName="flex w-[51%]"
                          prefix={
                            <Img
                              className="h-7 mr-[5px] my-auto"
                              src="images/img_television.svg"
                              alt="television"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[143px]"
                        leftIcon={
                          <div className="h-[18px] mt-0.5 mb-[3px] mr-2.5 w-[18px] bg-black-900_01">
                            <Img
                              className="h-[18px]"
                              src="images/img_vector_black_900_01_18x18.svg"
                              alt="Vector"
                            />
                          </div>
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Create Post
                        </div>
                      </Button>
                      <div className="bg-white-A700 flex flex-col h-7 md:h-auto items-center justify-center px-2.5 py-[3px] rounded-lg w-7">
                        <Line className="bg-black-900_01 h-[17px] w-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_01 flex flex-col items-center justify-start p-5 rounded-lg w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1000px] my-[5px] w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_jakeprofilepic_70x70.png"
                        alt="jakeprofilepic"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-black-900_01 text-center text-xl w-auto"
                          size="txtPoppinsSemiBold20Black90001"
                        >
                          <>McDonald&#39;s</>
                        </Text>
                        <Input
                          name="frame8885_Two"
                          placeholder="Notifications"
                          className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-center text-gray-700 w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="h-7 mr-[5px] my-auto"
                              src="images/img_television.svg"
                              alt="television"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[143px]"
                        leftIcon={
                          <div className="h-[18px] mt-0.5 mb-[3px] mr-2.5 w-[18px] bg-black-900_01">
                            <Img
                              className="h-[18px]"
                              src="images/img_vector_black_900_01_18x18.svg"
                              alt="Vector"
                            />
                          </div>
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Create Post
                        </div>
                      </Button>
                      <div className="bg-white-A700 flex flex-col h-7 md:h-auto items-center justify-center px-2.5 py-[3px] rounded-lg w-7">
                        <Line className="bg-black-900_01 h-[17px] w-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsMyGroupsPage;
