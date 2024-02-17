import React from "react";

import { Button, Img, Text } from "components";

const MemoriesMyMemoriesNavigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1412px] w-full">
            <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
              <Img
                className="h-[29px] md:h-auto object-cover w-[30px]"
                src="images/img_malipoma.png"
                alt="malipoma"
              />
              <Text
                className="text-center text-green-700 text-xl w-auto"
                size="txtPoppinsBold20"
              >
                {props?.dignitypointtext}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img
                className="h-7 w-7"
                src="images/img_home_gray_700.svg"
                alt="home"
              />
              <Img
                className="h-7 w-7"
                src="images/img_search_gray_700.svg"
                alt="search"
              />
              <Img
                className="h-7 w-7"
                src="images/img_marketplace.svg"
                alt="marketplace"
              />
              <Img className="h-7 w-7" src="images/img_grid.svg" alt="grid" />
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[116px]"
                leftIcon={
                  <div className="mt-1 mb-[5px] mr-2.5 w-[9px] bg-white-A700">
                    <Img src="images/img_plus_white_a700.svg" alt="plus" />
                  </div>
                }
                shape="round"
                color="green_700"
                size="md"
                variant="fill"
              >
                <div className="font-medium font-poppins leading-[normal] text-[13px] text-center">
                  {props?.createnewbutton}
                </div>
              </Button>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img
                className="h-7 w-7"
                src="images/img_television.svg"
                alt="television"
              />
              <Img
                className="h-7 w-[27px]"
                src="images/img_notification.svg"
                alt="notification"
              />
              <div className="flex flex-row gap-[5px] items-center justify-end w-auto">
                <Text
                  className="text-[13px] text-black-900_01 w-auto"
                  size="txtPoppinsMedium13Black90001"
                >
                  {props?.endurancetext}
                </Text>
                <div className="h-[35px] relative w-[35px]">
                  <Img
                    className="absolute h-[35px] inset-[0] justify-center m-auto rounded-[50%] w-[35px]"
                    src="images/img_jonas_35x35.png"
                    alt="jonas"
                  />
                  <div className="absolute bg-indigo-50 border border-solid border-white-A700 bottom-[0] flex flex-col h-[11px] md:h-auto items-center justify-center px-[3px] py-1.5 right-[0] rounded-[5px] w-[11px]">
                    <Img
                      className="h-0.5 w-[5px]"
                      src="images/img_vector_black_900.svg"
                      alt="vector"
                    />
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

MemoriesMyMemoriesNavigation.defaultProps = {
  dignitypointtext: "DignityPoint",
  createnewbutton: "Create New",
  endurancetext: "Endurance",
};

export default MemoriesMyMemoriesNavigation;
