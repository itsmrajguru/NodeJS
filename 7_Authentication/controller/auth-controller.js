//creating controller for the routes

//importing UserMOdel
const userMOdel = require('../models/user')
const userModel = require('../models/user')

//importing bycryptjs module
const bcrypt = require('bcrypt')
//importing jwt 
const jwt=require('jsonwebtoken')

//logic for register page
const registerUser = async (req, res) => {
    try{    
        // The data sent from the frontend is available in req.body.
        // We extract it from the request object and store it in the database.
        const {username,email,password,role}=req.body

        //checking the user aleready exits or not ?
        const checkExistingUser=await userModel.findOne({
            $or:[
                {username},
                {email}
            ]
        })
        if(checkExistingUser){
            return res.status(400).json({
                success:false,
                message:"User Already Exists !, try with diffrent credentials"
            })
        }

        //Hashing the Password
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)

        //creating a new user 
        const newlyCreatedUser=new userModel({
            username,
            email,
            password:hashedpassword,
            role:role || 'user'
        })
        await newlyCreatedUser.save()

        if(newlyCreatedUser){
            res.status(201).json({
                success:true,
                message:"User Created successfully"
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:"Unable to register user! please try again."
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Server Connection Error"
        })
    }
   
}

//logic for login page
const loginUser = async (req,res) => {
    try {
        /*To log in a user, we need to check if the user
        exists in the database and if the entered password matches the stored password.*/

        //extracting the user data from the req.body()
        const{username,password}=req.body

        //checking , is the username exists or not?
        const existingUser=await userModel.findOne({username})
        if(!existingUser){
            return res.status(400).json({
                success:false,
                message:"Invalid Credentials"
            })
        }

        //comparing the user password with the stores password
        const isPasswordMatch=await bcrypt.compare(password,existingUser.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid Credentials"
            })
        }

        //creating access token

        const accesstoken=jwt.sign({
            user_id:existingUser._id,
            username:existingUser.username,
            role:existingUser.role
        },process.env.JWT_SECRET_KEY,{
            expiresIn:"15m"
        })

        res.status(200).json({
            success:true,
            message:"user logged in successfully",
            accesstoken
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Some error occured, please try again !!!"
        })
    }
}

module.exports = { registerUser, loginUser }