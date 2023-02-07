import express from 'express';
import { engine, create } from 'express-handlebars';
import morgan from 'morgan';

import path from 'path';
import { fileURLToPath } from 'url';

import route from './routes/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public/')))
app.engine('.hdb', engine(
	{extname: '.hdb'}
));
app.set('view engine', '.hdb')
app.set('views', path.join(__dirname,'resouces/views'))

// Route 
route(app)

app.listen(port,() => {
	console.log(`Listening in http://localhost:${port}`)
	})