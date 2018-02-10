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
    // console.log(req.body.scores);

    compare(req.body.scores, friends);

    friends.push(req.body);
        // res.json(match);
  });
};