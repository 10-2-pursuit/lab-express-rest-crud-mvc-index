// DEPENDENCIES
const express = require('express');
const locations = require('./controllers/locationsController.js');
const machines = require('./controllers/machinesController.js');
const persons = require('./controllers/personsController.js');
const plans = require('./controllers/plansController.js');
const specialEvents = require('./controllers/special-eventsController.js');
const people = require('./controllers/peopleController.js');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use('/locations', locations);
app.use('/machines', machines);
app.use('/persons', persons);
app.use('/plans', plans);
app.use('/special-events', specialEvents);
app.use('/locations/people', people);

// ROUTES
app.get('/', (req, res) => {
	res.send('Hello, World! Welcome to Express Rest CRUD MVC Index Lab');
});

// 404 PAGE
app.get('*', (req, res) => {
	res.status(404).json({ error: 'Sorry, no page found!' });
});

// EXPORT
module.exports = app;
