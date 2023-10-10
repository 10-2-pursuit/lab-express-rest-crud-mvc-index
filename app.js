const express = require("express");
const locations = require("./controllers/locations.controller.js");
const persons = require("./controllers/persons.controller.js");
const machines = require("./controllers/machines.controller.js");
const plans = require("./controllers/plans.controller.js");
const specialEvents = require("./controllers/special-events.controller.js");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.use("/locations", locations);

app.use("/persons", persons);

app.use("/machines", machines);

app.use("/plans", plans);

app.use("/special-events", specialEvents)

module.exports = app;