import React from "react";

const InfoCart = ({ info }) => {
  const { desc, name, bgImage, bgColor } = info;
  return (
    <div>
      <div
        className={`"card flex flex-col md:flex-row justify-between items-center px-5 py-6 rounded text-white" ${bgColor}`}
      >
        <figure>
          <img src={bgImage} className="w-full" alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
