const machinesData = require("../models/machine.model");
const express = require("express");
const router = express.Router();

router.get("/machines", (req, res) => {
    res.send(machinesData);
});



module.exports = router;