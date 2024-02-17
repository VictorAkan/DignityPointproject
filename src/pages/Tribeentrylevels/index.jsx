import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const TribeentrylevelsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-[9px] items-center justify-start mx-auto pb-[243px] w-full">
        <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
        <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1412px] mx-auto md:px-5 w-full">
          <div className="bg-green-700 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start mt-0.5 w-[21%] md:w-full">
              <div className="flex flex-col gap-px items-center justify-start w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Tribe Entry Levels
                </Text>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold16WhiteA700"
                >
                  Choose a sign up package
                </Text>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start px-2.5 py-5 rounded-lg shadow-bs w-auto">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[60px] sm:w-full"
                  src="images/img_malipoma.png"
                  alt="malipomaTwo"
                />
                <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01 text-center w-full"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Starter Membership DignityPoint Account
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-green-700 w-auto"
                    size="txtPoppinsSemiBold32Green700"
                  >
                    FREE
                  </Text>
                  <Text
                    className="text-[13px] text-black-900_01 text-center w-[85%] sm:w-full"
                    size="txtPoppinsMedium13Black90001"
                  >
                    This account gives you access to all the features, segments,
                    brands and tools of the platform for free
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[197px] text-base text-center"
                    onClick={() => navigate("/tribeentrylevelssignup")}
                    shape="round"
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to this offer
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-2"
                      src="images/img_vector_gray_500_01.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-gray-500_01 w-auto"
                      size="txtPoppinsMedium13Gray50001"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start px-2.5 py-5 rounded-lg shadow-bs w-auto">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[60px] sm:w-full"
                  src="images/img_malipoma.png"
                  alt="malipomaTwo"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01 text-center w-full"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Premium Membership DignityPoint Account
                  </Text>
                  <Text
                    className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-700 w-auto"
                    size="txtPoppinsSemiBold32Green700"
                  >
                    N6,000
                  </Text>
                  <Text
                    className="mt-2 text-[13px] text-black-900_01 text-center w-[85%] sm:w-full"
                    size="txtPoppinsMedium13Black90001"
                  >
                    This gives you access to all the features, a tribe, one
                    Leadership Factor Academy and tools of the platform
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[197px] mt-2.5 text-base text-center"
                    onClick={() => navigate("/tribeentrylevelssignup")}
                    shape="round"
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to this offer
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-auto">
                    <Img
                      className="h-2"
                      src="images/img_vector_green_700.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-green-700 w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start px-2.5 py-5 rounded-lg shadow-bs w-auto">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[60px] sm:w-full"
                  src="images/img_malipoma.png"
                  alt="malipomaTwo"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01 text-center w-full"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Premium+ Membership DignityPoint Account
                  </Text>
                  <Text
                    className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-700 w-auto"
                    size="txtPoppinsSemiBold32Green700"
                  >
                    N12,000
                  </Text>
                  <Text
                    className="mt-2 text-[13px] text-black-900_01 text-center w-[85%] sm:w-full"
                    size="txtPoppinsMedium13Black90001"
                  >
                    This gives you access to all the features, two tribe, one
                    Leadership Factor Academy and tools of the platform
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[197px] mt-2.5 text-base text-center"
                    onClick={() => navigate("/tribeentrylevelssignup")}
                    shape="round"
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to this offer
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-auto">
                    <Img
                      className="h-2"
                      src="images/img_vector_green_700.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-green-700 w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start px-2.5 py-5 rounded-lg shadow-bs w-auto">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[60px] sm:w-full"
                  src="images/img_malipoma.png"
                  alt="malipomaTwo"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01 text-center w-full"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Domi Leadership DignityPoint Account
                  </Text>
                  <Text
                    className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-700 w-auto"
                    size="txtPoppinsSemiBold32Green700"
                  >
                    N36,000
                  </Text>
                  <Text
                    className="mt-2 text-[13px] text-black-900_01 text-center w-[85%] sm:w-full"
                    size="txtPoppinsMedium13Black90001"
                  >
                    This gives you access to all the features, three tribe, one
                    Leadership Factor Academy and tools of the platform
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[197px] mt-2.5 text-base text-center"
                    onClick={() => navigate("/tribeentrylevelssignup")}
                    shape="round"
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to this offer
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-auto">
                    <Img
                      className="h-2"
                      src="images/img_vector_green_700.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-green-700 w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start px-2.5 py-5 rounded-lg shadow-bs w-auto">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[60px] sm:w-full"
                  src="images/img_malipoma.png"
                  alt="malipomaTwo"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01 text-center w-full"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Domi Ambassador DignityPoint Account
                  </Text>
                  <Text
                    className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-700 w-auto"
                    size="txtPoppinsSemiBold32Green700"
                  >
                    N132,000
                  </Text>
                  <Text
                    className="mt-2 text-[13px] text-black-900_01 text-center w-[85%] sm:w-full"
                    size="txtPoppinsMedium13Black90001"
                  >
                    This gives you access to all the features, three tribe, one
                    Leadership Factor Academy and tools of the platform
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[197px] mt-2.5 text-base text-center"
                    onClick={() => navigate("/tribeentrylevelssignup")}
                    shape="round"
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to this offer
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-auto">
                    <Img
                      className="h-2"
                      src="images/img_vector_green_700.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-green-700 w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      Read More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start px-2.5 py-5 rounded-lg shadow-bs w-auto">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[60px] sm:w-full"
                  src="images/img_malipoma.png"
                  alt="malipomaTwo"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900_01 text-center w-full"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Elite Ambassador DignityPoint Account
                  </Text>
                  <Text
                    className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-700 w-auto"
                    size="txtPoppinsSemiBold32Green700"
                  >
                    N300,000
                  </Text>
                  <Text
                    className="mt-2 text-[13px] text-black-900_01 text-center w-[85%] sm:w-full"
                    size="txtPoppinsMedium13Black90001"
                  >
                    This gives you access to all the features, three tribe, one
                    Leadership Factor Academy and tools of the platform
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[197px] mt-2.5 text-base text-center"
                    onClick={() => navigate("/tribeentrylevelssignup")}
                    shape="round"
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Subscribe to this offer
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-auto">
                    <Img
                      className="h-2"
                      src="images/img_vector_green_700.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-[13px] text-green-700 w-auto"
                      size="txtPoppinsMedium13Green700"
                    >
                      Read More
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

export default TribeentrylevelsPage;
