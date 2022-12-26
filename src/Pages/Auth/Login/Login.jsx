import React , {useState} from "react";
import Input from "../../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "../SignUp/SignUp";

import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  
    const hendelSubmit = (e) => {
      const LocalForm = JSON.parse(localStorage.getItem("userData"));
      const [data = {}] = LocalForm;

      e.preventDefault();
      if (userEmail == data.userEmail && userPass == data.userPass) {
        navigate("/");
      } else {
        toast.error("Login or password error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    };
  return (
    <>
      <section>
        <div className="container">
          <div className="LoginWrapper">
            <h2 className="text-center">Login</h2>
            <form action="" onSubmit={hendelSubmit}>
              <Input
                type="email"
                plece="Email"
                id="useEmail"
                val={userEmail}
                inputClass="LoginEmail"
                setValue={setUserEmail}
              />
              <Input
                type="password"
                plece="Password"
                id="userPass"
                inputClass="LoginPassword"
                val={userPass}
                setValue={setUserPass}
              />
              <button type="submit" className="LoginSubmitBtn">
                Submit
              </button>
            </form>
            <span className="ForgotPassword">
              <p className="d-block">Forgot Password?</p>
              <Link to={"SignUp"} className="d-block">
                Register
              </Link>
            </span>
          </div>
        </div>

        <ToastContainer
          className="toast-message"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
};

export default Login;
