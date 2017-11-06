const router = require('express').Router();
const friends = require('../data/friends');


router.get('/api/friends', (req, res) => {
	res.json(friends);
});

router.post('/api/friends', (req, res) => {
	res.json(friends[1]);
	//console.log(req.body['scores[]'])
	parseFriends(req.body)
});


function parseFriends(userObj) {
	const numFriends = friends.length;
	let friendCompare = [];

	for (let friendId = 0; friendId < numFriends; friendId++) {

		let difference = 0;

		userObj['scores[]'].map((item, index) => {
			//console.log(`userItem:${item}, userIndex:${index}`);
			//console.log(`friendItem:${friends[friendId].scores[friendId]}, friendId:${friendId}`);

			let userScore = item;
			let friendScore = friends[friendId].scores[friendId]

			difference += Math.abs(userScore - friendScore);

		});
		friendCompare[friendId] = difference;
	}
	console.log(friendCompare);
}

module.exports = router;