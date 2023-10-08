// DEPENDENCIES
const express = require('express');
const equipment = require('./controllers/machinesController.js');
const locations = require('./controllers/locationsController.js');
const people = require('./controllers/personsController.js');
const plans = require('./controllers/plansController.js');
const specialEvents = require('./controllers/special-eventsController.js');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use('/locations', locations);

// ROUTES
app.get('/', (req, res) => {
	res.send('Hello, World! Welcome to Express Rest CRUD MVC Index Lab');
});

// EXPORT
module.exports = app;
