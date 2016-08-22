//Business Logic
function Place(destination, date, landmarks, eats, notes) {
  this.destination = destination;
  this.date = date;
  this.landmarks = landmarks;
  this.eats = eats;
  this.notes = notes;
}

Place.prototype.tripID = function(){
  return this.destination + " " + this.date;
}

//User Interface Logic
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var destination = $("#destination").val();
    var date = $("#date").val();
    var landmarks = $("#landmarks").val();
    var eats = $("#eats").val();
    var notes = $("#notes").val();
    var newPlace = new Place(destination, date, landmarks, eats, notes);

    $("#list").append("<li class='placeName'>"+newPlace.tripID()+"</li>");


    $(".placeName").last().click(function() {
      $("#log").show();
      $("#log h2").text(newPlace.tripID());
      $(".landmarks").text(newPlace.landmarks);
      $(".eats").text(newPlace.eats);
      $(".notes").text(newPlace.notes);
    });
  });
});
