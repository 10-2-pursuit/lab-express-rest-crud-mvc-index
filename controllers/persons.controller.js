const personsData = require("../models/person.model");
const express = require("express");
const router = express.Router();

router.get("/persons", (req, res) => {
    res.send(personsData);
});


module.exports = router;