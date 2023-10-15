const express = require("express");
const app = express();
app.use(express.json());

// const locationData = require("./models/location");
// const machineData = require("./models/machine");
// const personData = require("./models/person");
// const planData = require("./models/plan");
// const specialEventData = require("./models/specialEvent");




// app.get("/location", (req, res) => {
//     // res.send(`${locationData}`);
//     console.log(locationData);
// });

// app.get("/machine", (req, res) => {
//     res.send(`${machineData}`);
// });

// app.get("/person", (req, res) => {
//     res.send(`${personData}`);
// });

// app.get("/plan", (req, res) => {
//     res.send(`${planData}`);
// });
// app.get("/specialEvent", (req, res) => {
//     res.send(`${specialEventData}`);
// });


module.exports = app;