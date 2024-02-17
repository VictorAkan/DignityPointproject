import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";
import Header2 from "components/Header2";

const WalletPage = () => {
  const tableData = React.useRef([
    {
      name: "Endurance Johnson",
      bankname: "Paypal",
      amount: "20,000",
      type: "Debit",
    },
    {
      name: "Endurance Johnson",
      bankname: "Paypal",
      amount: "20,000",
      type: "Debit",
    },
    {
      name: "Endurance Johnson",
      bankname: "Paypal",
      amount: "20,000",
      type: "Debit",
    },
    {
      name: "Endurance Johnson",
      bankname: "Paypal",
      amount: "20,000",
      type: "Debit",
    },
    {
      name: "Endurance Johnson",
      bankname: "Paypal",
      amount: "20,000",
      type: "Debit",
    },
    {
      name: "Endurance Johnson",
      bankname: "Paypal",
      amount: "20,000",
      type: "Debit",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="py-[15px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
            size="txtPoppinsRegular22"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[389px] py-0.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
            size="txtPoppinsRegular26Black900"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("bankname", {
        cell: (info) => (
          <Text
            className="pb-[13px] sm:pl-5 pl-[30px] pt-[18px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
            size="txtPoppinsRegular22"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[315px] pb-[3px] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
            size="txtPoppinsRegular26Black900"
          >
            Bank Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-3.5 pl-3.5 pt-[17px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
            size="txtPoppinsRegular22"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[311px] py-0.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
            size="txtPoppinsRegular26Black900"
          >
            Amount
          </Text>
        ),
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => (
          <Text
            className="h-16 pl-1.5 py-[15px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
            size="txtPoppinsRegular22"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[64px] pt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
            size="txtPoppinsRegular26Black900"
          >
            Type
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[31px] items-center justify-end w-full">
          <Header2 className="bg-white-A700 flex gap-2.5 items-center justify-center md:px-5 px-[50px] py-2.5 shadow-bs w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1412px] mx-auto md:px-5 w-full">
            <Text
              className="ml-1 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
              size="txtPoppinsSemiBold30"
            >
              Wallet
            </Text>
            <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between mt-8 w-full">
              <div className="bg-green-700 flex md:flex-1 md:flex-col flex-row gap-4 items-center justify-between rounded-[20px] w-3/5 md:w-full">
                <div className="md:h-[323px] h-[326px] sm:h-[354px] relative w-[53%] md:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-[59px] justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-48 items-start justify-start p-14 md:px-10 sm:px-5 w-[67%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group44.png')",
                        }}
                      >
                        <Img
                          className="h-6 mb-14 ml-0.5 md:ml-[0]"
                          src="images/img_settings_white_a700.svg"
                          alt="settings"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-end ml-14 md:ml-[0] w-[88%] md:w-full">
                        <div className="bg-green-800 flex flex-col h-[37px] md:h-auto items-center justify-center p-2.5 rounded-[18px] w-[187px]">
                          <div className="flex flex-row gap-5 items-center justify-start w-auto">
                            <Img
                              className="h-[21px] w-6"
                              src="images/img_vector_white_a700_21x24.svg"
                              alt="vector_One"
                            />
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              withdraw
                            </Text>
                          </div>
                        </div>
                        <div className="bg-green-800 flex flex-col h-[37px] md:h-auto items-center justify-center p-2.5 rounded-[18px] w-[187px]">
                          <div className="flex flex-row gap-5 items-center justify-start w-auto">
                            <Img
                              className="h-[21px] w-6"
                              src="images/img_vector_white_a700_21x24.svg"
                              alt="vector_Two"
                            />
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              Send
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto p-[22px] sm:px-5 w-[63%]"
                    style={{ backgroundImage: "url('images/img_group43.png')" }}
                  >
                    <div className="flex flex-col gap-1.5 items-start justify-start mb-[93px] mt-[84px]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsMedium24WhiteA700"
                      >
                        Total Amount
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        2,000,000
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[326px] md:h-auto object-cover"
                  src="images/img_group43.png"
                  alt="tube"
                />
              </div>
              <div className="bg-white-A700 h-[326px] rounded-[20px] shadow-bs4 w-[38%]"></div>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[54px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
              size="txtPoppinsSemiBold26"
            >
              Transaction History
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[21px] p-[23px] sm:px-5 rounded-[20px] shadow-bs4 w-[83%] md:w-full">
              <div className="overflow-auto mb-[87px] w-[96%]">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
