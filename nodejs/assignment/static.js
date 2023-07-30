const http = require('http')
//const url = require('url')
const static = require('node-static');
const fileServer = new static.Server('./files');
var server = http.createServer((req,res) => {
    req.addListener('end',()=>{
        fileServer.serve(req,res);
    }).resume();
}).listen(8000);
console.log("Listenning on Port 8000");