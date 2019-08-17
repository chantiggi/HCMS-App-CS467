'use strict';
var sql = require('./db.js');

//Locations object constructor
var Locations = function(locations) {
    this.locations = locations.locations;
    this.locationID = locations.locationID;
    this.locationName = locations.locationName;
}

//Need to update with org info
Locations.getAllPossibleLocations = function(result) {
    sql.query("SELECT Location.locationID, Location.locationName FROM Location WHERE Location.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available locations for this org are: ", res);
            result(null, res);
        }
    })
}

module.exports = Locations;