const express = require("express");

const plans = express.Router();

const plansData = require("../models/plan.model");

plans.get("/", (req, res) => {
    console.log("sending all plan data")
    res.send(plansData);
})


module.exports = plans