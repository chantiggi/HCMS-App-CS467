'use strict';
var sql = require('./db.js');

//Horse object constructor
var Horse = function (horse) {
    //this.horse = horse.horse;
    this.horseID = horse.horseID;
    this.horseName = horse.horseName;
    this.photo = horse.photo || null;
    this.description = horse.description || null;
    this.birthYear = horse.birthYear || null;
    this.specialNotes = horse.specialNotes || null;
    this.history = horse.history || null;
    this.isActive = horse.isActive || 1;
    this.handlerLevelID = horse.handlerLevelID;
    this.handlerLevelName = horse.handlerLevelName || null;
    this.dayLocationID = horse.dayLocationID;
    this.dayLocationName = horse.dayLocationName || null;
    this.nightLocationID = horse.nightLocationID;
    this.nightLocationName = horse.nightLocationName || null;
    this.horseFeedArray = horse.horseFeedArray || null;
    this.horseMedArray = horse.horseMedArray || null;
    this.orgID = horse.orgID || null;
}

// Should we try to split off the feed and med queries to be separate?
Horse.getAllHorses = function (result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Horse.photo, Horse.description, " +
    "Horse.birthYear, Horse.specialNotes, Horse.history, Horse.isActive, " +
    "Horse.handlerLevelID, Horse.dayLocationID AS dayLocationID, Horse.nightLocationID AS nightLocationID, Horse.orgID, " +
    "HandlerLevel.handlerLevelName, dayLoc.locationName AS dayLocationName, nightLoc.locationName AS nightLocationName, " +
    "horseFeedArray, horseMedArray " +
    "FROM Horse " +
    "LEFT JOIN HandlerLevel ON Horse.handlerLevelID = HandlerLevel.handlerLevelID " +
    "LEFT JOIN Location AS dayLoc ON Horse.dayLocationID = dayLoc.locationID " +
    "LEFT JOIN Location AS nightLoc ON Horse.nightLocationID = nightLoc.locationID " +
    "LEFT JOIN (SELECT Horse.horseID as horseID, " +
        "JSON_ARRAYAGG(CONCAT(Amount.amount, ' ', Unit.unit, ' ', Feed.feedName, ' (Notes: ', IFNULL(HorseFeed.feedNotes, 'N/A'), ')')) AS horseFeedArray " +
        "FROM Horse " +
        "LEFT JOIN HorseFeed ON Horse.horseID = HorseFeed.horseID " +
        "LEFT JOIN Amount ON Amount.amountID = HorseFeed.amountID " +
        "LEFT JOIN Unit ON Unit.unitID = HorseFeed.unitID " +
        "LEFT JOIN Feed ON Feed.feedID = HorseFeed.feedID " +
        "GROUP BY Horse.horseID) AS tmp1 " +
    "ON Horse.horseID = tmp1.horseID " +
        "LEFT JOIN (SELECT Horse.horseID as horseID, " +
        "JSON_ARRAYAGG(CONCAT(Timing.timingName, ': ', Amount.amount, ' ', Unit.unit, ' ', Med.medName, ' (Notes: ', IFNULL(HorseMed.medNotes, 'N/A'), ')')) AS horseMedArray " +
        "FROM Horse " +
        "LEFT JOIN HorseMed ON Horse.horseID = HorseMed.horseID " +
        "LEFT JOIN Amount ON Amount.amountID = HorseMed.amountID " +
        "LEFT JOIN Unit ON Unit.unitID = HorseMed.unitID " +
        "LEFT JOIN Med ON Med.medID = HorseMed.medID " +
        "LEFT JOIN Timing ON Timing.timingID = HorseMed.medTimingID " +
        "GROUP BY Horse.horseID) AS tmp2 " +
    "ON Horse.horseID = tmp2.horseID",
        function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Horses returned are: ", res);
                result(null, res);
            }
        });
};

// Still needs to be updated with a real query
Horse.createHorse = function (newHorse, result) {
    sql.query('INSERT INTO Horse (horseName, description, birthYear, specialNotes, history, isActive, handlerLevelID, dayLocationID, nightLocationID, orgID) ' +
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', newHorse.horseName, newHorse.description, newHorse.birthYear, newHorse.specialNotes, newHorse.history, 
    newHorse.isActive, newHorse.handlerLevelID, newHorse.dayLocationID, newHorse.nightLocationID, newHorse.orgID, 
    function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("The new horse's ID is: ", res);
            result(null, res);
        }
    });
};

