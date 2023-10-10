const plansData = require("../models/plan.model");
const express = require("express");
const router = express.Router();


router.get("/plans", (req, res) => {
    res.send(plansData);
})


module.exports = router;