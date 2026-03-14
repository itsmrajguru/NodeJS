const express=require('express')
const app=express()

const PORT=3435

//ROUTE
app.get('/',(req,res)=>{
    res.send("Hello Guys, I am okay")
})
//Sending JSON response
app.get('/products',(req,res)=>{
    const data=[
        {
            id:1,
            name:"Mangesh",
            age:20
        },
        {
            id:2,
            name:"Golu",
            age:22
        },
        {
            id:3,
            name:"Yash",
            age:30
        }
    ]
    res.json(data)
})

// Creating Dynamic routes
app.get('/products/:id',(req,res)=>{
    const data=[
        {
            id:1,
            name:"Mangesh",
            age:20
        },
        {
            id:2,
            name:"Golu",
            age:22
        },
        {
            id:3,
            name:"Yash",
            age:30
        }
    ]
    const singleid=Number(req.params.id)
    const singleidvalue=data.find(data=>data.id===singleid)
    if(singleidvalue) res.json(singleidvalue)
    else res.status(500).send("No Product Found")
})

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})