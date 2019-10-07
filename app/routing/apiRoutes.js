// Routes
// =============================================================
var friends = require("../data/friends")
var path = require("path");

// module.exports = function (app) {

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

// }





