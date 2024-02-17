import React from "react";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const MarketplaceTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-6 items-center justify-start mx-auto pb-[34px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="h-[1402px] md:h-[3086px] sm:h-[3997px] max-w-[1356px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-white-A700 flex flex-col gap-[11px] items-start justify-start left-[0] p-[19px] rounded-[20px] shadow-bs4 top-[0] w-[22%]">
            <Text
              className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtInterMedium32"
            >
              Marketplace
            </Text>
            <Button
              className="cursor-pointer flex h-[37px] items-center justify-center mb-[544px] ml-1 md:ml-[0] rounded-[9px] w-[202px]"
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
          </div>
          <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-start justify-end my-auto pt-6 sm:px-5 px-6 right-[0] rounded-[20px] shadow-bs4 w-4/5">
            <div className="flex ml-2.5 md:ml-[0] relative w-[93%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-start justify-start my-auto p-[7px]"
                style={{ backgroundImage: "url('images/img_group42.svg')" }}
              >
                <Text
                  className="ml-1 md:ml-[0] text-gray-500 text-sm"
                  size="txtPoppinsRegular14Gray500"
                >
                  Search Products
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium h-[37px] leading-[normal] ml-[-7px] my-auto rounded-[9px] text-[16.03px] text-center w-[83px] z-[1]"
                shape="round"
                color="green_700"
                size="sm"
                variant="fill"
              >
                Search
              </Button>
            </div>
            <Text
              className="ml-2.5 md:ml-[0] mt-[27px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
              size="txtPoppinsMedium26"
            >
              Shop from Categories
            </Text>
            <div className="flex flex-col font-inter items-start justify-start max-w-[997px] ml-2.5 md:ml-[0] mt-[13px] w-full">
              <List
                className="flex flex-col gap-1 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-between w-full">
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[92px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Fashion
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-28"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Hair
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[110px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Gadgets
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 min-w-[130px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Toys and Games
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 min-w-[153px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Musical Instruments
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[81px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Books
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[133px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Farm Supplies
                  </Button>
                  <Button
                    className="cursor-pointer h-[41px] leading-[normal] rounded-[20px] text-center text-sm w-[74px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Pets
                  </Button>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row gap-4 items-start justify-between w-[99%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[113px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Jewelries
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 min-w-[76px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Vehicles
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[149px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Office Supplies
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 min-w-[136px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Home Appliances
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 min-w-[131px] rounded-[18px] text-center text-sm"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Property Rentals
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-1 rounded-[18px] text-center text-sm w-[136px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Entertainment
                  </Button>
                  <Button
                    className="cursor-pointer h-[41px] leading-[normal] rounded-[20px] text-center text-sm w-[150px]"
                    color="green_100_02"
                    size="md"
                    variant="fill"
                  >
                    Sporting Goods
                  </Button>
                </div>
              </List>
            </div>
            <Text
              className="ml-2.5 md:ml-[0] mt-[35px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
              size="txtPoppinsMedium26"
            >
              Explore New Products
            </Text>
            <div className="font-poppins gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start min-h-[auto] ml-2.5 md:ml-[0] mt-5 w-auto md:w-full">
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-[13px] justify-start pb-[11px] rounded-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-14 justify-start rounded-bl-[18px] rounded-br-[18px] rounded-tl-[21px] rounded-tr-[21px] hover:shadow-bs8 shadow-bs8 hover:w-full w-full">
                <Img
                  className="h-[235px] sm:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] rounded-tl-[21px] rounded-tr-[21px] w-full"
                  src="images/img_rectangle1608_235x289.png"
                  alt="rectangle1608"
                />
                <div className="flex flex-col gap-[34px] items-start justify-start ml-2 md:ml-[0] w-auto">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-14 justify-start rounded-[21px] shadow-bs8 hover:w-full w-full">
                <Img
                  className="h-[235px] sm:h-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle1608_2.png"
                  alt="rectangle1608"
                />
                <div className="flex flex-col gap-[34px] items-start justify-start ml-2.5 md:ml-[0] w-auto">
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
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-14 justify-start rounded-[21px] shadow-bs8 hover:w-full w-full">
                <Img
                  className="h-[235px] sm:h-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle1608_3.png"
                  alt="rectangle1608"
                />
                <div className="flex flex-col gap-[34px] items-start justify-start ml-2.5 md:ml-[0] w-auto">
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
    </>
  );
};

export default MarketplaceTwoPage;
