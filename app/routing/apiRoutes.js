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
	// Store the returned value of parseFriends by padding the request body (user submission) as an argument
	;

	const bestFriend = parseFriends(req.body);
	// Return the matched user info to be displayed in the modal window.
	res.json(bestFriend);
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
			let friendScore = friends[friendId].scores[index]

			// DO MATH!
			difference += Math.abs(userScore - friendScore);

		});

		// Push the ID (array item number) of the friends from the database along with the difference of the score values.
		console.log(friendId, friends[friendId].name, difference)
		friendCompare.push([friendId, difference]);
	}

	// Sort the friendCompare array by difference in score from the user
	let sortedFriendsCompare = friendCompare.sort(function (friendA, friendB) {
		// subtract A from B to sort the friends in ascending order by smallest difference.
		return  friendA[1] - friendB[1];
	});

	// Return the friend object in the zero index of the sorted array. This is the friend with the closest score to the current user.
	return friends[sortedFriendsCompare[0][0]];
}

// Export the API Routes
module.exports = router;