import React from "react";

import { Img, Text } from "components";

const CreatePost = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_frame8634.png')" }}
      >
        <Img
          className="h-[50px] md:h-auto mt-3 rounded-[50%] w-[50px]"
          src="images/img_jonas.png"
          alt="jonas"
        />
        <Text
          className="text-base text-center text-white-A700"
          size="txtPoppinsSemiBold16WhiteA700"
        >
          Your story
        </Text>
      </div>
    </>
  );
};

CreatePost.defaultProps = {};

export default CreatePost;
