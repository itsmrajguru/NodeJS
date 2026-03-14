const express=require('express')
const router=express.Router()

//importing auth-middleware to out it as a handler
const middleware=require('../middleware/auth-middleware')

router.get('/welcome',middleware,(req,res)=>{
    try{
        const {username,user_id,role}=req.userInfo
        res.json({
            messsage:"User authorized successfully",
            user:{
                _id:user_id,
                username,
                role,
                message:`${username} is a good person`
            }
        })
    }catch(e){
        console.log(e)
    }
})

module.exports=router