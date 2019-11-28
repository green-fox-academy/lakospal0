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
//-----------------------------------------------------------------
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
//-----------------------------------------------------------------
app.post('/api/links', function(req, res) {
        console.log(req.body);
        let secretCode = Math.floor(Math.random() * 10000);
        let url = req.body.url;
        let alias = req.body.alias;
        let query = 'INSERT INTO examlul VALUES (null,?,?,0,?);';
        let aliasChecker = 'SELECT * FROM examlul WHERE alias=?';
        conn.query(aliasChecker, [alias], function(err, row) {
            if (row.length > 0) {
                let randomjson = {
                    "error": "Your alias is already in use mfaka :)"
                }
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.status(400);
                res.send(randomjson);
            } else {
                conn.query(query, [url, alias, secretCode], function(err, row) {
                    conn.query('SELECT * FROM examlul WHERE alias=? && url = ?', [alias, url], function(err, row) {
                        res.setHeader('Content-Type', 'application/json');
                        res.status(200);
                        res.send(row);
                    })
                })
            }
        });
    })
    //-----------------------------------------------------------------
app.get('/a/:alias', function(req, res) {
        let alias = req.params.alias;
        let query = 'UPDATE examlul SET hitscore = hitscore + 1 WHERE (alias = ?);';
        conn.query(query, [alias], function(err, row) {
            query = 'SELECT url FROM examlul WHERE alias=?;';
            conn.query(query, [alias], function(err, row) {
                res.status(200);
                res.redirect(row[0].url);
            })
        })
    })
    //-----------------------------------------------------------------
app.get('/api/links', function(req, res) {
    const query = 'SELECT id,url,alias,hitcount FROM examlul';
    conn.query(query, function(err, row) {
        res.send(row);
    })
});
//-----------------------------------------------------------------
app.delete('/api/links/:id', function(req, res) {
        let id = req.params.id;
        let secretcode = req.body.secretcode;
        let idChecker = 'SELECT * FROM examlul where id=?';
        let secretCodeChecker = 'SELECT * FROM examlul WHERE id=? && secretcode=?';
        let query = 'DELETE FROM examlul WHERE id=?';
        conn.query(idChecker, [id], function(err, row) {
            if (row.length == 0) {
                //console.log("id not found");
                res.sendStatus(404);
            } else {
                conn.query(secretCodeChecker, [id, secretcode], function(err, row) {
                    if (row.length == 0) {
                        //console.log("scc error");
                        res.sendStatus(403);
                    } else {
                        conn.query(query, [id], function(err, row) {
                            query = 'SELECT * FROM examlul where id=?';
                            conn.query(query, [id], function(err, row) {
                                res.sendStatus(204);
                            })
                        })
                    }
                })
            }
        })
    })
    //-----------------------------------------------------------------
app.put('/api/putin/:id', function(req, res) {
        let id = req.params.id;
        let url = req.body.url;
        let query = 'UPDATE examlul SET url=? WHERE id=?;';
        conn.query(query, [url, id], function(err, row) {
            query = 'SELECT * FROM examlul WHERE id=?;';
            conn.query(query, [id], function(err, row) {
                res.send(row);
            })
        })
    })
    //-----------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});