var fs = require('fs');
//var fs = require('fs').promises;
function readFile1(fpath){
    return new Promise((success,failure) => {
        fs.readFile(fpath,'utf8',(err,data)=>{
            if(err) failure(err)
            else success(data)
        })
    })
}
readFile1("./files/index.html")
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log('err');
    })