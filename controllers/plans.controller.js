const express = require("express")
const plans = express.Router()
const plansArray = require("../models/plans.model.js")

plans.get("/", (req,res) => {
    res.json(plansArray)
})

module.exports = plans