// importing the .env inn the main server
require('dotenv').config()

//creating a server
const express=require('express')
const app=express()
const PORT=process.env.PORT||4545;

//Middleware (Body Parsing)
app.use(express.json())

//importing database
const connectToDB = require('./database/db');
connectToDB()

//importing router
const router=require('./routes/auth-routes')
const home_router=require('./routes/home-routes')
const admin_router=require('./routes/admin-routes')

app.use('/api/auth/',router)
app.use('/api/home',home_router)  
app.use('/api/admin',admin_router)  

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})