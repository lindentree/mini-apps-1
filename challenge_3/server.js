const path = require('path');
const express = require ('express');
const app = express();

app.use(express.static('public'));



app.get('/public', (req, res) => {
	console.log('Hello');
	res.end();
})

const PORT = 3003;

app.listen(PORT, console.log(`Listening on port ${PORT}`))
