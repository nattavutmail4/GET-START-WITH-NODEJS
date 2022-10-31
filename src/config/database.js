const mysql  = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    charset:'utf8_general_ci',
    connectionLimit : 10,

});

connection.connect((err)=>{
    if(err){
        console.log('error connectiong: ' +err.stack)
    }
});

module.exports = connection