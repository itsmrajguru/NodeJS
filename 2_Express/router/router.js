//Router--> combines similar routes in one single page

const express=require('express');
const myrouter= express.Router();

const path=require('path') //importing  path for html page 

const rootDir=require('../utils/pathUtil') //importing pathUtil for html page

//adding routes

myrouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','home.html'))
    // next()
})
myrouter.get('/about',(req,res,next)=>{
    res.send("This is About page")
})

module.exports=myrouter