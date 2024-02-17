import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import CreatePost from "components/CreatePost";
import Header from "components/Header";
import HomeCreateNewCreateJobListforyou from "components/HomeCreateNewCreateJobListforyou";
import HomeCreateNewCreateJobPost from "components/HomeCreateNewCreateJobPost";
import HomeCreateNewCreateJobPost1 from "components/HomeCreateNewCreateJobPost1";
import Sidebar1 from "components/Sidebar1";

const JobPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[35px] mb-2 w-[35px]"
          src="images/img_camera.svg"
          alt="camera"
        />
      ),
      label: "Albums",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px] w-[30px]"
          src="images/img_thumbsup.svg"
          alt="thumbsup"
        />
      ),
      label: "Games",
      href: "/gamesone",
      active: window.location.pathname === "/gamesone",
    },
    {
      icon: (
        <Img
          className="h-[30px] w-[30px]"
          src="images/img_wallet.svg"
          alt="wallet"
        />
      ),
      label: "Subscriptions",
      href: "/subscription",
      active: window.location.pathname === "/subscription",
    },
    {
      icon: (
        <Img
          className="h-[30px] w-[30px]"
          src="images/img_thumbsup_black_900_01.svg"
          alt="thumbsup_One"
        />
      ),
      label: "Offers",
    },
  ];

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-end w-full">
          <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[170px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between pb-2 w-full">
                <div className="bg-white-A700 border-[3px] border-solid border-white-A700 flex md:flex-1 flex-col gap-[5px] items-center justify-start pb-1 rounded-[20px] shadow-bs w-[15%] md:w-full">
                  <div className="flex flex-col relative w-full">
                    <div className="bg-pink-100 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start mx-auto py-[5px] rounded-[20px] w-full">
                      <Img
                        className="h-[139px] md:h-auto rounded-[50%] w-[139px]"
                        src="images/img_jonas_139x139.png"
                        alt="jonas_One"
                      />
                    </div>
                    <Button
                      className="flex h-8 items-center justify-center mt-[-16px] mx-auto outline outline-[3px] outline-white-A700 w-8 z-[1]"
                      shape="circle"
                      color="indigo_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtPoppinsSemiBold16"
                  >
                    Create story
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 grid-cols-4 w-[63%] md:w-full"
                  orientation="horizontal"
                >
                  {new Array(4).fill({}).map((props, index) => (
                    <React.Fragment key={`CreatePost${index}`}>
                      <CreatePost
                        className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[104px] h-[200px] items-center justify-end sm:ml-[0] outline outline-[3px] outline-white-A700 p-1 rounded-[20px] shadow-bs w-full"
                        style={{
                          backgroundImage: "url('images/img_frame8634.png')",
                        }}
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <div
                  className="bg-cover bg-no-repeat border-[3px] border-solid border-white-A700 flex md:flex-1 flex-col h-[200px] justify-end p-[5px] rounded-[20px] shadow-bs w-[15%] md:w-full"
                  style={{ backgroundImage: "url('images/img_frame8643.png')" }}
                >
                  <Img
                    className="h-[50px] md:h-auto ml-1 md:ml-[0] mr-[74px] mt-[11px] rounded-[50%] w-[50px]"
                    src="images/img_mark.png"
                    alt="mark"
                  />
                  <Img
                    className="h-[30px] md:ml-[0] ml-[94px] mr-1 mt-[18px] w-[30px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                  <Text
                    className="mt-[55px] mx-auto text-base text-center text-white-A700"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Terry Fiscer
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat border-[3px] border-solid border-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[102px] h-[200px] items-end justify-end pl-1.5 py-1.5 rounded-[19px] shadow-bs w-[5%] md:w-full"
                  style={{ backgroundImage: "url('images/img_frame8708.png')" }}
                >
                  <Img
                    className="h-[50px] md:h-auto mt-2.5 object-cover rounded-[25px] w-[88%] sm:w-full"
                    src="images/img_janet.png"
                    alt="janet"
                  />
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Jacob Jones
                  </Text>
                </div>
              </div>
              <HomeCreateNewCreateJobListforyou className="flex flex-row gap-2.5 items-center justify-center max-w-[938px] rounded-lg w-full" />
              <HomeCreateNewCreateJobPost
                className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[527px] md:h-auto items-start justify-start px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full"
                moreoptionsicon="images/img_morevertfill1.svg"
                plusicon="images/img_plus_white_a700.svg"
              />
              <div className="bg-light_blue-900 border border-blue_gray-100_01 border-solid flex flex-col gap-2 items-center justify-start pl-2.5 py-2.5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between max-w-[918px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Add People
                  </Text>
                  <a
                    href="javascript:"
                    className="text-[13px] text-center text-white-A700 underline w-auto"
                  >
                    <Text size="txtPoppinsMedium13WhiteA700">See all</Text>
                  </a>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[87%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[180px]">
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
                      <Button
                        className="flex h-6 items-center justify-center rounded-[50%] w-6"
                        shape="circle"
                        color="light_blue_900"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-2.5"
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[180px]">
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
                      <Button
                        className="flex h-6 items-center justify-center rounded-[50%] w-6"
                        shape="circle"
                        color="light_blue_900"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-2.5"
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[216px]">
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
                            className="max-w-[100px] md:max-w-full text-[13px] text-gray-700"
                            size="txtPoppinsMedium13"
                          >
                            @writememoirs
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex h-6 items-center justify-center rounded-[50%] w-6"
                        shape="circle"
                        color="light_blue_900"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-2.5"
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </List>
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-28">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[102px]">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_mark_70x70.png"
                        alt="mark_One"
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
                    <div className="bg-light_blue-900 flex flex-col items-center justify-center p-[7px] w-auto">
                      <Img
                        className="h-2.5 w-px"
                        src="images/img_vector_white_a700_10x1.svg"
                        alt="vector_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <HomeCreateNewCreateJobPost1
                className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[527px] md:h-auto items-start justify-start px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full"
                moreicon="images/img_morevertfill1.svg"
              />
              <div className="bg-yellow-800 border border-blue_gray-100_01 border-solid flex flex-col gap-2 items-start justify-end pl-2.5 pt-2.5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[262px]">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Friend requests
                  </Text>
                  <a
                    href="javascript:"
                    className="text-[13px] text-center text-white-A700 underline w-auto"
                  >
                    <Text size="txtPoppinsMedium13WhiteA700">See all</Text>
                  </a>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[81%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                            shape="round"
                            color="light_blue_900"
                            size="sm"
                            variant="fill"
                          >
                            Accept
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                            shape="round"
                            color="red_A700"
                            size="sm"
                            variant="outline"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                            shape="round"
                            color="light_blue_900"
                            size="sm"
                            variant="fill"
                          >
                            Accept
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                            shape="round"
                            color="red_A700"
                            size="sm"
                            variant="outline"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                            className="max-w-[100px] md:max-w-full text-[13px] text-gray-700"
                            size="txtPoppinsMedium13"
                          >
                            @writememoirs
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Text
                            className="bg-light_blue-900 justify-center pt-[5px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                            size="txtPoppinsMedium13WhiteA700"
                          >
                            Accept
                          </Text>
                          <Text
                            className="border border-red-A700 border-solid pt-[5px] px-2.5 rounded-lg text-[13px] text-red-A700 w-auto"
                            size="txtPoppinsMedium13RedA700"
                          >
                            Decline
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_mark_70x70.png"
                      alt="mark_Three"
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
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                          shape="round"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          Accept
                        </Button>
                        <Text
                          className="border border-red-A700 border-solid pl-2.5 py-[5px] rounded-md text-[13px] text-red-A700 w-auto"
                          size="txtPoppinsMedium13RedA700"
                        >
                          Decline
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[20px] shadow-bs w-auto">
                <Text
                  className="text-[13px] text-center text-gray-700 w-auto"
                  size="txtPoppinsMedium13"
                >
                  Subscribe
                </Text>
                <Text
                  className="max-w-[262px] md:max-w-full text-base text-black-900_01"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Join our tribe, let’s create transgenerational legacy through
                  delivering a dignified future for all
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[156px] text-[13px] text-center"
                  onClick={() => navigate("/tribeentrylevels")}
                  shape="round"
                  color="light_blue_900"
                  size="md"
                  variant="fill"
                >
                  See tribe entry levels
                </Button>
              </div>
              <div className="bg-blue_gray-100_02 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[20px] shadow-bs w-auto">
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Trends for you
                </Text>
                <div className="flex flex-col items-start justify-start w-[262px]">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    Trending Now
                  </Text>
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #Hip Hop Fest
                  </Text>
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    12k posts
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[262px]">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    Trending Now
                  </Text>
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #Will Smith
                  </Text>
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    12k posts
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[262px]">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    Trending Now
                  </Text>
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #Burna
                  </Text>
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    12k posts
                  </Text>
                </div>
              </div>
              <div className="bg-light_blue-900 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[20px] shadow-bs w-auto">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[262px]">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Add People
                  </Text>
                  <a
                    href="javascript:"
                    className="text-[13px] text-center text-white-A700 underline w-auto"
                  >
                    <Text size="txtPoppinsMedium13WhiteA700">See all</Text>
                  </a>
                </div>
                <List
                  className="flex flex-col gap-2.5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[180px]">
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
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="light_blue_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-2.5"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[180px]">
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
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="light_blue_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-2.5"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[216px]">
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
                          className="max-w-[100px] md:max-w-full text-[13px] text-gray-700"
                          size="txtPoppinsMedium13"
                        >
                          @writememoirs
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="flex h-6 items-center justify-center rounded-[50%] w-6"
                      shape="circle"
                      color="light_blue_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-2.5"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                </List>
              </div>
              <div className="bg-yellow-800 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-center justify-start p-2.5 rounded-[20px] shadow-bs w-auto">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[262px]">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Friend requests
                  </Text>
                  <a
                    href="javascript:"
                    className="text-[13px] text-center text-white-A700 underline w-auto"
                  >
                    <Text size="txtPoppinsMedium13WhiteA700">See all</Text>
                  </a>
                </div>
                <List
                  className="flex flex-col gap-2.5 items-center w-[92%]"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                          shape="round"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          Accept
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="red_A700"
                          size="sm"
                          variant="outline"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                          shape="round"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          Accept
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="red_A700"
                          size="sm"
                          variant="outline"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                          className="max-w-[100px] md:max-w-full text-[13px] text-gray-700"
                          size="txtPoppinsMedium13"
                        >
                          @writememoirs
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                          shape="round"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          Accept
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="red_A700"
                          size="sm"
                          variant="outline"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
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
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[13px] text-center"
                          shape="round"
                          color="light_blue_900"
                          size="sm"
                          variant="fill"
                        >
                          Accept
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[69px] text-[13px] text-center"
                          shape="round"
                          color="red_A700"
                          size="sm"
                          variant="outline"
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;
