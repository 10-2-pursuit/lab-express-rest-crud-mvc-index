const express = require("express");

const persons = express.Router();

const personData = require("../models/persons");

persons.get("/", (req, res) => {

    console.log("send all person data")

    res.json(personData);
})

module.exports = persons; 