const express = require('express');
let app = express();

app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.redirect('/test');
});

app.get('/test', (req, res) => {
    res.render('test', { title : 'Coalery', message: 'Welcome to Test Page.' });
});

app.listen(3000, () => {
    console.log("Server has been started.");
});