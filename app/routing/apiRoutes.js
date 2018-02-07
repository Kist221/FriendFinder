// LOAD DATA
var friends = require("../data/friends.js");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/new", function(req, res) {
    if (true) {
      console.log(req.body);
      friends.push(req.body);
      res.json(true);
    }
    else {
      res.json(false);
    }
  });
};
