import React, { useState } from "react";
import BaseController from "../controllers";

// import validator from 'validator'

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
    if (passwordValidator(password)) {
      const body = { user_name:userName, password,email };
      let url = "http://localhost:1109/create";

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
            setUserName(event.target.value);
          }}
          value={userName}
        />
        <input
          type="mail"
          placeholder="Enter your mail"
          className="form-control mb-3"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="form-control mb-3"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <label class="form-label" for="form14">
          Example label
        </label>
        <input
          type="password"
          placeholder="confirm your password"
          className="form-control mb-3"
          onChange={(event) => setPassword2(event.target.value)}
          value={password2}
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
