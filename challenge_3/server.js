const path = require('path');
const express = require ('express');
const app = express();
const mongooseDB = require('./database/index.js')

app.use(express.static('public'));



app.get('/', (req, res) => {
	console.log('Hello');
	res.end();
})


app.post('/', (req, res) => {
	console.log('World');
	res.end();
})

const PORT = 3003;

app.listen(PORT, console.log(`Listening on port ${PORT}`))
