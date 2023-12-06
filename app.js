const express = require('express');
const app = express();

const locationData = require("./models/locations");
const machineData = require("./models/machines");
const personData = require("./models/persons");
const planData = require("./models/plans");
const specialEventData = require("./models/specialEvents");



app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/locations', (req, res) => {
    res.send(`${locationData}`);
    console.log(locationData);
});

app.get("/machines", (req, res) => {
    res.send(`${machineData}`);
    console.log(machineData);
});

app.get("/persons", (req, res) => {
    res.send(`${personData}`);
    console.log(personData);
});

app.get("/plans", (req, res) => {
    res.send(`${planData}`);
    console.log(planData);
});
app.get("/specialEvents", (req, res) => {
    res.send(`${specialEventData}`);
    console.log(specialEventData);
});

app.get('/404', (req, res) => {
    res.status(404).json({error: "no page found"})
});