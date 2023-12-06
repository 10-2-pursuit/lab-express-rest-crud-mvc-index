const express = require("express");
const plansData = require("../models/plans");
const router = express.Router();

router.get("/plans", (req, res) => {
    res.send(plansData);
});

module.exports = router;