const express = require("express")
const specialEvents = express.Router()
const specialEventsArray = require("../models/specialEvents.model.js")

specialEvents.get("/", (req,res) => {
    res.json(specialEventsArray)
})

module.exports = specialEvents