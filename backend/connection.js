const mysql = require('mysql2');
require('dotenv').config();

var  connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host : process.env.DB_LOCALHOST,
    user : process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err)=>{
    try{
 console.log("connected",process.env.DB_PORT, process.env.DB_LOCALHOST )
    }
  catch{
     console.log(err);
  }
});

module.exports= connection;