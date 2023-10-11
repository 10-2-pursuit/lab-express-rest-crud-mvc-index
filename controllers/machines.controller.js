const express = require("express")

const machinesModel = express.Router();
const machinesModelData = require("../models/machine.model");

machinesModel.get("/", (req, res) => {
    res.json(machinesModelData)
});

module.exports = machinesModel;