const express = require("express");

const person = express.Router();

const personData = require("../models/person");

person.get("/", (req, res) => {

    console.log("send all person data")

    res.json(personData);
})

module.exports = person; 