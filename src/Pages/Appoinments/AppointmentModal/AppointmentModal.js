import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ treatment, selected, setTreatment }) => {
  const { name: daises, slots } = treatment;
  const date = format(selected, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    setTreatment(null);

    const appointmentData = {
      appointmentDate: date,
      pateintName: daises,
      name,
      email,
      phone,
      slot,
    };
    console.log(appointmentData);
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm bg-slate-600 text-white hover:text-black btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{daises}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full my-2 "
            />
            <select name="slot" className="select select-bordered w-full my-2">
              <option>Select Your Time</option>
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full my-2 "
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full my-2 "
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full my-2 "
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-accent input-bordered w-full my-2 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;