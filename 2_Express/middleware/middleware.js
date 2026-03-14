// creating middlewares

const express=require('express')
const app=express()

const PORT=3435;

//middlewares

app.use((req,res,next)=>{
    const date=new Date().toLocaleString()
    console.log(`(Method:${req.method}) and (path:${req.url}) arrived at ${date}`)
    next()
})
app.get("/",(req,res)=>{
    res.send("Hello Guys")
})

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})