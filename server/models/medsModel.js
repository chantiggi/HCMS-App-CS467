'use strict';
var sql = require('./db.js');

//Meds object constructor
var Meds = function(meds) {
    this.meds = meds.meds;
    this.horseID = meds.horseID;
    this.horseName = meds.horseName;
    this.medAmt = meds.amount;
    this.medUnit = meds.unit;
    this.medName = meds.medName;
    this.medNotes = meds.medNotes;
    this.timingName = meds.timingName;
}

// Not currently being used
Meds.getAllHorsesAmMeds = function (result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, Timing.timingName " +
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
                console.log("All horses AM meds are: ", res);
                result(null, res);
            }
        })
}

// Not currently being used
Meds.getAllHorsesPmMeds = function (result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, Timing.timingName " +
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
                console.log("All horses PM meds are: ", res);
                result(null, res);
            }
        })
}

Meds.getHorseMeds = function (horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, Timing.timingName " +
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
                console.log("The horse's full list of meds are: ", res);
                result(null, res);
            }
        })
}

// Not currently being used
Meds.getHorseAmMeds = function (horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, Timing.timingName " +
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
                console.log("The horse's AM meds are: ", res);
                result(null, res);
            }
        })
}

// Not currently being used
Meds.getHorsePmMeds = function (horseID, result) {
    sql.query("SELECT Horse.horseID, Horse.horseName, Amount.amount, Unit.unit, Med.medName, HorseMed.medNotes, Timing.timingName " +
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
                console.log("The horse's PM meds are: ", res);
                result(null, res);
            }
        })
}

module.exports = Meds;