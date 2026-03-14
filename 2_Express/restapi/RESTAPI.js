// const express=require('express')
// const data=require('./MOCK_DATA.json')
// const app=express()

// const PORT=3453;

// // routes

// app.get('/user',(req,res)=>{
//     const html=`
//     <ul>
//     ${data.map(user => `<li>${user.first_name}</li>`).join("")}
//     </ul>`
//     return res.send(html)
// })

// app.get('/api/user',(req,res)=>{
//     return res.json(data);
// })

// app.get('/api/username',(req,res)=>{
//     const usernames=data.map((user)=>{
//         return user.first_name;
//     })
//     return res.json(usernames);
// })

// app.get('/api/user/:id',(req,res)=>{
//     const id=Number(req.params.id)
//     const userid=data.find(user=>user.id===id)
//     return res.json(userid)
// })

// app.listen(PORT,()=>{
//     console.log(`server started at http://localhost:${PORT}`)
// })


const express=require('express')
const app=express()

// Calling Data

const data=require('../MOCK_DATA.json')

const PORT=3435;

// routes
app.get('/',(req,res)=>{
    res.send("Hello Guys")
})


//Getting product data
app.get('/products',(req,res)=>{
    const products=[
        {
            id:1,
            name:"mangesh",
            age:20
        },
        {
            id:2,
            name:"mangesh",
            age:30
        },
        {
            id:3,
            name:"mangesh",
            age:40
        }
    ]
    res.json(products)
})

// getting single data
app.get('/products/:id',((req,res)=>{
    const indProduct=Number(req.params.id)
    const product=data.find(product=>product.id===indProduct)

    if(product){
        res.json(product)
    }else{
        res.status(400).send("Please enter a Valid ID")
    }
}))

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})