const express = require("express");

const specialEvents = express.Router();

const specialEventsData = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
    console.log("sending all special-event data")
    res.send(specialEventsData);
})



module.exports = specialEvents