import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageDoctor = () => {
  const { data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <h2 className="text-2xl">Manage Doctor</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avator</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td></td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>
                  <button className="btn-error">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
