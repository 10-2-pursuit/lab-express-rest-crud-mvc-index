const express = require("express");
const persons = express.Router();
const personsArray = require('../models/person.model.js');

persons.get("/", (req, res) => {
    res.json(personsArray);
});

// 404 Page not found
persons.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = persons;