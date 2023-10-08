const express = require("express");

const plans = express.Router();

const plansData = require("../models/plan.model");

plans.get("/", (req, res) => {
    console.log("sending all plans data");
    res.json(plansData);
})

module.exports = plans;