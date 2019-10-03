// Routes
// =============================================================


//API Friends
app.get("/api/friends", function (req, res) {
    res.json(table);
});

// Capturing data from survey
app.post("/survey", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    friends.push(newFriend)

});

//Capturing data from survey questions
$("#makeres").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    id: $("#newid").val().trim(),
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    phone: $("#phone").val().trim()
  };

//Saving data to friends.js file, performing match and displaying results
  $.post("/make", newReservation)
    .then(function(data) {
      console.log("add.html", data);  
      if (data === "Added to the Waiting List") {
        alert("Sorry...You have been added to the Waiting List");
      }
      else {alert("Adding new reservation...")}
    });
});
