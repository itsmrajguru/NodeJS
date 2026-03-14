const express=require('express')
const router=express.Router()

//importing auth-middleware to out it as a handler
const middleware=require('../middleware/auth-middleware')
const is_admin_middleware=require('../middleware/is_admin-middleware')

router.get('/welcome',middleware,is_admin_middleware,(req,res)=>{
    res.json({
        succes:true,
        message:"welcome to admin page"
    })
})

module.exports=router