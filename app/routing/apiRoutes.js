// Require Express.Router
const router = require('express').Router();
// Require the friends array/api/module
const friends = require('../data/friends');

// Create a GET route to send data from the friends API
router.get('/api/friends', (req, res) => {
	res.json(friends);
});

// Create a POST route to uppdate and return data from the friends API
router.post('/api/friends', (req, res) => {
	// Call the parseFriends function below
	// Pass the request body (user submission) to the function
	parseFriends(req.body);

	// Return the matched user info to be displayed in the modal window.
	res.json(friends[1]);
});

// This function handles comparing the user's form input to users stored in the friends API. It returns the user that is the closest match.
function parseFriends(userObj) {
	// Create a reference to the length of the items in the friends API/module
	const numFriends = friends.length;
	// Create an empty array used to store comparison scores from the loop below.
	let friendCompare = [];

	// Call the map method on the user's submitted scores against every user stored in the friends API. I felt using the for loop + mapping over the user's score kept the code a little cleaner and easier to read instead of nesting a for loop within another for loop.
	for (let friendId = 0; friendId < numFriends; friendId++) {
		// Set the difference to 0 for each iteration of the loop.
		let difference = 0;

		// Map over the current user's scores that were submited via the form
		userObj['scores[]'].map((item, index) => {
			//console.log(`userItem:${item}, userIndex:${index}`);
			//console.log(`friendItem:${friends[friendId].scores[friendId]}, friendId:${friendId}`);

			// Store a former user's score and the current user's score
			let userScore = item;
			let friendScore = friends[friendId].scores[friendId]

			// DO MATH!
			difference += Math.abs(userScore - friendScore);

		});

		// @todo Figure out how to store the comparison results here
		friendCompare[friendId] = difference;
	}
	console.log(friendCompare);
}

// Export the API Routes
module.exports = router;