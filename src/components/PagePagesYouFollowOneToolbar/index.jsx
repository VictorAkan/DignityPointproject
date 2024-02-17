import React from "react";

import { Button, Img } from "components";

const PagePagesYouFollowOneToolbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-6 w-6" src="images/img_likepage.svg" alt="likepage" />
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[99px]"
          leftIcon={
            <div className="mt-px mb-1 bg-green-700">
              <Img src="images/img_user_green_700.svg" alt="user" />
            </div>
          }
          shape="round"
          color="indigo_50"
          size="sm"
          variant="fill"
        >
          <div className="!text-green-700 font-medium font-poppins leading-[normal] text-[13px] text-left">
            {props?.following}
          </div>
        </Button>
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
            {props?.message}
          </div>
        </Button>
      </div>
    </>
  );
};

PagePagesYouFollowOneToolbar.defaultProps = {
  following: "Following",
  message: "Message",
};

export default PagePagesYouFollowOneToolbar;
