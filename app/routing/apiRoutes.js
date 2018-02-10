// LOAD DATA
var friends = require("../data/friends.js");
var compare = require("../data/fun.js");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    // store results of comparing function
    var match = compare(req.body.scores, friends);
    // push new friend into DB
    friends.push(req.body);
    // send back the winner
    res.json(friends[match]);
  });
};