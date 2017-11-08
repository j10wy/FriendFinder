// Require Express
const express = require('express');
// Initialize Express
const app = express();

// Require bodyParser middleware
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
// Use the express.static built-in middleware to serve static files
app.use(express.static('app/public/assets'));

// Call Heroku's environment variable, if false use port 3000
const PORT = process.env.PORT || 3000;



// Require HTML & API middleware.
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// Start the server and listen for requests.
app.listen(PORT, () => {
	console.log('Listening on port 3000!')
});