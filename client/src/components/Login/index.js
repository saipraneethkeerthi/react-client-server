import React,{useState} from 'react';
import Logo from "../../images/logo.png"
import BaseController from "../../controllers"


const Login = () => {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const loginUserDetails = ()=>{
        const body = {user_name:userName,password}  
        let url = "http://localhost:1109/user/login";
    
          const success = (res) => {
            console.log("Success", res);
            window.location.href = "/dashboard"
          };
          const failure = (err) => {
            console.log("Error", err);
            alert("Invalid uername or password")
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
    
    return (
        <>
        <div className="container d-flex flex-column align-items-center mt-5">
            <div className="card w-50 d-flex flex-column  align-items-center shadow" >
                <img style={{width:"100px"}} src={Logo}/>
                <h1>Log In to Myntra</h1>
                <p>EASILY USING</p>
                <div  className="d-flex flex-row">
                <button type="button" style={{ marginRight: "5px" }} className="btn btn-primary">FACEBOOK</button>
                <button type="button" className="btn btn-danger">GOOGLE</button>
                </div>
                <p>-OR USING EMAIL-</p>
                <input type="text" className="form-control mb-3 w-50" placeholder="Email address" onChange={(event)=>setUserName(event.target.value)} />
                <input type="password" className="form-control mb-3 w-50" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
                <button type="button" className="btn btn-primary mb-3" onClick={()=>loginUserDetails()}>LOG IN</button>
                <a href="#" >FORGOT PASSWORD?</a>
                <br/>
            </div>   
        </div>
            
        </>
    );
}

export default Login;
