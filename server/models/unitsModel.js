'use strict';
var sql = require('./db.js');

//Units object constructor
var Units = function(units) {
    this.units = units.units;
    this.unitID = units.unitID;
    this.unit = units.unit;
}

//Need to update with org info
Units.getAllPossibleUnits = function(result) {
    sql.query("SELECT Unit.unitID, Unit.unit FROM Unit WHERE Unit.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available units for this org are: ", res);
            result(null, res);
        }
    })
}

Units.getUnitNameById = function(unitID, result) {
    sql.query("SELECT * from Unit WHERE unitID = ?", unitID,
    function(err, res) {
        if(err) { result(null, err); }
        else { result(null, res); }
    })
}

module.exports = Units;