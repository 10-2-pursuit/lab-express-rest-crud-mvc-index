const express = require('express');

const specialEvents = express.Router();

const specialEventsData = require('../models/special-eventModel.js');

specialEvents.get('/', (req, res) => {
	res.json(specialEventsData);
});

module.exports = specialEvents;
