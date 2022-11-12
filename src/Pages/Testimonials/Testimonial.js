import React from "react";

const Testimonial = ({ review }) => {
  const { name, desc, bgImage, location } = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{desc}</p>
        </div>
        <div className="flex items-center mx-8 mb-8">
          <div className="avatar mr-4">
            <div className="w-16">
              <img
                src={bgImage}
                className="border-primary border-2 rounded-full"
              />
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            <h2>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
