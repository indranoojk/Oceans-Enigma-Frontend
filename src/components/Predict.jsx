import React from "react";
import ImageUpload from "./ImageUpload";
import useScrollToTop from "./useScrollToTop";

const Predict = () => {

  useScrollToTop();

  return (
    <>
      <div className="relative">
        {/* <div className="w-full shadow-lg">
          <img src="https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" className="w-full object-cover h-20" />
        </div> */}
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
      </div>
      <ImageUpload />
    </>
  );
};

export default Predict;
