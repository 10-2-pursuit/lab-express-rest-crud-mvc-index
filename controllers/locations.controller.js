const express = require("express");
const app = express();
const router = express.Router();
const locationsData = require("../models/location.model");


// Route to send locations without people
router.get ("/locations", (req, res) => {
    res.send(locationsData);
})


module.exports = router;