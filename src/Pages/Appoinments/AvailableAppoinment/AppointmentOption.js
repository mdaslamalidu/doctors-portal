import React from "react";

const AppointmentOption = ({ appointment, handleModal }) => {
  const { _id, name, slots, price } = appointment;

  return (
    <div className="card shadow-xl my-3">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another time"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Price ${price}</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => handleModal(_id)}
            htmlFor="my-modal-3"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
