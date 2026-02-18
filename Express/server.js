// creating server using Express

const express=require('express')
const app=express()

// Importing Express.router()
const myrouter=require('./router/router.js')

const PORT=3435;

//Importing Routes
app.use(myrouter)


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})