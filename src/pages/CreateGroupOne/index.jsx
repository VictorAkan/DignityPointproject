import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import MemoriesMyMemoriesReactionbar from "components/MemoriesMyMemoriesReactionbar";

import { CloseSVG } from "../../assets/images";

const CreateGroupOnePage = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-1.5 items-center justify-end w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[89px] md:mt-0 mt-0.5 p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[202px] w-auto">
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
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Step 3/3
                  </Text>
                  <Text
                    className="max-w-[300px] md:max-w-full text-base text-gray-700"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Send an invite to your friends to join your group
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Input
                    name="searchbar"
                    placeholder="Search for people"
                    value={searchbarvalue}
                    onChange={(e) => setSearchbarvalue(e)}
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-500_01 text-[13px] text-center w-full"
                    wrapClassName="flex w-[300px]"
                    suffix={
                      <div className="h-3.5 mt-px mb-1 ml-[35px] w-3.5 bg-gray-700">
                        {searchbarvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer h-3.5 my-auto"
                            onClick={() => setSearchbarvalue("")}
                            fillColor="#989d9f"
                            height={14}
                            width={14}
                            viewBox="0 0 14 14"
                          />
                        ) : (
                          <Img
                            className="cursor-pointer h-3.5 my-auto"
                            src="images/img_search_gray_700_14x14.svg"
                            alt="search"
                          />
                        )}
                      </div>
                    }
                    shape="round"
                    color="indigo_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                  <List
                    className="flex flex-col gap-2.5 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_mark.png"
                          alt="mark"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 text-center w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Terry Fiscer
                          </Text>
                          <Text
                            className="text-[13px] text-gray-700 w-auto"
                            size="txtPoppinsMedium13"
                          >
                            @terryfiscer
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_ruby.png"
                          alt="ruby"
                        />
                        <div className="flex flex-col items-start justify-start w-[171px]">
                          <Text
                            className="text-base text-black-900_01 text-center w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            writes_memoirs
                          </Text>
                          <Text
                            className="text-[13px] text-gray-700 w-auto"
                            size="txtPoppinsMedium13"
                          >
                            @writememoirs
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_tracy.png"
                          alt="tracy"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 text-center w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Chris Wong
                          </Text>
                          <Text
                            className="text-[13px] text-gray-700 w-auto"
                            size="txtPoppinsMedium13"
                          >
                            @chriswong
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                    <div
                      className="common-pointer bg-white-A700 flex flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[300px]"
                      onClick={() => navigate("/homeviewprofile")}
                    >
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_hannah.png"
                          alt="hannah"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 w-auto"
                            size="txtPoppinsSemiBold16Black90001"
                          >
                            Jake Aelf
                          </Text>
                          <Text
                            className="text-[13px] text-gray-700 w-auto"
                            size="txtPoppinsMedium13"
                          >
                            @callmejake
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    </div>
                  </List>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Text
                    className="text-[13px] text-center text-light_blue-900 underline w-auto"
                    size="txtPoppinsMedium13Lightblue900"
                  >
                    Skip, invite friends later
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[300px] rounded-[12px] text-base text-center"
                    onClick={() => navigate("/loadingseven")}
                    color="light_blue_900"
                    size="md"
                    variant="fill"
                  >
                    Done
                  </Button>
                </div>
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
                        className="cursor-pointer flex items-center justify-center min-w-[99px]"
                        leftIcon={
                          <div className="h-3.5 mt-px mb-[5px] mr-[5px] w-3.5 bg-white-A700">
                            <Img
                              className="h-3.5"
                              src="images/img_television_white_a700.svg"
                              alt="television"
                            />
                          </div>
                        }
                        shape="round"
                        color="light_blue_900"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-[13px] text-left">
                          Message
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
                  <div className="flex flex-col gap-[3px] h-[57px] md:h-auto items-center justify-start p-[5px] w-[72px]">
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

export default CreateGroupOnePage;
