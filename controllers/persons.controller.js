const express = require("express");
const persons = express.Router();
const personsData = require("../models/person.model");

persons.get("/", (req, res) => {
    console.log("Sending all location data.")
    res.json(personsData);
})

module.exports = persons;