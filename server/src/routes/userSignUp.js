const express = require("express");
const app = express();
const User=require("../modelSchema/userSignUp")

const router = new express.Router();

const {validateEmail, validatePassword} = require("../middlewares/middlewares")

router.get('/users', (req, res)=>{
    console.log('....')
    User.find({},(err,data)=>{
        console.log(data,err)
        if(data.length) res.status(200).send(data)
        else res.status(415).send(err)})
   
})
router.post('/user/create',validateEmail, validatePassword, (req, res)=>{
    console.log(req.body)
    User.insertMany(req.body).then((data)=> res.status(200).send(data))
   
})
router.post('/user/login', (req, res)=>{
    console.log(req.body)
    User.find(req.body,(err,data)=>{
        if(data.length) res.status(200).send(data)
        else res.status(415).send(err)
    })
   
})

module.exports=router; 