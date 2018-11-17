var router = require("express").Router();
var connection = require("../db/connection");

// Get all the notes submitted
router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbnotes) {
    res.json(dbnotes);
  });
});

// Add a new note to the end of list of existing notes
router.post("/api/notes", function(req, res) {
  
    connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
      if (err) throw err;

      res.json(result);
    });
  });


// to delete a note from the list
router.delete("/api/notesDelete", function(req, res) {
  connection.query("DELETE FROM notes WHERE id = ?", req.body.id, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
