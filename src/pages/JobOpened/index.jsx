import React from "react";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const JobOpenedPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[39px] w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-[34px] items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-[20px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex flex-col gap-8 items-center justify-start mb-[37px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-row gap-[11px] items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_900.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                        size="txtPoppinsSemiBold26"
                      >
                        Graphics Designer
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium h-[37px] leading-[normal] mb-0.5 rounded-[9px] text-[16.03px] text-center w-[119px]"
                      shape="round"
                      color="green_700"
                      size="sm"
                      variant="fill"
                    >
                      Apply Now
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-7 items-center justify-center w-auto md:w-full">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[71px] rounded-[19px] text-base text-center"
                      color="green_50_01"
                      size="md"
                      variant="fill"
                    >
                      Hybrid
                    </Button>
                    <div className="flex flex-row font-poppins gap-3 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-[22px]"
                        src="images/img_thumbsup_green_700_24x22.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsRegular20"
                      >
                        Market Square
                      </Text>
                    </div>
                    <div className="flex flex-row font-poppins gap-3 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-[15px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsRegular20"
                      >
                        Lagos State, Nigeria
                      </Text>
                    </div>
                    <div className="flex flex-row font-poppins gap-3 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-[30px]"
                        src="images/img_grid_green_700.svg"
                        alt="grid_One"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsRegular20"
                      >
                        500 Applicants
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-8 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Job Description
                    </Text>
                    <Text
                      className="leading-[32.00px] text-blue_gray-900 text-justify text-xl"
                      size="txtInterRegular20"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut congue tincidunt turpis, id molestie magna
                        <br />
                        lobortis in. Vestibulum nec dignissim metus, lacinia
                        tincidunt arcu. Maecenas et est vitae mauris imperdiet
                        <br />
                        porttitor eu sit amet turpis. Sed elit mi, mollis eget
                        ex quis, feugiat posuere augue. Praesent faucibus purus
                        <br />
                        vel placerat sollicitudin. Vivamus ornare porta sapien,
                        ut porttitor urna rutrum aliquam. Pellentesque rutrum
                        <br />
                        lectus elit. Nam accumsan erat ut massa vehicula, eget
                        pulvinar enim pellentesque.Vestibulum aliquet iaculis
                        <br />
                        placerat. Nullam ut pulvinar tellus. Nullam maximus
                        malesuada leo, eget egestas nisl gravida non.
                        <br />
                        Suspendisse eget feugiat orci. Etiam ac risus nec tortor
                        ullamcorper mattis. Cras sollicitudin ex vitae dui
                        <br />
                        suscipit, et consequat arcu aliquet. Nunc luctus sit
                        amet erat quis tempor.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Requirements
                    </Text>
                    <Text
                      className="leading-[32.00px] text-blue_gray-900 text-justify text-xl"
                      size="txtInterRegular20"
                    >
                      <>
                        At least 3 years of graphic design experience.
                        <br />
                        Strong portfolio showcasing a wide range of design
                        skills.
                        <br />
                        Knowledge of UI/UX design principles
                        <br />
                        Strong communication skills and the ability to work
                        independently.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Renumeration
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-justify text-xl w-auto"
                      size="txtInterRegular20"
                    >
                      $50,000-$80,000/yr
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      How To Apply
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-justify text-xl w-auto"
                      size="txtInterRegular20"
                    >
                      <span className="text-blue_gray-900 font-inter font-normal">
                        Send CV and Application letter to{" "}
                      </span>
                      <span className="text-blue-700 font-inter font-normal">
                        applymarketsquare.ng.com
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-inter gap-[18px] items-center justify-start w-[21%] md:w-full">
              <div className="bg-white-A700 flex flex-col gap-[13px] items-center justify-start p-3.5 rounded-[20px] shadow-bs4 w-full">
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
              <div className="bg-white-A700 flex flex-col gap-[11px] items-end justify-end pt-4 rounded-[20px] shadow-bs4 w-full">
                <div className="flex flex-col font-inter gap-3.5 items-start justify-start w-[95%] md:w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Top Picks For You
                  </Text>
                  <List
                    className="flex flex-col font-poppins gap-[38px] items-start w-[277px] md:w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start my-0 pl-0.5 w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                        <Img
                          className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_ellipse5_72x72.png"
                          alt="ellipseFive"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-[74%] md:w-full">
                              <Text
                                className="text-[11.15px] text-gray-900"
                                size="txtPoppinsMedium1115"
                              >
                                Sales Girl(On-site)
                              </Text>
                              <div className="flex flex-row gap-[18px] items-start justify-between mt-[3px] w-full">
                                <Text
                                  className="text-[10.03px] text-green-700"
                                  size="txtPoppinsRegular1003"
                                >
                                  Miversity
                                </Text>
                                <div className="flex flex-row gap-[3.69px] items-center justify-start w-auto">
                                  <div className="bg-green-700 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[9.23px] text-gray-900 w-auto"
                                    size="txtPoppinsMedium923"
                                  >
                                    Lagos, Nigeria
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="italic text-[7.8px] text-gray-700"
                            size="txtPoppinsMediumItalic78"
                          >
                            2hrs ago
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-between my-0 w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_ellipse5_72x72.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[73%] md:w-full">
                            <Text
                              className="text-[11.15px] text-gray-900"
                              size="txtPoppinsMedium1115"
                            >
                              Sales Girl(On-site)
                            </Text>
                            <div className="flex flex-row gap-[18px] items-start justify-between mt-[3px] w-full">
                              <Text
                                className="text-[10.03px] text-green-700"
                                size="txtPoppinsRegular1003"
                              >
                                Miversity
                              </Text>
                              <div className="flex flex-row gap-[3.69px] items-center justify-start w-auto">
                                <div className="bg-green-700 h-[7px] rounded-[3px] w-[7px]"></div>
                                <Text
                                  className="text-[9.23px] text-gray-900 w-auto"
                                  size="txtPoppinsMedium923"
                                >
                                  Lagos, Nigeria
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="italic text-[7.8px] text-gray-700"
                          size="txtPoppinsMediumItalic78"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-between my-0 w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_ellipse5_72x72.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[73%] md:w-full">
                            <Text
                              className="text-[11.15px] text-gray-900"
                              size="txtPoppinsMedium1115"
                            >
                              Sales Girl(On-site)
                            </Text>
                            <div className="flex flex-row gap-[18px] items-start justify-between mt-[3px] w-full">
                              <Text
                                className="text-[10.03px] text-green-700"
                                size="txtPoppinsRegular1003"
                              >
                                Miversity
                              </Text>
                              <div className="flex flex-row gap-[3.69px] items-center justify-start w-auto">
                                <div className="bg-green-700 h-[7px] rounded-[3px] w-[7px]"></div>
                                <Text
                                  className="text-[9.23px] text-gray-900 w-auto"
                                  size="txtPoppinsMedium923"
                                >
                                  Lagos, Nigeria
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="italic text-[7.8px] text-gray-700"
                          size="txtPoppinsMediumItalic78"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-between my-0 w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_ellipse5_72x72.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[73%] md:w-full">
                            <Text
                              className="text-[11.15px] text-gray-900"
                              size="txtPoppinsMedium1115"
                            >
                              Sales Girl(On-site)
                            </Text>
                            <div className="flex flex-row gap-[18px] items-start justify-between mt-[3px] w-full">
                              <Text
                                className="text-[10.03px] text-green-700"
                                size="txtPoppinsRegular1003"
                              >
                                Miversity
                              </Text>
                              <div className="flex flex-row gap-[3.69px] items-center justify-start w-auto">
                                <div className="bg-green-700 h-[7px] rounded-[3px] w-[7px]"></div>
                                <Text
                                  className="text-[9.23px] text-gray-900 w-auto"
                                  size="txtPoppinsMedium923"
                                >
                                  Lagos, Nigeria
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="italic text-[7.8px] text-gray-700"
                          size="txtPoppinsMediumItalic78"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-between my-0 w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_ellipse5_72x72.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[73%] md:w-full">
                            <Text
                              className="text-[11.15px] text-gray-900"
                              size="txtPoppinsMedium1115"
                            >
                              Sales Girl(On-site)
                            </Text>
                            <div className="flex flex-row gap-[18px] items-start justify-between mt-[3px] w-full">
                              <Text
                                className="text-[10.03px] text-green-700"
                                size="txtPoppinsRegular1003"
                              >
                                Miversity
                              </Text>
                              <div className="flex flex-row gap-[3.69px] items-center justify-start w-auto">
                                <div className="bg-green-700 h-[7px] rounded-[3px] w-[7px]"></div>
                                <Text
                                  className="text-[9.23px] text-gray-900 w-auto"
                                  size="txtPoppinsMedium923"
                                >
                                  Lagos, Nigeria
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="italic text-[7.8px] text-gray-700"
                          size="txtPoppinsMediumItalic78"
                        >
                          2hrs ago
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <Button
                  className="!text-green-700 cursor-pointer font-medium font-poppins leading-[normal] min-w-[293px] shadow-bs7 text-[13px] text-center underline"
                  shape="square"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  See more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobOpenedPage;
