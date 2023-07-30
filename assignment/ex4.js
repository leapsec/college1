var ws= require('ws');
var http = require('http');
var fs = require('fs'); 
var httpServer = new http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile('./files/ex4.html','utf-8',(err,data)=>{
            if(err){
                wval.send(err);
                return;
            }
            res.writeHead(200,{"Content-Type" : "text/html"});
            res.write(data);
            res.end();
        });
    }
    else{
        res.end("Go to default url '/' only");
    }  
}).listen(8000);
const wss = new ws.Server({server:httpServer});
wss.on('connection',(wval)=>{
    wval.send('Hello I am a Domain(Hardware) Specific Chat-bot Pls Ask Questions acc. to it...');
    wval.on('message',(mes)=>{
        if(mes =="What is SMPS"){
            wval.send("A Switch-mode Power Supply is an electronic power supply that incorporates a switching regulator to convert electrical power efficiently.");
        }
        else if(mes == "What is GPU"){
            wval.send("A Graphics Processing Unit is a computer chip that performs rapid mathematical calculation, primarily for the purpose of the rendering images.");
        }
        else if(mes == "What is Bad sector"){
            wval.send("A bad sector is a sector on a computer’s hard disk drive or flash memory that is either inaccessible or unwritable due to permanent damage.");
        }
        else if(mes == "What is chkdsk"){
            wval.send("Chkdsk (short for “check disk”) is a system tool in DOS and windows operating system. It verifies the file system of a volume and fixes logical file system errors.");
        }
        else if(mes == "What is RAID"){
            wval.send("RAID stands for Redundant Array of Independent Disks. This is a data storage virtualization technology that combines multiple physical disk components into a single logical unit. It is designed for the purposes of data redundancy & performance improvement. The system consists of two or more drives working in parallel. There is a trend to use the technology for solid state drive.");
        }
        else if(mes == "What is System software"){
            wval.send("System software is a type of computer program that is designed to run a computer’s hardware and application programs.");
        }
        else if(mes == "What is Application software"){
            wval.send("Application software is a program or group of programs designed for end users.");
        }
        else if(mes == "What is computer hardware"){
            wval.send("Computer hardware is the physical parts or components of a computer, such as a monitor, keyboard, computer data storage, hard disk drive (HDD), graphic card, sound card, memory (RAM) and motherboard.");
        }
        else if(mes == "What is Software"){
            wval.send("Software refers to a program or set of instructions and applications used to manage and control various functions of a device such as a computer.");
        }
        else if(mes == "What is Unix"){
            wval.send("Unix is a multiuser, multitasking operating system that is widely used as the master control program in workstations and servers.");
        }
        else if(mes == "What is Operating System"){
            wval.send("An Operating System (OS) is system software that manages computer hardware and software resources and provides common service for computer programs.");
        }
        else if(mes == "What is SOC"){
            wval.send("A system on a chip or system on chip (Soc or SOC) is an integrated circuit (IC) that integrates all components of a computer or other electronic system into a single chip.");
        }
        else if(mes == "What is WDDM"){
            wval.send("Windows Display Driver Model (WDDM) is the graphic driver architecture for video card drivers running Microsoft Windows versions beginning with Windows vista.");
        }
        else if(mes == "What is ISP"){
            wval.send("An Internet Service Provider (ISP) is an organization that provides services for accessing and using the internet.");
        }
        else if(mes == "What is Firmware"){
            wval.send("Firmware is programming that is written to the read-only memory (ROM) of a computing device.");
        }
        else if(mes == "What is Dual Boot"){
            wval.send("A dual boot system is a computer system in which two operating system are installed on the same hard drive.");
        }
        else if(mes == "What is Partition"){
            wval.send("A Partition is nothing more than a way to organize the physical space on a hard drive. We typically think of a hard drive as a single disk, but partitioning allows you to split a hard drive into appearing as multiple, different drives.");
        }
        else if(mes == "How will you recover data from a virus-infected system"){
            wval.send("We will install an OS and updated antivirus in a system that is free of any viruses, and then connect the hard drive of the infected system as a secondary drive. The hard drive will then be scanned and cleaned. Data can now be copied into the system.");
        }
        else if(mes == "Some top-level domain name and they’re full from"){
            wval.send("COM – .com stands for commercial." + "\n"
            + "IN – .IN stands for India." + "\n" +
            "NET – .net stands for network" + "\n" +
            "ORG – .org stands for organization" + "\n" +
            "INFO – .info stands for information" + "\n" +
            "BIZ – .biz stands for business."+ "\n")
        }
        else if(mes == ""){
            wval.send("Can't tell You Something which you Didn't asked about...");
        }
        else{
            wval.send("Sorry We Still Are Processing the Question Maybe Later It Would Be added...");
        }
    });
});