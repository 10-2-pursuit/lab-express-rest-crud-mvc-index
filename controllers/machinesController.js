const express = require("express");

const router = express.Router();

const machinesData = require("../models/machines");

router.get("/machines", (req, res) => {
    
    console.log("Send all machine data")

    res.send(machinesData);
})


module.exports = router;