//creating  a model for user

//importing mongoose
const mongoose = require('mongoose');

//creating a schema

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})
//creating a model
const userMOdel=mongoose.model('UserData',userSchema)
module.exports=userMOdel;