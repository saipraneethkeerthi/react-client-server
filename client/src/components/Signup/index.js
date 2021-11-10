import React, { useState } from "react";
import BaseController from "../../controllers";

import Logo from "../../images/logo.png";
import PhoneInput from 'react-phone-number-input'

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  
  function validateEmail (userName)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userName.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

  const checkUpperCase = (string) => /[A-Z]/.test(string);
  const checkLowerCase = (string) => /[a-z]/.test(string);
  const checkSymbol = (string) =>
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string);
  const checkNum = (string) => /\d/.test(string);
  
  const passwordValidator = (str) => {
    if (
      str.length > 8 &&
      checkUpperCase(str) &&
      checkLowerCase(str) &&
      checkSymbol(str) &&
      checkNum(str)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const submitUserDetails = () => {
    if(passwordValidator(password) && validateEmail(userName) && number ){
    const body = { user_name: userName, password, gender, phone_no: number };
    let url = "http://localhost:1109/user/create";

    const success = (res) => {
      console.log("Success", res);
      if (window.confirm("User created successfully")) {
        window.location.href = "/login";
      }
    };
    const failure = (err) => {
      console.log("Error", err);
    };
    BaseController.sendRequest(
      url,
      "post",
      body,
      false,
      null,
      success,
      failure
    );
  }
  else{
      alert("please enter strong password\n--one UPPERCASE\n--one LOWERCASE\n--one SYMBOL\n--length atleast 8 ")
  }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="card w-75 d-flex flex-column  align-items-center shadow ">
        <img style={{ width: "100px" }} src={Logo} />
        <h1>Signup with Myntra</h1>
        <p>Easily sign up with</p>
        <div className="d-flex flex-row ">
          <button
            style={{ marginRight: "5px" }}
            type="button"
            className="btn btn-primary"
          >
            FACEBOOK
          </button>
          <button type="button" className="btn btn-danger">
            GOOGLE
          </button>
        </div>
        <p>-OR USING EMAIL</p>
        <div className="container d-flex flex-column align-items-center">
          <div className="card w-50 d-flex flex-column align-items-center">
            <input
            required
              type="email"
              className="form-control mt-3 mb-3 w-75"
              placeholder="Your Email Address"
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
            required
              type="password"
              className="form-control mb-3 w-75"
              placeholder="Choose Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <PhoneInput placeholder="Mobile Number" required onChange={setNumber} value={number} className="form-control mb-3 w-75"/>
            {/* <input
              type="number"
              className="form-control mb-3 w-75"
              placeholder="Mobile Number(For order status updates)"
              onChange={(event) => setNumber(event.target.value)}
            /> */}
            <div className="d-flex flex-row">
              <input
                type="radio"
                name="gender"
                id="genderMale"
                value="Male"
                checked={gender === "Male"}
                onClick={() => setGender("Male")}
              />
              <label for="genderMale">Male</label>
              <input
                type="radio"
                className="form-control mb-3"
                name="gender"
                id="genderFemale"
                checked={gender === "Female"}
                value="Female"
                class="ml-2"
                onClick={() => setGender("Female")}
              />
              <label for="genderFemale">Female</label>
            </div>
          </div>
          <br/>
          <p>Already have an account?<a href="/login">Login</a></p>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={() => submitUserDetails()}
            style={{margin:"10px"}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
