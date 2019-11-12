const express = require('express');
const app = express();


app.get('/groot', (req, res) => {
    let message = req.query.message;
    let error = 'I am groot!';

    if (message) {
        res.status(200);
        res.json({
            message: message,
            translated: "I am groot!"
        });
    } else {
        res.status(404);
        res.json(error);
    }
});

module.exports = app;