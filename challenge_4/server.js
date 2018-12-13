const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public/index.html'));
// });
//app.get('/', (req, res) => res.send('Hello World'));
app.listen(PORT, () => console.log(`Connect4 app listening on port ${PORT}!`));

