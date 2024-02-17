import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header2 from "components/Header2";
import MemoriesMyMemoriesReactionbar from "components/MemoriesMyMemoriesReactionbar";

const selectPrivacyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreateGroupTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-1.5 items-center justify-end w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[89px] md:mt-0 mt-0.5 p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[195px] w-auto">
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-[300px]">
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Groups / Create Group
                      </Text>
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Create Group
                      </Text>
                    </div>
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Text
                    className="max-w-[300px] md:max-w-full text-[13px] text-gray-700"
                    size="txtPoppinsMedium13"
                  >
                    Groups helps you connect and collaborate with users of
                    similar interests
                  </Text>
                </div>
                <Text
                  className="text-base text-black-900_01 w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Step 1/3
                </Text>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Group Name*
                  </Text>
                  <Input
                    name="frame8754"
                    placeholder="Enter name"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-500_01 text-[13px] text-left w-full"
                    wrapClassName="w-full"
                    type="text"
                    shape="round"
                    color="indigo_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Group Privacy*
                  </Text>
                  <SelectBox
                    className="font-medium leading-[normal] text-[13px] text-left w-full"
                    placeholderClassName="text-gray-500_01"
                    indicator={
                      <Img
                        className="h-2 w-3.5"
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame8754_One"
                    options={selectPrivacyOptionsList}
                    isSearchable={false}
                    placeholder="Select privacy"
                    shape="round"
                    color="indigo_50"
                    size="md"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    About*
                  </Text>
                  <Input
                    name="frame8754_Two"
                    placeholder="Write a description for this page"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-500_01 text-[13px] text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="indigo_50"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[300px] rounded-[12px] text-base text-center"
                  onClick={() => navigate("/creategroupthree")}
                  color="light_blue_900"
                  size="md"
                  variant="fill"
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[77%] md:w-full">
              <Text
                className="text-black-900_01 text-center text-xl"
                size="txtPoppinsSemiBold20Black90001"
              >
                Preview
              </Text>
              <div className="flex flex-col ml-0.5 md:ml-[0] mt-[9px] relative w-full">
                <div className="bg-white-A700 flex sm:h-[103px] h-[143px] md:h-[63px] justify-end mx-auto pt-20 rounded-[20px] w-full">
                  <div className="bg-gradient5  h-[63px] mt-auto mx-auto rounded-bl-[20px] rounded-br-[20px] shadow-bs w-full"></div>
                  <div className="absolute bottom-[8%] flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[908px] right-[2%] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl w-auto"
                      size="txtPoppinsBold24"
                    >
                      Group Name
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[115px]"
                        leftIcon={
                          <div className="mt-px mb-1 mr-[5px] bg-black-900_01">
                            <Img
                              src="images/img_settings_black_900_01.svg"
                              alt="settings"
                            />
                          </div>
                        }
                        shape="round"
                        color="indigo_50"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-[13px] text-left">
                          Join group
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[115px]"
                        leftIcon={
                          <div className="h-3.5 mt-0.5 mb-[3px] mr-[5px] w-3.5 bg-white-A700">
                            <Img
                              className="h-3.5"
                              src="images/img_bookmark_white_a700.svg"
                              alt="bookmark"
                            />
                          </div>
                        }
                        shape="round"
                        color="light_blue_900"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-[13px] text-left">
                          Create Post
                        </div>
                      </Button>
                      <div className="bg-indigo-50 flex flex-col h-7 md:h-auto items-center justify-center px-2.5 py-[3px] rounded-lg w-7">
                        <Line className="bg-black-900_01 h-[17px] w-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-[3px] border-blue_gray-100_01 border-solid flex flex-col h-[120px] items-center justify-start ml-6 mt-[-52px] p-[30px] sm:px-5 rounded-[50%] w-[120px] z-[1]">
                  <Img
                    className="h-[60px] w-[60px]"
                    src="images/img_bookmark_gray_500_01.svg"
                    alt="bookmark"
                  />
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center ml-[156px] mt-[-NaNpx] w-auto z-[1]">
                  <div className="border-b-2 border-light_blue-900 border-solid flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Post
                    </Text>
                    <Text
                      className="text-base text-center text-light_blue-900 w-auto"
                      size="txtPoppinsSemiBold16Lightblue900"
                    >
                      18.3k
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Members
                    </Text>
                    <Text
                      className="text-base text-center text-light_blue-900 w-auto"
                      size="txtPoppinsSemiBold16Lightblue900"
                    >
                      18.3k
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[47%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Photos
                      </Text>
                      <Text
                        className="text-base text-center text-light_blue-900 w-auto"
                        size="txtPoppinsSemiBold16Lightblue900"
                      >
                        700
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[3px] items-center justify-start p-[5px] w-auto">
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        Videos
                      </Text>
                      <Text
                        className="text-base text-center text-light_blue-900 w-auto"
                        size="txtPoppinsSemiBold16Lightblue900"
                      >
                        300
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1080px] ml-0.5 md:ml-[0] mt-[5px] sm:px-5 px-6 py-2.5 rounded-lg w-full">
                <Text
                  className="text-black-900_01 text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Posts
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
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
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Filters
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col h-[527px] md:h-auto items-start justify-start md:ml-[0] ml-[72px] mt-2.5 px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full">
                <div className="flex flex-col gap-2.5 h-[501px] md:h-auto items-start justify-start max-w-[898px] w-full">
                  <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[239px]">
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[50px]"
                        src="images/img_image52.png"
                        alt="imageFiftyTwo"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Page Name
                          </Text>
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_crownsvgrepocom.svg"
                            alt="crownsvgrepocom"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Img
                            className="h-3 w-3"
                            src="images/img_bookmark.svg"
                            alt="bookmark_One"
                          />
                          <Text
                            className="text-[13px] text-gray-700"
                            size="txtPoppinsMedium13"
                          >
                            1hr
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_morevertfill1.svg"
                      alt="morevertfillOne"
                    />
                  </div>
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Post caption here...
                  </Text>
                  <Img
                    className="h-[359px] w-[898px]"
                    src="images/img_frame8400.svg"
                    alt="frame8400"
                  />
                  <MemoriesMyMemoriesReactionbar className="flex flex-row sm:gap-10 items-center justify-between max-w-[898px] w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateGroupTwoPage;
