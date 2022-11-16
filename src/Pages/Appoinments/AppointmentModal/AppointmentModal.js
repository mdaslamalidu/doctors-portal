import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const AppointmentModal = ({ treatment, selected, setTreatment }) => {
  const { name: daises, slots } = treatment;
  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const appointmentData = {
      appointmentDate: date,
      treatmentName: daises,
      name,
      email,
      phone,
      slot,
    };
    console.log(appointmentData);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Add data to server");
          setTreatment(null);
        }
      });
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
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-bordered w-full my-2 "
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              disabled
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
