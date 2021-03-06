var express = require("express");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Sets up route middleware
// Use the apiRoutes file for any apiRoutes
// Use the htmlRoutes file for all other routes
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});