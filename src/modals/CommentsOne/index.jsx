import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const CommentsOneModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[79%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700_01 flex flex-col items-center justify-start max-w-[1192px] mx-auto my-4 p-[27px] md:px-5 rounded-[20px] w-full">
          <div className="flex flex-col gap-[7px] items-end justify-start mb-[5px] w-[99%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[56%] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtPoppinsMedium30"
              >
                My Post
              </Text>
              <Img
                className="common-pointer h-5 mt-1 w-5"
                src="images/img_close_blue_gray_900_20x20.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between w-full">
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[5px] p-[9px] rounded-[18px] shadow-bs6 w-[51%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-3 w-[97%] md:w-full">
                  <div className="md:h-[46px] h-[47px] relative w-[99%] sm:w-full">
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto rounded-[9px] w-full">
                      <div className="flex flex-row gap-[9.32px] items-center justify-start w-auto">
                        <Img
                          className="common-pointer h-[46px] md:h-auto rounded-[50%] w-[46px]"
                          src="images/img_hannah_46x46.png"
                          alt="hannah"
                          onClick={() => navigate("/homeviewprofile")}
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-row gap-[9.32px] items-center justify-start w-auto">
                            <Text
                              className="text-[14.91px] text-gray-900 w-auto"
                              size="txtPoppinsSemiBold1491"
                            >
                              Jake Aelf
                            </Text>
                            <Img
                              className="h-[9px] w-[9px]"
                              src="images/img_crownsvgrepocom.svg"
                              alt="crownsvgrepocom"
                            />
                          </div>
                          <div className="flex flex-row gap-[18.64px] items-center justify-start w-auto">
                            <Text
                              className="text-[12.11px] text-gray-700 w-auto"
                              size="txtPoppinsMedium1211"
                            >
                              @callmejake
                            </Text>
                            <div className="flex flex-row gap-[9.32px] items-center justify-start w-auto">
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                              <Text
                                className="text-[12.11px] text-gray-700 w-auto"
                                size="txtPoppinsMedium1211"
                              >
                                1hr
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[19%] flex flex-row gap-[9.32px] items-center justify-between right-[0] w-[54px]">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_morevertfill1_gray_900.svg"
                        alt="morevertfillOne"
                      />
                      <Button
                        className="flex h-[22px] items-center justify-center rounded-[50%] w-[22px]"
                        shape="circle"
                        color="light_blue_900"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[9px]"
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="mt-[9px] text-[14.91px] text-gray-900"
                    size="txtPoppinsSemiBold1491"
                  >
                    Looking to make friends, give me a follow
                  </Text>
                  <div className="h-[491px] md:h-[497px] mt-[7px] relative w-[99%] sm:w-full">
                    <div className="absolute bg-white-A700 h-[334px] inset-x-[0] mx-auto top-[0] w-full"></div>
                    <div className="absolute bg-lime-50 h-[489px] inset-y-[0] left-[0] my-auto w-[14%]"></div>
                    <div className="absolute bg-lime-50 h-[489px] inset-y-[0] my-auto right-[0] w-[14%]"></div>
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto w-[74%]">
                      <Img
                        className="h-[490px] md:h-auto object-cover w-full"
                        src="images/img_pexelsphotoby_490x385.png"
                        alt="pexelsphotoby"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[11px] w-full">
                    <div className="flex flex-row gap-[9.32px] items-center justify-start w-auto">
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text
                          className="text-[14.91px] text-gray-700 w-auto"
                          size="txtPoppinsSemiBold1491Gray700"
                        >
                          368
                        </Text>
                        <Img
                          className="h-[33px] w-[33px]"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text
                          className="text-[14.91px] text-gray-700 w-auto"
                          size="txtPoppinsSemiBold1491Gray700"
                        >
                          10
                        </Text>
                        <Img
                          className="h-[33px] w-[33px]"
                          src="images/img_forward.svg"
                          alt="forward"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text
                          className="text-[14.91px] text-gray-700 w-auto"
                          size="txtPoppinsSemiBold1491Gray700"
                        >
                          20
                        </Text>
                        <Img
                          className="h-[34px] w-[33px]"
                          src="images/img_frame8700.svg"
                          alt="frame8700"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text
                          className="text-[14.91px] text-gray-700 w-auto"
                          size="txtPoppinsSemiBold1491Gray700"
                        >
                          600
                        </Text>
                        <Img
                          className="h-[33px] w-[33px]"
                          src="images/img_barchartfill0.svg"
                          alt="barchartfillZero"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[9.32px] items-center justify-start w-auto">
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text
                          className="text-[14.91px] text-gray-700 w-auto"
                          size="txtPoppinsSemiBold1491Gray700"
                        >
                          10
                        </Text>
                        <Img
                          className="h-[33px] w-[33px]"
                          src="images/img_repost.svg"
                          alt="repost"
                        />
                      </div>
                      <Img
                        className="h-[33px] w-[33px]"
                        src="images/img_share_gray_700.svg"
                        alt="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[48%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtPoppinsRegular26"
                  >
                    Comments(12)
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mt-4 w-auto sm:w-full">
                    <Img
                      className="h-11 md:h-auto rounded-[50%] w-11"
                      src="images/img_tracy_44x44.png"
                      alt="tracy"
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[91%] sm:w-full">
                      <Img
                        className="h-[15px] sm:mt-0 mt-[13px] w-4"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <div className="bg-white-A700 flex flex-col p-1.5 relative rounded-[20px] shadow-bs4 w-[98%] sm:w-full">
                        <Text
                          className="mt-1.5 mx-auto text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14Bluegray900"
                        >
                          <>
                            Your Dog is so cute and Dreamy, OMG!, where did you
                            get Him,
                            <br />I loooove
                            <br />
                            You’re Cute Btw
                          </>
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-center ml-auto mr-2.5 mt-[-16px] w-auto z-[1]">
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
                          <Line className="bg-gray-900 h-4 w-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[74px] mt-[49px] w-[86%] md:w-full">
                    <Img
                      className="common-pointer h-[39px] md:h-auto sm:mt-0 mt-2 rounded-[50%] w-[39px]"
                      src="images/img_hannah_39x39.png"
                      alt="hannah_One"
                      onClick={() => navigate("/homeviewprofile")}
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 sm:ml-[0] w-[91%] sm:w-full">
                      <Img
                        className="h-[15px] sm:mt-0 mt-[13px] w-4"
                        src="images/img_refresh.svg"
                        alt="refresh_One"
                      />
                      <div className="bg-white-A700 flex flex-col gap-1.5 items-end justify-end p-[5px] rounded-[20px] shadow-bs4 w-[97%] sm:w-full">
                        <Text
                          className="mr-[5px] mt-[7px] text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14Bluegray900"
                        >
                          <>
                            Your Dog is so cute and Dreamy, OMG!, where did you
                            <br />
                            get Him,I loooove You’re Cute Btw
                          </>
                        </Text>
                        <Img
                          className="h-9 mr-[7px] w-[75px]"
                          src="images/img_frame9106_blue_gray_900.svg"
                          alt="frame9106"
                        />
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center mt-6 w-full"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-11 md:h-auto rounded-[50%] w-11"
                        src="images/img_tracy_44x44.png"
                        alt="tracy"
                      />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[91%] sm:w-full">
                        <Img
                          className="h-[15px] sm:mt-0 mt-[13px] w-4"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <div className="bg-white-A700 flex flex-col p-0.5 relative rounded-[20px] shadow-bs4 w-[98%] sm:w-full">
                          <Text
                            className="mt-2.5 mx-auto text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14Bluegray900"
                          >
                            <>
                              Your Dog is so cute and Dreamy, OMG!, where did
                              you get Him,
                              <br />I loooove
                              <br />
                              You’re Cute Btw
                            </>
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-center ml-auto mr-3.5 mt-[-12px] w-auto z-[1]">
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
                                alt="favorite"
                              />
                            </div>
                            <Line className="bg-gray-900 h-4 w-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-10 bg-gray-500 w-0.5" />
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-11 md:h-auto rounded-[50%] w-11"
                        src="images/img_tracy_44x44.png"
                        alt="tracy"
                      />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[91%] sm:w-full">
                        <Img
                          className="h-[15px] sm:mt-0 mt-[13px] w-4"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <div className="bg-white-A700 flex flex-col p-0.5 relative rounded-[20px] shadow-bs4 w-[98%] sm:w-full">
                          <Text
                            className="mt-2.5 mx-auto text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14Bluegray900"
                          >
                            <>
                              Your Dog is so cute and Dreamy, OMG!, where did
                              you get Him,
                              <br />I loooove
                              <br />
                              You’re Cute Btw
                            </>
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-center ml-auto mr-3.5 mt-[-12px] w-auto z-[1]">
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
                                alt="favorite"
                              />
                            </div>
                            <Line className="bg-gray-900 h-4 w-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-between pr-1.5 w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_jonas.png"
                    alt="jonas"
                  />
                  <div className="sm:h-[37px] h-[38px] md:h-[41px] sm:mt-0 mt-1 relative w-[86%] sm:w-full">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-4/5">
                      <div className="bg-indigo-50_02 flex flex-row items-center justify-between p-1.5 rounded-[9px] w-full">
                        <Text
                          className="ml-[18px] text-center text-gray-500 text-xs"
                          size="txtPoppinsSemiBold12"
                        >
                          Add Comment
                        </Text>
                        <Img
                          className="h-6 mr-[18px] w-[89px]"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-max inset-y-[0] leading-[normal] my-auto right-[0] rounded-[9px] text-[16.03px] text-center w-[108px]"
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
    </ModalProvider>
  );
};

export default CommentsOneModal;
