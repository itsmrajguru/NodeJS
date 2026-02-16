// Creating a HTTP Server...

const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const data=`${Date.now()}:New req Recieved\n`
    fs.appendFile('./D.txt',data,(err,data)=>{
        res.end("Response in action")
    })
})

server.listen(4246,()=>{
    console.log(`server started at http://localhost:4246`)
})