const express = require("express")

const locationModel = express.Router();
const locationModelData = require("../models/location.model")

locationModel.get("/", (req, res) => {
    res.json(locationModelData)
});

module.exports = locationModel;