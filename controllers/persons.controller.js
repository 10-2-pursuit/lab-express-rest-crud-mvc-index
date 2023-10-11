const express = require("express") 

const personsModel = express.Router();
const personsModelData = require("../models/person.model")

personsModel.get("/", (req, res) => {
    res.json(personsModelData)
});

module.exports = personsModel;