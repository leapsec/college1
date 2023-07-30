const exp = require('express');
const app = exp();
app.listen(3000);
app.get("/",(req,res)=>{
    res.end('Hello !');
});