import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCart from "./InfoCart";

const InfoCarts = () => {
  const infoTitle = [
    {
      id: 1,
      name: "Opening Hours",
      desc: "Opening 9.00 AM to 5.00 PM",
      bgImage: clock,
      bgColor: "bg-primary",
    },
    {
      id: 2,
      name: "Visit Our Location",
      desc: "Opening 9.00 AM to 5.00 PM",
      bgImage: marker,
      bgColor: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us Now",
      desc: "Opening 9.00 AM to 5.00 PM",
      bgImage: phone,
      bgColor: "bg-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 bg-transparent">
      {infoTitle.map((info) => (
        <InfoCart key={info.id} info={info}></InfoCart>
      ))}
    </div>
  );
};

export default InfoCarts;
