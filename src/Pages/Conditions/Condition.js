import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Condition = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col gap-[102px]  lg:flex-row lg:ml-[217px] lg:mr-[166px]">
          <img
            src={treatment}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl sm:mb-1"
          />
          <div>
            <h1 className="text-4xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
