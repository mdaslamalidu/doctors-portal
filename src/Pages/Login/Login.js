import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-7">
        <h2>This is Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              type="email"
              {...register("email", { required: "Email Address is required" })}
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
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 charecter",
                },
              })}
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

          <input type="submit" className="btn btn-accent w-full my-2" />
        </form>
        <p>
          New to Doctors Portal?
          <Link className="text-primary" to="/register">
            Create New Account
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

export default Login;
