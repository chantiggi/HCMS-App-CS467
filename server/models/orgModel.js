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

Org.createOrg = function (newOrg, result) {
    console.log("newOrg = ", newOrg);
    let sqlQuery = 'INSERT INTO Organization (orgName, streetAddress, city, state, zipCode) ' +
    'VALUES (?, ?, ?, ?, ?)';
    sql.query(sqlQuery, [newOrg.orgName, newOrg.streetAddress, newOrg.city, newOrg.state, newOrg.zipCode],
    function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("The new org's ID is: ", res.insertId);
            let sqlQuery2 = 'INSERT INTO User (username, fname, lname, email, isAdmin, isActive, handlerLevelID, orgID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            sql.query(sqlQuery2, [newOrg.username, newOrg.fname, newOrg.lname, newOrg.email, newOrg.isAdmin, newOrg.isActive, newOrg.handlerLevelID, res.insertId],
                function(err2, res2) {
                    if (err2) {
                        console.log("Error with SQL query: ", err2);
                        result(null, err2);
                    }
                    else{
                        console.log("Results of adding user is: ", res2.insertId);
                    }  
                });              
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

Org.updateOrgById = function (org, result) {
    sql.query('UPDATE Organization SET orgName = ?, streetAddress = ?, city = ?, state = ?, zipCode = ? WHERE orgID = ?', [org.orgName, org.streetAddress, 
        org.city, org.state, org.zipCode, org.orgID], function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("Result of the update is: ", res);
            result(null, res);
        }
    });
};

module.exports = Org;