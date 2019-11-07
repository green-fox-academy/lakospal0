const mysql = require('mysql')
const express = require('express');
const path = require('path');
const PORT = 8080;

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'reddit',
});

conn.connect(function(err) {
    if (err) {
        console.log('Error connecting to Db');
        console.log(err);
        return;
    }
    console.log('Connection to database established\n');
});

const app = express();

app.get('/hello', function(req, res) {
    res.send("hello :)");
})


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});