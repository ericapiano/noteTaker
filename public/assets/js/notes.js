$('document').ready(() => {
  var runNoteQuery = function() {
    $.ajax({
      url: "/api/notes",
      method: "GET"
    }).then(function(noteData) {
      $(".notesContent").empty();
      noteData.forEach(element => {
        var h = $('<h1>')
        var p = $('<p>');
        h.text(element.title)
        p.text(element.note)
        $('.notesContent').append(h,p);
        
      });

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
      runNoteQuery();
    })
  });

    
  runNoteQuery();
});