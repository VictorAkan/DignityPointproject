import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Header2 from "components/Header2";
import PaymentsStackprogressline from "components/PaymentsStackprogressline";

const mmOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const yyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const cvOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PaymentsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto pb-[177px] w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="bg-green-700 flex flex-col items-start justify-start max-w-[1412px] mx-auto md:px-5 px-[500px] py-2.5 rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Payment
                </Text>
                <PaymentsStackprogressline className="bg-white-A700 md:h-11 h-12 pt-1 px-1 relative rounded-lg w-[63%] sm:w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[11px] items-start justify-end md:px-5 w-[67%] md:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
              <Text
                className="text-base text-center text-gray-700 w-auto"
                size="txtPoppinsSemiBold16Gray700"
              >
                CHOOSE A PAYMENT METHOD
              </Text>
              <Input
                name="price_One"
                placeholder="Pay with USSD or Bank Transfer"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-700 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100_01 border-solid flex w-full"
                prefix={
                  <div className="h-5 mt-px mb-0.5 mr-2.5 w-5 bg-gray-500_01">
                    <Img
                      className="h-5 my-auto"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  </div>
                }
                suffix={
                  <Img
                    className="mt-px mb-0.5 ml-[35px]"
                    src="images/img_grid_gray_700.svg"
                    alt="grid"
                  />
                }
                shape="round"
                color="white_A700"
                size="3xl"
                variant="fill"
              ></Input>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-5 items-center justify-start sm:px-5 px-[30px] py-5 rounded-lg shadow-bs w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-[550px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[462px] sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast_light_blue_900.svg"
                      alt="contrast"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Pay with MasterCard and Visa
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-5 md:h-auto object-cover w-[35px]"
                      src="images/img_image40.png"
                      alt="imageForty"
                    />
                    <Img
                      className="h-5 md:h-auto object-cover w-8"
                      src="images/img_image41.png"
                      alt="imageFortyOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Card Number*
                  </Text>
                  <Input
                    name="frame8762"
                    placeholder="Card Number"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                    wrapClassName="w-full"
                    type="number"
                    shape="round"
                    color="indigo_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Expiry Date*
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start w-auto sm:w-full">
                    <SelectBox
                      className="font-semibold leading-[normal] text-base text-left w-[33%] sm:w-full"
                      placeholderClassName="text-gray-500_01"
                      indicator={
                        <Img
                          className="h-[5px] w-2.5"
                          src="images/img_vector_black_900.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="frame8763"
                      options={mmOptionsList}
                      isSearchable={false}
                      placeholder="MM"
                      shape="round"
                      color="indigo_50"
                      size="md"
                      variant="fill"
                    />
                    <SelectBox
                      className="font-semibold leading-[normal] text-base text-left w-[33%] sm:w-full"
                      placeholderClassName="text-gray-500_01"
                      indicator={
                        <Img
                          className="h-[5px] w-2.5"
                          src="images/img_vector_black_900.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="frame8766"
                      options={yyOptionsList}
                      isSearchable={false}
                      placeholder="YY"
                      shape="round"
                      color="indigo_50"
                      size="md"
                      variant="fill"
                    />
                    <SelectBox
                      className="font-semibold leading-[normal] text-base text-left w-[33%] sm:w-full"
                      placeholderClassName="text-gray-500_01"
                      indicator={
                        <Img
                          className="h-[5px] w-2.5"
                          src="images/img_vector_black_900.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="frame8767"
                      options={cvOptionsList}
                      isSearchable={false}
                      placeholder="CV"
                      shape="round"
                      color="indigo_50"
                      size="md"
                      variant="fill"
                    />
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
                  onClick={() => navigate("/success")}
                  color="light_blue_900"
                  size="md"
                  variant="fill"
                >
                  Make Payments
                </Button>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start sm:px-5 px-[30px] py-5 rounded-lg shadow-bs w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-[550px] sm:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[462px] sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_contrast.svg"
                      alt="contrast_One"
                    />
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Pay with Verve Card
                    </Text>
                  </div>
                  <Img
                    className="h-5 md:h-auto object-cover w-[57px] sm:w-full"
                    src="images/img_image42.png"
                    alt="imageFortyTwo"
                  />
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-100_03 border border-blue_gray-100_01 border-solid flex flex-col items-start justify-start mb-[137px] px-5 py-2.5 rounded-[20px] shadow-bs w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-[350px]">
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtPoppinsSemiBold16Gray700"
                >
                  ORDER SUMMARY
                </Text>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[350px]">
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Description
                  </Text>
                  <Text
                    className="max-w-[350px] md:max-w-full text-light_blue-900 text-xl"
                    size="txtPoppinsSemiBold20Lightblue900"
                  >
                    Starter Membership DignityPoint Account
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[350px]">
                  <Text
                    className="text-[13px] text-gray-700 w-auto"
                    size="txtPoppinsMedium13"
                  >
                    Enter Coupon
                  </Text>
                  <Input
                    name="frame8762_One"
                    placeholder="Coupon"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="indigo_50"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[350px]">
                  <div className="flex flex-row items-center justify-between w-[350px]">
                    <Text
                      className="text-base text-center text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="text-black-900_01 text-center text-xl w-auto"
                      size="txtArialBoldMT20"
                    >
                      ₦6,000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between w-[350px]">
                    <Text
                      className="text-base text-center text-gray-700 w-auto"
                      size="txtPoppinsSemiBold16Gray700"
                    >
                      Delivery Fees
                    </Text>
                    <Text
                      className="text-black-900_01 text-center text-xl w-auto"
                      size="txtArialBoldMT20"
                    >
                      ₦0
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[350px]">
                  <Text
                    className="text-base text-center text-gray-700 w-auto"
                    size="txtPoppinsSemiBold16Gray700"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl w-auto"
                    size="txtArialBoldMT24"
                  >
                    ₦6,000
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
