const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const posts = db.prepare('SELECT * FROM posts ORDER BY id DESC').all();
    res.render('index', { posts });
});

app.get('/', (req, res) => {
    res.send('<h1>Hello from my server!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About the Web Design Club</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us: </h1>');
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});