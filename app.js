const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("Hello, world!")
})

const locationsController = require("./controllers/locations.controller.js")
app.use("/locations", locationsController)

const personsController = require("./controllers/persons.controller.js")
app.use("/persons", personsController)

const plansController = require("./controllers/plans.controller.js")
app.use("/plans", plansController)

const machinesController = require("./controllers/machines.controller.js")
app.use("/machines", machinesController)

const specialEventsController = require("./controllers/special-events.controller.js")
app.use("/special-events", specialEventsController)

app.get("*", (req,res) => {
    res.status(404).json({error: "Sorry, no page found!"})
})

module.exports = app