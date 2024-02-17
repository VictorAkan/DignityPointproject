import React from "react";

import { Button, Img, Text } from "components";

const PageDiscoverOneRowlikepage = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-6 w-6" src="images/img_likepage.svg" alt="likepage" />
        <div className="bg-indigo-50 flex flex-row gap-[5px] items-center justify-center px-2.5 py-[5px] rounded-lg w-auto">
          <Img
            className="h-3.5 w-3"
            src="images/img_bag_black_900_01.svg"
            alt="bag"
          />
          <Text
            className="text-[13px] text-black-900_01 w-auto"
            size="txtPoppinsMedium13Black90001"
          >
            {props?.followtext}
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[99px]"
          leftIcon={
            <div className="h-3.5 mt-px mb-[5px] w-3.5 bg-white-A700">
              <Img
                className="h-3.5"
                src="images/img_television_white_a700.svg"
                alt="television"
              />
            </div>
          }
          shape="round"
          color="light_blue_900"
          size="sm"
          variant="fill"
        >
          <div className="font-medium font-poppins leading-[normal] text-[13px] text-left">
            {props?.messagebutton}
          </div>
        </Button>
      </div>
    </>
  );
};

PageDiscoverOneRowlikepage.defaultProps = {
  followtext: "Follow",
  messagebutton: "Message",
};

export default PageDiscoverOneRowlikepage;
