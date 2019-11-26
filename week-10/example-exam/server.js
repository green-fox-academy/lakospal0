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
    let url = req.body.url;
    let alias = req.body.alias;
    conn.query('INSERT INTO examlul VALUES (null,?,?,0,?)', [url, alias, secretCode], function(err, row) {
        conn.query('SELECT * FROM examlul', function(err, row) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.send(row);
        })
    })
})

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

app.get('/api/links', function(req, res) {
    const query = 'SELECT id,url,alias,hitcount FROM examlul';
    conn.query(query, function(err, row) {
        res.send(row);
    })
});

app.delete('/api/links/:id', function(req, res) {
    let id = req.params.id;
    let secretCode = req.body.secretCode;
    const query = 'DELETE * FROM examlul WHERE (secretcode=' + secretCode + ') AND (id=' + id + ');';
    conn.query(query, function(err, row) {
        console.log(row);
        res.status(204);
        res.send(row);
    })

    app.delete("/api/link/:id", function(req, res) {
        let id = req.params.id;
        let secretCode = req.body.secretCode;
        let query = SELECT * FROM urlAliaser WHERE id = ? ;
        conn.query(query, [id], function(err, del) {
            if (secretCode == del[0].secretCode) {
                query = DELETE FROM urlAliaser WHERE(id = ? );
                conn.query(query, [id], (err, deleted) => {
                    console.log(deleted);
                    res.status(200);
                });
                res.send(Post with id: $ { id }
                    has been deleted.);
            } else if (secretCode !== del[0].secretCode) {
                res.send(Incorrect secret code.);
                res.status(405);
            } else if (id == undefined) {
                res.send(ID does not exist.);
                res.status(404);
            }
        });
    });

})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});