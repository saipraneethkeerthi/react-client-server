import React,{useState} from 'react';
import BaseController from "../../controllers"

import Logo from "../../images/logo.png"
const Signup = () => {

const submitUserDetails = ()=>{
    const body = {user_name:userName,password,gender,phone_no:number}  
    let url = "http://localhost:1109/create";

      const success = (res) => {
        console.log("Success", res);
        alert("User created successfully")
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
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [number,setNumber]=useState("")
    const [gender,setGender]=useState("")
    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="card w-75 d-flex flex-column  align-items-center shadow ">
                <img style={{width:"100px"}} src={Logo}/>
                <h1>Signup with Myntra</h1>
                <p>Easily sign up with</p>
                <div className="d-flex flex-row ">
                    <button style={{ marginRight: "5px" }} type="button" className="btn btn-primary">FACEBOOK</button>
                    <button type="button" className="btn btn-danger">GOOGLE</button>
                </div>
                <p>-OR USING EMAIL</p>
                <div className="container d-flex flex-column align-items-center">
                    <div className="card w-50 d-flex flex-column align-items-center">
                        <input type="text" className="form-control mt-3 mb-3 w-75" placeholder="Your Email Address" onChange={(event)=>setUserName(event.target.value)} />
                        <input type="password" className="form-control mb-3 w-75" placeholder="Choose Password" onChange={(event)=>setPassword(event.target.value)} />
                        <input type="number" className="form-control mb-3 w-75" placeholder="Mobile Number(For order status updates)" onChange={(event)=>setNumber(event.target.value)}/>
                        <div className="d-flex flex-row">
                        <input type="radio"  name="gender" id="genderMale" value="Male" checked={gender==="Male"} onClick={()=>setGender("Male")} />
                        <label for="genderMale">Male</label>
                        <input type="radio" className="form-control mb-3" name="gender" id="genderFemale" checked={gender==="Female"} value="Female" class="ml-2" onClick={()=>setGender("Female")} />
                        <label for="genderFemale">Female</label>
                        </div>
                    </div>
                        <button type="button" className="btn btn-primary mt-3" onClick = {()=>submitUserDetails()}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
