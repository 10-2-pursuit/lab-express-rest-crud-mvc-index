// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
app.get('/', (req, res) => {
	res.send('Welcome to Express Rest CRUD MVC Index Lab');
});

// EXPORT
module.exports = app;
