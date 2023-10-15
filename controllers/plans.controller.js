const express = require("express");
const plans = express.Router();
const plansArray = require('../models/plan.model.js');

plans.get("/", (req, res) => {
    res.json(plansArray);
});

// 404 Page not found
plans.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = plans;