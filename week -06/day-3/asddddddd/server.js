const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = ['get up', 'survive', 'go back to bed', ];
    res.render('index.ejs', { data: data });
});


app.listen(PORT);