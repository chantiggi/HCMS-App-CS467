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
                console.log("Org returned is: ", res);
                result(null, res);
            }
        });
};

    Org.addOrg = function (result) {
    sql.query("SELECT orgName, streetAddress, city, state, zipCode FROM Organization WHERE orgID = 1",
        function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Org returned is: ", res);
                result(null, res);
            }
        });
};


    Org.getOrgById = function (orgID, result) {
    sql.query("SELECT orgName, streetAddress, city, state, zipCode FROM Organization WHERE orgID = ?", orgID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Org data returned is: ", res);
                result(null, res);
            }
        });
};

    Org.updateOrgById = function (orgID, org, result) {
        sql.query('UPDATE Organization SET Organization = ? WHERE orgID = ?', [org.org, orgID], function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    };

module.exports = Org;