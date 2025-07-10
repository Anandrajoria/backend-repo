const http=require("http")
const server= http.createServer((req,res)=>{
    if(req.url==="/getData"){
        res.end("there is no data")
    }
    res.end("hello world")
})

server.listen(7777)