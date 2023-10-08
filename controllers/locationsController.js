const locations = express.Router();

const locationData = require("../models/location");


app.get("/locations", (req, res) => {
    const indexOfArray = parseInt(req.params.indexOfArray);

    if (isNaN(indexOfArray) || indexOfArray < 0 || indexOfArray >= locationData.length){
        res.status(404).send(`Sorry, that location cannot be found at /location/${indexOfArray}`)
    } else {
        const location = locationData
    }
})