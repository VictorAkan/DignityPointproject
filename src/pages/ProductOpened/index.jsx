import React from "react";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";

const ProductOpenedPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex font-poppins h-[1008px] justify-end mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
            <div className="flex md:flex-col flex-row font-inter gap-[34px] items-start justify-start max-w-[1404px] mx-auto md:px-5 w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-[715px] p-[19px] rounded-[20px] shadow-bs4 w-[21%] md:w-full">
                <Text
                  className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtInterMedium32"
                >
                  Marketplace
                </Text>
                <div className="border border-green-700 border-solid flex flex-row font-poppins gap-[12.33px] h-[37px] md:h-auto items-center justify-center ml-1 md:ml-[0] mt-[11px] px-[12.33px] py-[6.17px] rounded-[9px] w-[202px]">
                  <Text
                    className="text-[16.03px] text-green-700 w-auto"
                    size="txtPoppinsMedium1603"
                  >
                    Add New products
                  </Text>
                  <Img
                    className="h-2.5 w-[9px]"
                    src="images/img_plus_green_700.svg"
                    alt="plus"
                  />
                </div>
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
              <div className="bg-white-A700 flex md:flex-1 flex-col font-poppins gap-10 items-start justify-start p-6 sm:px-5 rounded-[20px] shadow-bs4 w-[77%] md:w-full">
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
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-3.5 justify-start pb-[13px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-3.5 justify-start pb-[13px] rounded-[21px] shadow-bs8 hover:w-full w-full">
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
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-3.5 justify-start pb-[13px] rounded-[21px] shadow-bs8 hover:w-full w-full">
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
        <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[61px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700_01 flex flex-col items-center justify-start max-w-[1364px] my-[39px] p-[38px] md:px-5 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-full">
              <Img
                className="h-[728px] md:h-auto object-cover rounded-bl-[20px] rounded-tl-[20px]"
                src="images/img_rectangle1608_728x683.png"
                alt="rectangle1608"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row font-poppins sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtPoppinsSemiBold30"
                  >
                    Redmi Note 12
                  </Text>
                  <Button
                    className="flex h-9 items-center justify-center my-1 rounded-[50%] w-9"
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
                <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[39%] md:w-full">
                  <Button
                    className="cursor-pointer font-inter leading-[normal] rounded-[18px] text-center text-sm w-[110px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Gadgets
                  </Button>
                  <Text
                    className="mt-[3px] text-[16.03px] text-gray-900"
                    size="txtPoppinsMedium1603Gray900"
                  >
                    Brand New
                  </Text>
                </div>
                <div className="flex flex-col font-inter gap-2.5 items-start justify-start mt-[15px] w-auto">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtInterMedium20"
                  >
                    Price
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtInterRegular20"
                  >
                    ₦120,000
                  </Text>
                </div>
                <div className="flex flex-col font-inter gap-4 items-start justify-start mt-[21px] w-[62%] md:w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Contact Information
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[91px] items-start justify-start w-auto">
                    <div className="flex flex-row gap-4 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-8"
                        src="images/img_vector_green_700_24x32.svg"
                        alt="vector_One"
                      />
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtInterRegular20"
                      >
                        endurancejohnson@gmail.com
                      </Text>
                    </div>
                    <Line className="bg-gray-700 h-[62px] w-px" />
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtInterRegular20"
                      >
                        +234 543 6654 980
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[22px] text-gray-900 text-xl"
                  size="txtInterMedium20"
                >
                  Location
                </Text>
                <Img
                  className="h-[89px] sm:h-auto md:ml-[0] ml-[5px] mt-2.5 object-cover rounded-[10px] w-full"
                  src="images/img_rectangle1609.png"
                  alt="rectangle1609"
                />
                <Button
                  className="cursor-pointer flex h-[52px] items-center justify-center ml-1.5 md:ml-[0] mt-12 rounded-[9px] w-[372px]"
                  rightIcon={
                    <div className="h-6 mb-0.5 ml-3 w-6 bg-green-700">
                      <Img
                        className="h-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    </div>
                  }
                  shape="round"
                  color="green_700"
                  size="md"
                  variant="outline"
                >
                  <div className="font-medium font-poppins leading-[normal] text-[16.03px] text-left">
                    Send Message
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOpenedPage;
