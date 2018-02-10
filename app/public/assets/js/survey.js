function popModal(data) {
  // display winner in modal
  $("#winnerMessage").text(data.name);
  $("#winnerPic").attr("src", data.photo);
  // display modal
  $("#winnerModal").show();
}

// On submit button click
$("#uidSubmit").on("click", function(event) {
  event.preventDefault();
  // variable to store scores
  var scores = [];
  // push scores
  for (var i = 1; i < 11; i++) {
    scores.push(parseInt($("#q" + i).val()));
  }
  // create data object
  var newFriend = {
    name: $("#uidName").val().trim(),
    photo: $("#uidPhoto").val().trim(),
    scores: scores
  };
  // Post data and return the winner
  $.post("/api/friends", newFriend, function(data) {
    // show data
    popModal(data);
    // clear form
    $("#uidName").val("");
    $("#uidPhoto").val("");
    for (var i = 1; i < 11; i++) {
      $("#q" + i).val("3");
    }
  });
});


// Close Modal by clicking X
$(".modal").on("click", ".close", function() {
  $(".modal").hide();
});