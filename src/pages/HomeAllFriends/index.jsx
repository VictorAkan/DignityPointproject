import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Header2 from "components/Header2";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomeAllFriendsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3.5 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[507px] mt-[7px] w-[300px]">
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
                    name="frame8819"
                    placeholder="Add People"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <div className="h-10 mr-2.5 w-10 bg-indigo-50 rounded-[50%] py-2.5 px-1.5 flex justify-center items-center">
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
                    name="frame8820"
                    placeholder="Friend request"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <div className="h-10 mr-2.5 w-10 bg-indigo-50 rounded-[50%] py-2.5 px-1.5 flex justify-center items-center">
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
                    name="frame8821"
                    placeholder="All Friends"
                    className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                    prefix={
                      <div className="h-10 mr-2.5 w-10 bg-indigo-50 rounded-[50%] py-2.5 px-1.5 flex justify-center items-center">
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
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-auto md:w-full">
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex-1 gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start max-w-[1078px] w-full">
                  <div
                    className="common-pointer bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full"
                    onClick={() => navigate("/homeviewprofile")}
                  >
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_hannah_70x70.png"
                      alt="hannah"
                    />
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
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_tracy_70x70.png"
                      alt="tracy"
                    />
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
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_ruby_70x70.png"
                      alt="ruby"
                    />
                    <div className="flex flex-col items-start justify-start w-[171px]">
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
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_mark_70x70.png"
                      alt="mark"
                    />
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
                  </div>
                </div>
                <div className="flex-1 gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start max-w-[1078px] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_janet_70x70.png"
                      alt="janet"
                    />
                    <div className="flex flex-col items-start justify-start w-[171px]">
                      <div className="flex flex-col items-start justify-start w-[171px]">
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
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_hansel_70x70.png"
                      alt="hansel"
                    />
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
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_conan_70x70.png"
                      alt="conan"
                    />
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
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2.5 items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_betty_70x70.png"
                      alt="betty"
                    />
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
                  </div>
                </div>
              </List>
              <SelectBox
                className="font-semibold leading-[normal] text-base text-left text-light_blue-900 w-[10%] sm:w-full"
                placeholderClassName="text-light_blue-900"
                indicator={
                  <Img
                    className="h-[5px] w-2.5"
                    src="images/img_vector_light_blue_900.svg"
                    alt="Vector"
                  />
                }
                isMulti={false}
                name="language"
                options={languageOptionsList}
                isSearchable={false}
                placeholder="See  more"
                size="xs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAllFriendsPage;
