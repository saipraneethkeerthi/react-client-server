import React from 'react';
import { useState } from 'react'

import {Link} from 'react-router-dom'

import Logo from "../../reusablecomponents/logo"
import Input from "../../reusablecomponents/input"
import Button from "../../reusablecomponents/button"
import Hyperlinks from "../../reusablecomponents/hyperlinks"

const Login = () => {

  var body;

  const validateUserName = (event) => {
    if(event.target.value === ""){
      setUserErr("*Please fill this field")
    }else{
      setUserErr("")
      setUserName(event.target.value)
    }
  }

  const validatepassword = (event) => {  
    if(event.target.value === ""){
      setPasswordErr("*Please fill this field")
    }else{
      setPasswordErr("")
      setPassword(event.target.value)
    }
  }

  const onSubmit = () => {
    body = { userName,password}
    if (userName, password) {
      setErrClass("d-none")
    } else {
      setErrMsg("Please enter all the fields.")
      setErrClass("d-block")
    }
  }

  const [userName, setUserName] = useState()
  const [userErr, setUserErr] = useState()
  const [password, setPassword] = useState()
  const [passwordErr, setPasswordErr] = useState()
  const [errMsg, setErrMsg] = useState()
  const [errClass, setErrClass] = useState("d-none")

  return (
    <>
      <div className="container">
      <div className="row justify-content-center align-items-center">
          <div className="card text-center p-3 shadow-lg p-5 col-6">
          <Logo height="50px" width="50px" className="mx-auto"/>
            <div className="from mt-2">
              <Input className="form-control" type="text" placeholder="User Name" err={userErr} onChange={(event) => validateUserName(event)} required />
              <Input className="form-control mt-2" type="password" placeholder="Password" err={passwordErr} onChange={(event) => validatepassword(event)} required />
            </div>
            <Hyperlinks className="text-end" referTo="/register" text="New to Myntra?" textSize="10px"/>
            <div className="d-flex flex-row justify-content-center mt-3">
              <Button className="btn btn-primary" onClick={onSubmit} value="Login"/>
            </div>
            <div className={errClass}>
              <h5 className="fw-bold text-light bg-danger p-2 mt-3">{errMsg}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
