import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const HomeCreateNewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100_99 flex flex-col font-poppins items-center justify-start mx-auto p-[321px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[5px] items-center justify-start w-auto md:w-full">
          <Input
            name="frame8840"
            placeholder="Create New"
            className="!placeholder:text-black-900_01 !text-black-900_01 font-semibold leading-[normal] p-0 text-base text-left w-full"
            wrapClassName="border border-blue_gray-100_01 border-solid flex max-w-screen-sm rounded-[20px] w-full"
            suffix={
              <div className="ml-[35px] w-[29px] bg-indigo-50 p-2.5 rounded-[15px]">
                <Img
                  className="h-2.5"
                  src="images/img_close_red_a700.svg"
                  alt="close"
                />
              </div>
            }
            color="white_A700"
            size="md"
            variant="fill"
          ></Input>
          <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
            <div
              className="common-pointer bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-end p-[18px] rounded-[20px] w-full"
              onClick={() => navigate("/homecreatenewpost")}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start mt-0.5 w-auto">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_vector_black_900_01.svg"
                  alt="vector"
                />
                <Text
                  className="text-[13px] text-black-900_01 text-center w-auto"
                  size="txtPoppinsMedium13Black90001"
                >
                  Create Post
                </Text>
              </div>
            </div>
            <div
              className="common-pointer bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-end justify-start p-[13px] rounded-[20px] w-full"
              onClick={() => navigate("/creategroup")}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[3px] mt-2 w-auto">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_close_black_900_01.svg"
                  alt="close_One"
                />
                <Text
                  className="text-[13px] text-black-900_01 text-center w-auto"
                  size="txtPoppinsMedium13Black90001"
                >
                  Create Group
                </Text>
              </div>
            </div>
            <div
              className="common-pointer bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-end justify-start p-1.5 rounded-[20px] w-full"
              onClick={() => navigate("/memoriescreatenew")}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start mb-2.5 mt-[15px] w-auto">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_heart_black_900_01.svg"
                  alt="heart"
                />
                <Text
                  className="text-[13px] text-black-900_01 text-center w-auto"
                  size="txtPoppinsMedium13Black90001"
                >
                  Create Memory
                </Text>
              </div>
            </div>
            <div
              className="common-pointer bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-end justify-start p-4 rounded-[20px] w-full"
              onClick={() => navigate("/createpage")}
            >
              <div className="flex flex-col gap-2.5 items-center justify-start mt-[5px] w-auto">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_television_black_900_01_60x60.svg"
                  alt="television"
                />
                <Text
                  className="text-[13px] text-black-900_01 text-center w-auto"
                  size="txtPoppinsMedium13Black90001"
                >
                  Create Page
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-end justify-end p-[17px] rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mr-[5px] mt-[3px] w-auto">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="text-[13px] text-black-900_01 text-center w-auto"
                  size="txtPoppinsMedium13Black90001"
                >
                  Create job
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCreateNewPage;
