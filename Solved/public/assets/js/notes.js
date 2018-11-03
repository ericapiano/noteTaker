
var runNoteQuery = function() {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then(function(noteData) {
    $("notesContent").append(noteData)

  console.log(noteData);
  });
  
};

$("#noteButton").on("click", function(event) {
  event.preventDefault();

  var newNote = {
    title: $("#title").val().trim(),
    note: $("#note").val().trim()
  }
  $.post("/api/notes", newNote).done(function(data){
    $("notesContent").append(data)
  })
});

  
runNoteQuery();
