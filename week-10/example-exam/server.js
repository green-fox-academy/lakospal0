const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const PORT = 8080;
const bodyparser = require('body-parser');

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'example',
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
app.use('/static', express.static('static'));
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/links', function(req, res) {
    let secretCode = Math.floor(Math.random() * 10000);
    let URL = req.body.url;
    let alias = req.body.alias;
    conn.query('INSERT INTO examlul VALUES (null,?,?,0,?)', [URL, alias, secretCode], function(err, row) {
        conn.query('SELECT * FROM examlul', function(err, row) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.send(row);
        })
    })
})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});