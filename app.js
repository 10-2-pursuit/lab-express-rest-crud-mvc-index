const express = require("express");
const locations = require("./controllers/locations.controller");
const equipment = require("./controllers/machines.controller");
const people = require("./controllers/persons.controller");
const plans = require("./controllers/plans.controller");
const specialEvents = require("./controllers/special-events.controller");

const app = express();
app.use("/locations", locations);
app.use("/machines", equipment)
app.use("/equipment", equipment)
app.use("/people", people)
app.use("/persons", people)
app.use("/plans", plans)
app.use("/special-events", specialEvents)

app.get("/", (req, res) => {
    res.send("Hello, world!")
});

app.get("*", (req, res) => {
    res.status(404).json({error: "no page found "})
})


module.exports = app;