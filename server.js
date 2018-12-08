'use strict';

// application dependencies
const express = require('express');
const cors = require('cors');

// application constants
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// // establish static directory
// app.use(express.static('./public'));

// // create home route
// app.get('/home', (req,res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });

// create location route
app.get('/location', (req,res) => { // will update with request to GoogleAPI server
  const locationData = searchToLatLong(req.query.data);
  if (!locationData.status) {
    res.send(locationData);
  } else {
    res.status(500).send('Sorry, something went wrong');
    console.log('error response', res.statusMessage);
  }
});

// search DB
function searchToLatLong(query) {
  const geoData = require('./data/locdata.json');
  let location = {};
  if (geoData.status ==='OK') {
    location = new Location (geoData.results[0]);
    location.search_query = query;
  } else {
    location = {
      status: 500,
      responseText: "Sorry, something went wrong"
    };
  }
  console.log('location',location);
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
function searchToWeather(query) {
  const weatherData = require('./data/weatherdata.json');
  const weatherArr = [];
  let weather = new Weather (weatherData.daily);
  weather.search_query = query;
  weatherArr.push(weather);
  return weatherArr;
}

// weather object constructor
function Weather(weatData) {
  this.forecast = weatData.summary;
  this.time = new Date(weatData.data[0].time * 1000).toDateString();
}

// open port and report on console
app.listen(PORT, () => {
  console.log(`port ${PORT} open`);
});