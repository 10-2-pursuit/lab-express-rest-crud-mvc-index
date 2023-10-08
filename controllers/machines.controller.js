const express = require("express");
const machines = express.Router();
const machinesData = require("../models/machine.model");

machines.get("/", (req, res) => {
    console.log("Sending all machines data.")
    res.json(machinesData);
})

module.exports = machines;