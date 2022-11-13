import React from "react";
import banner from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";

const AppoinmentBanner = () => {
  return (
    <div>
      <div
        className="hero py-5 md:pt-[110px] md:pb-[150px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="w-full md:w-1/2 rounded-lg shadow-2xl" />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
