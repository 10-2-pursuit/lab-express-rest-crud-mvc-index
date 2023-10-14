express = require("express")

const locationsController = require("./controllers/locations.controller.js")
const machinesController = require("./controllers/machines.controller.js")
const personsController = require("./controllers/persons.controller.js")
const plansController = require("./controllers/plans.controller.js")
const specialEventsController = require("./controllers/special-events.controller.js")


app = express()


app.use("/locations", locationsController)
app.use("/machines", machinesController)
app.use("/persons", personsController)
app.use("/plans", plansController)
app.use("/special-events", specialEventsController)


app.get("/", (req, res) => {
    res.send("Hello, world!")
})


module.exports = app
