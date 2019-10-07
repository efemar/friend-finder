// Routes
// =============================================================
var friends = require("../data/friends")

// module.exports = function(app) {

  //API Friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  
  // Post  Route
  app.post("/survey", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    friends.push(newFriend)

    //Perform the checks through each friend to calculate the total difference
    //Compare each person's score with the added score




    
  
  });

// }





