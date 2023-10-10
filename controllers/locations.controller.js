const express = require("express")
const locations = express.Router()
const locationsArray = require("../models/locations.model.js")
const peopleArray = require("../models/persons.model.js")

locations.get("/", (req,res) => {
    res.json(locationsArray)
})

locations.get("/people", (req,res) => {
    const response = [...locationsArray]
    for(const location of response){
        if(location.people===null||response.people===undefined)
            location.people = []
        for(const person of peopleArray){
            if(location.zip===person.mainLocation){
                location.people.push(person)
            }
        }
    }
    res.json(response)
})

module.exports = locations