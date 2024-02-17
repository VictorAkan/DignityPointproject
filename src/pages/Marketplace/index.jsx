import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const MarketplacePage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[50px] w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-[34px] items-start justify-start max-w-[1404px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-[715px] p-[19px] rounded-[20px] shadow-bs4 w-[21%] md:w-full">
              <Text
                className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtInterMedium32"
              >
                Marketplace
              </Text>
              <Button
                className="cursor-pointer flex h-[37px] items-center justify-center ml-1 md:ml-[0] mt-[11px] rounded-[9px] w-[202px]"
                rightIcon={
                  <div className="mt-[5px] mb-[9px] ml-3 w-[9px] bg-green-700">
                    <Img src="images/img_plus_green_700.svg" alt="plus" />
                  </div>
                }
                shape="round"
                color="green_700"
                size="sm"
                variant="outline"
              >
                <div className="font-medium font-poppins leading-[normal] text-[16.03px] text-left">
                  Add New products
                </div>
              </Button>
              <div className="flex flex-row font-poppins gap-2.5 items-center justify-start mb-[468px] ml-1 md:ml-[0] mt-[38px] w-auto">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtPoppinsMedium20Gray900"
                >
                  Filters
                </Text>
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
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-10 items-start justify-start p-6 sm:px-5 rounded-[20px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex flex-row gap-[11px] items-center justify-center ml-2.5 md:ml-[0] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown"
                />
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                  size="txtPoppinsSemiBold26"
                >
                  Gadgets
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[54px] ml-2.5 md:ml-[0] w-auto md:w-full">
                <div className="md:gap-5 gap-[71px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        Redmi Note 12
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608_277x289.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        China Curls
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608_1.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        China Curls
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        Redmi Note 12
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608_277x289.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        China Curls
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608_1.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        China Curls
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        Redmi Note 12
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608_277x289.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        China Curls
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] shadow-bs8 hover:w-full w-full">
                    <Img
                      className="h-[277px] sm:h-auto object-cover rounded-tl-[21px] rounded-tr-[21px] w-full"
                      src="images/img_rectangle1608_1.png"
                      alt="rectangle1608"
                    />
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-auto">
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsRegular2364"
                      >
                        China Curls
                      </Text>
                      <Text
                        className="sm:text-[19.64px] md:text-[21.64px] text-[23.64px] text-blue_gray-900 w-auto"
                        size="txtPoppinsMedium2364"
                      >
                        ₦120,000
                      </Text>
                    </div>
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

export default MarketplacePage;
