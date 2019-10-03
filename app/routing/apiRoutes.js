// Routes
// =============================================================


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


