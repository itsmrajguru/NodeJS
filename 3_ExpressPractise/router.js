// Creating Router in Express

// Router is nothing but a dedicated folder for diffrent types of routes like hots, admin, users

const express=require('express')
const myrouter=express.Router()


myrouter.get('/',(req,res)=>{
    res.send("Home page by Mangesh")
})
myrouter.get('/about',(req,res)=>{
    res.send("about page by Mangesh")
})
myrouter.get('/contact',(req,res)=>{
    res.send("contact page by Mangesh")
})


//Sending HTML file as a response

// const path = require('path') 
const rootdir=require('./utils.js')

myrouter.get('/page',(req,res)=>{{
    res.sendFile(path.join(rootdir,'home.html'))
}})

module.exports=myrouter;