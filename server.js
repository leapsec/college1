const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  if(req.url=='/process' && req.method=='POST'){
    let body = ''
    res.on('data',chunk =>{
      body += chunk
    })
    res.on('end',()=>{
      console.log(body);
      res.end(' => ' + body);
    })
  }
  else if(req.url == '/form' && req.method == 'GET'){
    var filename = './files/index.html'
    fs.readFile(filename,(err,data)=>{
      if(err){
        res.writeHead(404,{
          'Content-Type','text/html'
        })
        return res.end('404 not Found')
      }
      res.writeHead(200,{'Content-Type','text/html'])
      res.write(data)
      res.end()
    })
  }
  else{
    res.end('default')
  }
}).listen(8080)
