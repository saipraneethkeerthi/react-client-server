const express = require("express");
const app = express();
const User=require("../modelSchema/userSignUp")

const router = new express.Router();

router.get('/', (req, res)=>{
   User.find({},(err,data)=>{
       if(err) res.status(404).send(err)
       else res.status(200).send(data)
   })
   })
router.post('/create', (req, res)=>{
    console.log(req.body)
    User.insertMany(req.body).then((data)=> res.status(200).send(data))
   
})

module.exports=router; 