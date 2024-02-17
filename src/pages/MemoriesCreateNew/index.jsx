import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

const mmOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const yyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const cvOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MemoriesCreateNewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100_99 flex flex-col font-poppins items-center justify-start mx-auto p-3 w-full">
        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start md:px-5 px-[30px] py-5 rounded-[20px] w-auto md:w-full">
          <div className="flex flex-row sm:gap-10 items-center justify-between w-[550px] sm:w-full">
            <Text
              className="text-base text-black-900_01 w-auto"
              size="txtPoppinsSemiBold16Black90001"
            >
              Add new memory
            </Text>
            <Button
              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
              shape="circle"
              color="indigo_50"
              size="md"
              variant="fill"
            >
              <Img
                className="h-2.5"
                src="images/img_plus_black_900_01.svg"
                alt="plus"
              />
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-[550px] sm:w-full">
            <div className="flex flex-row gap-[5px] items-center justify-start w-[185px]">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/img_jonas.png"
                alt="jonas"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900_01 text-center w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Endurance Alex
                </Text>
                <Text
                  className="text-[13px] text-gray-700 w-auto"
                  size="txtPoppinsMedium13"
                >
                  @alexander_jnr
                </Text>
              </div>
            </div>
            <div
              className="common-pointer flex flex-row gap-2.5 items-center justify-start w-auto"
              onClick={() => navigate("/homecreatenewposttagpeople")}
            >
              <div className="flex relative w-[90px]">
                <div className="flex my-auto w-[78%]">
                  <div className="flex my-auto w-[72%]">
                    <Img
                      className="h-[30px] my-auto rounded-[50%] w-[30px]"
                      src="images/img_tracy_30x30.png"
                      alt="tracy"
                    />
                    <Img
                      className="h-[30px] ml-[-10px] my-auto rounded-[50%] w-[30px] z-[1]"
                      src="images/img_ruby_30x30.png"
                      alt="ruby"
                    />
                  </div>
                  <Img
                    className="h-[30px] ml-[-10px] my-auto rounded-[50%] w-[30px] z-[1]"
                    src="images/img_mark_30x30.png"
                    alt="mark"
                  />
                </div>
                <Img
                  className="h-[30px] ml-[-10px] my-auto rounded-[50%] w-[30px] z-[1]"
                  src="images/img_betty_30x30.png"
                  alt="betty"
                />
              </div>
              <Text
                className="text-[13px] text-light_blue-900 w-auto"
                size="txtPoppinsMedium13Lightblue900"
              >
                Tag people
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start w-[550px] sm:w-full">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              Privacy*
            </Text>
            <div className="flex flex-row gap-5 items-center justify-start w-auto">
              <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_contrast_light_blue_900.svg"
                  alt="contrast"
                />
                <Text
                  className="text-base text-gray-500_01 w-auto"
                  size="txtPoppinsSemiBold16Gray50001"
                >
                  Private
                </Text>
              </div>
              <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_contrast.svg"
                  alt="contrast_One"
                />
                <Text
                  className="text-base text-gray-500_01 w-auto"
                  size="txtPoppinsSemiBold16Gray50001"
                >
                  Public
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto sm:w-full">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              Category
            </Text>
            <Input
              name="choosepackage"
              placeholder="Category"
              className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
              wrapClassName="flex w-[550px] sm:w-full"
              suffix={
                <div className="mt-[5px] mb-2.5 ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-gray-700">
                  <Img
                    className="my-auto"
                    src="images/img_arrowdown_gray_700.svg"
                    alt="arrow_down"
                  />
                </div>
              }
              shape="round"
              color="indigo_50"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto sm:w-full">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              Description*
            </Text>
            <Input
              name="frame8762"
              placeholder="Write a caption/description"
              className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
              wrapClassName="w-full"
              shape="round"
              color="indigo_50"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto sm:w-full">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              Add Date*
            </Text>
            <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start w-auto sm:w-full">
              <SelectBox
                className="font-semibold leading-[normal] text-base text-left w-[33%] sm:w-full"
                placeholderClassName="text-gray-500_01"
                indicator={
                  <Img
                    className="h-[5px] w-2.5"
                    src="images/img_vector_black_900.svg"
                    alt="Vector"
                  />
                }
                isMulti={false}
                name="frame8763"
                options={mmOptionsList}
                isSearchable={false}
                placeholder="MM"
                shape="round"
                color="indigo_50"
                size="md"
                variant="fill"
              />
              <SelectBox
                className="font-semibold leading-[normal] text-base text-left w-[33%] sm:w-full"
                placeholderClassName="text-gray-500_01"
                indicator={
                  <Img
                    className="h-[5px] w-2.5"
                    src="images/img_vector_black_900.svg"
                    alt="Vector"
                  />
                }
                isMulti={false}
                name="frame8766"
                options={yyOptionsList}
                isSearchable={false}
                placeholder="YY"
                shape="round"
                color="indigo_50"
                size="md"
                variant="fill"
              />
              <SelectBox
                className="font-semibold leading-[normal] text-base text-left w-[33%] sm:w-full"
                placeholderClassName="text-gray-500_01"
                indicator={
                  <Img
                    className="h-[5px] w-2.5"
                    src="images/img_vector_black_900.svg"
                    alt="Vector"
                  />
                }
                isMulti={false}
                name="frame8767"
                options={cvOptionsList}
                isSearchable={false}
                placeholder="CV"
                shape="round"
                color="indigo_50"
                size="md"
                variant="fill"
              />
            </div>
          </div>
          <div className="bg-indigo-50 flex flex-col gap-[5px] items-center justify-center py-[50px] rounded-lg w-[550px] sm:w-full">
            <Button
              className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-8"
                src="images/img_vector.svg"
                alt="vector_Three"
              />
            </Button>
            <Text
              className="text-base text-black-900_01 w-auto"
              size="txtPoppinsSemiBold16Black90001"
            >
              Add Photos/Videos
            </Text>
            <Text
              className="text-[13px] text-gray-700 w-auto"
              size="txtPoppinsMedium13"
            >
              or drag and drop files here
            </Text>
          </div>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
            color="light_blue_900"
            size="md"
            variant="fill"
          >
            Post
          </Button>
        </div>
      </div>
    </>
  );
};

export default MemoriesCreateNewPage;
