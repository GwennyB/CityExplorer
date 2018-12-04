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

// create location route
app.get('/location', (req,res) => { // will update with request to GoogleAPI server
  const locationData = searchToLatLong(req.query.data);
  console.log('locationData',locationData);
  res.send(locationData);
});

// search DB
function searchToLatLong(query) {
  const geoData = require('./data/locdata.json');
  // const addressCompTypes = ['locality'];
  // geoData.values.forEach(element => {

  // })
  // figure out which index in data array matches the search
  const location = new Location (geoData.results[0]);
  location.search_query = query;
  return location;
}

// location object constructor
function Location(data) {
  this.formatted_query = data.formatted_address,
  this.latitude = data.geometry.location.lat,
  this.longitude = data.geometry.location.lng
}

// open port and report on console
app.listen(PORT, () => {
  console.log(`port ${PORT} open`);
});