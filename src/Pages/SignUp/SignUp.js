import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignIn = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
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
              <span className="label-text">Password</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              {...register("password", {
                required: "Enter a Valid Password",
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/,
                  message: "Password Must be Strong",
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent w-full my-2"
          />
        </form>
        <p>
          Already Have an account?
          <Link className="text-primary" to="/login">
            Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">
          COUNTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
