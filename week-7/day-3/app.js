const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', function(req, res) {
    if (req.query.input == isNaN) {
        var input = {
            "error": "Please provide an input!"
        }
    } else if (req.query.input !== isNaN) {
        var received = req.query.input;
        var result = received * 2;
        var input = {
            "received": received,
            "result": result
        }
    }
    res.send(input);
})


app.get('/greeter', function(req, res) {
    if (req.query.name && req.query.title) {
        var name = req.query.name;
        var title = req.query.title;
        var obj = {
            "welcome_message": "Oh, hi there " + name + ", my dear " + title + "!"
        }
    } else if (req.query.name || req.query.title !== true) {
        var obj = {
            "error": "Please provide a name and a title!"
        }
    }
    res.send(obj);
})


app.get('/appenda/:appendable', function(req, res) {
    var appendable = req.params.appendable;
    var append = {
        "appended": appendable + "a"
    }
    res.send(append);
})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});