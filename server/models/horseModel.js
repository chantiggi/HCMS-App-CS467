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
    this.isActive = horse.isActive;
    this.handlerLevelID = horse.handlerLevelID;
    this.handlerLevelName = horse.handlerLevelName || null;
    this.dayLocationID = horse.dayLocationID;
    this.dayLocationName = horse.dayLocationName || null;
    this.nightLocationID = horse.nightLocationID;
    this.nightLocationName = horse.nightLocationName || null;
    this.hasFeed = horse.hasFeed || null;
    this.hasMeds = horse.hasMeds || null;
    this.orgID = horse.orgID || null;
}

Horse.getAllHorses = function (result) {
    sql.query('SELECT Horse.horseID, Horse.horseName, Horse.photo, Horse.description, ' +
    'Horse.birthYear, Horse.specialNotes, Horse.history, Horse.isActive, ' +
    'Horse.handlerLevelID, Horse.dayLocationID AS dayLocationID, Horse.nightLocationID AS nightLocationID, Horse.orgID, ' +
    'HandlerLevel.handlerLevelName, dayLoc.locationName AS dayLocationName, nightLoc.locationName AS nightLocationName, ' +
    'EXISTS(SELECT * FROM HorseFeed WHERE HorseFeed.horseID = Horse.horseID) AS hasFeed, ' +
    'EXISTS(SELECT * FROM HorseMed WHERE HorseMed.horseID = Horse.horseID) AS hasMeds ' +
    'FROM Horse ' +
    'LEFT JOIN HandlerLevel ON Horse.handlerLevelID = HandlerLevel.handlerLevelID ' +
    'LEFT JOIN Location AS dayLoc ON Horse.dayLocationID = dayLoc.locationID ' +
    'LEFT JOIN Location AS nightLoc ON Horse.nightLocationID = nightLoc.locationID ' +
    'LEFT JOIN HorseFeed ON HorseFeed.horseID = Horse.horseID ' +
    'LEFT JOIN HorseMed ON HorseMed.horseID = Horse.horseID ' +
    'WHERE Horse.orgID = 1 ' +
    'GROUP BY Horse.horseID',
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

Horse.createHorse = function (newHorse, result) {
    console.log("newHorse = ", newHorse);
    let sqlQuery = 'INSERT INTO Horse (horseName, description, birthYear, specialNotes, history, isActive, ' +
    'handlerLevelID, dayLocationID, nightLocationID, orgID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    sql.query(sqlQuery, [newHorse.horseName, newHorse.description, newHorse.birthYear, newHorse.specialNotes, newHorse.history, newHorse.isActive, 
        newHorse.handlerLevelID, newHorse.dayLocationID, newHorse.nightLocationID, newHorse.orgID],
    function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
            return;
        }
        else {
            console.log("The new horse's ID is: ", res.insertId);
            if (newHorse.feedArray) {
                console.log("feed array in horse model = ", newHorse.feedArray);
                let sqlQuery2 = 'INSERT INTO HorseFeed (horseID, amountID, unitID, feedID, feedNotes) VALUES (?, ?, ?, ?, ?)';
                newHorse.feedArray.forEach(element => {
                    sql.query(sqlQuery2, [res.insertId, element.amountID, element.unitID, element.feedID, element.feedNotes],
                        function(err2, res2) {
                            if (err2) {
                                console.log("Error with SQL query: ", err2);
                                result(null, err2);
                                return;
                            }
                            else{
                                console.log("Results of adding horseFeed are: ", res2);
                            }
                    })
                });
            }
            if (newHorse.medArray) {
                console.log("med array in horse model = ", newHorse.medArray);
                let sqlQuery3 = 'INSERT INTO HorseMed (horseID, medTimingID, amountID, unitID, medID, medNotes) VALUES (?, ?, ?, ?, ?, ?)';
                newHorse.medArray.forEach(element =>
                    sql.query(sqlQuery3, [res.insertId, element.timingID, element.amountID, element.unitID, element.medID, element.medNotes],
                        function(err3, res3) {
                            if (err3) {
                                console.log("Error with SQL query: ", err3);
                                result(null, err3);
                                return;
                            }
                            else {
                                console.log("Results of adding horseMeds are: ", res3);
                            }
                        }))
            }
            result(null, res);
        }
    });
};

