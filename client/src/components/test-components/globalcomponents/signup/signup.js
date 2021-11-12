import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input'


import Logo from "../../reusablecomponents/logo"
import Input from "../../reusablecomponents/input"
import Button from "../../reusablecomponents/button"
import Hyperlinks from "../../reusablecomponents/hyperlinks"

import "./signup.css"

const Signup = () => {

  var body;

  const validateUserName = (event) => {
    if(event.target.value === ""){
      setUserErr("*Please fill this field")
    }else{
      setUserErr("")
      setUserName(event.target.value)
    }
  }

  const validateEmail = (event) => {
    if(event.target.value === ""){
      setEmailErr("*Please fill this field")
    }else{
      setEmailErr("")
      setEmail(event.target.value)
    }
  }

  const validatepassowrd = (event) => {
    if(event.target.value === ""){
      setPasswordErr("*Please fill this field")
    }else{
      setPasswordErr("")
      setPassword(event.target.value)
    }
  }

  const validateConfirmPassword = (event) => {
    if(event.target.value === password){
      setConfirmPassword(event.target.value)
      setPassErr("")
    }
    else if(event.target.value === ""){
      setPassErr("*Please fill this field")
    }
    else{
      setPassErr("passowrd and Confirm Password should be same*")
    }
  }

  const onSubmit = () => {
    body = { userName, email, password, confirmPassowrd, phone }
    if (userName && email && password && confirmPassowrd && phone) {
      setErrClass("d-none")
    } else {
      setErrMsg("Please enter all the fields.")
      setErrClass("d-block")
    }
  }

  const [userName, setUserName] = useState()
  const [userErr, setUserErr] = useState()
  const [email, setEmail] = useState()
  const [emailErr, setEmailErr] = useState()
  const [password, setPassword] = useState()
  const [passwordErr, setPasswordErr] = useState()
  const [confirmPassowrd, setConfirmPassword] = useState()
  const [passErr, setPassErr] = useState()
  const [phone, setPhone] = useState()
  const [errMsg, setErrMsg] = useState()
  const [errClass, setErrClass] = useState("d-none")

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="card text-center shadow-lg p-5 col-12 col-md-6">
          <Logo iconName="fab fa-google-wallet fa-5x m-3"/>
            <div className="from mt-2">
              <Input className="form-control" type="text" placeholder="User Name"  err={userErr} onChange={(event) => validateUserName(event)}/>
              <Input className="form-control mt-2" type="email" placeholder="Email" err={emailErr} onChange={(event) => validateEmail(event)} required />
              <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} className="form-control mt-2" />
              <Input className="form-control mt-2" type="password" placeholder="Password" err={passwordErr} onChange={(event) => validatepassowrd(event)} required />
              <Input className="form-control mt-2" type="password" placeholder="Confirm Password" err={passErr} onChange={(event) => validateConfirmPassword(event)} required />
            </div>
            <Hyperlinks className="text-end" referTo="/login" text="Already have an account ?" textSize="10px"/>
            <div className="d-flex flex-row justify-content-center mt-3">
            <Button className="btn btn-primary" onClick={onSubmit} value="Signup"/>
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

export default Signup;
