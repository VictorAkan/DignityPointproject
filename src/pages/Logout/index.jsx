import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LogoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100_99 flex flex-col font-poppins items-center justify-start mx-auto p-[323px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start md:px-5 px-[30px] py-5 rounded-[20px] w-auto md:w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between w-[550px] sm:w-full">
            <Text
              className="text-black-900_01 text-xl w-auto"
              size="txtPoppinsSemiBold20Black90001"
            >
              Logout?
            </Text>
            <Button
              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
              shape="circle"
              color="indigo_50"
              size="md"
              variant="fill"
            >
              <Img
                className="h-2.5"
                src="images/img_close_red_a700.svg"
                alt="close"
              />
            </Button>
          </div>
          <Text
            className="text-base text-black-900_01 w-auto"
            size="txtPoppinsSemiBold16Black90001"
          >
            Are you sure you want to logout?
          </Text>
          <Button
            className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[550px] sm:min-w-full rounded-[12px] text-base text-center"
            onClick={() => navigate("/login")}
            color="light_blue_900"
            size="md"
            variant="fill"
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default LogoutPage;
