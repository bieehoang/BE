import express from 'express';
import { engine, create } from 'express-handlebars';
import morgan from 'morgan';

import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import connect from './M/db/db.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 4000;
const db = connect;
// Connect to DB
db.connect();
// Log terminal
app.use(morgan('combined'));
// Path
app.use(express.static(path.join(__dirname, 'public/')));
app.engine('.hdb', engine({ extname: '.hdb' }));
app.set('view engine', '.hdb');
app.set('views', path.join(__dirname, 'resouces/V'));

// Connect to Route process
route(app);

app.listen(port, () => {
    console.log(`Listening in http://localhost:${port}`);
});
