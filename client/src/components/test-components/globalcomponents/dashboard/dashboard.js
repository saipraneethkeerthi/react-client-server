import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import {getAllUserDate} from "../../../../store/actions"



const Dashboard = () => {
    const dispatch=useDispatch()

    useEffect(() => {
      console.log("inside usefeect")
      dispatch(getAllUserDate())
    },[])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;
