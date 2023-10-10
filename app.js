const express = require("express")
const app = express()

const locationsController = require("./controllers/locations.controller.js")
app.use("/locations", locationsController)

const personsController = require("./controllers/people.controller.js")
app.use("/people", personsController)

const plansController = require("./controllers/plans.controller.js")
app.use("/plans", plansController)

const machinesController = require("./controllers/machines.controller.js")
app.use("/machines", machinesController)

const specialEventsController = require("./controllers/specialEvents.controller.js")
app.use("/special-events", specialEventsController)

module.exports = app