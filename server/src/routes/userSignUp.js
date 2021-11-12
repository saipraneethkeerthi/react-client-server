const express = require("express");
const app = express();
const User=require("../modelSchema/userSignUp")

const router = new express.Router();

const {validateEmail, validatePassword} = require("../middlewares/middlewares")

router.get('/', (req, res)=>{
   User.find({},(err,data)=>{
       if(err) res.status(404).send(err)
       else res.status(200).send(data)
   })
   })
router.post('/user/create',validateEmail, validatePassword, (req, res)=>{
    console.log(req.body)
    User.insertMany(req.body).then((data)=> res.status(200).send(data))
   
})
router.post('/user/login',validateEmail, (req, res)=>{
    console.log(req.body)
    User.find(req.body,(err,data)=>{
        if(data.length) res.status(200).send(data)
        else res.status(415).send(err)
    })
   
})

module.exports=router; 