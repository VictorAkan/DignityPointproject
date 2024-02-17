import React from "react";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";

const SubscriptionPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[73px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <Text
            className="mt-[55px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
            size="txtPoppinsSemiBold40"
          >
            Flexible Plans
          </Text>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start max-w-[1362px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border-2 border-gray-700 border-solid flex md:flex-1 flex-col items-start justify-start mb-[88px] md:mt-0 mt-[37px] p-[26px] sm:px-5 rounded-[17px] shadow-bs4 w-[30%] md:w-full">
              <div className="flex flex-col gap-8 items-center justify-start mb-[42px] mt-1 w-[92%] md:w-full">
                <div className="flex flex-row gap-[27px] items-start justify-between w-full">
                  <Img
                    className="h-[82px] w-[82px]"
                    src="images/img_user_orange_600.svg"
                    alt="user"
                  />
                  <div className="flex flex-col gap-[3.66px] items-start justify-start mt-1 w-auto">
                    <Text
                      className="sm:text-[28.939999999999998px] md:text-[30.939999999999998px] text-[32.94px] text-gray-900 w-auto"
                      size="txtInterMedium3294"
                    >
                      Premium Plan
                    </Text>
                    <Text
                      className="sm:text-[17.96px] md:text-[19.96px] text-[21.96px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular2196"
                    >
                      £2000/month
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-between w-[92%] md:w-full">
                  <div className="md:h-[314px] sm:h-[332px] h-[333px] relative w-[7%]">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
                        <div className="bg-gray-700 h-5 rounded-[50%] w-5"></div>
                        <div className="bg-gray-700 h-5 rounded-[50%] w-5"></div>
                        <div className="bg-gray-700 h-5 rounded-[50%] w-5"></div>
                        <div className="bg-gray-700 h-5 rounded-[50%] w-5"></div>
                      </div>
                    </div>
                    <Line className="absolute bg-gray-700 h-[314px] inset-y-[0] my-auto right-[40%] w-px" />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[37px] sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[52px] sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[52px] sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border-[3px] border-green-700 border-solid flex md:flex-1 flex-col font-poppins items-start justify-start ml-12 md:ml-[0] p-[29px] sm:px-5 rounded-[20px] shadow-bs4 w-[34%] md:w-full">
              <div className="flex flex-col items-end justify-start mb-[11px] mt-[5px] w-[92%] md:w-full">
                <div className="flex flex-row gap-[25px] items-center justify-between mr-1 w-[99%] md:w-full">
                  <Img
                    className="h-[103px] w-[103px]"
                    src="images/img_group315.svg"
                    alt="group315"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                      size="txtInterMedium36"
                    >
                      Premium Plan
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      £2000/month
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-inter gap-5 items-center justify-between mt-[25px] w-[91%] md:w-full">
                  <Img
                    className="h-[374px]"
                    src="images/img_group314.svg"
                    alt="group314"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[41px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[58px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[58px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium h-12 leading-[normal] mt-11 rounded-[12px] sm:text-[16.61px] md:text-[18.61px] text-[20.61px] text-center w-[335px]"
                  color="green_700"
                  size="md"
                  variant="fill"
                >
                  Upgrade
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 border-2 border-gray-700 border-solid flex md:flex-1 flex-col font-inter items-center justify-start mb-[88px] ml-10 md:ml-[0] md:mt-0 mt-[37px] p-[43px] md:px-10 sm:px-5 rounded-[17px] shadow-bs4 w-[30%] md:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start mb-[25px] mt-1 w-[97%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                  <Img
                    className="h-[82px] w-[82px]"
                    src="images/img_user_light_blue_900_01.svg"
                    alt="user_One"
                  />
                  <div className="flex flex-col gap-[3.66px] items-start justify-start w-auto">
                    <Text
                      className="sm:text-[28.939999999999998px] md:text-[30.939999999999998px] text-[32.94px] text-gray-900 w-auto"
                      size="txtInterMedium3294"
                    >
                      Premium Plan
                    </Text>
                    <Text
                      className="sm:text-[17.96px] md:text-[19.96px] text-[21.96px] text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular2196"
                    >
                      £2000/month
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-between w-[95%] md:w-full">
                  <Img
                    className="h-[333px]"
                    src="images/img_group314_gray_700.svg"
                    alt="group314_One"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[37px] sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[52px] sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
                    <Text
                      className="mt-[52px] sm:text-[17.38px] md:text-[19.38px] text-[21.38px] text-blue_gray-900"
                      size="txtInterRegular2138"
                    >
                      <>
                        Lorem Ipsum Dolor Dolor <br />
                        et Pas que
                      </>
                    </Text>
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

export default SubscriptionPage;
