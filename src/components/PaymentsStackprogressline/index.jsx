import React from "react";

import { Button, Img, Text } from "components";

const PaymentsStackprogressline = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-px left-[17%] top-[31%] w-[150px]"
          src="images/img_progressline_blue_gray_100_01.svg"
          alt="progressline"
        />
        <div className="absolute bottom-[0] flex flex-row items-center justify-start left-[3%] w-auto">
          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
            <Button
              className="flex h-5 items-center justify-center rounded-[50%] w-5"
              shape="circle"
              color="light_blue_900_01"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_checkmark_white_a700.svg"
                alt="checkmark"
              />
            </Button>
            <Text
              className="text-[13px] text-center text-gray-700 w-auto"
              size="txtPoppinsMedium13"
            >
              {props?.signuptext}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-5">
              <Button
                className="border border-light_blue-900_01 border-solid flex h-5 items-center justify-center rounded-[50%] w-5"
                shape="circle"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-4"
                  src="images/img_proggressinganimation.svg"
                  alt="proggressingani"
                />
              </Button>
            </div>
            <Text
              className="text-[13px] text-center text-gray-700 w-auto"
              size="txtPoppinsMedium13"
            >
              {props?.paymenttext}
            </Text>
          </div>
          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-5">
              <div className="bg-white-A700 border border-gray-500_01 border-solid h-5 rounded-[50%] w-5"></div>
            </div>
            <Text
              className="text-[13px] text-center text-gray-700 w-auto"
              size="txtPoppinsMedium13"
            >
              {props?.successtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsStackprogressline.defaultProps = {
  signuptext: "Sign Up",
  paymenttext: "Payment",
  successtext: "Success",
};

export default PaymentsStackprogressline;
