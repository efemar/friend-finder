// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Fernando",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            3,
            2,
            1,
            1,
            4,
            2,
            5,
            3,
            2,
            5
          ]
      }
    ];



// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


//API Friends
app.get("/api/friends", function (req, res) {
    res.json(table);
});

// Create New Reservations - takes in JSON input
app.post("/survey", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    friends.push(newFriend)

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


//Capturing data from survey questions
$("#submit-survey").on("click", function(event) {
    event.preventDefault();
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      score: [$("#question1").val().trim(), $("#question2").val().trim(),
      $("#question3").val().trim(), $("#question4").val().trim(),
      $("#question5").val().trim(), $("#question6").val().trim(),
      $("#question7").val().trim(), $("#question8").val().trim(),
      $("#question9").val().trim(), $("#question10").val().trim()]
    };
  
//Saving data to friends.js file, performing match and displaying results
    $.post("/survey", newFriend)
      .then(function(data) {
        console.log("add.html", data);  
        if (data === "Added to the Waiting List") {
          alert("Sorry...You have been added to the Waiting List");
        }
        else {alert("Adding new reservation...")}
      });
  });
  