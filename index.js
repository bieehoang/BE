const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get('/home', (req,res) => {
	res.send('Hello') 
});

app.listen(port,() => {
	console.log(`Listening in ${port}`)
	})
