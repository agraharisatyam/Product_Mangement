const mysql = require('mysql2');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db'
});

db.connect((err)=>{
    if(err){
        console.log('Error connecting to the database:', err);
    }
    else{
        console.log('Connected to the database');
    }

})
module.exports=db;

