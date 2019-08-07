'use strict';
var sql = require('./db.js');

//Feed object constructor
var Feed = function(feed) {
    this.feed = feed.feed;
    this.horseID = feed.horseID;
    this.horseName = feed.horseName;
    this.amount = feed.amount;
    this.unit = feed.unit;
    this.feedID = feed.feedID;
    this.feedName = feed.feedName;
    this.feedNotes = feed.feedNotes;
}

Feed.getHorseFeed = function(horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Feed.feedID, Feed.feedName, HorseFeed.feedNotes " +
    "FROM HorseFeed " +
    "LEFT JOIN Horse on Horse.horseID = HorseFeed.horseID " +
    "LEFT JOIN Amount on Amount.amountID = HorseFeed.amountID " +
    "LEFT JOIN Unit on Unit.unitID = HorseFeed.unitID " +
    "LEFT JOIN Feed on Feed.feedID = HorseFeed.feedID " +
    "WHERE HorseFeed.horseID = ?",
    horseID, function(err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("This horse's feed is: ", res);
            result(null, res);
        }
    })
}

module.exports = Feed;