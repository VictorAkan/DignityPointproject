import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const InterestsPage = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins gap-[15px] items-center justify-start mx-auto w-full">
        <Header3 className="bg-white-A700 flex gap-2.5 items-center justify-center px-20 md:px-5 py-3.5 w-full" />
        <div className="flex flex-col items-center justify-start md:px-5 shadow-bs5 w-[41%] md:w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto md:w-full">
            <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start sm:px-5 px-[30px] py-5 rounded-[20px] w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-[550px] sm:w-full">
                <Text
                  className="text-black-900_01 text-center text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Follow Hashtags
                </Text>
                <Input
                  name="searchbar"
                  placeholder="Search for hashtags"
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-500_01 text-[13px] text-center w-full"
                  wrapClassName="flex w-64 sm:w-full"
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
              </div>
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="bg-indigo-50 justify-center pt-1 px-[5px] rounded-[10px] text-base text-center text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  #Design
                </Text>
                <Text
                  className="bg-indigo-50 justify-center pb-[3px] pt-1.5 px-[5px] rounded-[10px] text-base text-center text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  #Hip Hop Fest
                </Text>
                <Text
                  className="bg-indigo-50 justify-center px-[5px] py-1 rounded-[10px] text-base text-center text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  #WillSmith
                </Text>
                <Text
                  className="bg-indigo-50 justify-center px-[5px] py-1 rounded-[10px] text-base text-center text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  #Burna
                </Text>
                <Text
                  className="bg-indigo-50 justify-center pb-[3px] pt-1.5 px-[5px] rounded-[10px] text-base text-center text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  #coding
                </Text>
                <Text
                  className="bg-indigo-50 justify-center px-[5px] py-1 rounded-[10px] text-base text-center text-red-A700 w-auto"
                  size="txtPoppinsSemiBold16RedA700"
                >
                  Golf
                </Text>
              </div>
              <Line className="bg-indigo-50 h-0.5 w-full" />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[555px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="bg-indigo-50 justify-center pt-1 px-[5px] rounded-[10px] text-base text-black-900_01 text-center w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #Design
                  </Text>
                  <Text
                    className="bg-indigo-50 justify-center pb-[3px] pt-1.5 px-[5px] rounded-[10px] text-base text-black-900_01 text-center w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #Hip Hop Fest
                  </Text>
                  <Text
                    className="bg-indigo-50 justify-center px-[5px] py-1 rounded-[10px] text-base text-black-900_01 text-center w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #WillSmith
                  </Text>
                  <Text
                    className="bg-indigo-50 justify-center px-[5px] py-1 rounded-[10px] text-base text-black-900_01 text-center w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #Burna
                  </Text>
                  <Text
                    className="bg-indigo-50 justify-center pb-[3px] pt-1.5 px-[5px] rounded-[10px] text-base text-black-900_01 text-center w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    #coding
                  </Text>
                  <Text
                    className="bg-indigo-50 justify-center px-[5px] py-1 rounded-[10px] text-base text-black-900_01 text-center w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    Golf
                  </Text>
                </div>
                <Text
                  className="bg-blue_gray-50 justify-center pb-[3px] pt-1.5 px-[5px] rounded-[10px] text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  #joinMalipoma
                </Text>
              </div>
            </div>
            <div className="bg-light_blue-900 border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-start justify-start sm:px-5 px-[30px] py-5 rounded-[20px] shadow-bs w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-[550px] sm:w-full">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsSemiBold20"
                >
                  Add People
                </Text>
              </div>
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[550px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[180px]">
                    <Img
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      src="images/img_hannah_70x70.png"
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
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="light_blue_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_plus_white_a700.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[550px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[180px]">
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
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="light_blue_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_plus_white_a700.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between px-2.5 py-[5px] rounded-[10px] shadow-bs w-[550px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[216px]">
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
                        className="max-w-[100px] md:max-w-full text-[13px] text-gray-700"
                        size="txtPoppinsMedium13"
                      >
                        @writememoirs
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="light_blue_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_plus_white_a700.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start sm:px-5 px-[30px] py-5 rounded-[20px] w-auto md:w-full">
              <div className="flex flex-col items-start justify-center w-[550px] sm:w-full">
                <Text
                  className="text-black-900_01 text-center text-xl w-auto"
                  size="txtPoppinsSemiBold20Black90001"
                >
                  Join groups
                </Text>
              </div>
              <List
                className="flex flex-col gap-[283px] w-[94%]"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <div
                      className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[22px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame8771_22x252.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-end pt-[17px] px-[17px] rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="text-base text-center text-white-A700"
                          size="txtPoppinsSemiBold16WhiteA700"
                        >
                          Africa Startup Festival
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <div className="flex flex-col gap-[-10px] items-start justify-start w-auto">
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hannah_1x35.png"
                          alt="hannah"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_janet_1x35.png"
                          alt="janet"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_mark_1x35.png"
                          alt="mark"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hansel_1x35.png"
                          alt="hansel"
                        />
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-green-700 w-auto"
                          size="txtPoppinsSemiBold16Green700"
                        >
                          17k
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          members
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Jake Aelf, Chris Wong and 2 others are in this group
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[252px]"
                      leftIcon={
                        <div className="mt-1 mr-[5px] bg-black-900_01">
                          <Img
                            src="images/img_vector_black_900_01_-242x15.svg"
                            alt="Vector"
                          />
                        </div>
                      }
                      shape="square"
                      color="indigo_50"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-[13px] text-left">
                        Join group
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
                      <Img
                        className="h-[22px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                        src="images/img_image25_22x252.png"
                        alt="imageTwentyFive"
                      />
                      <Text
                        className="bg-gradient1  pt-[17px] sm:px-5 px-[35px] rounded-bl-lg rounded-br-lg text-base text-center text-white-A700"
                        size="txtPoppinsSemiBold16WhiteA700"
                      >
                        Historical Images
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <div className="flex flex-col gap-[-10px] items-start justify-start w-auto">
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hannah_1x35.png"
                          alt="hannah_One"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_janet_1x35.png"
                          alt="janet_One"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_mark_1x35.png"
                          alt="mark_One"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hansel_1x35.png"
                          alt="hansel_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-green-700 w-auto"
                          size="txtPoppinsSemiBold16Green700"
                        >
                          17k
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          members
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Jake Aelf, Chris Wong and 2 others are in this group
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[252px]"
                      leftIcon={
                        <div className="mt-1 mr-[5px] bg-black-900_01">
                          <Img
                            src="images/img_vector_black_900_01_-242x15.svg"
                            alt="Vector"
                          />
                        </div>
                      }
                      shape="square"
                      color="indigo_50"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-[13px] text-left">
                        Join group
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <div className="flex flex-col md:gap-10 gap-[91px] items-center justify-start w-full">
                      <Img
                        className="md:h-auto h-px object-cover w-full"
                        src="images/img_jakeprofilepic_1x252.png"
                        alt="jakeprofilepic"
                      />
                      <Text
                        className="bg-gradient1  pt-[17px] px-5 rounded-bl-lg rounded-br-lg text-base text-center text-white-A700"
                        size="txtPoppinsSemiBold16WhiteA700"
                      >
                        Jake Aelf Malipoma Team
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <div className="flex flex-col gap-[-10px] items-start justify-start w-auto">
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hannah_1x35.png"
                          alt="hannah"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_janet_1x35.png"
                          alt="janet"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_mark_1x35.png"
                          alt="mark"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hansel_1x35.png"
                          alt="hansel"
                        />
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-green-700 w-auto"
                          size="txtPoppinsSemiBold16Green700"
                        >
                          17k
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          members
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Jake Aelf, Chris Wong and 2 others are in this group
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[252px]"
                      leftIcon={
                        <div className="mt-1 mr-[5px] bg-black-900_01">
                          <Img
                            src="images/img_vector_black_900_01_-242x15.svg"
                            alt="Vector"
                          />
                        </div>
                      }
                      shape="square"
                      color="indigo_50"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-[13px] text-left">
                        Join group
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <div className="flex flex-col md:gap-10 gap-[91px] items-center justify-start w-full">
                      <Img
                        className="md:h-auto h-px object-cover w-full"
                        src="images/img_image26_1x252.png"
                        alt="imageTwentySix"
                      />
                      <Text
                        className="bg-gradient1  pt-[17px] sm:px-5 px-[35px] rounded-bl-lg rounded-br-lg text-base text-center text-white-A700"
                        size="txtPoppinsSemiBold16WhiteA700"
                      >
                        ChatGPT Experts
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <div className="flex flex-col gap-[-10px] items-start justify-start w-auto">
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hannah_1x35.png"
                          alt="hannah_One"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_janet_1x35.png"
                          alt="janet_One"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_mark_1x35.png"
                          alt="mark_One"
                        />
                        <Img
                          className="md:h-auto h-px object-cover rounded-[17px] w-[35px]"
                          src="images/img_hansel_1x35.png"
                          alt="hansel_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-green-700 w-auto"
                          size="txtPoppinsSemiBold16Green700"
                        >
                          17k
                        </Text>
                        <Text
                          className="text-[13px] text-gray-700 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          members
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Jake Aelf, Chris Wong and 2 others are in this group
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[252px]"
                      leftIcon={
                        <div className="mt-1 mr-[5px] bg-black-900_01">
                          <Img
                            src="images/img_vector_black_900_01_-242x15.svg"
                            alt="Vector"
                          />
                        </div>
                      }
                      shape="square"
                      color="indigo_50"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-[13px] text-left">
                        Join group
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] text-base text-center w-[610px]"
              onClick={() => navigate("/loadingthree")}
              shape="square"
              color="light_blue_900"
              size="sm"
              variant="fill"
            >
              Complete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestsPage;
