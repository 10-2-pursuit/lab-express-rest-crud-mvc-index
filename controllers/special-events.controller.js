const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require('../models/special-event.model.js');

specialEvents.get("/", (req, res) => {
    res.json(specialEventsArray);
});

// 404 Page not found
specialEvents.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = specialEvents;