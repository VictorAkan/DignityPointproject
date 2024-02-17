import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const selectYearOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ApplyFilterPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_99 flex flex-col font-poppins items-center justify-start mx-auto p-[238px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-5 items-center justify-start md:px-5 px-[30px] py-5 rounded-lg shadow-bs w-auto md:w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-[550px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-[421px] sm:w-full">
              <Text
                className="text-black-900_01 text-xl w-auto"
                size="txtPoppinsSemiBold20Black90001"
              >
                Apply Filter
              </Text>
            </div>
            <Button
              className="flex h-9 items-center justify-center rounded-[50%] w-9"
              shape="circle"
              color="indigo_50"
              size="md"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_plus_black_900_01.svg"
                alt="plus"
              />
            </Button>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <SelectBox
              className="font-semibold leading-[normal] text-base text-left w-full"
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
              options={selectYearOptionsList}
              isSearchable={false}
              placeholder="Select Year"
              shape="round"
              color="indigo_50"
              size="md"
              variant="fill"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
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
              </div>
            </div>
          </div>
          <Text
            className="text-base text-light_blue-900 underline w-auto"
            size="txtPoppinsBlack16"
          >
            Remove Filter
          </Text>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
            color="light_blue_900"
            size="md"
            variant="fill"
          >
            Done
          </Button>
        </div>
      </div>
    </>
  );
};

export default ApplyFilterPage;
