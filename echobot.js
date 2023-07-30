const WebSocket = require('ws');
var http = require('http');
var url = require('url');
var st = require('node-static');
var fileServer = new st.Server('./files');
var httpSer = new http.createServer((req,res)=>{
    console.log(new Date() + ' Server is Listenning on port 8000');
    req.on('end',()=>{
        fileServer.serve(req,res);
    }).resume();
}).listen(8080);
const wss = new WebSocket.Server({ server:httpSer });
wss.on('connection',(ws)=>{
    ws.send('Hello Client');
    ws.on('message',(mes)=>{
        console.log('Recieved Message =>' + mes);
        ws.send('Recieved By Server:' + mes);
    })
});

