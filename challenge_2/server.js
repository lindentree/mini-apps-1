const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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
  console.log(req.query.data)
  //res.send('working');
  res.end();
});






const PORT = 3000; 
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

