// function to determine absolute value difference
function diff(a,b) {
	return Math.abs(a-b);
}

// funciton to loop through and compare numbers
function loop(mine, friends) {
	// variable to store scores & total
	var diffs = [];
	var total;
	// loop through each number to get total difference
	for (var i = 0; i < mine.length; i++) {
		// run absolute value function
		diffs.push(diff(mine[i], friends[i]));
	}
	// add up values in array
	total = diffs.reduce((a,b) => a+b, 0);
	return total;
}

var compare = function (mine, friends) {
	// does Number act as parseFloat or Int?
	var myScores = mine.map(Number);
	var trackMatch = [];
	
	for (var i = 0; i < friends.length; i++) {
		// convert current comparison to numbers
		var scores = friends[i].scores.map(Number);
		// run loop function & push into score tracker
		trackMatch.push(loop(myScores, scores));
	}
	// store the winner!
	var winner = trackMatch.reduce((a, b) => Math.min(a, b));
	// return the index of the winner
	return trackMatch.indexOf(winner);
}


module.exports = compare;