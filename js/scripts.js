function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

function ticketPrice(selectedMovie, selectedTime, selectedAge) {
  if (selectedMovie === "old-movie") {
    return "price = $5";
  } if (new-movie && selectedAge === "child" || selectedAge === "senior") {
      return "price = $5";
    } if (selectedTime === "matinee") {
      return "price = $5";
    } else {
      return "price = $10";
    }
};

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
    var price = ticketPrice(selectedMovie, selectedTime, selectedAge);

    $(".price").append(newTicket.fullTicket() + price);

  });
});
