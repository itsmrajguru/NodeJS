/*Returning a Plain Text as a Response */

const http = require("http")
const server1 = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers)
    // process.exit() //server instantly stops here

    if(req.url==='/'){
        res.setHeader('Content-Type','text/HTML');
        res.write('<html>');
        res.write('<head><title>Its Mangesh</title></head>');
        res.write('<body><h1>This is the home page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/about'){
        res.setHeader('Content-Type','text/HTML');
        res.write('<html>');
        res.write('<head><title>Its Mangesh</title></head>');
        res.write('<body><h1>Nothing is about me</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else{
        res.setHeader('Content-Type','text/HTML');
        res.write('<html>');
        res.write('<head><title>Its Mangesh</title></head>');
        res.write('<body><h1>Like /Share /Subscribe</h1></body>');
        res.write('</html>');
        res.end();
    }
})

const PORT1 = 9901
server1.listen(PORT1, () => {
    console.log(`server starting at http://localhost:${PORT1}`)
})


/*Returning a HTML page as a Response */

const http=require('http')
const fs=require('fs')
const path=require('path')
const querystring = require('querystring')


const server2=http.createServer((req,res)=>{
    
    if (req.method === 'GET' && req.url === '/'){

        const path_file=path.join(__dirname,'index.html')
        fs.readFile(path_file,(err,data)=>{
            if(err){
              //res.writeHead(500, { "Content-Type": "text/plain" })
                res.writeHead(500,{'Content-Type':'text/plain'})
                return(res.end('Internal error, Try Again'))
            }
                res.writeHead(200,{'Content-Type':'text/html'})
                return(res.end(data))
        })
    }
    else if (req.method === 'POST' && req.url === '/submit') {

    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        // console.log("Form Data:", body)
        const parsedData = querystring.parse(body)

        console.log(parsedData)
        console.log("Name:", parsedData.username)
        console.log("Email:", parsedData.email)

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h2>Form Submitted Successfully</h2>')
    })
}

    else if(req.url==='/about'){
        
            res.setHeader('Content-Type','text/HTML');
            res.write('<html>');
            res.write('<head><title>Its Mangesh</title></head>');
            res.write('<body><h1>Like /Share /Subscribe</h1></body>');
            res.write('</html>');
            res.end(); 
        }
})

const PORT2=5602;
server2.listen(PORT2,()=>{
    console.log(`Server running at http://localhost:${PORT2}`)
})
