import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header2 from "components/Header2";
import PageDiscoverOneRowlikepage from "components/PageDiscoverOneRowlikepage";

import { CloseSVG } from "../../assets/images";

const PageDiscoverOne = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 w-[23%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[496px] mt-[7px] w-[300px]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-[300px]">
                  <Text
                    className="text-black-900_01 text-center text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Pages
                  </Text>
                  <div
                    className="common-pointer flex flex-row gap-[5px] items-center justify-start w-auto"
                    onClick={() => navigate("/createpage")}
                  >
                    <Button
                      className="flex items-center justify-center rounded-[17px] w-[33px]"
                      shape="circle"
                      color="indigo_50"
                      size="md"
                      variant="fill"
                    >
                      <Img src="images/img_plus_black_900_01.svg" alt="plus" />
                    </Button>
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      Create New
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-[300px] sm:w-full">
                  <Input
                    name="frame8819"
                    placeholder="Discover"
                    className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="border-b border-blue_gray-100_01 border-solid flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-auto h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="green_700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <Input
                    name="frame8817"
                    placeholder="Pages you follow"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame8818"
                    placeholder="My Pages"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 h-6 mr-[30px]"
                        src="images/img_television_black_900_01.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_01"
                    size="2xl"
                    variant="outline"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[20px] w-[77%] md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start mb-[295px] w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1040px] w-full">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Discover
                  </Text>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Button
                        className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[113px]"
                        onClick={() => navigate("/pagediscover")}
                        leftIcon={
                          <div className="h-[18px] mt-px mb-[5px] mr-[5px] w-[18px] bg-black-900_01">
                            <Img
                              className="h-[18px]"
                              src="images/img_megaphone.svg"
                              alt="megaphone"
                            />
                          </div>
                        }
                        size="md"
                      >
                        <div className="font-semibold leading-[normal] text-base text-gray-700 text-left">
                          All posts
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[113px]"
                        leftIcon={
                          <div className="h-[18px] mt-[3px] mb-0.5 mr-[5px] w-[18px] bg-black-900_01">
                            <Img
                              className="h-[18px]"
                              src="images/img_grid_black_900_01.svg"
                              alt="grid"
                            />
                          </div>
                        }
                        shape="square"
                        color="gray_500_01"
                        size="md"
                        variant="outline"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Overview
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Input
                        name="searchbar"
                        placeholder="Search for a page"
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
                      <Button
                        className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                        shape="circle"
                        color="indigo_50"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_qrcode.svg"
                          alt="qrcode"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="gap-2.5 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame8856_150x252.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mb-[3px] text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Pizza Hut
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame8858_150x252.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mb-[3px] text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Louis Vuitton
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame8859_150x252.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mb-[3px] text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          <>McDonald&#39;s</>
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame8860.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-end p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mt-[3px] text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Sony
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame8856_1.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mb-[3px] text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Mitsubishi
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame8858_1.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mb-[3px] text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Ferrari
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame8859_1.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mb-0.5 text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Johnson & Johnson
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-end pt-[92px] rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame8860_150x252.png')",
                      }}
                    >
                      <div className="bg-gradient1  flex flex-col items-center justify-end p-3 rounded-bl-lg rounded-br-lg w-full">
                        <Text
                          className="mt-0.5 text-center text-white-A700 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Apple
                        </Text>
                      </div>
                    </div>
                    <PageDiscoverOneRowlikepage className="flex flex-row gap-[5px] items-center justify-start w-auto" />
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

export default PageDiscoverOne;
