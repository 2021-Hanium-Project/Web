const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/Web', express.static(__dirname+"/21_hg049/Web"));

app.listen(3000, '0.0.0.0', function() {
    console.log('서버 실행중...');
});



const connection = mysql.createConnection({
    host     : 'database-kyr.c2drpoqm7zkr.ap-northeast-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'seereal1!',
    database : 'info',
    port : '3306'
});

connection.connect();

connection.query('SELECT * FROM member', function(err, results, fields) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});

connection.end();




