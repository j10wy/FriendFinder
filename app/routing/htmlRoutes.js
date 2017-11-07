// Require Express.Router
const router = require('express').Router();
// Require the file system module, which will read the data in the HTML files to be served to the browser.
const fs = require('fs');

// Handle GET requests to the / route. Send home.html.
router.get('/', (req, res) => {
	fs.readFile(`./app/public/home.html`, function (err, htmlData) {
		console.log();
		res.send(htmlData.toString());
	})
});

// Handle GET requests to the /survey route. Send survey.html.
router.get('/survey', (req, res) => {
	fs.readFile(`./app/public/survey.html`, function (err, htmlData) {
		console.log();
		res.send(htmlData.toString());
	})
});


module.exports = router;