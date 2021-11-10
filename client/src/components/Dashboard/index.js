import React from 'react';
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div style = {{textAlign:"center",padding:"10px"}} className = "d-flex flex-row justify-content-center">
            
            <div className = "card d-flex flex-column align-items-center" style = {{borderRadius:"10px",backgroundColor:"white",padding:"100px",width:"50vw",height:"80vh"}}>
            <h1>welcome to Myntra</h1> 
            <Link to = "/Login">
                <div>
                <button className = 'btn btn-primary mb-3'>Login</button>
                </div>
                </Link>
                <Link to = "register">
                <div>
                <button className = 'btn btn-primary'>Signup</button> 
                </div> 
                </Link> 
                </div>
                </div>
        </div>
    );
}

export default Dashboard;
