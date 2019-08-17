'use strict';
var sql = require('./db.js');

//Amounts object constructor
var Amounts = function(amounts) {
    this.amounts = amounts.amounts;
    this.amountID = amounts.amountID;
    this.amount = amounts.amount;
}

//Need to update with org info
Amounts.getAllPossibleAmounts = function(result) {
    sql.query("SELECT Amount.amountID, Amount.amount FROM Amount WHERE Amount.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available amounts for this org are: ", res);
            result(null, res);
        }
    })
}

Amounts.getAmountNameById = function(amountID, result) {
    sql.query("SELECT * from Amount WHERE amountID = ?", amountID,
    function(err, res) {
        if(err) { result(null, err); }
        else { result(null, res); }
    })
}

module.exports = Amounts;