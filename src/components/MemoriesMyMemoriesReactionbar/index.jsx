import React from "react";

import { Img, Text } from "components";

const MemoriesMyMemoriesReactionbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
          <div className="flex flex-row items-center justify-start w-auto">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              {props?.threehundredsixtyeight}
            </Text>
            <Img
              className="h-9 w-9"
              src="images/img_favorite.svg"
              alt="favorite"
            />
          </div>
          <div className="flex flex-row items-center justify-start w-auto">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              {props?.ten}
            </Text>
            <Img
              className="h-9 w-9"
              src="images/img_forward.svg"
              alt="forward"
            />
          </div>
          <div className="flex flex-row items-center justify-start w-auto">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              {props?.sixhundred}
            </Text>
            <Img
              className="h-9 w-9"
              src="images/img_barchartfill0.svg"
              alt="barchartfillZero"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
          <div className="flex flex-row items-center justify-start w-auto">
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              {props?.tenOne}
            </Text>
            <Img className="h-9 w-9" src="images/img_repost.svg" alt="repost" />
          </div>
          <Img className="h-9 w-9" src="images/img_send.svg" alt="send" />
        </div>
      </div>
    </>
  );
};

MemoriesMyMemoriesReactionbar.defaultProps = {
  threehundredsixtyeight: "368",
  ten: "10",
  sixhundred: "600",
  tenOne: "10",
};

export default MemoriesMyMemoriesReactionbar;
