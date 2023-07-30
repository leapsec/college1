var fs = require('fs')
var http = require('http')
const httpServer = http.createServer((req,res)=>{
    console.log("request url => " + req.url);
    if(req.url=='/'){
        var dataout;
        fs.readFile('./files/ex2.html','utf-8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end(); 
        })
    }
    else if(req.url=="/getHello"){
        res.end("Hello Nodejs!!");
    }
}).listen(8000);