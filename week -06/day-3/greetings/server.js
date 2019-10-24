const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
    if (req.query.name === undefined) {
        res.render('home.ejs', { person: "Guest" });
    } else {
        res.render('home.ejs', { person: req.query.name });
    }


})

app.listen(PORT);