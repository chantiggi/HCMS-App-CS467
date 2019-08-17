'use strict';
var sql = require('./db.js');

//Feed object constructor
var Feed = function(feed) {
    this.feed = feed.feed;
    this.horseFeedID = feed.horseFeedID;
    this.horseID = feed.horseID;
    this.horseName = feed.horseName;
    this.amountID = feed.amountID;
    this.amount = feed.amount;
    this.unitID = feed.unitID;
    this.unit = feed.unit;
    this.feedID = feed.feedID;
    this.feedName = feed.feedName;
    this.feedNotes = feed.feedNotes;
}

Feed.getAllPossibleFeed =  function(result) {
    sql.query("SELECT Feed.feedID, Feed.feedName FROM Feed WHERE Feed.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available feed types for this org are: ", res);
            result(null, res);
        }
    })
}

Feed.getHorseFeed = function(horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, " +
    "Amount.amountID, Amount.amount, Unit.unitID, Unit.unit, Feed.feedID, Feed.feedName, " +
    "HorseFeed.feedNotes, HorseFeed.horseFeedID " +
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
            //console.log("This horse's feed is: ", res);
            result(null, res);
        }
    })
}

Feed.getFeedNameById = function(feedID, result) {
    sql.query("SELECT * from Feed WHERE feedID = ?", feedID,
    function(err, res) {
        if(err) { result(null, err); }
        else { result(null, res); }
    })
}

module.exports = Feed;