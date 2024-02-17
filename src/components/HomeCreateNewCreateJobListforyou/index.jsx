import React from "react";

import { List, Text } from "components";

const HomeCreateNewCreateJobListforyou = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="border-b-2 border-gray-500_01 border-solid flex flex-col items-start justify-start p-[5px] w-auto">
          {!!props?.foryoutext ? (
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtPoppinsSemiBold16"
            >
              {props?.foryoutext}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start p-[5px] w-auto">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtPoppinsSemiBold16"
          >
            {props?.followingtext}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start p-[5px] w-auto">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtPoppinsSemiBold16"
          >
            {props?.savedpoststext}
          </Text>
        </div>
      </List>
    </>
  );
};

HomeCreateNewCreateJobListforyou.defaultProps = {
  followingtext: "Following",
  savedpoststext: "Saved Posts",
};

export default HomeCreateNewCreateJobListforyou;
