'use strict';

var sql = require('./db.js');

//Times object constructor
var Times = function(times) {
    this.times = times.times;
    this.timingID = times.timingID;
    this.timingName = times.timingName;
}

Times.getAllPossibleTimes = function(result) {
    sql.query("SELECT * from Timing WHERE Timing.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available times for this org are: ", res);
            result(null, res);
        }
    })
}

module.exports = Times;