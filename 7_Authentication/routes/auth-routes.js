//importing express

const express=require('express')
const { registerUser, loginUser } = require('../controller/auth-controller')
const router=express.Router()

//all routes realetd to authentication and authorization

router.post('/register',registerUser)
router.post('/login',loginUser)

module.exports=router

