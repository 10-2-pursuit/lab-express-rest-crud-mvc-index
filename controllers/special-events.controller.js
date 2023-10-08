const express = require("express");

const specialEvents = express.Router();

const specialEventsData = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
    console.log("sending all special events data");
    res.json(specialEventsData);
})

module.exports = specialEvents;