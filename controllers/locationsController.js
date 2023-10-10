const express = require('express');

const locations = express.Router();

const locationsData = require('../models/locationModel.js');

locations.get('/', (req, res) => {
	res.json(locationsData);
});

module.exports = locations;
