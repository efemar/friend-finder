// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// var apiRouting = require("./app/routing/apiRoutes");
// var htmlRouting = require("./app/routing/htmlRoutes");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// apiRouting(app);
// htmlRouting(app);

var friends = [
  {
    "name": "Volverine",
    "photo": "http://img2.wikia.nocookie.net/__cb20110604101617/xmenmovies/images/6/68/Wolverine.JPG-1-.jpg",
    "scores": [
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
  }
  ,
  {
    "name": "Fernando",
    "photo": "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555921064/shape/mentalfloss/spongebob_0_0.jpg",
    "scores": [
      1,
      1,
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
  ,
  {
    "name": "Anna",
    "photo": "https://pbs.twimg.com/profile_images/1080886966571487232/Fj5-uu88_400x400.jpg",
    "scores": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});


//API Friends
app.get("/api/friends", function (req, res) {
  res.json(friends);
});

// Post  Route
app.post("/api/friends", function (req, res) {
  var newFriend = req.body;
  var newFriendScores = req.body.scores;
  var totalDifference = [];

  function bestMatch() {
    for (var t = 0; t < friends.length; t++) {
      for (var i = 0; i < friends[t].scores.length; i++) {
        this["friendsScores" + i] = parseInt(friends[t].scores[i]);
        this["newFriendScores" + i] = parseInt(req.body.scores[i]);
        this["difference" + i] = Math.abs(this["friendsScores" + i] - this["newFriendScores" + i]);
        this["totalDiff" + t] = this.difference0 + this.difference1 + this.difference2 + this.difference3 +
          this.difference4 + this.difference5 + this.difference6 + this.difference7 + this.difference8 +
          this.difference9;
      }
      totalDifference.push(this["totalDiff" + t]);
    }
  }

  //running bestMatch function
  bestMatch();

  //finding the lowest number in the totalDifference array
  const indexOfMinValue = totalDifference.indexOf(Math.min(...totalDifference));
  var match = friends[indexOfMinValue];
  friends.push(newFriend)
  res.send(match)

  //friends.push(newFriend)
  //adding newFriend to the friends array
  //friends.push(newFriend)


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});




