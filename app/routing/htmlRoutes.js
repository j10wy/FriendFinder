const fs = require('fs');

function htmlRoutes(app) {
	app.get('/', (req, res) => {
		fs.readFile(`./app/public/home.html`, function (err, htmlData) {
			console.log();
			res.send(htmlData.toString());
		})
	});

	app.get('/survey', (req, res) => {
		fs.readFile(`./app/public/survey.html`, function (err, htmlData) {
			console.log();
			res.send(htmlData.toString());
		})
	});
}

module.exports = htmlRoutes;