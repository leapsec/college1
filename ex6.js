const fs = require('fs');
const unzip = require('unzipper');
fs.createReadStream('C:\\Users\\leap\\Downloads\\forzip\\out.zip').pipe(unzip.Extract({path:"C:\\Users\\leap\\Downloads\\forzip\\"}));