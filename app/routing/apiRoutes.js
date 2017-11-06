const fs = require('fs');
const friends = require('../data/friends');

function apiRoutes(app) {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	});

	app.post('/api/friends', (req, res) => {
		res.json(friends[1]);
	});
}

module.exports = apiRoutes;