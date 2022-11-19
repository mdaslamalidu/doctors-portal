import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: speciaties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpeciality");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>Add A Doctor</h3>

      <div className="w-96 p-7">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              {...register("name", {
                required: "Enter Your Name",
              })}
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              {...register("email", {
                required: "Enter Email Address",
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>{" "}
            <select
              {...register("selectedValue")}
              className="select input-bordered w-full max-w-xs"
            >
              {speciaties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="submit"
            value="Add A Doctor"
            className="btn btn-accent w-full my-2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
