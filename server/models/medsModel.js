'use strict';
var sql = require('./db.js');

//Meds object constructor
var Meds = function(meds) {
    this.meds = meds.meds;
    this.horseMedID = meds.horseMedID;
    this.horseID = meds.horseID;
    this.horseName = meds.horseName;
    this.amountID = meds.amountID;
    this.amount = meds.amount;
    this.unitID = meds.unitID;
    this.unit = meds.unit;
    this.medID = meds.medID;
    this.medName = meds.medName;
    this.medNotes = meds.medNotes;
    this.timingID = meds.timingID;
    this.timingName = meds.timingName;
}

Meds.getAllPossibleMeds = function(result) {
    sql.query("SELECT Med.medID, Med.medName FROM Med WHERE Med.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available meds for this org are: ", res);
            result(null, res);
        }
    })
}

Meds.getHorseMeds = function (horseID, result) {
    sql.query("SELECT HorseMed.horseMedID, Horse.horseID, Horse.horseName, " +
    "Amount.amountID, Amount.amount, Unit.unitID, Unit.unit, Med.medID, Med.medName," +
    "HorseMed.medNotes, Timing.timingID, Timing.timingName " +
    "FROM HorseMed " +
    "LEFT JOIN Horse on Horse.horseID = HorseMed.horseID " +
    "LEFT JOIN Amount on Amount.amountID = HorseMed.amountID " +
    "LEFT JOIN Unit on Unit.unitID = HorseMed.unitID " +
    "LEFT JOIN Med on Med.medID = HorseMed.medID " +
    "LEFT JOIN Timing on Timing.timingID = HorseMed.medTimingID " +
    "WHERE HorseMed.horseID = ?", horseID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                //console.log("The horse's full list of meds are: ", res);
                result(null, res);
            }
        })
}

Meds.getAllHorsesAmMeds = function (result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, HorseMed.horseMedID, Timing.timingName " +
    "FROM HorseMed " +
    "LEFT JOIN Horse on Horse.horseID = HorseMed.horseID " +
    "LEFT JOIN Amount on Amount.amountID = HorseMed.amountID " +
    "LEFT JOIN Unit on Unit.unitID = HorseMed.unitID " +
    "LEFT JOIN Med on Med.medID = HorseMed.medID " +
    "LEFT JOIN Timing on Timing.timingID = HorseMed.medTimingID " +
    "WHERE Timing.timingName = 'AM'", function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                //console.log("All horses AM meds are: ", res);
                result(null, res);
            }
        })
}

Meds.getAllHorsesPmMeds = function (result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, HorseMed.horseMedID, Timing.timingName " +
    "FROM HorseMed " +
    "LEFT JOIN Horse on Horse.horseID = HorseMed.horseID " +
    "LEFT JOIN Amount on Amount.amountID = HorseMed.amountID " +
    "LEFT JOIN Unit on Unit.unitID = HorseMed.unitID " +
    "LEFT JOIN Med on Med.medID = HorseMed.medID " +
    "LEFT JOIN Timing on Timing.timingID = HorseMed.medTimingID " +
    "WHERE Timing.timingName = 'PM'", function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                //console.log("All horses PM meds are: ", res);
                result(null, res);
            }
        })
}

Meds.getHorseAmMeds = function (horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, HorseMed.horseMedID, Timing.timingName " +
    "FROM HorseMed " +
    "LEFT JOIN Horse on Horse.horseID = HorseMed.horseID " +
    "LEFT JOIN Amount on Amount.amountID = HorseMed.amountID " +
    "LEFT JOIN Unit on Unit.unitID = HorseMed.unitID " +
    "LEFT JOIN Med on Med.medID = HorseMed.medID " +
    "LEFT JOIN Timing on Timing.timingID = HorseMed.medTimingID " +
    "WHERE HorseMed.horseID = ? AND Timing.timingName = 'AM'", horseID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                //console.log("The horse's AM meds are: ", res);
                result(null, res);
            }
        })
}

Meds.getHorsePmMeds = function (horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, HorseMed.horseMedID, Timing.timingName " +
    "FROM HorseMed " +
    "LEFT JOIN Horse on Horse.horseID = HorseMed.horseID " +
    "LEFT JOIN Amount on Amount.amountID = HorseMed.amountID " +
    "LEFT JOIN Unit on Unit.unitID = HorseMed.unitID " +
    "LEFT JOIN Med on Med.medID = HorseMed.medID " +
    "LEFT JOIN Timing on Timing.timingID = HorseMed.medTimingID " +
    "WHERE HorseMed.horseID = ? AND Timing.timingName = 'PM'", horseID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                //console.log("The horse's PM meds are: ", res);
                result(null, res);
            }
        })
}

module.exports = Meds;