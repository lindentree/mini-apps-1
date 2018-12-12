const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './client')));

app.get('/csv', (req, res) =>{
  res.redirect('/');
  console.log(req.query.data)
  res.statusCode = 200;
  res.end();
});

app.post('/csv', (req, res) =>{
  res.statusCode = 201;
  res.redirect('/');

  var string = req.body.data;

  recursiveCSVParser(JSON.parse(string));
  res.end();
});

var parsingInput = new Promise((resolve, reject)=>{});

var recursiveCSVParser = (object) => {
	var CSVstring = "";
	var columnHeaders = Object.keys(object)
	console.log(columnHeaders);
	// if (object.children.length === 0) {
	// 	return CSVstring;
	// }

}



const PORT = 3000; 
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

