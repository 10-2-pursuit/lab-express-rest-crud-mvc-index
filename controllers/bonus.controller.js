const express = require("express")

const peopleByLocation = express.Router();
const location = require("../models/location.model")
const people = require("../models/person.model")

const organizedByLocation = location.map(location=> {
    const { street, city, state, zip } = location;
    const peopleAtLocation = people.filter(person => person.mainLocation === zip);
    return {
        street,
        city,
        state,
        zip,
        people: peopleAtLocation
    };
});

peopleByLocation.get("/", (req, res) => {
    res.json(organizedByLocation)
});

module.exports = peopleByLocation;