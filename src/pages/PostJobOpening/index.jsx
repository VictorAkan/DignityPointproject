import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header2 from "components/Header2";

const PostJobOpeningPage = () => {
  return (
    <>
      <div className="bg-lime-50 flex font-poppins h-[982px] justify-end mx-auto relative w-full">
        <Header2 className="absolute bg-white-A700 flex gap-2.5 inset-x-[0] items-center justify-center mx-auto md:px-5 px-[50px] py-2.5 shadow-bs top-[0] w-full" />
        <div className="flex md:flex-col flex-row font-inter gap-[34px] h-full items-start justify-start max-w-[1412px] mt-auto mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-[23px] items-start justify-start mb-[231px] p-4 rounded-[20px] shadow-bs4 w-[21%] md:w-full">
            <Text
              className="md:ml-[0] ml-[7px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtInterMedium32"
            >
              Jobs
            </Text>
            <div className="border border-green-700 border-solid flex flex-row font-poppins gap-[12.33px] h-[37px] md:h-auto items-center justify-center mb-[538px] md:ml-[0] ml-[7px] px-[12.33px] py-[6.17px] rounded-[9px] w-[202px]">
              <Text
                className="text-[16.03px] text-green-700 w-auto"
                size="txtPoppinsMedium1603"
              >
                Add New Listing
              </Text>
              <Img
                className="h-2.5 w-[9px]"
                src="images/img_plus_green_700.svg"
                alt="plus"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col font-poppins gap-6 items-center justify-end pt-6 sm:px-5 px-6 rounded-[20px] shadow-bs4 w-[54%] md:w-full">
            <div className="flex relative w-[97%] md:w-full">
              <div className="bg-indigo-50_02 flex flex-col items-start justify-start my-auto p-[7px] rounded-[9px]">
                <Text
                  className="md:ml-[0] ml-[3px] text-center text-gray-500 text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Search Jobs
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium h-[37px] leading-[normal] ml-[-34px] my-auto rounded-[9px] text-[16.03px] text-center w-[83px] z-[1]"
                shape="round"
                color="green_700"
                size="sm"
                variant="fill"
              >
                Send
              </Button>
            </div>
            <div className="flex flex-col font-inter gap-5 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtInterMedium20"
              >
                Top Picks for You
              </Text>
              <div className="flex flex-col font-poppins items-start justify-start w-auto md:w-full">
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-2 items-center justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[71%] md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse5.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Sales Girl/ Representative (On-site)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Miversity
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm"
                          size="txtPoppinsMediumItalic14"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-green-700 h-[17px] rounded-lg w-[17px]"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        Lagos, Nigeria
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_close_blue_gray_900_20x20.svg"
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-3/5 md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse5_100x100.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Graphics Designer (Remote)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Market Square
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm"
                          size="txtPoppinsMediumItalic14"
                        >
                          2days ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[63px] w-auto">
                      <div className="bg-green-700 h-[17px] rounded-lg w-[17px]"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        Ibadan, Nigeria
                      </Text>
                    </div>
                    <Img
                      className="h-5 md:ml-[0] ml-[13px] w-5"
                      src="images/img_close_blue_gray_900_20x20.svg"
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[72%] md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse5_1.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Fullstack Software Engineer (Hybrid)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Market Square
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm w-auto"
                          size="txtPoppinsMediumItalic14"
                        >
                          2days ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[69px] w-auto">
                      <div className="bg-green-700 h-[17px] rounded-lg w-[17px]"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        London
                      </Text>
                    </div>
                    <Img
                      className="h-5 ml-2.5 md:ml-[0] w-5"
                      src="images/img_close_blue_gray_900_20x20.svg"
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-3/5 md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse5_100x100.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Graphics Designer (Remote)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Market Square
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm"
                          size="txtPoppinsMediumItalic14"
                        >
                          2days ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[147px] w-auto">
                      <div className="bg-green-700 h-[17px] rounded-lg w-[17px]"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        Ibadan
                      </Text>
                    </div>
                    <Img
                      className="h-5 md:ml-[0] ml-[11px] w-5"
                      src="images/img_close_blue_gray_900_20x20.svg"
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[71%] md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse5.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Sales Girl/ Representative (On-site)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Miversity
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm"
                          size="txtPoppinsMediumItalic14"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[74px] w-auto">
                      <div className="bg-green-700 h-[17px] rounded-lg w-[17px]"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        Lagos
                      </Text>
                    </div>
                    <Img
                      className="h-5 ml-6 md:ml-[0] w-5"
                      src="images/img_close_blue_gray_900_20x20.svg"
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[72%] md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse5_1.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Fullstack Software Engineer (Hybrid)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Market Square
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm w-auto"
                          size="txtPoppinsMediumItalic14"
                        >
                          2days ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[69px] w-auto">
                      <div className="bg-green-700 h-[17px] rounded-lg w-[17px]"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        London
                      </Text>
                    </div>
                    <Img
                      className="h-5 ml-2.5 md:ml-[0] w-5"
                      src="images/img_close_blue_gray_900_20x20.svg"
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-start justify-between w-[71%] md:w-full">
                      <Img
                        className="h-[29px] md:h-auto object-cover rounded-[50px]"
                        src="images/img_ellipse5.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-12 items-start justify-start sm:mt-0 mt-0.5">
                        <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtPoppinsMedium20Gray900"
                          >
                            Sales Girl/ Representative (On-site)
                          </Text>
                          <Text
                            className="text-green-700 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            Miversity
                          </Text>
                        </div>
                        <Text
                          className="italic text-gray-700 text-sm"
                          size="txtPoppinsMediumItalic14"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[74px] md:mt-0 mt-[33px] w-auto">
                      <div className="bg-green-700 h-px rounded-lg w-1/5"></div>
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20Gray900"
                      >
                        Lagos
                      </Text>
                    </div>
                    <Img
                      className="h-px ml-6 md:ml-[0] md:mt-0 mt-10"
                      src="images/img_vector_blue_gray_900_1x20.svg"
                      alt="vector"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col font-inter gap-[13px] items-center justify-start mb-[658px] p-3.5 rounded-[20px] shadow-bs4 w-[21%] md:w-full">
            <Text
              className="mt-[3px] text-gray-900 text-xl"
              size="txtInterMedium20"
            >
              Suggested Jobs Searches
            </Text>
            <div className="flex flex-col items-center justify-start mb-0.5 w-[264px]">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[95%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[121px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Graphic Design
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[116px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Lead Marketer
                  </Button>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[117px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Content Writer
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[135px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    DevOps Engineer
                  </Button>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[151px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Frontend Developer
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] rounded-[18px] text-center text-sm w-[101px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Sailor
                  </Button>
                </div>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[122px] rounded-[18px] text-center text-sm"
                  color="green_100_02"
                  size="md"
                  variant="fill"
                >
                  UI/UX Designer
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-black-900_99 flex flex-col font-poppins h-max inset-[0] items-start justify-center m-auto p-[133px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[26px] ml-10 md:ml-[0] w-[78%] md:w-full">
            <div className="bg-white-A700_01 flex flex-col items-center justify-start p-10 sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-start mb-[5px] mt-0.5 w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="mt-0.5 md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtPoppinsSemiBold26"
                  >
                    Add Job Listing
                  </Text>
                  <Button
                    className="flex h-9 items-center justify-center mb-[5px] rounded-[50%] w-9"
                    shape="circle"
                    color="indigo_50"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_plus_black_900_01.svg"
                      alt="plus_One"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start mt-[21px] w-auto md:w-full">
                  <div className="flex flex-col gap-2 justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[9px] text-blue_gray-900 text-center text-lg"
                      size="txtPoppinsRegular18Bluegray900"
                    >
                      Name Of Role
                    </Text>
                    <Input
                      name="groupTwelve"
                      placeholder="Add Role"
                      className="leading-[normal] p-0 placeholder:text-gray-500 text-center text-sm w-full"
                      wrapClassName="rounded-[9px] w-full"
                      shape="round"
                      color="indigo_50_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray-900 text-center text-lg"
                      size="txtPoppinsRegular18Bluegray900"
                    >
                      Description Of Job
                    </Text>
                    <Input
                      name="groupThirteen"
                      placeholder="Add Description here"
                      className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="rounded-[9px] w-full"
                      shape="round"
                      color="indigo_50_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtPoppinsRegular18Bluegray900"
                    >
                      Requirements
                    </Text>
                    <Input
                      name="groupFourteen"
                      placeholder="Add Requirement here"
                      className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="rounded-[9px] w-full"
                      shape="round"
                      color="indigo_50_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtPoppinsRegular18Bluegray900"
                    >
                      Renumeration (Optional)
                    </Text>
                    <Input
                      name="groupFifteen"
                      placeholder="Add Renumeration here"
                      className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="rounded-[9px] w-full"
                      shape="round"
                      color="indigo_50_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtPoppinsRegular18Bluegray900"
                    >
                      How To Apply for the Job
                    </Text>
                    <Input
                      name="groupSixteen"
                      placeholder="Add application procedure"
                      className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="rounded-[9px] w-full"
                      shape="round"
                      color="indigo_50_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium h-[37px] leading-[normal] mt-10 rounded-[9px] text-[16.03px] text-center w-40"
                  shape="round"
                  color="green_700"
                  size="sm"
                  variant="fill"
                >
                  Upload Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJobOpeningPage;