// Currently being used to display an individual horse - we might be able to split
// out the getFeed and get Meds into their own functions to simplify this some. 
// Right now there's an issue where the horseFeedArray and horseMedArray are coming
// back as a string of an array instead of just an array so I had trouble breaking these
// into a <ul> element, etc on the front end. In other words, this still needs some work...
Horse.getHorseById = function (horseID, result) {
    sql.query('SELECT Horse.horseID, Horse.horseName, Horse.photo, Horse.description, ' +
    'Horse.birthYear, Horse.specialNotes, Horse.history, Horse.isActive, ' +
    'Horse.handlerLevelID, Horse.dayLocationID AS dayLocationID, Horse.nightLocationID AS nightLocationID, Horse.orgID, ' +
    'HandlerLevel.handlerLevelName, dayLoc.locationName AS dayLocationName, nightLoc.locationName AS nightLocationName, ' +
    'EXISTS(SELECT * FROM HorseFeed WHERE HorseFeed.horseID = Horse.horseID) AS hasFeed, ' +
    'EXISTS(SELECT * FROM HorseMed WHERE HorseMed.horseID = Horse.horseID) AS hasMeds ' +
    'FROM Horse ' +
    'LEFT JOIN HandlerLevel ON Horse.handlerLevelID = HandlerLevel.handlerLevelID ' +
    'LEFT JOIN Location AS dayLoc ON Horse.dayLocationID = dayLoc.locationID ' +
    'LEFT JOIN Location AS nightLoc ON Horse.nightLocationID = nightLoc.locationID ' +
    'LEFT JOIN HorseFeed ON HorseFeed.horseID = Horse.horseID ' +
    'LEFT JOIN HorseMed ON HorseMed.horseID = Horse.horseID ' +
    'WHERE Horse.horseID = ?',
        horseID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                //console.log("Horse data returned is: ", res);
                result(null, res);
            }
        });
}

// Still needs to be updated with a real query
Horse.updateHorseById = function (horse, result) {
    console.log("horse in updateHorseById = ", horse);
    sql.query('UPDATE Horse SET horseName = ?, description = ?, birthYear = ?, specialNotes = ?, history = ?, isActive = ?, ' +
    'handlerLevelID = ?, dayLocationID = ?, nightLocationID = ?, orgID = ? ' +
    'WHERE horseID = ?', [horse.horseName, horse.description, horse.birthYear, horse.specialNotes, horse.history, horse.isActive, 
        horse.handlerLevelID, horse.dayLocationID, horse.nightLocationID, horse.orgID, horse.horseID], function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("Result of the general horse update is: ", res);
            if (horse.feedArray) {
                console.log("horse.feedArray = ", horse.feedArray);
                let sqlQuery2 = 'INSERT INTO HorseFeed (horseID, amountID, unitID, feedID, feedNotes) VALUES (?, ?, ?, ?, ?)';
                horse.feedArray.forEach(element => {
                    console.log("current element being updated in database is = ", element);
                    sql.query(sqlQuery2, [horse.horseID, element.amountID, element.unitID, element.feedID, element.feedNotes],
                        function(err2, res2) {
                            if (err2) {
                                console.log("Error with SQL query: ", err2);
                                result(null, err2);
                                return;
                            }
                            else{
                                console.log("Results of updating horseFeed is: ", res2);
                            }
                    })
                });
            }
            if (horse.medArray) {
                console.log("horse.medArray = ", horse.medArray);
                let sqlQuery3 = 'INSERT INTO HorseMed (horseID, medTimingID, amountID, unitID, medID, medNotes) VALUES (?, ?, ?, ?, ?, ?)';
                horse.medArray.forEach(element =>
                    sql.query(sqlQuery3, [horse.horseID, element.timingID, element.amountID, element.unitID, element.medID, element.medNotes],
                        function(err3, res3) {
                            if (err3) {
                                console.log("Error with SQL query: ", err3);
                                result(null, err3);
                                return;
                            }
                            else {
                                console.log("Results of updating horseMeds are: ", res3);
                            }
                        }))
            }
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