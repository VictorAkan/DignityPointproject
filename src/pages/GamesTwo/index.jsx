import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header2 from "components/Header2";

const GamesTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-10 items-center justify-start mx-auto w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="bg-white-A700 flex flex-col items-start justify-end max-w-[1397px] mx-auto pl-6 pt-6 md:px-5 shadow-bs4 w-full">
          <div className="flex flex-col gap-[15px] items-start justify-start w-[97%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
              size="txtPoppinsMedium30"
            >
              Games
            </Text>
            <Line className="bg-green-700 h-px w-full" />
          </div>
          <div className="flex flex-col gap-5 items-start justify-start mt-[19px] w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
              size="txtPoppinsMedium24Gray900"
            >
              Recents
            </Text>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Img
                  className="h-40 md:h-auto rounded-[50%] w-40"
                  src="images/img_ellipse11.png"
                  alt="ellipseEleven"
                />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Fortnite
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center w-auto">
                <Img
                  className="h-40 md:h-auto rounded-[50%] w-40"
                  src="images/img_ellipse12.png"
                  alt="ellipseTwelve"
                />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Mario Galax..
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Img
                  className="h-40 md:h-auto rounded-[50%] w-40"
                  src="images/img_ellipse13.png"
                  alt="ellipseThirteen"
                />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  FIFA 19
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-end justify-start w-auto">
                <Img
                  className="h-40 md:h-auto rounded-[50%] w-40"
                  src="images/img_ellipse14.png"
                  alt="ellipseFourteen"
                />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Bride Emp..
                </Text>
              </div>
            </List>
          </div>
          <List
            className="flex flex-col gap-8 items-center mt-[30px] w-full"
            orientation="vertical"
          >
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start overflow-auto w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24Gray900"
              >
                Most Played Games
              </Text>
              <div className="flex md:flex-col flex-row gap-12 items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[21%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611.png"
                    alt="rectangle1611"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[24%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611_256x349.png"
                    alt="rectangle1611_One"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[24%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611_1.png"
                    alt="rectangle1611_Two"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[24%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611_2.png"
                    alt="rectangle1611_Three"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start overflow-auto w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24Gray900"
              >
                Newly Added
              </Text>
              <div className="flex md:flex-col flex-row gap-12 items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[24%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611_2.png"
                    alt="rectangle1611"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[24%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611_1.png"
                    alt="rectangle1611_One"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[21%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611.png"
                    alt="rectangle1611_Two"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[17px] justify-start pb-[18px] rounded-[17px] shadow-bs11 w-[24%] md:w-full">
                  <Img
                    className="h-64 sm:h-auto object-cover rounded-tl-[17px] rounded-tr-[17px] w-full"
                    src="images/img_rectangle1611_256x349.png"
                    alt="rectangle1611_Three"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start ml-3 md:ml-[0] w-auto">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20Bluegray900"
                    >
                      Super Mario Brothers
                    </Text>
                    <Text
                      className="text-[15px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      150k players
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default GamesTwoPage;
