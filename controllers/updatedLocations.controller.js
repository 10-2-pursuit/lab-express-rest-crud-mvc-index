
const locationsData = require("../models/location.model");
const personsData = require("../models/person.model");
const router = require("express").Router();
const express = require("express");
function addPeopleToLocation(locationsData, personsData) {

  const updatedLocationsData = [...locationsData];

  for (let location of updatedLocationsData) {
    location.people = []; 
    for (let person of personsData) {
      if (location.zip === person.mainLocation) {
        location.people.push(person);
      }
    }
  }

  return updatedLocationsData; 
}

router.get("/location/people", (req, res) => {
    const updatedLocationsData = addPeopleToLocation(locationsData, personsData);
    res.json(updatedLocationsData);
  });
  
  module.exports = router;

