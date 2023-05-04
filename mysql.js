const mysql = require('mysql')   // import mysql
                    
const con =mysql.createConnection({

host:'localhost',
user:'root',
port:'3306',
database:'dit_project',
password:'944J222s.'
});

con.connect((error)=>{
    if(error)
    console.log("error");
    else
    console.log("database connected");
});

module.exports=con;