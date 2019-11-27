const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const PORT = 3000;
const bodyparser = require('body-parser');

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'musicplayer',
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

app.get('/playlists', function(req, res) {
    let query = 'SELECT * FROM playlists;';
    conn.query(query, function(err, row) {
        res.send(row);
    })
})

app.post('/playlists', function(req, res) {
    let playlists = req.body.playlist;
    let zero = '0';
    let query = 'INSERT INTO playlists VALUES(null,?,?);';
    conn.query(query, [playlists, zero], function(err, row) {
        conn.query('SELECT * FROM playlists', function(err, row) {
            res.status(200);
            res.send(row);
        })
    })

})

app.delete('/playlists/:id', function(req, res) {
    let id = req.params.id;
    let query = 'DELETE FROM playlists WHERE id=?;';
    conn.query(query, [id], function(err, del) {
        query = 'SELECT * FROM playlists;';
        conn.query(query, function(err, deleted) {
            res.send(del);
        })
    })
})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});