const express = require("express");

const locations = express.Router();

const locationsData = require("../models/location.model");

locations.get("/", (req, res) => {
    console.log("sending locations data")
    res.send(locationsData);
})

module.exports = locations