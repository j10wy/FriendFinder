const path = require('path');
const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// Require HTML & API routes to app
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// require('./app/routing/htmlRoutes')(app);
// require('./app/routing/apiRoutes')(app);

app.listen(PORT, () => {
	console.log('Example app listening on port 3000!')
});