

//HERE we are directly merginf the route with the middleware

const express=require('express')
const app=express()
const PORT=2345;


// Merging route + middleware

app.use('/',(req,res,next)=>{
    console.log("Home page")
    next()
})
app.use('/about',(req,res,next)=>{
    res.send("About Page")
    next()
})
app.use('/',(req,res,next)=>{
    console.log("Home page")
    next()
})
app.use('/contact-us',(req,res,next)=>{
    console.log("contact-us page")
    next()
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})