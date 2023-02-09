import { engine, create } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 4000;

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public/')));
app.engine('.hdb', engine({ extname: '.hdb' }));

app.set('view engine', '.hdb');
app.set('views', path.join(__dirname, 'resouces/views'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
    });
});

app.get('/news', (req, res) => {
    res.render('news');
    console.log(req.query);
});

app.listen(port, () => {
    console.log(`Listening in http://localhost:${port}`);
});
