const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    user_name:{type:String, required:true},
    password:{type:String, required:true},
    phone_no:{type:Number},
    email:{type:String, required:true}
})

const User=mongoose.model('User',userSchema)
module.exports = User