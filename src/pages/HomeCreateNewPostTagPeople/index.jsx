import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HomeCreateNewPostTagPeoplePage = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-100_99 flex flex-col font-poppins items-center justify-start mx-auto p-[173px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start md:px-5 px-[30px] py-5 rounded-[20px] w-auto md:w-full">
          <div className="flex flex-row sm:gap-10 items-center justify-between w-[550px] sm:w-full">
            <Text
              className="text-base text-black-900_01 w-auto"
              size="txtPoppinsSemiBold16Black90001"
            >
              Tag People
            </Text>
            <Button
              className="common-pointer flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
              onClick={() => navigate("/homecreatenewpost")}
              shape="circle"
              color="indigo_50"
              size="md"
              variant="fill"
            >
              <Img
                className="h-3.5"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </Button>
          </div>
          <Input
            name="searchbar"
            placeholder="Search for people"
            value={searchbarvalue}
            onChange={(e) => setSearchbarvalue(e)}
            className="font-medium leading-[normal] p-0 placeholder:text-gray-500_01 text-[13px] text-center w-full"
            wrapClassName="flex w-[550px]"
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
            className="flex flex-col gap-5 items-center w-full"
            orientation="vertical"
          >
            <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[550px] sm:w-full">
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
            <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[550px] sm:w-full">
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
            <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[550px] sm:w-full">
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
            <div className="bg-white-A700 flex sm:flex-1 flex-row gap-2.5 items-center justify-between rounded-[10px] shadow-bs w-[550px] sm:w-full">
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
          <Button
            className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
            onClick={() => navigate("/homecreatenewpost")}
            color="light_blue_900"
            size="md"
            variant="fill"
          >
            Tag users
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeCreateNewPostTagPeoplePage;
