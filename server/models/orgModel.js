'use strict';
var sql = require('./db.js');

//Org object constructor
var Org = function (org) {
    this.org = org.org;
    this.orgID = org.orgID;
    this.orgName = org.orgName;
    this.streetAddress = org.streetAddress;
    this.city = org.city;
    this.state = org.state;
    this.zipCode = org.zipCode;
}


    Org.getOrg = function (result) {
    sql.query("SELECT orgName, streetAddress, city, state, zipCode FROM Organization WHERE orgID = 1",
        function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Users returned are: ", res);
                result(null, res);
            }
        });
};


module.exports = Org;