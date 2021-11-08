import React, { useState } from "react";
import BaseController from "../controllers";

// import validator from 'validator'

export default function SignUp() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const userNameValidator = (str) => {
    str.split(" ");
    let valid = false;
    str.map((a) => {
      if (checkUpperCase(a[0])) {
        valid = true;
      } else {
        valid = false;
      }
    });
    if (valid) {
      return true;
    } else {
      return false;
    }
  };

  const validateDetails = () => {
    if (passwordValidator(password) && userNameValidator(username)) {
      const body = { username,password };
      let url = "http://localhost:5000/create";

      const success = (res) => {
        console.log("Success", res);
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
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <>
      <div class="container d-flex flex-column p-3 ">
        <h1 className="text-center">Sign Up</h1>
        <input
          type="text"
          placeholder="Enter userName"
          className="form-control mb-3"
          onChange={(event) => {
            setUser(event.target.value);
          }}
          value={username}
        />
        <input
          type="mail"
          placeholder="Enter your mail"
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="form-control mb-3"
          onChange={(event) => setPass(event.target.value)}
        />
        <label class="form-label" for="form14">
          Example label
        </label>
        <input
          type="password"
          placeholder="confirm your password"
          className="form-control mb-3"
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary " onClick={() => validateDetails()}>
          Submit
        </button>
      </div>
    </>
  );
}
