const express=require('express')
const app=express()

const PORT=3456;

app.get('/',(req,res)=>{
    res.send('Hello Guys')
})

app.get('/mangu',(req,res)=>{
    res.send(`this is ${req.query.name}\n and his roll number is ${req.query.id}`)
})
app.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`)
});