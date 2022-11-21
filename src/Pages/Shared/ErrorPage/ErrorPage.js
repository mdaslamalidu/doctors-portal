import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const { logout } = useContext(AuthContext);

  const handelLogOut = () => {
    logout()
      .then(() => {
        toast.success("log out");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p className="text 3xl text red-500">Something Error</p>
      <p className="text 3xl text red-500">
        {error.statusText || error.message}
      </p>
      <h3 className="text-3xl">
        Please!!{" "}
        <button>
          <Link onClick={handelLogOut} to="">
            Sign Out
          </Link>
        </button>
      </h3>
    </div>
  );
};

export default ErrorPage;
