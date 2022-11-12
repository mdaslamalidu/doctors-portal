import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgImage: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgImage: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgImage: whitening,
    },
  ];
  return (
    <div className="my-[131px] mx-7">
      <div className="text-center">
        <h2 className="text-xl font-bold text-primary">Our Services</h2>
        <h2 className="text-3xl">Services We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[34px] mt-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
