exports.chatb = function(mes){
    if(mes =="hello"){
        console.log("Hello I am a Domain(Hardware) Specific Chat-bot Pls Ask Questions acc. to it...");
    }
    else if(mes =="What is SMPS"){
        console.log("A Switch-mode Power Supply is an electronic power supply that incorporates a switching regulator to convert electrical power efficiently.");
    }
    else if(mes == "What is GPU"){
        console.log("A Graphics Processing Unit is a computer chip that performs rapid mathematical calculation, primarily for the purpose of the rendering images.");
    }
    else if(mes == "What is Bad sector"){
        console.log("A bad sector is a sector on a computer’s hard disk drive or flash memory that is either inaccessible or unwritable due to permanent damage.");
    }
    else if(mes == "What is chkdsk"){
        console.log("Chkdsk (short for “check disk”) is a system tool in DOS and windows operating system. It verifies the file system of a volume and fixes logical file system errors.");
    }
    else if(mes == "What is RAID"){
        console.log("RAID stands for Redundant Array of Independent Disks. This is a data storage virtualization technology that combines multiple physical disk components into a single logical unit. It is designed for the purposes of data redundancy & performance improvement. The system consists of two or more drives working in parallel. There is a trend to use the technology for solid state drive.");
    }
    else if(mes == "What is System software"){
        console.log("System software is a type of computer program that is designed to run a computer’s hardware and application programs.");
    }
    else if(mes == "What is Application software"){
        console.log("Application software is a program or group of programs designed for end users.");
    }
    else if(mes == "What is computer hardware"){
        console.log("Computer hardware is the physical parts or components of a computer, such as a monitor, keyboard, computer data storage, hard disk drive (HDD), graphic card, sound card, memory (RAM) and motherboard.");
    }
    else if(mes == "What is Software"){
        console.log("Software refers to a program or set of instructions and applications used to manage and control various functions of a device such as a computer.");
    }
    else if(mes == "What is Unix"){
        console.log("Unix is a multiuser, multitasking operating system that is widely used as the master control program in workstations and servers.");
    }
    else if(mes == "What is Operating System"){
        console.log("An Operating System (OS) is system software that manages computer hardware and software resources and provides common service for computer programs.");
    }
    else if(mes == "What is SOC"){
        console.log("A system on a chip or system on chip (Soc or SOC) is an integrated circuit (IC) that integrates all components of a computer or other electronic system into a single chip.");
    }
    else if(mes == "What is WDDM"){
        console.log("Windows Display Driver Model (WDDM) is the graphic driver architecture for video card drivers running Microsoft Windows versions beginning with Windows vista.");
    }
    else if(mes == "What is ISP"){
        console.log("An Internet Service Provider (ISP) is an organization that provides services for accessing and using the internet.");
    }
    else if(mes == "What is Firmware"){
        console.log("Firmware is programming that is written to the read-only memory (ROM) of a computing device.");
    }
    else if(mes == "What is Dual Boot"){
        console.log("A dual boot system is a computer system in which two operating system are installed on the same hard drive.");
    }
    else if(mes == "What is Partition"){
        console.log("A Partition is nothing more than a way to organize the physical space on a hard drive. We typically think of a hard drive as a single disk, but partitioning allows you to split a hard drive into appearing as multiple, different drives.");
    }
    else if(mes == "How will you recover data from a virus-infected system"){
        console.log("We will install an OS and updated antivirus in a system that is free of any viruses, and then connect the hard drive of the infected system as a secondary drive. The hard drive will then be scanned and cleaned. Data can now be copied into the system.");
    }
    else if(mes == "Some top-level domain name and they’re full from"){
        console.log("COM – .com stands for commercial." + "\n"
        + "IN – .IN stands for India." + "\n" +
        "NET – .net stands for network" + "\n" +
        "ORG – .org stands for organization" + "\n" +
        "INFO – .info stands for information" + "\n" +
        "BIZ – .biz stands for business."+ "\n")
    }
    else if(mes == ""){
        console.log("Can't tell You Something which you Didn't asked about...");
    }
    else{
        console.log("Sorry We Still Are Processing the Question Maybe Later It Would Be added...");
    }
};
// node -e "require('./ex3').chatb('hello')"