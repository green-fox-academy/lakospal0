const mysql = require('mysql')
const express = require('express');
const path = require('path');
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
    const title = conn.escape(req.body.title);
    const url = conn.escape(req.body.url);
    //`UNIX_TIMESTAMP(timestamp)` idk where
    const queryString = `INSERT INTO reddit.reddit_posts (title, url, score) VALUES (?, ?, '0')` [req.body.title, req.body.url]
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


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});