const express = require("express")
const persons = express.Router()
const peopleArray = require("../models/person.model.js")

persons.get("/", (req,res) => {
    res.json(peopleArray)
})

module.exports = persons