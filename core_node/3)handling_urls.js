const http=require('http')
const url=require('url')

const server=http.createServer((req,res)=>{
    const myurl=url.parse(req.url,true)
    const username=myurl.query.username
    switch(myurl.pathname){
        case('/'):
            res.end('This is Home page')
            break;
        case('/about'):
            res.end(`Hello ${username}`)
            break;
        default:
            res.end('404')
            break;      
    }
})

server.listen(3246,()=>{
    console.log(`server started at http://localhost:3246`)
})