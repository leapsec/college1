var fs = require('fs')
var ns = require('node-static')
var http = require('http')
var url = require('url');
var qs = require('querystring');
const { Console } = require('console')
var fileServer  = new ns.Server('./files')
console.log('Server Listenning on Port 8000')
const HtppServer = http.createServer((req,res)=>{
    var urlcur = url.parse(req.url).pathname;
    if(urlcur=="/indexg.html" && req.method == "GET"){ 
        req.on('end',()=>{
            var params = url.parse(req.url,true).query;
            var obj = {name:params.name,age:params.age};
            if(obj!={}){
            console.log(params.age + " " + params.name);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(obj));
            res.end();
            }
        })
    }
    else if(req.url == "/" && req.method == "POST"){
        let body = ''
        req.on('data',(chunk)=>{
            body += chunk;
        });
        req.on('end',()=>{
            var params = qs.parse(body);
            var obj = {name:params.name1,age:params.age1};
            res.writeHead(200,{"Content-Type":"application/json"});
            res.write(JSON.stringify(obj));
            res.end();
        });
    }
    req.on('end',()=>{
        console.log('Requested url =>' + req.url);
        fileServer.serve(req,res);
    }).resume()
}).listen(8000) 