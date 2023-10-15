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

app.get("/person", (req, res) => {
    res.send(`${personData}`);
});

app.get("/plans", (req, res) => {
    res.send(`${planData}`);
});
app.get("/specialEvents", (req, res) => {
    res.send(`${specialEventData}`);
});

app.get('/404', (req, res) => {
    res.status(404).json({error: "no page found"})
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
