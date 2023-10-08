const specialEventsData  = require("../models/special-event.model");
const express = require("express");
const router = express.Router();


router.get("/special-events", (req, res) => {
    res.send(specialEventsData);
})


module.exports = router;