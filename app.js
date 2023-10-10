const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello, world!");
})

const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");
const updatedLocationsDataController = require("./controllers/updatedLocations.controller");



app.use(locationsController);
app.use(machinesController);
app.use(personsController);
app.use(plansController);
app.use(specialEventsController);
app.use(updatedLocationsDataController);

app.use((req, res) => {
    res.status(404).send('Sorry, no page found!');
  });
  



module.exports = app;


















