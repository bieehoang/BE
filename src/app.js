import { engine, create } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const port = 4000;

app.use(morgan('combined'));
app.engine('.hdb', engine({extname: '.hdb'}))
app.set('view engine', '.hdb')
app.set('views', path.join(__dirname,'resouces/views'))
console.log(__dirname)
app.get('/', (req,res) => {
	res.render('home') 
});

app.listen(port,() => {
	console.log(`Listening in ${port}`)
	})
