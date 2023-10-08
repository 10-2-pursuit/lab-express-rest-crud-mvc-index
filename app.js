const express = require("express");
const locations = require("./controllers/locations.controller");
const machines = require("./controllers/machines.controller");
const persons = require("./controllers/persons.controller");
const plans = require("./controllers/plans.controller");
const specialEvents = require("./controllers/special-events.controller");

const app = express();

app.use("/locations", locations)
app.use("/machines", machines)
app.use("/persons", persons)
app.use("/plans", plans)
app.use("/special-events", specialEvents)

app.get("/", (req, res) => {
    res.send("Hello, world!")
});



module.exports = app;