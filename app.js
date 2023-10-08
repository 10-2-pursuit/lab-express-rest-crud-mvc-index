const express = require("express");

const locations = require("./models/location");
const machines = require("./models/machine");
const person = require("./models/person");
const plan = require("./models/plan");
const specialEvent = require("./models/specialEvent");



const app = express();


app.get("/", (req, res) => {
    res.send(`Hello World!`);
})

module.exports = app;