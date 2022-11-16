import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppoinment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const handleModal = (id) => {
    const singleModal = appointmentOptions.find(
      (modalId) => modalId._id === id
    );
    setTreatment(singleModal);
  };

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOption");
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="-mt-14 pb-16">
      <p className="text-center text-primary font-bold">
        Available Appoinment On {format(selected, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-9 mx-9">
        {appointmentOptions.map((appointment) => (
          <AppointmentOption
            key={appointment._id}
            appointment={appointment}
            handleModal={handleModal}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></AppointmentModal>
      )}
    </section>
  );
};

export default AvailableAppoinment;
