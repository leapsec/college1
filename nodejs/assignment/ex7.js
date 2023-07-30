const fs = require('fs');
const util = require('util');
const filePath= "C:\\Users\\leap\\Downloads\\forzip\\SSD Doctor.log";
const unl = util.promisify(fs.unlink);
unl(filePath)
.then(()=>{
    console.log("Deleted File " + filePath + " Successfully...");
})
.catch(err=>{
    throw err;
});