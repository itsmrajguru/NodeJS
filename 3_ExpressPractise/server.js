// Creating a Server

const express=require('express')
const app=express()
const PORT=2345;

//Importing Router
const myrouter=require('./router.js')

//Using Router
app.use(myrouter)
app.get('/1',(req,res)=>{
    res.send("<h1>Hello Guys</h1>")
})
// Craeting a route

app.get('/about',(req,res)=>{
    res.json(MOCK_DA)
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})