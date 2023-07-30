let http = require('http')
let fs = require('fs')
const validation = require('./r1')
var server = http.createServer((req,res)=>{
    console.log("Req Received: " + req.url)
    res.write("other pages" + validation)
})