const express = require("express");

const plansModel = express.Router();
const plansModelData = require("../models/plan.model");

plansModel.get("/", (req, res) => {
    res.json(plansModelData)
});

module.exports = plansModel;