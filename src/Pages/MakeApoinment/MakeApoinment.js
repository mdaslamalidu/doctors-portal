import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const MakeApoinment = () => {
  return (
    <div className="my-[120px]">
      <div className="hero" style={{ backgroundImage: `url(${appoinment})` }}>
        <div className="hero-content flex-col lg:flex-row text-white">
          <img
            src={doctor}
            alt=""
            className="md:w-full lg:w-1/2 hidden md:block rounded-lg shadow-2xl -mt-40"
          />
          <div>
            <h4 className="text-xl font-bold text-primary">Appointment</h4>
            <h1 className="text-4xl font-bold mt-6">
              Make an appointment Today
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Gettting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeApoinment;
