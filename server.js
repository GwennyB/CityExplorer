'use strict';

// application dependencies
const express = require('express');
const cors = require('cors');

// get project environment variables
require('dotenv').config();
// require('API_URL').config();

// application constants
const PORT = process.env.port || 3000;
const app = express();

app.use(cors());

// establish static directory
app.use(express.static('./public'));

// create test route
app.get('/test', (req,res) => {
  res.status(200).send('msg from the server');
});


// open port and report on console
app.listen(PORT, () => {
  console.log(`port ${PORT} open`);
});