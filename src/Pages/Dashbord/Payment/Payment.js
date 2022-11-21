import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutPage from "./CheckOutPage";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

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
      <div className="w-96 my-8">
        <Elements stripe={stripePromise}>
          <CheckOutPage></CheckOutPage>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
