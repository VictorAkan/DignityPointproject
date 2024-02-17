import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[35px] mb-2 w-[35px]"
          src="images/img_camera.svg"
          alt="camera"
        />
      ),
      label: "Albums",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px] w-[30px]"
          src="images/img_thumbsup.svg"
          alt="thumbsup"
        />
      ),
      label: "Games",
      href: "/gamesone",
      active: window.location.pathname === "/gamesone",
    },
    {
      icon: (
        <Img
          className="h-[30px] w-[30px]"
          src="images/img_wallet.svg"
          alt="wallet"
        />
      ),
      label: "Subscriptions",
      href: "/subscription",
      active: window.location.pathname === "/subscription",
    },
    {
      icon: (
        <Img
          className="h-[30px] w-[30px]"
          src="images/img_thumbsup_black_900_01.svg"
          alt="thumbsup_One"
        />
      ),
      label: "Offers",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Button
          className="bg-transparent cursor-pointer flex items-center justify-center min-w-[170px] pr-[35px]"
          leftIcon={
            <Img
              className="h-[35px] mr-[15px]"
              src="images/img_heart.svg"
              alt="heart"
            />
          }
        >
          <div className="font-poppins font-semibold leading-[normal] sm:pr-5 text-base text-black-900_01 text-left">
            Memories
          </div>
        </Button>
        <Button
          className="bg-transparent cursor-pointer flex items-center justify-center min-w-[170px] mt-[75px] pr-[35px]"
          leftIcon={
            <Img
              className="h-[35px] mr-[15px]"
              src="images/img_close.svg"
              alt="close"
            />
          }
        >
          <div className="font-poppins font-semibold leading-[normal] sm:pr-5 text-base text-black-900_01 text-left">
            Groups
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[170px] mt-5 pr-[35px]"
          onClick={() => navigate("/pagediscover")}
          leftIcon={
            <Img
              className="h-[35px] mr-[15px]"
              src="images/img_television_black_900_01.svg"
              alt="television"
            />
          }
        >
          <div className="font-poppins font-semibold leading-[normal] sm:pr-5 text-base text-black-900_01 text-left">
            Pages
          </div>
        </Button>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "15px",
              paddingBottom: "16px",
              color: "#050505",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "Poppins",
              paddingLeft: "16px",
              paddingRight: "16px",
            },
          }}
          className="flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[50px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && (
          <div className="flex flex-row gap-[11px] items-center justify-between mt-[30px] w-[170px] md:w-full">
            <Text
              className="text-base text-center text-gray-700 w-auto"
              size="txtPoppinsSemiBold16Gray700"
            >
              Groups
            </Text>
            <Text
              className="text-[13px] text-center text-light_blue-900 underline w-auto"
              size="txtPoppinsMedium13Lightblue900"
            >
              See all
            </Text>
          </div>
        )}
        {!collapsed && (
          <div className="flex flex-row gap-[5px] items-center justify-start mt-[11px] w-[170px] md:w-full">
            <Img
              className="h-10 md:h-auto rounded-[50%] w-10"
              src="images/img_frame8771.png"
              alt="frame8771"
            />
            <Text
              className="max-w-[125px] md:max-w-full text-[13px] text-black-900_01"
              size="txtPoppinsMedium13Black90001"
            >
              Africa Startup Festival
            </Text>
          </div>
        )}
        {!collapsed && (
          <div className="flex flex-row gap-[5px] items-center justify-start mt-[11px] w-[170px] md:w-full">
            <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_image25.png"
                alt="imageTwentyFive"
              />
            </div>
            <Text
              className="text-[13px] text-black-900_01 w-auto"
              size="txtPoppinsMedium13Black90001"
            >
              Historical Images
            </Text>
          </div>
        )}
        {!collapsed && (
          <div className="flex flex-row gap-[5px] items-center justify-start mt-[11px] w-[170px] md:w-full">
            <Img
              className="h-10 md:h-auto rounded-[50%] w-10"
              src="images/img_jakeprofilepic.png"
              alt="jakeprofilepic"
            />
            <Text
              className="max-w-[125px] md:max-w-full text-[13px] text-black-900_01"
              size="txtPoppinsMedium13Black90001"
            >
              Jake Aelf Malipoma Team
            </Text>
          </div>
        )}
        {!collapsed && (
          <div className="flex flex-row gap-[5px] items-center justify-start mt-[11px] w-[170px] md:w-full">
            <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_image26.png"
                alt="imageTwentySix"
              />
            </div>
            <Text
              className="text-[13px] text-black-900_01 w-auto"
              size="txtPoppinsMedium13Black90001"
            >
              ChatGPT Experts
            </Text>
          </div>
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
