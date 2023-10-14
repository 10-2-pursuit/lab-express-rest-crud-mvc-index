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

locations.get(":/index", (req, res) => {
    const { index }= req.params;
    console.log("Hello look at me<<<_____________")
    if (locationData[index]){
        res.json(locationData[index])
    } else {
        res.status(404).send("No location at that index");
    }

})

locations.post("/", (req, res) => {
    console.log("post route")
    console.log(req.body);
   locationData.push({name: "newlocation", awesome:true })
    res.status(200).json(locationData[locationData.length - 1]);
    res.send("locations")
})
 

module.exports = locations;