const express = require("express");

const router = express.Router();

const personsData = require("../models/persons");

router.get("/persons", (req, res) => {

    res.send(personsData);
})

module.exports = router; 