import React,{useState} from 'react';
import Logo from "../../images/logo.png"
const Signup = () => {

const submitUserDetails = ()=>{
    const body = {userName,email,number}  
    console.log(body)   
}
    const [userName,setUserName]=useState("");
    const [email,setPassword]=useState("");
    const [number,setNumber]=useState("")
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
                        <input type="radio"  name="gender" id="genderMale" value="Male" checked />
                        <label for="genderMale">Male</label>
                        <input type="radio" className="form-control mb-3" name="gender" id="genderFemale" value="Female" class="ml-2" />
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
