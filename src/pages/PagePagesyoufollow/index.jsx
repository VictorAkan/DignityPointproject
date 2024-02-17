import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header2 from "components/Header2";
import MemoriesMyMemoriesReactionbar from "components/MemoriesMyMemoriesReactionbar";

import { CloseSVG } from "../../assets/images";

const PagePagesyoufollow = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-2.5 items-center justify-start mx-auto w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1412px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[496px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Pages
                  </Text>
                  <div
                    className="common-pointer flex flex-row gap-[5px] items-center justify-start w-auto"
                    onClick={() => navigate("/createpage")}
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
                    name="frame8821"
                    placeholder="Discover"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-auto h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame8822"
                    placeholder="Pages you follow"
                    className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="green_700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <Input
                    name="frame8818"
                    placeholder="My Pages"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[77%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-2.5 rounded-lg w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1040px] w-full">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Discover
                  </Text>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <div className="border-b-2 border-gray-500_01 border-solid flex flex-row gap-[5px] items-center justify-start px-[5px] py-2.5 w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_megaphone.svg"
                          alt="megaphone"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtPoppinsSemiBold16Gray700"
                        >
                          All posts
                        </Text>
                      </div>
                      <Button
                        className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[113px]"
                        onClick={() => navigate("/pagepagesyoufollowone")}
                        leftIcon={
                          <div className="h-[18px] mt-[3px] mb-0.5 mr-[5px] w-[18px] bg-black-900_01">
                            <Img
                              className="h-[18px]"
                              src="images/img_grid_black_900_01.svg"
                              alt="grid"
                            />
                          </div>
                        }
                        size="md"
                      >
                        <div className="font-semibold leading-[normal] text-base text-gray-700 text-left">
                          Overview
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Input
                        name="searchbar"
                        placeholder="Search for a page"
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
                      <Button
                        className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                        shape="circle"
                        color="indigo_50"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_qrcode.svg"
                          alt="qrcode"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-2.5 rounded-[20px] w-auto md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_frame8856_50x50.png"
                          alt="frame8856"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Pizza Hut
                          </Text>
                          <Input
                            name="frame8674"
                            placeholder="1hr"
                            className="font-medium leading-[normal] p-0 placeholder:text-gray-700 text-[13px] text-gray-700 text-left w-full"
                            wrapClassName="flex w-[55%]"
                            prefix={
                              <div className="h-3 mt-[3px] mb-1 mr-2.5 w-3 bg-gray-700">
                                <Img
                                  className="h-3 my-auto"
                                  src="images/img_bookmark.svg"
                                  alt="bookmark"
                                />
                              </div>
                            }
                            size="xs"
                          ></Input>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_morevertfill1.svg"
                        alt="morevertfillOne"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-black-900_01 w-auto"
                          size="txtPoppinsSemiBold16Black90001"
                        >
                          Name a better pizza than this, we’ll wait
                        </Text>
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_close_amber_300.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Order online, link in bio
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                      <div className="bg-lime-50 h-[359px] w-[28%]"></div>
                      <Img
                        className="sm:flex-1 h-[359px] md:h-auto object-cover w-[46%] sm:w-full"
                        src="images/img_frame8401.png"
                        alt="frame8401"
                      />
                      <div className="bg-lime-50 h-[359px] w-[27%]"></div>
                    </div>
                    <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between max-w-[898px] w-full" />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-2.5 rounded-[20px] w-auto md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_frame8858_50x50.png"
                          alt="frame8858"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Louis Vuitton
                          </Text>
                          <Input
                            name="frame8674_One"
                            placeholder="1hr"
                            className="font-medium leading-[normal] p-0 placeholder:text-gray-700 text-[13px] text-gray-700 text-left w-full"
                            wrapClassName="flex w-[39%]"
                            prefix={
                              <div className="h-3 mt-[3px] mb-1 mr-2.5 w-3 bg-gray-700">
                                <Img
                                  className="h-3 my-auto"
                                  src="images/img_bookmark.svg"
                                  alt="bookmark"
                                />
                              </div>
                            }
                            size="xs"
                          ></Input>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_morevertfill1.svg"
                        alt="morevertfillOne_One"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Summer Collection 2023
                      </Text>
                      <Input
                        name="frame9027"
                        placeholder="Hazbi Assidiqi"
                        className="font-semibold leading-[normal] p-0 placeholder:text-black-900_01 text-base text-black-900_01 text-left w-full"
                        wrapClassName="flex w-[68%]"
                        prefix={
                          <Img
                            className="mt-[3px] mb-[5px] mr-[5px]"
                            src="images/img_close_blue_gray_900_03.svg"
                            alt="close"
                          />
                        }
                        size="xs"
                      ></Input>
                    </div>
                    <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                      <div className="bg-lime-50 h-px w-[28%]"></div>
                      <Img
                        className="sm:flex-1 md:h-auto h-px object-cover w-[46%] sm:w-full"
                        src="images/img_frame8401_1x413.png"
                        alt="frame8401_One"
                      />
                      <div className="bg-lime-50 h-px w-[27%]"></div>
                    </div>
                    <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between max-w-[898px] w-full" />
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

export default PagePagesyoufollow;
