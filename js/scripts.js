function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

function ticketPrice(movie, time, age) {
  if (selectedMovie === "old-movie")
  price = "$5";
} if (selectedAge === "child" || selectedAge === "senior") {
  price = "$5";
} if (selectedTime === "matinee") {
  price = "$5";
} else {
  price = "$10";
}
Ticket.prototype.fullTicket = function() {
  return this.movie + ", " + this.time + ", " + this.age;
}
$(document).ready(function() {
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var selectedMovie = $("select#new-movie").val();
    var selectedTime = $("select#new-time").val();
    var selectedAge = $("select#new-age").val();
    var newTicket = new Ticket(selectedMovie, selectedTime, selectedAge);
    var price = ticketPrice(movie, time, age);

    $(".price").append(newTicket.fullTicket() + price);

  });
});
