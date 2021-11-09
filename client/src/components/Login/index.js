import React from 'react';
import Logo from "../../images/logo.png"
const Login = () => {
    return (
        <>
        <div className="container d-flex flex-column align-items-center">
            <div className="card w-50 d-flex flex-column  align-items-center shadow" >
                <img style={{width:"100px"}} src={Logo}/>
                <h1>Log In to Myntra</h1>
                <p>EASILY USING</p>
                <div  className="d-flex flex-row">
                <button type="button" style={{ marginRight: "5px" }} className="btn btn-primary">FACEBOOK</button>
                <button type="button" className="btn btn-danger">GOOGLE</button>
                </div>
                <p>-OR USING EMAIL-</p>
                <input type="text" className="form-control mb-3 w-50" placeholder="Email address"/>
                <input type="password" className="form-control mb-3 w-50" placeholder="Password"/>
                <button type="button" className="btn btn-primary mb-3">LOG IN</button>
                <a href="#" >FORGOT PASSWORD?</a>
            </div>   
        </div>
            
        </>
    );
}

export default Login;
