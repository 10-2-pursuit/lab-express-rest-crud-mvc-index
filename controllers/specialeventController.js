const specialEventsData = require("../models/specialEvents");

const express = require("express");

const router = express.Router();


router.get("/specialEvents", (req, res) => {
    res.send(specialEventsData);
})

module.exports = router; 