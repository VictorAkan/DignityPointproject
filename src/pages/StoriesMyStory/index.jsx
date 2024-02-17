import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const StoriesMyStoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[17px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Stories
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Button
                      className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                      shape="circle"
                      color="indigo_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_search_gray_700_14x14.svg"
                        alt="search_One"
                      />
                    </Button>
                    <div
                      className="common-pointer flex flex-row gap-[5px] items-center justify-start w-auto"
                      onClick={() => navigate("/storiescreatestory")}
                    >
                      <Button
                        className="flex items-center justify-center rounded-[17px] w-[33px]"
                        shape="circle"
                        color="indigo_50"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          src="images/img_plus_black_900_01.svg"
                          alt="plus"
                        />
                      </Button>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Create New
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-row gap-2.5 items-center justify-between py-[5px] w-[300px]">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_jonas_70x70.png"
                      alt="jonas_One"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        My Story
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @alexander_jnr
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    1hr
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[300px]">
                  <List
                    className="flex flex-col gap-px items-center pt-80 w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ruby_70x70.png"
                          alt="ruby"
                        />
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
                      </div>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs w-[300px]"
                      onClick={() => navigate("/storiesothersstory")}
                    >
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_hannah_70x70.png"
                          alt="hannah"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 text-center w-auto"
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
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-between py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        1hr
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-black-900_01 md:h-[758px] h-[759px] md:px-10 sm:px-5 px-[290px] relative rounded-[20px] w-[77%] md:w-full">
              <div className="absolute bg-gray-700 flex flex-col h-full inset-[0] items-start justify-center m-auto py-[7px] w-[38%]">
                <div className="flex flex-col gap-5 items-center justify-start ml-2.5 md:ml-[0] w-[95%] md:w-full">
                  <Img
                    className="h-1 w-[380px]"
                    src="images/img_frame9057.svg"
                    alt="frame9057"
                  />
                  <div className="flex flex-row items-center justify-between w-[380px] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_jonas.png"
                        alt="jonas_Two"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-center w-auto">
                        <Text
                          className="text-base text-center text-white-A700 w-auto"
                          size="txtPoppinsSemiBold16WhiteA700"
                        >
                          My Story
                        </Text>
                        <div className="flex flex-row gap-5 items-center justify-start w-auto">
                          <Text
                            className="text-[13px] text-white-A700 w-auto"
                            size="txtPoppinsMedium13WhiteA700"
                          >
                            @alexander_jnr
                          </Text>
                          <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_whatsappstatus.svg"
                              alt="whatsappstatus"
                            />
                            <Text
                              className="text-[13px] text-white-A700"
                              size="txtPoppinsMedium13WhiteA700"
                            >
                              1hr
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[15px] w-3.5"
                      src="images/img_thumbsup_white_a700.svg"
                      alt="thumbsup"
                    />
                  </div>
                </div>
                <Img
                  className="h-[558px] sm:h-auto mt-5 object-cover w-full"
                  src="images/img_image91.png"
                  alt="imageNinetyOne"
                />
                <Text
                  className="mb-[54px] ml-2.5 md:ml-[0] mt-3.5 text-base text-white-A700"
                  size="txtPoppinsSemiBold16WhiteA700"
                >
                  Caption goes here
                </Text>
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

export default StoriesMyStoryPage;
