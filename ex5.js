const fs = require('fs');
const archiver = require('archiver');

function zipfolder(SourceFolder,OutputZip){
    const archive = archiver('zip',{'zlib':{level: 9}});
    const output = fs.createWriteStream(OutputZip);
    output.on('close',()=>{
        console.log('Compression Complete...');
    });
    archive.on('error',(err)=>{
        console.log(err);
    });
    archive.directory(SourceFolder).pipe(output);
    archive.finalize();
}
const SourceFolder = "C:\\MSI"//whole path to the file
const OutputZip = "C:\\Users\\leap\\Downloads\\forzip\\out.zip"
zipfolder(SourceFolder,OutputZip); 