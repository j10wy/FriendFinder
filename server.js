const path = require('path');
const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
// Add HTML & API routes to app
const htmlRoutes = require('./app/routing/htmlRoutes')(app);
const apiRoutes = require('./app/routing/apiRoutes')(app);

app.listen(PORT, () => {
	console.log('Example app listening on port 3000!')
});