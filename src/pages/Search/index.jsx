import React from "react";

import { Img, List, SelectBox, Text } from "components";

const viewedUpdatesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SearchPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 flex sm:flex-col md:flex-col flex-row font-poppins gap-5 items-start mx-auto md:pr-10 sm:pr-5 pr-[50px] pt-[50px] w-full">
        <div className="bg-white-A700 flex flex-col gap-2.5 h-[724px] md:h-auto items-start justify-start md:mt-0 mt-[50px] md:pl-5 pl-[50px] pr-5 pt-2.5 w-auto sm:w-full">
          <div className="flex flex-row items-center justify-between w-[372px] sm:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center w-auto"
              size="txtPoppinsSemiBold32Black90001"
            >
              Stories
            </Text>
            <Img
              className="h-[30px] w-[65px]"
              src="images/img_settings_gray_700.svg"
              alt="settings"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start py-[5px] w-[372px] sm:w-full">
            <div className="h-[70px] relative w-[70px]">
              <Img
                className="h-[70px] m-auto rounded-[50%] w-[70px]"
                src="images/img_profile1.png"
                alt="profileOne"
              />
              <div className="absolute bg-green-600 border border-solid border-white-A700 bottom-[0] h-[21px] right-[0] rounded-[10px] w-[21px]"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-[292px]">
              <Text
                className="text-black-900_01 text-xl w-auto"
                size="txtPoppinsSemiBold20Black90001"
              >
                My stories
              </Text>
              <Text
                className="text-base text-gray-700 w-auto"
                size="txtPoppinsMedium16Gray700"
              >
                No updates
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[372px] sm:w-full">
            <Text
              className="text-base text-black-900_01 text-center w-auto"
              size="txtPoppinsMedium16Black90001"
            >
              Recent updates
            </Text>
          </div>
          <List className="flex flex-col gap-2.5 w-full" orientation="vertical">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start py-[5px] w-[372px] sm:w-full">
              <div className="bg-gradient4  border-[3px] border-solid deep_orange_700_pink_400_border11 md:h-[30px] h-[70px] pl-5 pt-5 relative rounded-[50%] w-[70px]">
                <div className="absolute bg-green-600 border border-solid border-white-A700 bottom-[0] h-[21px] right-[0] rounded-[10px] w-[21px]"></div>
                <Img
                  className="absolute h-[30px] inset-[0] justify-center m-auto object-cover w-[30px]"
                  src="images/img_pleepicon2.png"
                  alt="pleepiconTwo"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-[292px]">
                <div className="flex flex-row gap-2.5 items-center justify-start w-[88px]">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    pleep
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_verifiedfill1.svg"
                    alt="verifiedfillOne"
                  />
                </div>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsMedium16Gray700"
                >
                  Today, 5:00pm
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start py-[5px] w-[372px] sm:w-full">
              <div className="h-[70px] relative w-[70px]">
                <Img
                  className="h-[70px] m-auto rounded-[50%] w-[70px]"
                  src="images/img_profile1_70x70.png"
                  alt="profileOne"
                />
                <div className="absolute bg-green-600 border border-solid border-white-A700 bottom-[0] h-[21px] right-[0] rounded-[10px] w-[21px]"></div>
              </div>
              <div className="flex flex-col items-start justify-center w-[292px]">
                <div className="flex flex-row gap-2.5 items-center justify-start w-[91px]">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Sarah
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_verifiedfill1.svg"
                    alt="verifiedfillOne"
                  />
                </div>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsMedium16Gray700"
                >
                  Today, 5:00pm
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start py-[5px] w-[372px] sm:w-full">
              <div className="h-[70px] relative w-[70px]">
                <Img
                  className="h-[70px] m-auto rounded-[50%] w-[70px]"
                  src="images/img_profile21.png"
                  alt="profileTwentyOne"
                />
                <div className="absolute bg-green-600 border border-solid border-white-A700 bottom-[0] h-[21px] right-[0] rounded-[10px] w-[21px]"></div>
              </div>
              <div className="flex flex-col items-start justify-center w-[292px]">
                <div className="flex flex-row gap-2.5 items-center justify-start w-[79px]">
                  <Text
                    className="text-black-900_01 text-xl w-auto"
                    size="txtPoppinsSemiBold20Black90001"
                  >
                    Jake
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_verifiedfill1.svg"
                    alt="verifiedfillOne"
                  />
                </div>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsMedium16Gray700"
                >
                  Today, 5:00pm
                </Text>
              </div>
            </div>
          </List>
          <SelectBox
            className="font-medium leading-[normal] text-base text-black-900_01 text-center w-full"
            placeholderClassName="text-black-900_01"
            indicator={
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_black_900_01.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="frame8519"
            options={viewedUpdatesOptionsList}
            isSearchable={false}
            placeholder="Viewed updates"
          />
        </div>
        <div className="bg-white-A700 h-[724px] md:mt-0 mt-[50px] md:px-5 rounded-[20px] w-[69%]"></div>
      </div>
    </>
  );
};

export default SearchPage;
