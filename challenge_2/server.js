const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './client')));








const PORT = 3000; 
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

