const express = require("express");

const machines = express.Router();

const machinesData = require("../models/machine");

machines.get("/", (req, res) => {
    
    console.log("Send all machine data")

    res.json(machinesData);
})


module.exports = machines;