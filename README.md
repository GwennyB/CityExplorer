# CityExplorer
Lab 06: Node, npm, Express, and APIs


Feature #1: Obtain latitude and longitude

Estimate of time needed to complete: 45min

Start time: 9:30am

Finish time: 10:53am

Actual time needed to complete: 1:23


Feature #2: Retrieve weather information

Estimate of time needed to complete: 45min

Start time: _____

Finish time: _____

Actual time needed to complete: _____


Feature #3: Handle errors when they occur

Estimate of time needed to complete: 45min

Start time: _____

Finish time: _____

Actual time needed to complete: _____


https://zubucity.herokuapp.com/


**Author**: Gwen Zubatch
**Version**: 1.1.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This server application accepts a location (city) query string from a client and returns an object with map, weather, entertainment, and other API-sourced data about that location.

## Getting Started
Build an Express server, and load CORS and DOTENV. Use PORT for port (default: 3000). Create '/location' route to accept and process query from client.

## Architecture
CORS: This application relies on API sources for which CORS provides access management. Aquire API keys from:
  <!-- add API links here -->
API keys may not be published; load DOTENV and include key vars in .env. 
Port uses environment variable PORT (default: 3000); set PORT in .env (if using a 3rd-party domain host that sets the port).
Location route (/location) request object from client-side AJAX GET request. Response is constructed "location" object containing:
  <!-- update location object properties here -->
  search_query:
  formatted_query:
  latitude:
  longitude:
Weather route (/weather) requests object from same client-side AJAX GET request. Response is constructed in "weather' object containing:
  <!-- update weather object properties here -->
  Forcast: 
  Time:

## Change Log
12-04-2018 10:53am - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
Collaborative effort by:
  Clarice Costello: https://github.com/c-costello
  Gwen Zubatch: https://github.com/GwennyB
  