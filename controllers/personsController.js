const express = require('express');

const persons = express.Router();

const personsData = require('../models/personModel.js');

persons.get('/', (req, res) => {
	res.json(personsData);
});

module.exports = persons;
