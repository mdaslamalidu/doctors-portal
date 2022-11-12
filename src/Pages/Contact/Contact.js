import React from "react";
import appoinment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url(${appoinment})` }}
      className="py-16 my-24"
    >
      <div className="w-[230px] lg:w-[280px] mx-auto text-center">
        <h2 className="text-lg text-primary font-bold">Contact Us</h2>
        <h3 className="text-2xl mb-2 text-white">Stay Connect With Us</h3>
        <input
          type="Email"
          placeholder="Email Address"
          className="input input-bordered input-sm w-full block"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-sm w-full block my-4"
        />
        <textarea
          className="textarea textarea-bordered w-full block"
          placeholder="Your Message"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
