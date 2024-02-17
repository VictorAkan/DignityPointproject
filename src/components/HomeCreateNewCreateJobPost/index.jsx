import React from "react";

import { Button, Img, Text } from "components";

const HomeCreateNewCreateJobPost = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 h-[501px] md:h-auto items-start justify-start max-w-[898px] w-full">
          <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between max-w-[898px] rounded-[10px] w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/img_hannah.png"
                alt="hannah"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtPoppinsSemiBold16Black90001"
                  >
                    {props?.username}
                  </Text>
                  <Img
                    className="h-2.5 w-2.5"
                    src="images/img_crownsvgrepocom.svg"
                    alt="crownsvgrepocom"
                  />
                </div>
                <div className="flex flex-row gap-5 items-center justify-start w-auto">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    {props?.userhandle}
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-3 w-3"
                      src="images/img_bookmark.svg"
                      alt="bookmark"
                    />
                    <Text
                      className="text-[13px] text-gray-700"
                      size="txtPoppinsMedium13"
                    >
                      {props?.time}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-[58px]">
              {!!props?.moreoptionsicon ? (
                <Img
                  className="h-6 w-6"
                  alt="morevertfillOne"
                  src={props?.moreoptionsicon}
                />
              ) : null}
              {!!props?.plusicon ? (
                <Button
                  className="flex h-6 items-center justify-center rounded-[50%] w-6"
                  shape="circle"
                  color="light_blue_900"
                  size="sm"
                  variant="fill"
                >
                  <Img className="h-2.5" alt="plus" src={props?.plusicon} />
                </Button>
              ) : null}
            </div>
          </div>
          <Text
            className="text-base text-black-900_01 w-auto"
            size="txtPoppinsSemiBold16Black90001"
          >
            {props?.userdescription}
          </Text>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="bg-indigo-50_01 h-[359px] w-[28%]"></div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start w-[46%] md:w-full">
              <Img
                className="h-[359px] md:h-auto object-cover w-full"
                src="images/img_pexelsphotoby.png"
                alt="pexelsphotoby"
              />
            </div>
            <div className="bg-indigo-50_01 h-[359px] w-[27%]"></div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[898px] w-full">
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
                  {props?.dislikecount}
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
                  {props?.viewcount}
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
                  {props?.repostcount}
                </Text>
                <Img
                  className="h-9 w-9"
                  src="images/img_repost.svg"
                  alt="repost"
                />
              </div>
              <Img className="h-9 w-9" src="images/img_send.svg" alt="send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCreateNewCreateJobPost.defaultProps = {
  username: "Jake Aelf",
  userhandle: "@callmejake",
  time: "1hr",
  userdescription: "Looking to make friends, give me a follow",
  threehundredsixtyeight: "368",
  dislikecount: "10",
  viewcount: "600",
  repostcount: "10",
};

export default HomeCreateNewCreateJobPost;
