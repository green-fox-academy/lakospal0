const express = require('express');
const app = express();


app.get('/groot', (req, res) => {
    let message = req.query.message;

    if (message) {
        res.status(200);
        res.json({
            message: message,
            translation: "I'm groot!"
        });
    } else {
        res.status(404);
        res.json("ERRROOO00OR");
    }
});

module.exports = app;