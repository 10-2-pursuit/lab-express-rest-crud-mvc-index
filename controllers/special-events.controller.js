const express = require("express")

const special_eventsModel = express.Router();
const special_eventsModelData = require("../models/special-event.model")

special_eventsModel.get("/", (req, res) => {
    res.json(special_eventsModelData)
});

module.exports = special_eventsModel;