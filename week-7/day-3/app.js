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

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});