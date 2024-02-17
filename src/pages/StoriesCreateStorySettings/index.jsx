import React from "react";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const StoriesCreateStorySettingsPage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-between mb-[702px] mt-[7px] w-[300px]">
                <Text
                  className="text-black-900_01 text-center text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Story Settings
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <List
              className="bg-white-A700 flex flex-col gap-[60px] p-[17px] rounded-[20px] w-[77%]"
              orientation="vertical"
            >
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black-900_01 text-center text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Status Privacy
                </Text>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[5px] items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Public
                      </Text>
                      <Text
                        className="text-base text-center text-gray-700 w-auto"
                        size="txtPoppinsSemiBold16Gray700"
                      >
                        Everyone on Malipoma will be able to see your post
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[5px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast_One"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Friends
                      </Text>
                      <Text
                        className="text-base text-center text-gray-700 w-auto"
                        size="txtPoppinsSemiBold16Gray700"
                      >
                        Only people in your friend list on Malipoma will be able
                        to see your post
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[5px] items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast_Two"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Private
                      </Text>
                      <Text
                        className="text-base text-center text-gray-700 w-auto"
                        size="txtPoppinsSemiBold16Gray700"
                      >
                        Only you and those tagged will be able to see your post
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black-900_01 text-center text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Status Privacy
                </Text>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[5px] items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Public
                      </Text>
                      <Text
                        className="text-base text-center text-gray-700 w-auto"
                        size="txtPoppinsSemiBold16Gray700"
                      >
                        Everyone on Malipoma will be able to see your post
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[5px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast_One"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Friends
                      </Text>
                      <Text
                        className="text-base text-center text-gray-700 w-auto"
                        size="txtPoppinsSemiBold16Gray700"
                      >
                        Only people in your friend list on Malipoma will be able
                        to see your post
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[5px] items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast_Two"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl w-auto"
                        size="txtPoppinsSemiBold20Black90001"
                      >
                        Private
                      </Text>
                      <Text
                        className="text-base text-center text-gray-700 w-auto"
                        size="txtPoppinsSemiBold16Gray700"
                      >
                        Only you and those tagged will be able to see your post
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesCreateStorySettingsPage;
