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

app.get("/locations/people", (req, res) => {
    const locationData = require("./models/location.model.js");
    const personData = require("./models/person.model.js");
    const organizedLocationData = [];

    locationData.forEach((location) => {
        const peopleAtLocation = personData.filter((person) => person.mainLocation === location.zip);

        const locationOfPeople = {
            street: location.street,
            city: location.city,
            state: location.state,
            zip: location.zip,
            people: peopleAtLocation,
        };

        organizedLocationData.push(locationOfPeople);
    })

    res.json(organizedLocationData);

})

app.use((req, res) => {
    res.status(404).send("404 - Sorry, no page found!")
})

module.exports = app;