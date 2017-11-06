const router = require('express').Router();
const fs = require('fs');


router.get('/', (req, res) => {
	fs.readFile(`./app/public/home.html`, function (err, htmlData) {
		console.log();
		res.send(htmlData.toString());
	})
});

router.get('/survey', (req, res) => {
	fs.readFile(`./app/public/survey.html`, function (err, htmlData) {
		console.log();
		res.send(htmlData.toString());
	})
});


module.exports = router;