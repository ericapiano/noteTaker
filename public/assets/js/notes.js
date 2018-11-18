$('document').ready(() => {
  var runNoteQuery = function() {
    $.ajax({
      url: "/api/notes",
      method: "GET"
    }).then(function(noteData) {
      $(".card-body").empty();
      noteData.forEach(element => {
        var card = $('<div>').addClass('card')
        var h = $('<h2 class="my-h2">');
        var p = $('<p>');
        var b = $('<button>');
        var i = $('<i class="fas fa-trash-alt fa-2x">');
        var cardBody = $('<div>').addClass('card-body noteText');
{/* <i class="fas fa-trash-alt float-right text-danger delete-note"></i> */}



        h.text(element.title)
        p.text(element.note)
        // <i class="fas fa-trash-alt"></i>
        // b.attr("class", "fas fa-trash-alt float-right text-danger delete-note")
        b.attr("data-value", element.id)
        b.attr("class", "delete-button")
        b.append(i);
        cardBody.append(h,p,b);
        card.append(cardBody);

        $('#notesWrapper').append(card);

        
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



  // Delete the clicked note

$(document).on('click', '.delete-button', function (event) {
event.preventDefault();
var note = $(this).attr("data-value")
console.log(note)

$.ajax({
  url: "/api/notesDelete",
  method: "DELETE",
  data: {id: note}
}).then(function() {
  location.reload();
});


});

    
  runNoteQuery();
});
