import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const bookings = useLoaderData();
  const { appointmentDate, treatmentName, slot, price } = bookings;
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatmentName} </h3>
      <p className="text-2xl">
        please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
    </div>
  );
};

export default Payment;
