const express=require('express')
const data=require('./MOCK_DATA.json')
const app=express()

const PORT=3453;

// routes

app.get('/user',(req,res)=>{
    const html=`
    <ul>
    ${data.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`
    return res.send(html)
})

app.get('/api/user',(req,res)=>{
    return res.json(data);
})

app.get('/api/username',(req,res)=>{
    const usernames=data.map((user)=>{
        return user.first_name;
    })
    return res.json(usernames);
})

app.get('/api/user/:id',(req,res)=>{
    const id=Number(req.params.id)
    const userid=data.find(user=>user.id===id)
    return res.json(userid)
})

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})