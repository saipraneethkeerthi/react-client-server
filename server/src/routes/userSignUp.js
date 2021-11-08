const express = require("express");
const app = express();

const router = new express.Router();

router.get('/', (req, res)=>{
    res.status(200).send("get is done")
})
router.post('/create', (req, res)=>{
    console.log(req.body)
    res.status(200).send("post is done")
})

module.exports=router; 