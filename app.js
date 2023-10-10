const express = require("express");

const locations = require("./models/location");
const machines = require("./models/machine");
const person = require("./models/person");
const plan = require("./models/plan");
const specialEvent = require("./models/specialEvent");



const app = express();

app.use("/locations", locations)


app.get("/", (req, res) => {
    res.send(`Hello World!`);
})

app.get("*", (req, res) => {
    res.status(404).json({error: "no page found"})
})

module.exports = app;