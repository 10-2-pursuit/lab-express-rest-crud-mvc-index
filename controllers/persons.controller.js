const express = require("express")
const person = express.Router()
const personsArray = require("../models/person.model")

person.get("/",(req, res) => {
    res.json(personsArray)
})

module.exports = person