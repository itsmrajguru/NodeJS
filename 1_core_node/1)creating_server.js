// // Creating a HTTP Server...

// const http=require('http')
// const fs=require('fs')

// const server=http.createServer((req,res)=>{
//     const data=`${Date.now()}:New req Recieved\n`
//     fs.appendFile('./D.txt',data,(err,data)=>{
//         res.end("Response in action")
//     })
// })

// server.listen(4246,()=>{
//     console.log(`server started at http://localhost:4246`)
// })


const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.method,req.url)
    res.write("<h1>Hello Guys , I can speak english so fluently</h1>")
})
const PORT=2345
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})


