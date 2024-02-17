import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-50_01 flex flex-col items-center justify-start w-full">
          <div className="bg-gradient  flex flex-col items-center justify-start pb-[88px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Header1 className="flex flex-col gap-2.5 items-center justify-center px-20 md:px-5 py-5 w-full" />
              <div className="flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1352px] mt-1 mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col gap-5 items-start justify-start max-w-[720px] w-full">
                  <Text
                    className="leading-[80.00px] max-w-[720px] md:max-w-full md:text-5xl text-[70px] text-white-A700"
                    size="txtPoppinsSemiBold70"
                  >
                    <span className="text-white-A700 font-poppins text-left font-semibold">
                      Connecting people, empowering{" "}
                    </span>
                    <span className="text-green-100 font-poppins text-left font-semibold">
                      financial prosperity
                    </span>
                  </Text>
                  <Text
                    className="max-w-[720px] md:max-w-full text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    We give you the tools to unleash your trillion U.S dollar
                    potential, passion and purpose for the delivery of a
                    sustainable future for all.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[200px] rounded-[12px] text-center text-xl"
                      color="white_A700"
                      size="md"
                      variant="outline"
                    >
                      Get Started
                    </Button>
                    <Button
                      className="common-pointer !text-gray-700 cursor-pointer font-semibold leading-[normal] min-w-[200px] rounded-[12px] text-center text-xl"
                      onClick={() => navigate("/about")}
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
                <Img
                  className="md:flex-1 h-[641px] sm:h-auto object-cover w-[46%] md:w-full"
                  src="images/img_box2.png"
                  alt="boxTwo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1352px] mt-[58px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01 text-center w-auto"
              size="txtPoppinsSemiBold50"
            >
              <span className="text-black-900_01 font-poppins font-semibold">
                Social media and{" "}
              </span>
              <span className="text-green-700 font-poppins font-semibold">
                MORE{" "}
              </span>
            </Text>
            <Text
              className="text-center text-gray-700 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              Building the needed solutions, creating deep connections for
              global dominion.
            </Text>
          </div>
          <div className="md:gap-10 gap-[81px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-start justify-between max-w-[1352px] w-full">
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_janet_70x70.png"
              alt="janet"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_erick_70x70.png"
              alt="erick"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_mark_70x70.png"
              alt="mark"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_hansel_70x70.png"
              alt="hansel"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_hannah_70x70.png"
              alt="hannah"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_conan_70x70.png"
              alt="conan"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_ruby_70x70.png"
              alt="ruby"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_betty_70x70.png"
              alt="betty"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_jonas_70x70.png"
              alt="jonas"
            />
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_tracy_70x70.png"
              alt="tracy"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1352px] mt-[60px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[85px] md:px-10 sm:px-5 rounded-[20px] shadow-bs2 w-[316px] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mt-[3px] w-auto">
              <Img
                className="h-20 w-20"
                src="images/img_thumbsup_green_700.svg"
                alt="thumbsup"
              />
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsSemiBold20Black900"
              >
                Marketplace
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-center p-[11px] rounded-[20px] shadow-bs2 w-[24%] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start my-[77px] w-auto">
              <Img
                className="h-20 w-20"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsSemiBold20Black900"
              >
                Trillonaire Adventure
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-center p-[63px] md:px-10 sm:px-5 rounded-[20px] shadow-bs2 w-[24%] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-[23px] mt-[26px] w-auto">
              <Img className="h-20 w-20" src="images/img_user.svg" alt="user" />
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsSemiBold20Black900"
              >
                Social Community
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-center p-[70px] md:px-10 sm:px-5 rounded-[20px] shadow-bs2 w-[316px] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start my-[18px] w-auto">
              <Img
                className="h-20 w-20"
                src="images/img_thumbsup_green_100.svg"
                alt="thumbsup_One"
              />
              <Text
                className="text-black-900 text-center text-xl w-auto"
                size="txtPoppinsSemiBold20Black900"
              >
                Tribes/ Academy
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[1185px] sm:h-[1245px] md:h-[2132px] max-w-[1362px] mt-[60px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[30px] h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-center justify-between max-w-[1352px] w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01"
                size="txtPoppinsSemiBold50"
              >
                <span className="text-black-900_01 font-poppins text-left font-semibold">
                  Explore{" "}
                </span>
                <span className="text-green-700 font-poppins text-left font-semibold">
                  Endless
                </span>
                <span className="text-black-900_01 font-poppins text-left font-semibold">
                  <>
                    {" "}
                    Possibilities, Unlocking Your Trillion U.S dollars Asset.
                    <br />
                  </>
                </span>
              </Text>
            </div>
            <List
              className="flex flex-col gap-[67px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-end justify-start max-w-[1352px] w-full">
                <div className="flex flex-col gap-[30px] items-end justify-start w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="max-w-[429px] md:max-w-full text-black-900_01 text-right text-xl"
                      size="txtPoppinsSemiBold20Black90001"
                    >
                      Find friends, build deep connections that opens more doors
                      to endless possibilities
                    </Text>
                    <div className="bg-gradient2  flex flex-col h-[200px] items-center justify-end p-[15px] rounded-[20px] shadow-bs3 w-[200px]">
                      <Img
                        className="h-[168px] md:h-auto object-cover w-[95%]"
                        src="images/img_chat3d1.png"
                        alt="chat3dOne"
                      />
                    </div>
                    <Text
                      className="text-green-700 text-xl w-auto"
                      size="txtPoppinsSemiBold20Green700"
                    >
                      01.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="max-w-[444px] md:max-w-full text-black-900_01 text-right text-xl"
                      size="txtPoppinsSemiBold20Black90001"
                    >
                      Create or Join Deep-thoughts Groups/ Pages that Stretch
                      your intellectual Capacity to create Sustainable Solutions
                    </Text>
                    <div className="bg-gradient2  flex flex-col h-[200px] items-center justify-start p-5 rounded-[20px] shadow-bs3 w-[200px]">
                      <Img
                        className="h-[113px] md:h-auto my-[23px] object-cover w-full"
                        src="images/img_social3d.png"
                        alt="social3d"
                      />
                    </div>
                    <Text
                      className="text-green-700 text-xl"
                      size="txtPoppinsSemiBold20Green700"
                    >
                      02.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-6 items-end justify-between pr-3.5 w-full">
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start mb-[3px] w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-green-700 text-xl"
                      size="txtPoppinsSemiBold20Green700"
                    >
                      03.
                    </Text>
                    <div className="bg-gradient2  flex flex-col h-[200px] items-center justify-start p-5 rounded-[20px] shadow-bs3 w-[200px]">
                      <Img
                        className="h-[141px] md:h-auto my-[9px] object-cover w-full"
                        src="images/img_money3d.png"
                        alt="money3d"
                      />
                    </div>
                    <Text
                      className="max-w-[400px] md:max-w-full text-black-900_01 text-xl"
                      size="txtPoppinsSemiBold20Black90001"
                    >
                      Earn rewards, bonus and refferal rewards in the membership
                      area
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-green-700 text-xl w-auto"
                      size="txtPoppinsSemiBold20Green700"
                    >
                      04.
                    </Text>
                    <div className="bg-gradient2  flex flex-col h-[200px] items-center justify-start p-5 rounded-[20px] shadow-bs3 w-[200px]">
                      <Img
                        className="h-[131px] md:h-auto my-3.5 object-cover w-full"
                        src="images/img_business1.png"
                        alt="businessOne"
                      />
                    </div>
                    <Text
                      className="max-w-[400px] md:max-w-full text-black-900_01 text-xl"
                      size="txtPoppinsSemiBold20Black90001"
                    >
                      Pages and marketplace gives you tools to promote your
                      business.
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[398px] md:h-auto md:mt-0 mt-[35px] object-cover rounded-tr-[50px]"
                  src="images/img_rectangle1627.png"
                  alt="rectangle1627"
                />
              </div>
            </List>
          </div>
          <Img
            className="absolute h-[398px] left-[0] object-cover rounded-tl-[50px] top-[22%] w-[49%]"
            src="images/img_rectangle1627_398x662.png"
            alt="rectangle1627"
          />
        </div>
        <div className="bg-gray-300 flex sm:flex-col flex-row gap-[53px] items-center justify-start mt-[150px] p-[18px] w-full">
          <Img
            className="md:flex-1 h-[478px] sm:h-auto sm:ml-[0] ml-[98px] object-cover w-[35%] md:w-full"
            src="images/img_image97.png"
            alt="imageNinetySeven"
          />
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
            size="txtPoppinsMedium40"
          >
            <span className="text-blue_gray-900 font-poppins text-left font-medium">
              <>
                The Beauty of Life you Enjoy Today
                <br />
                is the Fulfillment of others
                <br />
                Massive Transformative Purpose,
                <br />
                What is your{" "}
              </>
            </span>
            <span className="text-green-700 font-poppins text-left font-medium">
              Transformative Purpose?
            </span>
          </Text>
        </div>
        <div className="bg-gradient  flex flex-col gap-[30px] items-start justify-start max-w-[1352px] mt-[187px] mx-auto p-[23px] md:px-5 rounded-[50px] w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] w-auto md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtPoppinsSemiBold32"
            >
              Beyond Social Networking
            </Text>
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtPoppinsSemiBold16WhiteA700"
            >
              We are building the next generation social app that gives you
              access to opportunities
            </Text>
          </div>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mb-[33px] min-h-[auto] md:ml-[0] ml-[5px] w-[99%]">
            <div className="bg-white-A700_33 flex flex-col items-center justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start mb-[5px] mt-0.5 w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  01.
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Meet Innovation:
                </Text>
                <Text
                  className="max-w-[371px] md:max-w-full text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  You already use one or two social media apps, why not get paid
                  to use social media
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_33 flex flex-col items-center justify-start p-[19px] rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start mb-1.5 mt-[3px] w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  02.
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Membership Area:
                </Text>
                <Text
                  className="max-w-[371px] md:max-w-full text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Get access to exclusive benefits within DignityPoint
                  membership area.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_33 flex flex-col items-center justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start mb-[5px] mt-0.5 w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  03.
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Referral Rewards:
                </Text>
                <Text
                  className="max-w-[371px] md:max-w-full text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Invite others to join the membership area using your link to
                  earn commissions and bonuses.{" "}
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_33 flex flex-col items-center justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start my-[3px] w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  04.
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Find a job here:
                </Text>
                <Text
                  className="max-w-[371px] md:max-w-full text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Discover tailored job listings, connect with industry
                  professionals, and unlock opportunities.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_33 flex flex-col items-center justify-start p-[19px] rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start my-1 w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  05.
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Sell on marketplace
                </Text>
                <Text
                  className="max-w-[371px] md:max-w-full text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  <>
                    It&#39;s your digital storefront. Showcase your products to
                    a community that engages.
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_33 flex flex-col items-center justify-start p-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start my-[3px] w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  06.
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold32"
                >
                  Place an ad
                </Text>
                <Text
                  className="max-w-[371px] md:max-w-full text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  Promote your brand, event, or services, reach your target
                  audience.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient  h-[529px] md:h-[678px] mt-[203px] p-3.5 md:px-5 relative w-full">
          <Img
            className="absolute bottom-[3%] h-[475px] inset-x-[0] mx-auto object-cover w-[34%]"
            src="images/img_malipomawhite2.png"
            alt="malipomawhiteTwo"
          />
          <div className="absolute flex inset-x-[0] mx-auto top-[3%] w-[1352px] md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start my-auto w-auto">
              <div className="flex flex-row gap-[9.04px] items-center justify-center w-auto">
                <Img
                  className="h-[52px] md:h-auto object-cover w-[55px]"
                  src="images/img_malipoma.png"
                  alt="malipoma_One"
                />
                <Text
                  className="sm:text-[32.16px] md:text-[34.16px] text-[36.16px] text-center text-white-A700 w-auto"
                  size="txtPoppinsBold3616"
                >
                  DignityPoint
                </Text>
              </div>
              <Text
                className="max-w-[1158px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtPoppinsSemiBold50WhiteA700"
              >
                The world is waiting for the sustainable solutions you can
                create and connect globally.
              </Text>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_claritytalkbubblesline.svg"
                    alt="claritytalkbubb"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16WhiteA700"
                    >
                      +234 8123017178
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsSemiBold16WhiteA700"
                    >
                      example@email.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[200px] ml-[-6px] my-auto rounded-[12px] text-center text-xl z-[1]"
              color="green_100"
              size="md"
              variant="fill"
            >
              Get Started
            </Button>
          </div>
          <div className="absolute bottom-[13%] flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-auto w-auto">
            <Line className="bg-white-A700 h-0.5 rounded-[1px] w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1352px] w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPoppinsSemiBold20"
              >
                © 2024 DignityPoint
              </Text>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-auto sm:w-full">
                <a
                  href="javascript:"
                  className="text-white-A700 text-xl w-auto"
                >
                  <Text size="txtPoppinsSemiBold20">Terms and Conditions</Text>
                </a>
                <a
                  href="javascript:"
                  className="text-white-A700 text-xl w-auto"
                >
                  <Text size="txtPoppinsSemiBold20">Privacy Policy</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;