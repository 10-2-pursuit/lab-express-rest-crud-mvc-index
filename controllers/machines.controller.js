const express = require("express");
const machines = express.Router();
const machinesArray = require('../models/machine.model.js');

machines.get("/", (req, res) => {
    res.json(machinesArray);
});

// 404 Page not found
machines.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = machines;