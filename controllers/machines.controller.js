const express = require("express");

const machines = express.Router();

const machinesData = require("../models/machine.model");

machines.get("/", (req, res) => {
    console.log(`sending all machine data`)
    res.send(machinesData);
})


module.exports = machines;