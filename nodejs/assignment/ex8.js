import fetch from 'node-fetch';
async function getrp(url){
    var resp = await fetch(url);
    resp = await resp.text(); 
    return resp;
}
const resp = await getrp('http://google.com/?q=Spider-Man');
console.log(resp);
//we need to add "type":"module" in the package.json file