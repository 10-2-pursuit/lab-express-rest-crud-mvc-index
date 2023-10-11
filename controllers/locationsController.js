const express = require("express"); 

const locations = express.Router();

const locationData = require("../models/location");
// Seperation of concerns 
//  Middleware above the routes!!!!!
//  a function that happens between a request and response

locations.get("/", (req, res) => {
 console.log("sending all location data")

 res.json(locationData);
});

locations.get(":/id", (req, res) => {
    const { id }= req.params;
    console.log("Hello look at me<<<_____________")
res.json(locationData[0]);
})

locations.post("/", (req, res) => {
    console.log(req)
    res.send("locations")
})
 

module.exports = locations;