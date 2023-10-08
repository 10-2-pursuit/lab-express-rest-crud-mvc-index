const express = require("express");
const specialEvents = express.Router();
const specialEventsData = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
    console.log("Sending all location data.")
    res.json(specialEvents);
})

module.exports = specialEvents;