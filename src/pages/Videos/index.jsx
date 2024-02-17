import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";
import HomeCreateNewCreateJobPost1 from "components/HomeCreateNewCreateJobPost1";

const VideosPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-8 items-center justify-start mx-auto w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-white-A700 flex flex-col items-start justify-end max-w-[1259px] mx-auto pt-[19px] md:px-5 px-[19px] rounded-[20px] shadow-bs4 w-full">
          <Text
            className="ml-1 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtPoppinsMedium30"
          >
            Videos
          </Text>
          <div className="flex md:flex-col flex-row gap-12 items-center justify-center md:ml-[0] ml-[9px] mt-[11px] w-auto md:w-full">
            <div className="flex flex-col gap-1 items-center justify-center w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img className="h-6 w-6" src="images/img_sort.svg" alt="sort" />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Explore
                </Text>
              </div>
              <div className="bg-green-700 h-1.5 w-[37%]"></div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-[27px]"
                src="images/img_vector_black_900_24x27.svg"
                alt="vector_One"
              />
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Live
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_upload_gray_900.svg"
                alt="upload"
              />
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Reels
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-[18px]"
                src="images/img_bookmark_black_900.svg"
                alt="bookmark"
              />
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Saved videos
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[9px] mt-[46px] p-3 rounded-[25px] shadow-bs9 w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-[15px] w-[98%] md:w-full">
              <div className="flex flex-col gap-[12.86px] h-[644px] md:h-auto items-start justify-start max-w-[1154px] w-full">
                <div className="h-16 relative w-[1154px] md:w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-between m-auto max-w-[1154px] rounded-[12px] w-full">
                    <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                      <Img
                        className="common-pointer h-16 md:h-auto rounded-[50%] w-16"
                        src="images/img_hannah_64x64.png"
                        alt="hannah"
                        onClick={() => navigate("/homeviewprofile")}
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                          <Text
                            className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-900 w-auto"
                            size="txtPoppinsSemiBold2057"
                          >
                            Jake Aelf
                          </Text>
                          <Img
                            className="h-3 w-3"
                            src="images/img_crownsvgrepocom.svg"
                            alt="crownsvgrepocom"
                          />
                        </div>
                        <div className="flex flex-row gap-[25.71px] items-center justify-start w-auto">
                          <Text
                            className="text-[16.71px] text-gray-700 w-auto"
                            size="txtPoppinsMedium1671"
                          >
                            @callmejake
                          </Text>
                          <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_bookmark.svg"
                              alt="bookmark_One"
                            />
                            <Text
                              className="text-[16.71px] text-gray-700 w-auto"
                              size="txtPoppinsMedium1671"
                            >
                              1hr
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row gap-[12.86px] h-max inset-y-[0] items-center justify-between my-auto right-[0] w-[74px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_morevertfill1_gray_900.svg"
                      alt="morevertfillOne"
                    />
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                      shape="circle"
                      color="light_blue_900"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                </div>
                <Text
                  className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-900 w-auto"
                  size="txtPoppinsSemiBold2057"
                >
                  Looking to make friends, give me a follow
                </Text>
                <div className="bg-white-A700 h-[461px] md:h-[941px] relative w-full">
                  <div className="h-[461px] md:h-[941px] m-auto w-full">
                    <div className="h-[461px] md:h-[941px] m-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-evenly m-auto w-full">
                        <div className="h-[461px] relative w-[74%] md:w-full">
                          <div className="absolute bg-lime-50 flex flex-col h-full inset-y-[0] items-end justify-end left-[0] my-auto p-2.5 w-[38%]">
                            <Img
                              className="h-6 mr-[59px] mt-[416px]"
                              src="images/img_settings_blue_gray_900_24x22.svg"
                              alt="settings"
                            />
                          </div>
                          <div className="absolute bg-white-A700 h-[461px] inset-y-[0] my-auto right-[0] w-[63%] sm:w-full">
                            <Img
                              className="h-[461px] m-auto object-cover w-full"
                              src="images/img_pexelsphotoby.png"
                              alt="pexelsphotoby"
                            />
                            <Img
                              className="absolute h-[70px] inset-x-[0] mx-auto top-[36%]"
                              src="images/img_play_green_700.svg"
                              alt="play"
                            />
                          </div>
                        </div>
                        <div className="bg-lime-50 flex md:flex-1 flex-col items-start justify-end pt-[35px] sm:px-5 px-[35px] w-[27%] md:w-full">
                          <Img
                            className="h-[39px] mt-[386px] w-[82px]"
                            src="images/img_user_blue_gray_900_39x82.svg"
                            alt="user"
                          />
                        </div>
                      </div>
                      <Line className="absolute bg-gray-500 bottom-[3%] h-1 inset-x-[0] mx-auto w-[53%]" />
                    </div>
                    <Line className="absolute bg-green-700 bottom-[3%] h-1.5 left-[23%] w-[24%]" />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[2%] h-5 left-[46%] rounded-[50%] w-5"></div>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        368
                      </Text>
                      <Img
                        className="h-[46px] w-[46px]"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        10
                      </Text>
                      <Img
                        className="h-[46px] w-[46px]"
                        src="images/img_forward.svg"
                        alt="forward"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        20
                      </Text>
                      <Img
                        className="h-[47px] w-[46px]"
                        src="images/img_frame8700.svg"
                        alt="frame8700"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        600
                      </Text>
                      <Img
                        className="h-[46px] w-[46px]"
                        src="images/img_barchartfill0.svg"
                        alt="barchartfillZero"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12.86px] items-center justify-start w-auto">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        10
                      </Text>
                      <Img
                        className="h-[46px] w-[46px]"
                        src="images/img_repost.svg"
                        alt="repost"
                      />
                    </div>
                    <Img
                      className="h-[46px] w-[46px]"
                      src="images/img_share_gray_700.svg"
                      alt="search_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mt-4 w-full">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_tracy_48x48.png"
                  alt="tracy"
                />
                <div className="bg-white-A700 h-[101px] md:h-[54px] ml-3.5 md:ml-[0] p-[3px] relative rounded-[25px] shadow-bs10 w-[67%] md:w-full">
                  <Text
                    className="absolute left-[2%] text-gray-900 text-lg top-[12%]"
                    size="txtPoppinsRegular18Gray900"
                  >
                    <>
                      Your Dog is so cute and Dreamy, OMG!, where did you get
                      Him, I loooove
                      <br />
                      You’re Cute Btw
                    </>
                  </Text>
                  <div className="absolute bottom-[3%] flex flex-row gap-[20.57px] items-center justify-between right-[2%] w-auto">
                    <div className="flex flex-row gap-[3.86px] items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        3
                      </Text>
                      <Img
                        className="h-5 w-[26px]"
                        src="images/img_question.svg"
                        alt="question"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="sm:text-[16.57px] md:text-[18.57px] text-[20.57px] text-gray-700 w-auto"
                        size="txtPoppinsSemiBold2057Gray700"
                      >
                        1
                      </Text>
                      <Img
                        className="h-[46px] w-[46px]"
                        src="images/img_favorite.svg"
                        alt="favorite_One"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[154px] md:mt-0 mt-3 text-[16.71px] text-center text-green-700 underline"
                  size="txtPoppinsMedium1671Green700"
                >
                  View All Comments
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between mt-[30px] w-[99%] md:w-full">
                <Img
                  className="h-16 md:h-auto rounded-[50%] w-16"
                  src="images/img_jonas_64x64.png"
                  alt="jonas_One"
                />
                <div className="h-12 md:h-[47px] relative w-[92%] md:w-full">
                  <div className="absolute bg-indigo-50_02 flex flex-row sm:gap-10 items-center justify-between left-[0] p-[7px] rounded-[12px] top-[0] w-[92%]">
                    <Text
                      className="ml-[23px] text-[15.43px] text-center text-gray-500"
                      size="txtPoppinsSemiBold1543"
                    >
                      Add Comment
                    </Text>
                    <Img
                      className="h-[30px] mr-[29px] w-[115px]"
                      src="images/img_frame8846.svg"
                      alt="frame8846"
                    />
                  </div>
                  <Button
                    className="absolute cursor-pointer font-medium h-max inset-y-[0] leading-[normal] my-auto right-[0] rounded-[12px] sm:text-[16.61px] md:text-[18.61px] text-[20.61px] text-center w-[106px]"
                    color="green_700"
                    size="md"
                    variant="fill"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <HomeCreateNewCreateJobPost1 className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-[12.58px] h-[333px] md:h-auto items-start justify-start ml-5 md:ml-[0] mt-8 sm:px-5 px-[25.16px] py-[12.58px] rounded-[25px] shadow-bs w-auto md:w-full" />
        </div>
      </div>
    </>
  );
};

export default VideosPage;
