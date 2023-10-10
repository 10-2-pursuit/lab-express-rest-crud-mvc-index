const express = require("express");
const plans = express.Router();
const plansData = require("../models/plan.model");

plans.get("/", (req, res) => {
    console.log("Sending all location data.")
    res.json(plansData);
})

module.exports = plans;