/*
// Original - list of feed separated by commas - meds not added yet
Horse.getHorseById = function(horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Horse.photo, Horse.description, " +
    "Horse.birthYear, Horse.specialNotes, Horse.history, Horse.isActive, " +
    "Horse.handlerLevelID, Horse.dayLocationID AS dayLocationID, Horse.nightLocationID AS nightLocationID, Horse.orgID, " +
    "HandlerLevel.handlerLevelName, dayLoc.locationName AS dayLocationName, nightLoc.locationName AS nightLocationName, horseFeed " +
    "FROM Horse " +
    "LEFT JOIN HandlerLevel ON Horse.handlerLevelID = HandlerLevel.handlerLevelID " +
    "LEFT JOIN Location AS dayLoc ON Horse.dayLocationID = dayLoc.locationID " +
    "LEFT JOIN Location AS nightLoc ON Horse.nightLocationID = nightLoc.locationID " +
    "LEFT JOIN (SELECT Horse.horseID as horseID, group_concat(Amount.amount, ' ', Unit.unit, ' ', Feed.feedName, ' (Notes: ', IFNULL(HorseFeed.feedNotes, 'N/A'), ')' separator ', ') AS horseFeed " +
        "FROM Horse " +
        "LEFT JOIN HorseFeed ON Horse.horseID = HorseFeed.horseID " +
        "LEFT JOIN Amount ON Amount.amountID = HorseFeed.amountID " +
        "LEFT JOIN Unit ON Unit.unitID = HorseFeed.unitID " +
        "LEFT JOIN Feed ON Feed.feedID = HorseFeed.feedID " +
        "GROUP BY Horse.horseID) AS tmp " +
    "ON Horse.horseID = tmp.horseID " +
    "WHERE Horse.horseID = ?", horseID, function(err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("Horse data returned is: ", res);
            result(null, res);
        }
    });
}
*/

// Currently being used to display an individual horse - we might be able to split
// out the getFeed and get Meds into their own functions to simplify this some. 
// Right now there's an issue where the horseFeedArray and horseMedArray are coming
// back as a string of an array instead of just an array so I had trouble breaking these
// into a <ul> element, etc on the front end. In other words, this still needs some work...
Horse.getHorseById = function (horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Horse.photo, Horse.description, " +
        "Horse.birthYear, Horse.specialNotes, Horse.history, Horse.isActive, " +
        "Horse.handlerLevelID, Horse.dayLocationID AS dayLocationID, Horse.nightLocationID AS nightLocationID, Horse.orgID, " +
        "HandlerLevel.handlerLevelName, dayLoc.locationName AS dayLocationName, nightLoc.locationName AS nightLocationName, " +
        "horseFeedArray, horseMedArray " +
        "FROM Horse " +
        "LEFT JOIN HandlerLevel ON Horse.handlerLevelID = HandlerLevel.handlerLevelID " +
        "LEFT JOIN Location AS dayLoc ON Horse.dayLocationID = dayLoc.locationID " +
        "LEFT JOIN Location AS nightLoc ON Horse.nightLocationID = nightLoc.locationID " +
        "LEFT JOIN (SELECT Horse.horseID as horseID, " +
            "JSON_ARRAYAGG(CONCAT(Amount.amount, ' ', Unit.unit, ' ', Feed.feedName, ' (Notes: ', IFNULL(HorseFeed.feedNotes, 'N/A'), ')')) AS horseFeedArray " +
            "FROM Horse " +
            "LEFT JOIN HorseFeed ON Horse.horseID = HorseFeed.horseID " +
            "LEFT JOIN Amount ON Amount.amountID = HorseFeed.amountID " +
            "LEFT JOIN Unit ON Unit.unitID = HorseFeed.unitID " +
            "LEFT JOIN Feed ON Feed.feedID = HorseFeed.feedID " +
            "GROUP BY Horse.horseID) AS tmp1 " +
        "ON Horse.horseID = tmp1.horseID " +
        "LEFT JOIN (SELECT Horse.horseID as horseID, " +
            "JSON_ARRAYAGG(CONCAT(Timing.timingName, ': ', Amount.amount, ' ', Unit.unit, ' ', Med.medName, ' (Notes: ', IFNULL(HorseMed.medNotes, 'N/A'), ')')) AS horseMedArray " +
            "FROM Horse " +
            "LEFT JOIN HorseMed ON Horse.horseID = HorseMed.horseID " +
            "LEFT JOIN Amount ON Amount.amountID = HorseMed.amountID " +
            "LEFT JOIN Unit ON Unit.unitID = HorseMed.unitID " +
            "LEFT JOIN Med ON Med.medID = HorseMed.medID " +
            "LEFT JOIN Timing ON Timing.timingID = HorseMed.medTimingID " +
            "GROUP BY Horse.horseID) AS tmp2 " +
        "ON Horse.horseID = tmp2.horseID " +
        "WHERE Horse.horseID = ?", horseID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Horse data returned is: ", res);
                result(null, res);
            }
        });
}

// Still needs to be updated with a real query
Horse.updateHorseById = function (horseID, horse, result) {
    sql.query('UPDATE Horse SET Horse = ? WHERE horseID = ?', [horse.horse, horseID], function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

// might need to add some to this???
Horse.deleteHorseById = function (horseID, result) {
    sql.query('DELETE FROM Horse where horseID = ?', horseID, function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

/*
Horse.getAllHorsesWithMeds = function(result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Horse.isActive " +
    "Horse.dayLocationID AS dayLocationID, Horse.nightLocationID AS nightLocationID, Horse.orgID, " +
    "dayLoc.locationName AS dayLocationName, nightLoc.locationName AS nightLocationName, " +
    "horseFeedArray, horseMedArray " +
    "FROM Horse " +
    "LEFT JOIN HandlerLevel ON Horse.handlerLevelID = HandlerLevel.handlerLevelID " +
    "LEFT JOIN Location AS dayLoc ON Horse.dayLocationID = dayLoc.locationID " +
    "LEFT JOIN Location AS nightLoc ON Horse.nightLocationID = nightLoc.locationID " +
    "LEFT JOIN (SELECT Horse.horseID as horseID, " +)
}
*/
module.exports = Horse;