import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const { signIn, forgetPassword, signinwithgoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const email = watch("email");

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  const handleResetPassword = () => {
    console.log(email);
    forgetPassword(email)
      .then(() => alert("check your email"))
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signinwithgoogle()
      .then(() => {
        alert("sign in with google");
      })
      .catch((error) => console.log(error));
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
              <span onClick={handleResetPassword} className="label-text">
                Forget Password?
              </span>
            </label>
          </div>
          <input type="submit" className="btn btn-accent w-full my-2" />
        </form>
        <div>
          <p className="text-red-600">{loginError}</p>
        </div>
        <p>
          New to Doctors Portal?
          <Link className="text-primary" to="/register">
            Create an Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          COUNTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
