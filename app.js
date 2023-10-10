const express = require("express")
const locations = require("./models/locations.model.js")
const persons = require("./models/persons.model.js")
const plans = require("./models/plans.model.js")
const machines = require("./models/machines.model.js")
const specialEvents = require("./models/specialEvents.model.js")

const app = express()

app.get("/", (req,res) => {
    res.send("Hello, world!")
})

app.get("/locations", (req,res) => {
    res.send(locations)
})

app.get("/persons", (req,res) => {
    res.send(persons)
})

app.get("/plans", (req,res) =>{
    res.send(plans)
})

app.get("/machines", (req,res) => {
    res.send(machines)
})

app.get("/specialEvents", (req,res) => {
    res.send(specialEvents)
})

module.exports = app