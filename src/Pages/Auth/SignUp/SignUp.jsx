import React ,{useState} from 'react';
import "./SignUp.css"
import Input from "../../../Components/Input/Input"
import { json, useNavigate } from "react-router-dom";
   



const SignUp = () => {
        const [userName, setUserName] = useState("");
        const [userEmail, setUserEmail] = useState("");
        const [userPass, setUserPass] = useState("");
    const navigate = useNavigate();
    
  
    let Info = [];
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home')
         let localInfo = {
           userName: userName,
           userEmail: userEmail,
           userPass: userPass,
        };
           Info.push(localInfo);
           localStorage.setItem("userData", JSON.stringify(Info));
    }
    return (
      <>
        <section>
          <div className="container">
            <div className="signUpWrapper">
              <h2 className="SignUp-title">Sign Up</h2>
              <form action="" onSubmit={handleSubmit}>
                <Input
                  type={"text"}
                  plece={"FullName"}
                  id="userName"
                  inputClass={"SignUpName"}
                  val={userName}
                  setValue={setUserName}
                  
                />
                <Input
                  type="email"
                  plece="Email"
                  id="userEmail"
                  inputClass="SignUpEmail"
                  setValue={setUserEmail}
                />
                <Input
                  type="password"
                  plece="Password"
                  id="userPass"
                  inputClass="SignUpPassword"
                  val={userPass}
                  setValue={setUserPass}
                />
                <button type="submit" className="signSubmitBtn ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
};

export default SignUp;