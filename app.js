const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

app.get("/", (request, response) => {
    response.send("Hello, world!");
});

app.use("/persons", personsController);
app.use("/machines", machinesController);
app.use("/locations", locationsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404);
});

module.exports = app;