const mysql = require('mysql')
const express = require('express');
const path = require('path');
var cors = require('cors');
const PORT = 8080;

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
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
app.use(cors());
app.use(express.json());

//first task
app.get('/hello', function(req, res) {
    res.send("hello :)");
})

// APP.GET 
app.get('/posts', (req, res) => {
    const queryString = "SELECT * FROM reddit.reddit_posts"
    conn.query(queryString, (err, result) => {
        res.setHeader("Content-type", "application/json");
        res.send(JSON.stringify(result));
        console.log('Client request: "Get API".')
    });
});

// ADD NEW POST
app.post('/posts', function(req, res) {
    //`UNIX_TIMESTAMP(timestamp)` idk where
    const queryString = `INSERT INTO reddit.reddit_posts (title, url, score) VALUES ('${req.body.title}', '${req.body.url}', '0')`;
    console.log(queryString);
    conn.query(queryString, (err, result) => {
        const query = `SELECT * FROM reddit.reddit_posts WHERE id=${result.insertId}`
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
        })
    });
});

//UPVOTE
app.put('/posts/:id/upvote', function(req, res) {
    const upvoteId = conn.escape(req.params.id);
    const queryString = `UPDATE reddit.reddit_posts SET score = score + 1 WHERE id = ${upvoteId}`;
    conn.query(queryString, () => {
        const query = `SELECT * FROM reddit.reddit_posts WHERE id=${upvoteId}`
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
        })
    })
})

//DOWNVOTE
app.put('/posts/:id/downvote', function(req, res) {
    //const score = `SELECT score FROM reddit.reddit_posts WHERE id=${req.params.id}`;
    //conn.query(score, (err, scoreresult) => {
    const downvoteId = conn.escape(req.params.id);
    const queryString = `UPDATE reddit.reddit_posts SET score = score - 1 WHERE id = ${downvoteId}`;
    conn.query(queryString, () => {
        const query = `SELECT * FROM reddit.reddit_posts WHERE id=${downvoteId}`
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
        })
    })
})

app.delete("/posts/:id/remove", function(req, res) {
    const query = `DELETE FROM reddit.reddit_posts WHERE id = ${req.params.id}`;
    conn.query(query, (err, post) => {
        console.log("Checking for errors:" + err);
        const query = `SELECT * FROM post WHERE id = ${req.params.id}`;
        conn.query(query, (err, post) => {
            res.setHeader("Content-type", "application/json");
            res.status(200);
            res.send(JSON.stringify(post));
            console.log(
                `Client request: "Delete post with id: '${req.params.id}' from database".`
            );
        });
    });
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});