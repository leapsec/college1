var mysql = require('mysql')
var con = mysql.createConnection({
    host:"localhost",
    database:"sakila",
    user:"root",
    password:"mysql@123"
});
con.connect((err)=>{
    if(err) throw err
    console.log("Connected to mysql...");
    /*var sql = "INSERT INTO sakila.Employee (Eid, Ename, dept, age, salary) VALUES (107, 'Krishna', 'Analyst', 22, 33000);"
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })*/
    sql = "Select * from employee;";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
})