//Import PORT
require('dotenv').config()

//create server
const express=require('express')
const app=express()
const PORT=process.env.PORT || 3232

// Add middleware -->Body parsing(express.json())
app.use(express.json())

// Connect database
const ConnectToDB=require('./database/db')
ConnectToDB();

// Connect Books Router
const router=require('./routes/book-route')
app.use('/api/books/',router)


//listen to the server
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})