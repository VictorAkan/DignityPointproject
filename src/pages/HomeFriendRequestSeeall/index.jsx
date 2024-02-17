import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header2 from "components/Header2";

const HomeFriendRequestSeeallPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3.5 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[495px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Friends
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
            <List
              className="flex flex-col gap-2.5 items-start w-auto"
              orientation="vertical"
            >
              <div className="flex flex-col items-start justify-start my-0 w-auto md:w-full">
                <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start max-w-[1078px] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_hannah_70x70.png"
                      alt="hannah"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          Jake Aelf
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          @callmejake
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                          size="txtPoppinsMedium13WhiteA700"
                        >
                          Accept
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="blue_gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_tracy_70x70.png"
                      alt="tracy"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 text-center w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          Chris Wong
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          @chriswong
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                          size="txtPoppinsMedium13WhiteA700"
                        >
                          Accept
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="blue_gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_ruby_70x70.png"
                      alt="ruby"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 text-center w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          writes_memoirs
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          @writememoirs
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                          size="txtPoppinsMedium13WhiteA700"
                        >
                          Accept
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="blue_gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_mark_70x70.png"
                      alt="mark"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 text-center w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          Terry Fiscer
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          @terryfiscer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                          size="txtPoppinsMedium13WhiteA700"
                        >
                          Accept
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="blue_gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start max-w-[1078px] my-0 w-full">
                <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                    src="images/img_janet_70x70.png"
                    alt="janet"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-[141px]">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Jacob Jones
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @jacobjones12
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                        size="txtPoppinsMedium13WhiteA700"
                      >
                        Accept
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_100"
                        size="sm"
                        variant="fill"
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                    src="images/img_hansel_70x70.png"
                    alt="hansel"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @guyhawkins
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                        size="txtPoppinsMedium13WhiteA700"
                      >
                        Accept
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_100"
                        size="sm"
                        variant="fill"
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                    src="images/img_conan_70x70.png"
                    alt="conan"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @ralphcodes
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                        size="txtPoppinsMedium13WhiteA700"
                      >
                        Accept
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_100"
                        size="sm"
                        variant="fill"
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                    src="images/img_betty_70x70.png"
                    alt="betty"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @lesliealexbaby
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="bg-green-700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                        size="txtPoppinsMedium13WhiteA700"
                      >
                        Accept
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                        shape="round"
                        color="blue_gray_100"
                        size="sm"
                        variant="fill"
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFriendRequestSeeallPage;
