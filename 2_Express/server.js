// creating server using Express

const express=require('express')
const app=express()

const PORT=3435;

// Importing Router
const myrouter=require('./router/router.js')

//Using Router
app.use(myrouter)


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})
