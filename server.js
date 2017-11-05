const path = require('path');
const fs = require('fs')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	fs.readFile(`./app/public/home.html`, function(err, htmlData) {
		console.log();
		res.send(htmlData.toString());
	})
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
});