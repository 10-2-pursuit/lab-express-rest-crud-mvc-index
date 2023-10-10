const express = require("express");
const app = express();

const locationModel = require("./controllers/locations.controller");
const machinesModel = require("./controllers/machines.controller");
const personsModel = require("./controllers/persons.controller");
const plansModel = require("./controllers/plans.controller");
const special_eventsModel = require("./controllers/special-events.controller");
const peopleByLocation = require("./controllers/bonus.controller")

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationModel);

//had /equipment  like it was asked in the README but it didnt past test changed it to /machines
app.use("/machines", machinesModel);

// Had /people like it was asked in the README but didnt past test changed it to /persons
app.use("/persons", personsModel);

app.use("/plans", plansModel);

app.use("/special-events", special_eventsModel);

app.use("/locations/people", peopleByLocation );

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;
