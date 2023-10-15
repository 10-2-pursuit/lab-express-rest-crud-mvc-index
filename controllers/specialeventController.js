const express = require("express");

const specialEventData = require("express");

const specialEvents = express.Router();

specialEvents.get("/specialEvents", (req, res) => {
    res.send(specialEventData);
})

module.exports = specialEvents; 