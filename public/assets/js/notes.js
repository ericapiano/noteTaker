$('document').ready(() => {
  var runNoteQuery = function() {
    $.ajax({
      url: "/api/notes",
      method: "GET"
    }).then(function(noteData) {
      $(".card-body").empty();
      noteData.forEach(element => {
        var h = $('<h2>')
        var p = $('<p>');
        h.text(element.title)
        p.text(element.note)
        $('.card-body').append(h,p);
        
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