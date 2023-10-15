const express = require("express");
const locations = express.Router();
const locationsArray = require('../models/location.model.js');

locations.get("/", (req, res) => {
    res.json(locationsArray);
});

// 404 Page not found
locations.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = locations;