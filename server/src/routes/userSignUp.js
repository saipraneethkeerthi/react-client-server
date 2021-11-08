const express = require("express");
const app = express();
const User=require("../modelSchema/userSignUp")

const router = new express.Router();

router.get('/', (req, res)=>{
    res.status(200).send("server is sending some data.....")
})
router.post('/create', (req, res)=>{
    console.log(req.body)
    User.insertMany(req.body)
    res.status(200).send("post is done")
})

module.exports=router; 