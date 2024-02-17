import React from "react";

import { Button, Img, Text } from "components";

const HomeCreateNewCreateJobPost1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[12.58px] h-[321px] md:h-auto items-start justify-start max-w-[1129px] w-full">
          <div className="md:h-[62px] h-[73px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-row gap-[12.58px] inset-x-[0] items-center justify-between max-w-[1129px] mx-auto rounded-[12px] top-[0] w-full">
              <div className="flex flex-row gap-[12.58px] items-center justify-start w-auto">
                <Img
                  className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                  src="images/img_mark_62x62.png"
                  alt="mark"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-[12.58px] items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtPoppinsSemiBold16Gray900"
                    >
                      {props?.username}
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_crownsvgrepocom.svg"
                      alt="crownsvgrepocom_One"
                    />
                  </div>
                  <div className="flex flex-row gap-[25.16px] items-center justify-start w-auto">
                    <Text
                      className="text-[13px] text-gray-700 w-auto"
                      size="txtPoppinsMedium13"
                    >
                      {props?.userhandle}
                    </Text>
                    <div className="flex flex-row gap-[12.58px] items-center justify-start w-auto">
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_bookmark.svg"
                        alt="bookmark_Two"
                      />
                      <Text
                        className="text-[13px] text-gray-700 w-auto"
                        size="txtPoppinsMedium13"
                      >
                        {props?.time}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[12.58px] items-center justify-start w-[72px]">
                <Img
                  className="h-[30px] w-[30px]"
                  alt="morevertfillOne_One"
                  src={props?.moreicon}
                />
                <Button
                  className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                  shape="circle"
                  color="light_blue_900"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-3"
                    src="images/img_plus_white_a700.svg"
                    alt="plus_One"
                  />
                </Button>
              </div>
            </div>
            {!!props?.frame9189one ? (
              <Text
                className="absolute bg-red-A700_01 bottom-[0] h-[21px] justify-center left-[1%] px-2 text-white-A700 text-xs w-10"
                size="txtPoppinsMedium12"
              >
                {props?.frame9189one}
              </Text>
            ) : null}
          </div>
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtPoppinsSemiBold16Gray900"
          >
            {props?.signuptext}
          </Text>
          <div className="flex flex-col md:gap-10 gap-[261px] items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="bg-lime-50 h-[203px] w-[31%]"></div>
              <div className="h-[203px] md:h-[451px] relative w-2/5 md:w-full">
                <Img
                  className="absolute bottom-[0] h-[451px] inset-x-[0] mx-auto object-cover w-[451px]"
                  src="images/img_b574e4418735.png"
                  alt="b574e4418735"
                />
                {!!props?.playOne ? (
                  <Img
                    className="absolute bottom-[0] h-12 right-[40%]"
                    alt="play_One"
                    src={props?.playOne}
                  />
                ) : null}
              </div>
              <div className="bg-lime-50 h-[203px] w-[30%]"></div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1129px] w-full">
              <div className="flex flex-row gap-[12.58px] items-center justify-start w-auto">
                <div className="flex flex-row items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    {props?.likecount}
                  </Text>
                  <Img
                    className="h-px w-[45px]"
                    src="images/img_frame8695.svg"
                    alt="frame8695"
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
                    className="h-px w-[45px]"
                    src="images/img_frame8700_gray_700.svg"
                    alt="frame8700_One"
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
                    className="h-px w-[45px]"
                    src="images/img_barchartfill0.svg"
                    alt="barchartfillZero_One"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[12.58px] items-center justify-start w-auto">
                <div className="flex flex-row items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    {props?.repostcount}
                  </Text>
                  <Img
                    className="h-px w-[45px]"
                    src="images/img_repost_gray_700.svg"
                    alt="repost_One"
                  />
                </div>
                <Img
                  className="h-px w-[45px]"
                  src="images/img_share_gray_700.svg"
                  alt="search_Two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCreateNewCreateJobPost1.defaultProps = {
  username: "Terry Fiscer",
  userhandle: "@terryfiscer",
  time: "1hr",
  moreicon: "images/img_morevertfill1_gray_900.svg",
  signuptext: "Sign up with my link fam!",
  likecount: "368",
  dislikecount: "10",
  viewcount: "600",
  repostcount: "10",
};

export default HomeCreateNewCreateJobPost1;
