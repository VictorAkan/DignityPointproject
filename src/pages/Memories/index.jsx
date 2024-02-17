import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const MemoriesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-[25px] items-center justify-start mx-auto pb-[35px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[993px] mx-auto pt-[5px] md:px-5 px-[5px] shadow-bs4 w-full">
          <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtPoppinsMedium30Black900"
              >
                Memories
              </Text>
              <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  Repost
                </Text>
                <Img
                  className="h-3.5 w-6"
                  src="images/img_share.svg"
                  alt="share"
                />
              </div>
            </div>
            <div className="flex flex-col mt-6 relative w-[32%]">
              <div className="bg-green-100_02 flex flex-col items-center justify-center mx-auto px-2.5 py-5 rounded-[20px] w-[295px]">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  On this Day, 3 years ago
                </Text>
              </div>
              <Img
                className="h-[35px] ml-auto mr-[7px] mt-[-17.5px] z-[1]"
                src="images/img_television_green_100_02.svg"
                alt="television_One"
              />
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-end mt-[21px] p-[5px] rounded-[20px] shadow-bs w-full">
              <div className="flex flex-col items-center justify-start mt-[5px] w-[97%] md:w-full">
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
                          alt="plus"
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
                          alt="repost_One"
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
                        Your Dog is so cute and Dreamy, OMG!, where did you get
                        Him, I loooove
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
                    alt="jonas_One"
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
                        alt="upload"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoriesPage;
