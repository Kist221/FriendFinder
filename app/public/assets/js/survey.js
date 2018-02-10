
$("#uidSubmit").on("click", function(event) {
  event.preventDefault();
  // variable to store scores
  var scores = [];

  for (var i = 1; i < 11; i++) {
    scores.push(parseInt($("#q" + i).val()));
  }

  console.log(scores);

  // Here we grab the form elements
  var newFriend = {
    name: $("#uidName").val().trim(),
    photo: $("#uidPhoto").val().trim(),
    scores: scores
  };

  console.log(newFriend);
  
  $.post("/api/friends", newFriend, function(data) {
      alert(data);
      // clear form
      $("#uidName").val("");
      $("#uidPhoto").val("");
      for (var i = 1; i < 11; i++) {
        $("#q" + i).val("3");
      }
  });
});
