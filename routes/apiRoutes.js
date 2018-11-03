var router = require("express").Router();
var connection = require("../db/connection");

// Get all tables that aren't waiting
router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbnotes) {
    res.json(dbnotes);
  });
});

// Save a new table
// Set isWaiting to true if there are already 5 or more "seated" tables
router.post("/api/notes", function(req, res) {


  
    connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
      if (err) throw err;

      // add 'title: req.body.title' AND 'note: req.body.note'


      res.json(result);
    });
  });


// Clear all tables
router.delete("/api/notes", function(req, res) {
  connection.query("DELETE FROM notes", function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
