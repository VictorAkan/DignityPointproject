import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import HomeCreateNewCreateJobPost from "components/HomeCreateNewCreateJobPost";

import { CloseSVG } from "../../assets/images";

const HomeViewProfilePage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-center justify-end w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[52px] p-2.5 w-[23%] md:w-full">
              <div className="flex flex-row items-center justify-between w-[300px]">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    All Friends / View Profile
                  </Text>
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    View profile
                  </Text>
                </div>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown"
                />
              </div>
              <Input
                name="searchbar"
                placeholder="Search for someone"
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-center w-full"
                wrapClassName="flex mt-[3px] w-[300px]"
                suffix={
                  searchbarvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-px mb-auto cursor-pointer h-6 ml-[35px]"
                      onClick={() => setSearchbarvalue("")}
                      fillColor="#989d9f"
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  ) : (
                    <Img
                      className="mt-px mb-auto cursor-pointer h-6 ml-[35px]"
                      src="images/img_search_gray_700_24x24.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                color="indigo_50"
                size="md"
                variant="fill"
              ></Input>
              <div className="flex flex-col items-start justify-start mb-[70px] mt-4 w-[300px]">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_tracy_70x70.png"
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
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_ruby_70x70.png"
                      alt="ruby"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
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
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_mark_70x70.png"
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
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_betty_70x70.png"
                      alt="betty"
                    />
                    <div className="flex flex-col items-start justify-start w-[220px]">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @lesliealexbaby
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_conan_70x70.png"
                      alt="conan"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Ralph Edwards
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @ralphcodes
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_hansel_70x70.png"
                      alt="hansel"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900_01 text-center w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @guyhawkins
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border-b border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-row gap-2.5 items-center justify-start py-[5px] hover:shadow-bs shadow-bs w-[300px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_janet_70x70.png"
                      alt="janet"
                    />
                    <div className="flex flex-col items-start justify-start w-[220px]">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtPoppinsSemiBold16Black90001"
                      >
                        Jacob Jones
                      </Text>
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        @jacobjones12
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[77%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex h-[143px] md:h-[63px] justify-end pt-20 relative rounded-[20px] w-full"
                style={{ backgroundImage: "url('images/img_frame8667.png')" }}
              >
                <div className="bg-gradient5  h-[63px] mt-auto mx-auto rounded-bl-[20px] rounded-br-[20px] shadow-bs w-full"></div>
                <Img
                  className="absolute bottom-[0] h-[60px] left-[2%] object-cover rounded-[60px] w-[12%]"
                  src="images/img_hannah_60x120.png"
                  alt="hannah"
                />
                <div className="absolute bottom-[0] flex flex-row sm:gap-10 items-center justify-between max-w-[908px] right-[2%] w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsBlack24"
                    >
                      Jake Aelf
                    </Text>
                    <Text
                      className="max-w-[100px] md:max-w-full text-base text-white-A700"
                      size="txtPoppinsSemiBold16WhiteA700"
                    >
                      @callmejake
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[92px]"
                      leftIcon={
                        <div className="mt-0.5 mb-[3px] mr-[5px] bg-black-900_01">
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
                        Friends
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
              <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[155px] mt-2.5 w-auto">
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
                    Followers
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
                    Following
                  </Text>
                  <Text
                    className="text-base text-center text-light_blue-900 w-auto"
                    size="txtPoppinsSemiBold16Lightblue900"
                  >
                    2,567
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[36%]"
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
              <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1080px] mt-1.5 sm:px-5 px-6 py-2.5 rounded-lg w-full">
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
              <HomeCreateNewCreateJobPost className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[527px] md:h-auto items-start justify-start md:ml-[0] ml-[59px] mt-2.5 px-5 py-2.5 rounded-[20px] shadow-bs w-auto md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeViewProfilePage;
