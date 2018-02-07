// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// Don't need path here. Just in routing files.
// var path = require("path");

// Setup Express
var app = express();
var PORT = process.env.PORT || 3000;

// Handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Implement static handling later? NO EXTERNAL CSS/JS
app.use(express.static("app/public"));

// require routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
