import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import CreatePost from "components/CreatePost";
import Header from "components/Header";
import HomeCreateNewCreateJobPost1 from "components/HomeCreateNewCreateJobPost1";

const HomeOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[362px] w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1416px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[13%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-row gap-[15px] items-center justify-center w-auto">
                  <Img
                    className="h-[38px] w-[30px]"
                    src="images/img_settings_blue_gray_900.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Forum
                  </Text>
                </div>
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[165px] pr-[35px]"
                  leftIcon={
                    <div className="mr-[15px] bg-blue_gray-900">
                      <Img
                        src="images/img_favorite_blue_gray_900.svg"
                        alt="favorite"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold leading-[normal] sm:pr-5 text-base text-gray-900 text-left">
                    Memories
                  </div>
                </Button>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_settings_blue_gray_900_30x30.svg"
                    alt="settings_One"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Albums
                  </Text>
                </div>
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[165px] pr-[35px]"
                  leftIcon={
                    <Img
                      className="mr-[15px]"
                      src="images/img_user_blue_gray_900.svg"
                      alt="user"
                    />
                  }
                >
                  <div className="font-semibold leading-[normal] sm:pr-5 text-base text-gray-900 text-left">
                    Groups
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[165px] pr-[35px]"
                  onClick={() => navigate("/pagediscover")}
                  leftIcon={
                    <div className="h-[30px] mr-[15px] w-[30px] bg-blue_gray-900">
                      <Img
                        className="h-[30px]"
                        src="images/img_vector_blue_gray_900_30x30.svg"
                        alt="Vector"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold leading-[normal] sm:pr-5 text-base text-gray-900 text-left">
                    Pages
                  </div>
                </Button>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-[26px] w-[30px]"
                    src="images/img_vector_blue_gray_900.svg"
                    alt="vector_One"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Jobs
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-[19px] w-[30px]"
                    src="images/img_close_blue_gray_900.svg"
                    alt="close"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Games
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-6 w-[30px]"
                    src="images/img_user_blue_gray_900_24x30.svg"
                    alt="user_One"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Subscriptions
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-center w-auto">
                  <Img
                    className="h-7 w-[30px]"
                    src="images/img_thumbsup_blue_gray_900.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Offers
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium h-[37px] leading-[normal] mt-10 rounded-[9px] text-[16.03px] text-center w-[166px]"
                shape="round"
                color="green_700"
                size="sm"
                variant="outline"
              >
                Create Advert
              </Button>
              <List
                className="flex flex-col gap-[47px] items-center mt-12 w-full"
                orientation="vertical"
              >
                <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                  <div className="flex flex-row gap-[11px] items-center justify-between w-[170px]">
                    <Text
                      className="text-base text-center text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Groups
                    </Text>
                    <Text
                      className="text-[13px] text-center text-green-700 underline w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      See all
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_frame8771.png"
                      alt="frame8771"
                    />
                    <Text
                      className="max-w-[125px] md:max-w-full text-[13px] text-gray-900"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Africa Startup Festival
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_image25.png"
                        alt="imageTwentyFive"
                      />
                    </div>
                    <Text
                      className="text-[13px] text-gray-900 w-auto"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Historical Images
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_jakeprofilepic.png"
                      alt="jakeprofilepic"
                    />
                    <Text
                      className="max-w-[125px] md:max-w-full text-[13px] text-gray-900"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Jake Aelf Malipoma Team
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_image26.png"
                        alt="imageTwentySix"
                      />
                    </div>
                    <Text
                      className="text-[13px] text-gray-900 w-auto"
                      size="txtPoppinsMedium13Gray900"
                    >
                      ChatGPT Experts
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                  <div className="flex flex-row gap-[11px] items-center justify-between w-[170px]">
                    <Text
                      className="text-base text-center text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Live Chats
                    </Text>
                    <Text
                      className="text-[13px] text-center text-green-700 underline w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      See all
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_frame8771.png"
                      alt="frame8771"
                    />
                    <Text
                      className="text-[13px] text-gray-900 w-auto"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Freke Alobam
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_image25.png"
                        alt="imageTwentyFive"
                      />
                    </div>
                    <Text
                      className="text-[13px] text-gray-900 w-auto"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Jake Aelf
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_jakeprofilepic.png"
                      alt="jakeprofilepic"
                    />
                    <Text
                      className="text-[13px] text-gray-900 w-auto"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Chris Wong
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[170px]">
                    <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_image26.png"
                        alt="imageTwentySix"
                      />
                    </div>
                    <Text
                      className="text-[13px] text-gray-900 w-auto"
                      size="txtPoppinsMedium13Gray900"
                    >
                      Nini Peters
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[11px] w-[67%] md:w-full">
              <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between pb-2 w-full">
                <div
                  className="common-pointer bg-white-A700 border-[3px] border-solid border-white-A700 flex md:flex-1 flex-col gap-[5px] items-center justify-start pb-1 rounded-[20px] shadow-bs w-[15%] md:w-full"
                  onClick={() => navigate("/storiescreatestory")}
                >
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
                    className="text-base text-center text-gray-900"
                    size="txtPoppinsMedium16"
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
                        onClick={() => navigate("/storiesmystory")}
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <div
                  className="bg-cover bg-no-repeat border-[3px] border-solid border-white-A700 flex md:flex-1 flex-col h-[200px] justify-start p-[5px] rounded-[20px] shadow-bs w-[15%] md:w-full"
                  style={{ backgroundImage: "url('images/img_frame8643.png')" }}
                >
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[5px] mt-3 rounded-[50%] w-[50px]"
                    src="images/img_mark.png"
                    alt="mark"
                  />
                  <Img
                    className="h-10 md:ml-[0] ml-[90px] mt-[13px] w-10"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright"
                  />
                  <Text
                    className="mt-[50px] mx-auto text-base text-center text-white-A700"
                    size="txtPoppinsMedium16WhiteA700"
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
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    Jacob Jones
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[30px] pt-6 rounded-[20px] shadow-bs4 w-[96%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-[95%] md:w-full">
                    <Img
                      className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                      src="images/img_jonas_88x88.png"
                      alt="jonas_Two"
                    />
                    <div className="bg-indigo-50_02 flex flex-col items-start justify-end mb-[29px] md:mt-0 mt-[22px] p-[7px] rounded-[9px]">
                      <Text
                        className="ml-0.5 md:ml-[0] text-gray-700 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Whats on your Mind?
                      </Text>
                    </div>
                  </div>
                  <div className="bg-green-700 flex flex-col items-center justify-end p-[13px] w-full">
                    <div className="flex md:flex-col flex-row gap-[27px] items-start justify-start mt-0.5 w-auto md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_vector_white_a700.svg"
                          alt="vector_Two"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Image
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Videos
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user_white_a700.svg"
                          alt="user_Two"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Feeling
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-5"
                          src="images/img_file.svg"
                          alt="file"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Files
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-[17px]"
                          src="images/img_menu.svg"
                          alt="menu"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Audio
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_upload_white_a700.svg"
                          alt="upload"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Reels
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-center w-auto">
                        <Img
                          className="h-6 w-[27px]"
                          src="images/img_vector_white_a700_24x27.svg"
                          alt="vector_Three"
                        />
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          Go Live
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-green-700 border-solid flex md:flex-col flex-row gap-[23px] items-end justify-start mt-9 p-3.5 rounded-[20px] shadow-bs5 w-[96%] md:w-full">
                <Img
                  className="h-[66px] mb-[13px] ml-3.5 md:ml-[0] md:mt-0 mt-[7px] w-[66px]"
                  src="images/img_settings_black_900.svg"
                  alt="settings_Two"
                />
                <div className="flex flex-col gap-1 items-start justify-start mb-2.5 w-auto md:w-full">
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Goodmorning Udo
                  </Text>
                  <Text
                    className="text-base text-gray-900"
                    size="txtPoppinsRegular16"
                  >
                    <>
                      Every New day is an Opportunity to Unlock your Trillion
                      U.S Dollar Worth of Passion and purpose
                      <br />
                      and Concert it into net worth
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start mt-[27px] p-2.5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-col items-center justify-start mb-3 w-[98%] md:w-full">
                  <div className="flex flex-col gap-2.5 h-[501px] md:h-auto items-start justify-start max-w-[898px] w-full">
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="common-pointer h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_hannah.png"
                          alt="hannah"
                          onClick={() => navigate("/homeviewprofile")}
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtPoppinsSemiBold16Gray900"
                            >
                              Jake Aelf
                            </Text>
                            <Img
                              className="h-2.5 w-2.5"
                              src="images/img_crownsvgrepocom.svg"
                              alt="crownsvgrepocom"
                            />
                          </div>
                          <div className="flex flex-row gap-5 items-center justify-start w-auto">
                            <Text
                              className="text-[13px] text-gray-700 w-auto"
                              size="txtPoppinsMedium13"
                            >
                              @callmejake
                            </Text>
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <Img
                                className="h-3 w-3"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                              <Text
                                className="text-[13px] text-gray-700"
                                size="txtPoppinsMedium13"
                              >
                                1hr
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[58px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_morevertfill1_gray_900.svg"
                          alt="morevertfillOne"
                        />
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
                            alt="plus_One"
                          />
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      Looking to make friends, give me a follow
                    </Text>
                    <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <div className="bg-lime-50 h-[359px] w-[28%]"></div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start w-[46%] md:w-full">
                        <Img
                          className="h-[359px] md:h-auto object-cover w-full"
                          src="images/img_pexelsphotoby.png"
                          alt="pexelsphotoby"
                        />
                      </div>
                      <div className="bg-lime-50 h-[359px] w-[27%]"></div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            368
                          </Text>
                          <Img
                            className="h-9 w-9"
                            src="images/img_favorite.svg"
                            alt="favorite"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            10
                          </Text>
                          <Img
                            className="h-9 w-9"
                            src="images/img_forward.svg"
                            alt="forward"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            20
                          </Text>
                          <Img
                            className="h-[37px] w-9"
                            src="images/img_frame8700.svg"
                            alt="frame8700"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            600
                          </Text>
                          <Img
                            className="h-9 w-9"
                            src="images/img_barchartfill0.svg"
                            alt="barchartfillZero"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            10
                          </Text>
                          <Img
                            className="h-9 w-9"
                            src="images/img_repost.svg"
                            alt="repost"
                          />
                        </div>
                        <Img
                          className="h-9 w-9"
                          src="images/img_send.svg"
                          alt="send"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[13px] w-full">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                      src="images/img_tracy_38x38.png"
                      alt="tracy"
                    />
                    <div className="bg-white-A700 md:h-[42px] h-[79px] md:ml-[0] ml-[11px] p-[3px] relative rounded-[20px] shadow-bs4 w-[67%] md:w-full">
                      <Text
                        className="absolute left-[2%] text-gray-900 text-sm top-[13%]"
                        size="txtPoppinsRegular14Gray900"
                      >
                        <>
                          Your Dog is so cute and Dreamy, OMG!, where did you
                          get Him, I loooove
                          <br />
                          You’re Cute Btw
                        </>
                      </Text>
                      <div className="absolute bottom-[4%] flex flex-row gap-4 items-center justify-center right-[3%] w-auto">
                        <div className="flex flex-row gap-[3px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            3
                          </Text>
                          <Img
                            className="h-4 w-5"
                            src="images/img_question.svg"
                            alt="question"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtPoppinsSemiBold16Gray700"
                          >
                            1
                          </Text>
                          <Img
                            className="h-9 w-9"
                            src="images/img_favorite.svg"
                            alt="favorite_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[120px] md:mt-0 mt-2.5 text-[13px] text-center text-green-700 underline"
                      size="txtPoppinsMedium13Green700"
                    >
                      View All Comments
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between mt-6 w-[99%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_jonas.png"
                      alt="jonas_Three"
                    />
                    <div className="h-[37px] relative w-[92%] md:w-full">
                      <div className="absolute bg-indigo-50_02 flex flex-row sm:gap-10 items-center justify-between left-[0] p-[5px] rounded-[9px] top-[0] w-[92%]">
                        <Text
                          className="ml-[18px] text-center text-gray-500 text-xs"
                          size="txtPoppinsSemiBold12"
                        >
                          Add Comment
                        </Text>
                        <Img
                          className="h-6 mr-[22px] w-[89px]"
                          src="images/img_upload.svg"
                          alt="upload_One"
                        />
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium h-full inset-y-[0] leading-[normal] my-auto right-[0] rounded-[9px] text-[16.03px] text-center w-[83px]"
                        shape="round"
                        color="green_700"
                        size="sm"
                        variant="fill"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-700 border border-blue_gray-100_01 border-solid flex flex-col gap-2 items-center justify-start mt-12 pl-2.5 py-2.5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between max-w-[918px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsSemiBold16WhiteA700"
                  >
                    Add People
                  </Text>
                  <a className="text-[13px] text-center text-white-A700 underline w-auto">
                    <Text
                      className="common-pointer"
                      size="txtPoppinsMedium13WhiteA700"
                      onClick={() => navigate("/homeaddpeopleseeall")}
                    >
                      See all
                    </Text>
                  </a>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mb-[29px] w-auto md:w-full">
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
                            className="text-base text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-28">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[102px]">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_mark_70x70.png"
                        alt="mark_One"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-900"
                          size="txtPoppinsSemiBold16Gray900"
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
                </div>
              </div>
              <HomeCreateNewCreateJobPost1 className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[527px] md:h-auto items-start justify-start mt-12 px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full" />
              <div className="bg-green-100_02 border border-blue_gray-100_01 border-solid flex flex-col gap-2 items-center justify-end mt-12 pl-2.5 pt-2.5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between max-w-[918px] w-full">
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Friend requests
                  </Text>
                  <a className="text-[13px] text-center text-green-700 underline w-auto">
                    <Text
                      className="common-pointer"
                      size="txtPoppinsMedium13Green700"
                      onClick={() => navigate("/homefriendrequestseeall")}
                    >
                      See all
                    </Text>
                  </a>
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 grid-cols-2 w-[54%] md:w-full"
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
                            className="text-base text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                            className="bg-light_blue-900 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                            size="txtPoppinsMedium13WhiteA700"
                          >
                            Accept
                          </Text>
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
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                            className="bg-light_blue-900 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                            size="txtPoppinsMedium13WhiteA700"
                          >
                            Accept
                          </Text>
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
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 grid-cols-2 w-[46%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-auto">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_ruby_70x70.png"
                        alt="ruby"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                            className="bg-light_blue-900 justify-center pt-1 px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                            size="txtPoppinsMedium13WhiteA700"
                          >
                            Accept
                          </Text>
                          <Text
                            className="border border-red-A700 border-solid pt-1 px-2.5 rounded-lg text-[13px] text-red-A700 w-auto"
                            size="txtPoppinsMedium13RedA700"
                          >
                            Decline
                          </Text>
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
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                            className="bg-light_blue-900 justify-center pb-0.5 pt-[7px] px-2.5 rounded-lg text-[13px] text-white-A700 w-auto"
                            size="txtPoppinsMedium13WhiteA700"
                          >
                            Accept
                          </Text>
                          <Text
                            className="border border-red-A700 border-solid pl-2.5 py-1 rounded-md text-[13px] text-red-A700 w-auto"
                            size="txtPoppinsMedium13RedA700"
                          >
                            Decline
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start ml-2 md:ml-[0] w-[21%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[99%] md:w-full">
                <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[20px] shadow-bs w-auto">
                  <Text
                    className="text-[13px] text-center text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    Subscribe
                  </Text>
                  <Text
                    className="max-w-[262px] md:max-w-full text-base text-gray-900"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    Join our tribe, let’s create transgenerational legacy
                    through delivering a dignified future for all
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[156px] text-[13px] text-center"
                    onClick={() => navigate("/tribeentrylevels")}
                    shape="round"
                    color="green_700"
                    size="md"
                    variant="fill"
                  >
                    See tribe entry levels
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[20px] shadow-bs4 w-auto">
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtPoppinsSemiBold16Gray900"
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
                      className="text-base text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      #HipHopFest
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
                      className="text-base text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      #WillSmith
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
                      className="text-base text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
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
                <div className="bg-light_blue-900 flex md:h-[171px] h-[249px] justify-end pl-2 pt-2 relative rounded-[20px] shadow-bs4 w-full">
                  <div className="md:h-[171px] h-[233px] mt-auto mx-auto w-[98%]">
                    <div className="md:h-[171px] h-[233px] m-auto w-full">
                      <div className="absolute bottom-[0] md:h-[171px] h-[206px] right-[0] w-[63%]">
                        <Img
                          className="absolute h-[145px] right-[0] top-[0]"
                          src="images/img_vector165.svg"
                          alt="vector165"
                        />
                        <Img
                          className="absolute bottom-[0] h-[171px] inset-x-[0] mx-auto w-[170px]"
                          src="images/img_vector166.svg"
                          alt="vector166"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[139px] left-[0]"
                        src="images/img_vector166.svg"
                        alt="vector167"
                      />
                      <div className="absolute flex flex-col gap-[7px] items-start justify-start left-[3%] top-[0] w-auto">
                        <Text
                          className="text-center text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          Join Our Marketplace
                        </Text>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          <>
                            Get Started with Buying and Selling
                            <br />
                            Products/Services
                          </>
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[171px] object-cover right-[0] w-[72%]"
                      src="images/img_image96.png"
                      alt="imageNinetySix"
                    />
                  </div>
                  <Button
                    className="common-pointer absolute bottom-[39%] cursor-pointer font-medium leading-[normal] left-[6%] min-w-[81px] text-[13px] text-center"
                    onClick={() => navigate("/tribeentrylevels")}
                    shape="round"
                    color="green_700"
                    size="md"
                    variant="fill"
                  >
                    See More
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[19px] rounded-[20px] shadow-bs4 w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      Invite Friends and Family
                    </Text>
                    <div className="h-[30px] relative w-full">
                      <Input
                        name="group295"
                        placeholder="Enter Email"
                        className="!placeholder:text-gray-700 !text-gray-700 font-semibold leading-[normal] p-0 text-[8px] text-center w-full"
                        wrapClassName="absolute inset-y-[0] left-[0] my-auto w-[85%]"
                        type="email"
                        shape="round"
                        color="indigo_50_02"
                        size="md"
                        variant="fill"
                      ></Input>
                      <Button
                        className="absolute cursor-pointer font-medium h-full inset-y-[0] leading-[normal] min-w-[54px] my-auto right-[0] text-[13px] text-center"
                        shape="round"
                        color="green_700"
                        size="sm"
                        variant="fill"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-center p-2.5 rounded-[20px] shadow-bs4 w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-between mt-1.5 w-[262px]">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      Friend requests
                    </Text>
                    <a className="text-[13px] text-center text-green-700 underline w-auto">
                      <Text
                        className="common-pointer"
                        size="txtPoppinsMedium13Green700"
                        onClick={() => navigate("/homefriendrequestseeall")}
                      >
                        See all
                      </Text>
                    </a>
                  </div>
                  <List
                    className="flex flex-col gap-2.5 items-center mb-1.5 w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_hannah_70x70.png"
                        alt="hannah"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_tracy_70x70.png"
                        alt="tracy"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_ruby_70x70.png"
                        alt="ruby"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-start justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-[262px]">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_mark_70x70.png"
                        alt="mark"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtPoppinsSemiBold16Gray900"
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
                        <div className="flex flex-col items-center justify-start w-auto">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start ml-1 md:ml-[0] p-2.5 rounded-[20px] shadow-bs4 w-[99%] md:w-full">
                <div className="flex flex-col gap-[21px] h-[262px] items-center justify-start mb-4 mt-1.5 w-[262px]">
                  <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      Places you may Know
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <Img
                      className="h-[98px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle1614.png"
                      alt="rectangle1614"
                    />
                    <Img
                      className="h-[98px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle1613.png"
                      alt="rectangle1613"
                    />
                  </div>
                  <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                    <Img
                      className="h-[98px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle1615.png"
                      alt="rectangle1615"
                    />
                    <Img
                      className="h-[98px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle1616.png"
                      alt="rectangle1616"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:ml-[0] ml-[55px] w-[207px]">
                <div className="flex flex-col gap-[7px] items-center justify-start w-[95%]">
                  <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPoppinsRegular14Bluegray900"
                    >
                      Privacy{" "}
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPoppinsRegular14Bluegray900"
                    >
                      Terms
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPoppinsRegular14Bluegray900"
                    >
                      Contitions
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-[97%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPoppinsRegular14Bluegray900"
                    >
                      Cookies
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPoppinsRegular14Bluegray900"
                    >
                      Dignitypoint2023
                    </Text>
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

export default HomeOnePage;
