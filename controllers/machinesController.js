const express = require('express');

const machines = express.Router();

const machinesData = require('../models/machineModel.js');

machines.get('/', (req, res) => {
	res.json(machinesData);
});

module.exports = machines;
