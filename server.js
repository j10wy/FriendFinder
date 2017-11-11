const path = require('path');
const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.get('/', (req, res) => {
	fs.readFile(`./app/public/home.html`, function(err, htmlData) {
		console.log();
		res.send(htmlData.toString());
	})
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
});