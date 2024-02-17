import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, SelectBox, Text } from "components";

const addDescriptionHereOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MarketplaceOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[52%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700_01 flex flex-col items-center justify-end p-[29px] md:px-5 rounded-[20px] w-full">
          <div className="flex flex-col items-start justify-start mt-0.5 w-[97%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                size="txtPoppinsSemiBold26"
              >
                Add Product
              </Text>
              <Button
                className="flex h-9 items-center justify-center mb-[3px] rounded-[50%] w-9"
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
            <div className="flex flex-col gap-6 items-start justify-start mt-[17px] w-auto md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtPoppinsRegular18Bluegray900"
                >
                  Add Price
                </Text>
                <Input
                  name="groupTwentySeven"
                  placeholder="Add Role"
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-center text-sm w-full"
                  wrapClassName="rounded-[9px] w-full"
                  shape="round"
                  color="indigo_50_02"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtPoppinsRegular18Bluegray900"
                >
                  Choose Category
                </Text>
                <SelectBox
                  className="leading-[normal] rounded-[9px] text-left text-sm w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-2 mr-[0] w-3.5"
                      src="images/img_arrowdown_gray_700.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupTwentyEight"
                  options={addDescriptionHereOptionsList}
                  isSearchable={false}
                  placeholder="Add Description here"
                  shape="round"
                  color="indigo_50_02"
                  size="sm"
                  variant="fill"
                />
              </div>
              <div className="bg-indigo-50 flex flex-col gap-[5px] h-[222px] md:h-auto items-center justify-center max-w-[705px] py-[50px] rounded-lg w-full">
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
                    alt="vector"
                  />
                </Button>
                <Text
                  className="text-base text-black-900_01 w-auto"
                  size="txtPoppinsSemiBold16Black90001"
                >
                  Add Product Photo
                </Text>
                <Text
                  className="text-[13px] text-gray-700 w-auto"
                  size="txtPoppinsMedium13"
                >
                  or drag and drop files here
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtPoppinsRegular18Bluegray900"
                >
                  Add Price
                </Text>
                <Input
                  name="groupTwentyNine"
                  placeholder="Add Role"
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-center text-sm w-full"
                  wrapClassName="rounded-[9px] w-full"
                  shape="round"
                  color="indigo_50_02"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtPoppinsRegular18Bluegray900"
                >
                  Contact Information
                </Text>
                <Input
                  name="groupThirty"
                  placeholder="Add Description here"
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="rounded-[9px] w-full"
                  shape="round"
                  color="indigo_50_02"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtPoppinsRegular18Bluegray900"
                >
                  Location
                </Text>
                <Input
                  name="groupThirtyOne"
                  placeholder="Add Description here"
                  className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="rounded-[9px] w-full"
                  shape="round"
                  color="indigo_50_02"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium h-[37px] leading-[normal] md:ml-[0] ml-[195px] mt-3.5 rounded-[9px] text-[16.03px] text-center w-[281px]"
              shape="round"
              color="green_700"
              size="sm"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default MarketplaceOneModal;
