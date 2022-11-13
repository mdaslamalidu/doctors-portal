import React, { useState } from "react";
import banner from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selected, setSelected }) => {
  return (
    <div>
      <div
        className="hero py-5 md:pt-[110px] md:pb-[150px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl mx-8"
          />
          <div className="mr-8 sm:pb-9">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
