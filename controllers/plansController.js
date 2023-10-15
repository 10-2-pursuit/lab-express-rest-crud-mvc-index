const express = require("express");
const planData = require("../models/plans");
const plans = express.Router();

plans.get("/plans", (req, res) => {
    res.send(planData);
});

module.exports = plans;