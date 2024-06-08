const express = require('express');
const mysql = require('mysql');

const app = express();

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'aime' });

dbConnection.connect((error) => {
    if (error) {
        throw err;
    }
    console.log('Connected to the database');
});


dbConnection.query("CREATE DATABASE aime",(error),()=>{
    if (error)throw err; 
        
    console.log('db created');
})

app.listen(3000, () => {
    console.log('Now my CRUD app is running on http://localhost:3000');
  });
-