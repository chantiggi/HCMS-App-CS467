'use strict';
var sql = require('./db.js');

//Horse object constructor
var Horse = function(horse) {
    this.horse = horse.horse;
    this.horseID = horse.horseID;
    this.horseName = horse.horseName;
    this.photo = horse.photo;
    this.description = horse.description;
    this.birthYear = horse.birthYear;
    this.specialNotes = horse.specialNotes;
    this.history = horse.history;
    this.isActive = horse.isActive;
    this.handlerLevel = horse.handlerLevelID;
    this.dayLocation = horse.dayLocationID;
    this.nightLocation = horse.nightLocationID;
}

Horse.getAllHorses = function(result) {
    sql.query("SELECT * FROM Horse", function (err, res) {
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

Horse.getHorseById = function(horseID, result) {
    sql.query("SELECT * FROM Horse WHERE horseID = ?", horseID, function(err, res) {
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

module.exports = Horse;