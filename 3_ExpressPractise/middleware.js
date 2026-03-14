// Creating a Server

const express=require('express');
const myrouter = require('../Express/router/router');
const app=express()
const PORT=2345;

//First Middleware
const MyMiddleware=((req,res,next)=>{
    console.log("I am running")
    next()
})
app.use(MyMiddleware)

app.get('/',(req,res)=>{
res.send("Home page")
})

app.get('/about',(req,res)=>{
    res.send("About page")
})


//Creating  a Timpstamp Middleware
app.use((req,res,next)=>{
    const Timpstamp=new Date().toLocaleDateString()
    console.log(`at ${Timpstamp}, req from ${req.method} and ${req.url}`)
    next()
})
app.get('/services',(req,res)=>{
    res.send("Server is running")
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})
