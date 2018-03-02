const express = require('express');
const reload = require('reload');

const app = express();
app.locals.VALUE = 2018;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('a');
});

const arrWords = [
    { en: 'one', vn: 'mot' },
    { en: 'two', vn: 'hai' },
    { en: 'three', vn: 'ba' },
];

app.get('/words', (req, res) => res.render('words', { words: arrWords }));
//npm install nodemon@1.16.1 -g
app.listen(3000, () => console.log('Server started!'));
reload(app);
