import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import MemoriesMyMemoriesReactionbar from "components/MemoriesMyMemoriesReactionbar";

import { CloseSVG } from "../../assets/images";

const ForunPage = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-poppins items-center justify-start mx-auto pb-[94px] w-full">
        <div className="flex flex-col gap-[7px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-[7px] items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[182px] p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[202px] w-auto">
                <div className="flex flex-row items-center justify-between w-[300px]">
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Pages / Create Page
                    </Text>
                    <Text
                      className="text-base text-black-900_01 w-auto"
                      size="txtPoppinsSemiBold16Black90001"
                    >
                      Create Page
                    </Text>
                  </div>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Step 4/4
                  </Text>
                  <Text
                    className="max-w-[300px] md:max-w-full text-base text-gray-700"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Send an invite to your friends to like your page
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Input
                    name="searchbar"
                    placeholder="Search for people"
                    value={searchbarvalue}
                    onChange={(e) => setSearchbarvalue(e)}
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-500_01 text-[13px] text-center w-full"
                    wrapClassName="flex w-[300px]"
                    suffix={
                      <div className="h-3.5 mt-px mb-1 ml-[35px] w-3.5 bg-gray-700">
                        {searchbarvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer h-3.5 my-auto"
                            onClick={() => setSearchbarvalue("")}
                            fillColor="#989d9f"
                            height={14}
                            width={14}
                            viewBox="0 0 14 14"
                          />
                        ) : (
                          <Img
                            className="cursor-pointer h-3.5 my-auto"
                            src="images/img_search_gray_700_14x14.svg"
                            alt="search"
                          />
                        )}
                      </div>
                    }
                    shape="round"
                    color="indigo_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                  <List
                    className="flex flex-col gap-2.5 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_mark.png"
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
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_ruby.png"
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
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_tracy.png"
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
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <div
                      className="common-pointer bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]"
                      onClick={() => navigate("/homeviewprofile")}
                    >
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_hannah.png"
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
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                  </List>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Text
                    className="text-[13px] text-center text-light_blue-900 underline w-auto"
                    size="txtPoppinsMedium13Lightblue900"
                  >
                    Skip, invite friends later
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[300px] rounded-[12px] text-base text-center"
                    onClick={() => navigate("/loadingfour")}
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Done
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[77%] md:w-full">
              <div className="md:h-[188px] sm:h-[247px] h-[249px] relative w-full">
                <div className="absolute bottom-[0] flex flex-col gap-[19px] inset-x-[0] justify-start mx-auto w-full">
                  <div className="bg-white-A700 flex h-[143px] md:h-[63px] justify-end pt-20 relative rounded-[20px] w-full">
                    <div className="bg-gradient5  h-[63px] mt-auto mx-auto rounded-bl-[20px] rounded-br-[20px] shadow-bs w-full"></div>
                    <div className="absolute bottom-[11%] flex flex-col items-center justify-between left-[14%] w-[133px]">
                      <Text
                        className="text-black-900_01 text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Tribe Name
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[161px] w-auto">
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
                    <List
                      className="sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[47%]"
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
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[99px] h-full inset-y-[0] justify-start left-[1%] my-auto w-[13%]">
                  <Text
                    className="text-black-900_01 text-center text-xl"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Forum
                  </Text>
                  <div className="bg-white-A700 border-2 border-blue_gray-100_01 border-solid flex flex-col h-[120px] items-center justify-start md:ml-[0] ml-[19px] p-[29px] sm:px-5 rounded-[50%] w-[120px]">
                    <Img
                      className="h-[60px] w-[61px]"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  </div>
                </div>
              </div>
              <div className="gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-end justify-start ml-12 md:ml-[0] mt-[30px] w-auto md:w-full">
                <Button
                  className="cursor-pointer font-medium h-[37px] leading-[normal] min-w-[153px] rounded-[18px] text-center text-sm w-full"
                  color="green_700"
                  size="md"
                  variant="outline"
                >
                  Monthly Challenge
                </Button>
                <Button
                  className="cursor-pointer font-medium h-[37px] leading-[normal] rounded-[18px] text-center text-sm w-full"
                  color="gray_700"
                  size="md"
                  variant="outline"
                >
                  Resources Area
                </Button>
                <Button
                  className="cursor-pointer font-medium h-[37px] leading-[normal] rounded-[18px] text-center text-sm w-full"
                  color="gray_700"
                  size="md"
                  variant="outline"
                >
                  Opportunity Area
                </Button>
                <Button
                  className="cursor-pointer font-medium h-[37px] leading-[normal] rounded-[18px] text-center text-sm w-full"
                  color="gray_700"
                  size="md"
                  variant="outline"
                >
                  Testimonies
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1080px] md:ml-[0] ml-[5px] mt-[31px] sm:px-5 px-6 py-2.5 rounded-lg w-full">
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
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col h-[527px] md:h-auto items-start justify-start md:ml-[0] ml-[75px] mt-2.5 px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full">
                <div className="flex flex-col gap-2.5 h-[517px] md:h-auto items-start justify-start max-w-[916px] w-full">
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[239px]">
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[50px]"
                        src="images/img_image52.png"
                        alt="imageFiftyTwo"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Tribe Name
                          </Text>
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_crownsvgrepocom.svg"
                            alt="crownsvgrepocom"
                          />
                        </div>
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
                    <Img
                      className="h-6 w-6"
                      src="images/img_morevertfill1.svg"
                      alt="morevertfillOne"
                    />
                  </div>
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Post caption here...
                  </Text>
                  <div className="bg-white-A700_01 flex flex-col items-center justify-end pt-[27px] sm:px-5 px-[27px] rounded-[15px] w-full">
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start mt-[34px] w-full">
                      <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex md:flex-1 flex-col items-center justify-end md:mt-0 mt-1 pt-1.5 px-1.5 rounded-[14px] shadow-bs14 w-[51%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                          <div className="h-9 md:h-[35px] relative w-[99%] sm:w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto rounded-[7px] w-full">
                              <div className="flex flex-row gap-[7.16px] items-center justify-start w-auto">
                                <Img
                                  className="common-pointer h-[35px] md:h-auto rounded-[50%] w-[35px]"
                                  src="images/img_hannah_35x35.png"
                                  alt="hannah"
                                  onClick={() => navigate("/homeviewprofile")}
                                />
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[7.16px] items-center justify-start w-auto">
                                    <Text
                                      className="text-[11.46px] text-gray-900 w-auto"
                                      size="txtPoppinsSemiBold1146"
                                    >
                                      Jake Aelf
                                    </Text>
                                    <Img
                                      className="h-[7px] w-[7px]"
                                      src="images/img_crownsvgrepocom.svg"
                                      alt="crownsvgrepocom_One"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-[14.33px] items-center justify-start w-auto">
                                    <Text
                                      className="text-[9.31px] text-gray-700 w-auto"
                                      size="txtPoppinsMedium931"
                                    >
                                      @callmejake
                                    </Text>
                                    <div className="flex flex-row gap-[7.16px] items-center justify-start w-auto">
                                      <Img
                                        className="h-2 w-2"
                                        src="images/img_bookmark.svg"
                                        alt="bookmark_One"
                                      />
                                      <Text
                                        className="text-[9.31px] text-gray-700"
                                        size="txtPoppinsMedium931"
                                      >
                                        1hr
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-[19%] flex flex-row gap-[7.16px] items-center justify-between right-[0] w-[41px]">
                              <Img
                                className="h-[17px] w-[17px]"
                                src="images/img_morevertfill1_gray_900.svg"
                                alt="morevertfillOne_One"
                              />
                              <div className="bg-light_blue-900 flex flex-col items-center justify-center p-[5.01px] rounded-lg w-[17px]">
                                <Img
                                  className="h-[7px] w-[7px]"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus"
                                />
                              </div>
                            </div>
                          </div>
                          <Text
                            className="mt-[7px] text-[11.46px] text-gray-900"
                            size="txtPoppinsSemiBold1146"
                          >
                            Looking to make friends, give me a follow
                          </Text>
                          <div className="h-[282px] md:h-[287px] mt-[5px] relative w-[99%] sm:w-full">
                            <div className="absolute bg-white-A700 h-64 inset-x-[0] mx-auto top-[0] w-full"></div>
                            <div className="absolute bg-lime-50 h-[282px] inset-y-[0] left-[0] my-auto w-[14%]"></div>
                            <div className="absolute bg-lime-50 h-[281px] inset-y-[0] my-auto right-[0] w-[14%]"></div>
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto w-[74%]">
                              <Img
                                className="h-[282px] md:h-auto object-cover w-full"
                                src="images/img_pexelsphotoby_490x385.png"
                                alt="pexelsphotoby"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[103px] w-full">
                            <div className="flex flex-row gap-[7.16px] items-center justify-start w-auto">
                              <List
                                className="sm:flex-col flex-row gap-[7px] grid grid-cols-2 w-[48%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Img
                                    className="h-px w-[25px]"
                                    src="images/img_frame8695.svg"
                                    alt="frame8695"
                                  />
                                  <Text
                                    className="text-[11.46px] text-gray-700 w-auto"
                                    size="txtPoppinsSemiBold1146Gray700"
                                  >
                                    368
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Img
                                    className="h-px w-[25px]"
                                    src="images/img_frame8700_gray_700.svg"
                                    alt="frame8700"
                                  />
                                  <Text
                                    className="text-[11.46px] text-gray-700 w-auto"
                                    size="txtPoppinsSemiBold1146Gray700"
                                  >
                                    10
                                  </Text>
                                </div>
                              </List>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Img
                                  className="h-px w-[25px]"
                                  src="images/img_frame8700_blue_gray_900.svg"
                                  alt="frame8700"
                                />
                                <Text
                                  className="text-[11.46px] text-gray-700 w-auto"
                                  size="txtPoppinsSemiBold1146Gray700"
                                >
                                  20
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Img
                                  className="h-px w-[25px]"
                                  src="images/img_barchartfill0.svg"
                                  alt="barchartfillZero"
                                />
                                <Text
                                  className="text-[11.46px] text-gray-700 w-auto"
                                  size="txtPoppinsSemiBold1146Gray700"
                                >
                                  600
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[7.16px] items-center justify-start w-auto">
                              <div className="flex flex-row items-center justify-start w-auto">
                                <Text
                                  className="text-[11.46px] text-gray-700 w-auto"
                                  size="txtPoppinsSemiBold1146Gray700"
                                >
                                  10
                                </Text>
                                <Img
                                  className="h-px w-[25px]"
                                  src="images/img_repost_gray_700.svg"
                                  alt="repost"
                                />
                              </div>
                              <Img
                                className="h-px w-[25px]"
                                src="images/img_share_gray_700.svg"
                                alt="share"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                        <Text
                          className="text-[19.99px] text-gray-900"
                          size="txtPoppinsRegular1999"
                        >
                          Comments(12)
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6.15px] items-start justify-start mt-3 w-auto sm:w-full">
                          <Img
                            className="h-[33px] md:h-auto rounded-[50%] w-[33px]"
                            src="images/img_tracy_33x33.png"
                            alt="tracy"
                          />
                          <div className="flex flex-row items-start justify-start w-[91%] sm:w-full">
                            <Img
                              className="h-[11px] mt-[9px] w-3"
                              src="images/img_refresh.svg"
                              alt="refresh"
                            />
                            <div className="bg-white-A700 flex flex-col relative rounded-[15px] shadow-bs15 w-[97%]">
                              <Text
                                className="mt-[7px] mx-auto text-[10.76px] text-blue_gray-900"
                                size="txtPoppinsRegular1076"
                              >
                                <>
                                  Your Dog is so cute and Dreamy, OMG!, where
                                  did you get Him,
                                  <br />I loooove
                                  <br />
                                  You’re Cute Btw
                                </>
                              </Text>
                              <div className="flex flex-row gap-[12.3px] items-center justify-between ml-auto mr-[9px] mt-[-9.22px] w-auto z-[1]">
                                <div className="flex flex-row gap-[2.31px] items-center justify-start w-auto">
                                  <Text
                                    className="text-[12.3px] text-gray-700 w-auto"
                                    size="txtPoppinsSemiBold123"
                                  >
                                    3
                                  </Text>
                                  <Img
                                    className="h-3 w-4"
                                    src="images/img_question.svg"
                                    alt="question"
                                  />
                                </div>
                                <div className="flex flex-row items-center justify-start w-auto">
                                  <Text
                                    className="text-[12.3px] text-gray-700 w-auto"
                                    size="txtPoppinsSemiBold123"
                                  >
                                    1
                                  </Text>
                                  <Img
                                    className="h-[27px] w-[27px]"
                                    src="images/img_favorite.svg"
                                    alt="favorite"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-gray-500 h-[30px] md:ml-[0] ml-[71px] mt-1.5 w-px" />
                        <div className="flex flex-row items-start justify-end ml-14 md:ml-[0] w-[86%] md:w-full">
                          <Img
                            className="common-pointer h-[30px] md:h-auto mt-1.5 rounded-[50%] w-[30px]"
                            src="images/img_hannah_30x30.png"
                            alt="hannah_One"
                            onClick={() => navigate("/homeviewprofile")}
                          />
                          <div className="flex flex-row items-start justify-start w-[91%]">
                            <Img
                              className="h-[11px] mt-[9px] w-3"
                              src="images/img_refresh.svg"
                              alt="refresh_One"
                            />
                            <div className="bg-white-A700 flex flex-col items-end justify-end p-[3px] rounded-[15px] shadow-bs15 w-[97%]">
                              <Text
                                className="mr-[3px] mt-[5px] text-[10.76px] text-blue_gray-900"
                                size="txtPoppinsRegular1076"
                              >
                                <>
                                  Your Dog is so cute and Dreamy, OMG!, where
                                  did you
                                  <br />
                                  get Him,I loooove You’re Cute Btw
                                </>
                              </Text>
                              <Img
                                className="h-[27px] mt-1 w-[49px]"
                                src="images/img_frame9106.svg"
                                alt="frame9106"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[6.15px] items-start justify-start mt-[18px] w-auto sm:w-full">
                          <Img
                            className="h-[33px] md:h-auto rounded-[50%] w-[33px]"
                            src="images/img_tracy_33x33.png"
                            alt="tracy_One"
                          />
                          <div className="flex flex-row items-start justify-start w-[91%] sm:w-full">
                            <Img
                              className="h-[11px] mt-[9px] w-3"
                              src="images/img_refresh.svg"
                              alt="refresh_Two"
                            />
                            <div className="bg-white-A700 flex flex-col relative rounded-[15px] shadow-bs15 w-[97%]">
                              <Text
                                className="mt-[7px] mx-auto text-[10.76px] text-blue_gray-900"
                                size="txtPoppinsRegular1076"
                              >
                                <>
                                  Your Dog is so cute and Dreamy, OMG!, where
                                  did you get Him,
                                  <br />I loooove
                                  <br />
                                  You’re Cute Btw
                                </>
                              </Text>
                              <div className="flex flex-row gap-[12.3px] items-center justify-between ml-auto mr-[9px] mt-[-9.22px] w-auto z-[1]">
                                <div className="flex flex-row gap-[2.31px] items-center justify-start w-auto">
                                  <Text
                                    className="text-[12.3px] text-gray-700 w-auto"
                                    size="txtPoppinsSemiBold123"
                                  >
                                    3
                                  </Text>
                                  <Img
                                    className="h-3 w-4"
                                    src="images/img_question.svg"
                                    alt="question_One"
                                  />
                                </div>
                                <div className="flex flex-row items-center justify-start w-auto">
                                  <Text
                                    className="text-[12.3px] text-gray-700 w-auto"
                                    size="txtPoppinsSemiBold123"
                                  >
                                    1
                                  </Text>
                                  <Img
                                    className="h-[27px] w-[27px]"
                                    src="images/img_favorite.svg"
                                    alt="favorite_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[6.15px] items-start justify-start mt-[18px] w-auto sm:w-full">
                          <Img
                            className="h-2.5 md:h-auto object-cover rounded-[16px] w-[33px] sm:w-full"
                            src="images/img_tracy_33x33.png"
                            alt="tracy_Two"
                          />
                          <Img
                            className="h-2.5 w-[364px]"
                            src="images/img_group297.svg"
                            alt="group297"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between max-w-[898px] w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForunPage;
