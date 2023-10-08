const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT || 8181;

app.listen(PORT, () => {
    console.log(`WE ARE LIVE on port: ${PORT}`)
});