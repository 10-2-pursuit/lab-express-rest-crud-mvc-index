// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
app.get('/', (req, res) => {
	res.send('Hello, World! Welcome to Express Rest CRUD MVC Index Lab');
});

// EXPORT
module.exports = app;
