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
app.get('/home', (req,res) => {
  res.sendFile(`${__dirname}/public/index.html`);
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


//create weather route
app.get('/weather', (req,res) => { // will update with request to DarkSky API server
  const weatherData = searchToWeather(req.query.data);
  console.log('weatherData',weatherData);
  res.send(weatherData);
});


//search DB
let weatherArr = [];
function searchToWeather(query) {
  const weatherData = require('./data/weatherdata.json');
  for (let i = 0; i < weatherData.daily.length; i++){
    new Weather (weatherData.daily[i]);
  }
  weatherArr.search_query = query;
  return weatherArr;
}

//weather object constructor
function Weather(weatData) {
  this.forcast = weatData.summary;
  this.time = new Date(weatData.data[0].time * 1000);
  weatherArr.push(this)
}


// open port and report on console
app.listen(PORT, () => {
  console.log(`port ${PORT} open`);
});