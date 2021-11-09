import React,{useState} from 'react';
import BaseController from '../controllers'

const Body = () => {
    const [getData,setGetData]=useState('')

    const handleGetData=()=>{
        let url="http://localhost:1109"
        const success = (res) => {
            console.log("Success", res);
            setGetData(res)
          };
          const failure = (err) => {
            console.log("Error", err);
          };
          BaseController.sendRequest(
            url,
            "get",
            null,
            false,
            null,
            success,
            failure
          );
    }
    return (
        <div>
            <p>{getData?JSON.stringify(getData):""}</p>
            <button className="btn btn-secondary" style={{marginTop:"30px"}} onClick={()=>handleGetData()}>Get users Data</button>
        </div>
    );
}

export default Body;
