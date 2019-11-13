const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    let distance = req.query.distance;
    let time = req.query.time;
    let error = 'It is an error text';
    if (distance !== isNaN && time !== isNaN) {
        res.status(200);
        res.json({
            distance: distance,
            time: time,
            speed: distance / time
        })
    } else {
        res.json(error);
    }
});

module.exports = app;