'use strict';
var sql = require('./db.js');

//Blog object constructor
var Home = function (home) {
    this.orgNoteID = home.orgNoteID;
    this.orgNote = home.orgNote;
    this.datetime = home.datetime;
    this.userID = home.userID;
    this.orgName = home.orgName;
    this.fname = home.fname;
    this.lname = home.lname;
}

    Home.getBlogPosts = function (result) {
        sql.query("SELECT OrgNote.orgNoteID, OrgNote.orgNote, OrgNote.datetime, OrgNote.userID, Organization.orgName, User.fname, User.lname " +
            "FROM OrgNote " +
            "INNER JOIN Organization ON OrgNote.orgID = Organization.orgID " +
            "INNER JOIN User ON OrgNote.userID = User.userID " +
            "WHERE OrgNote.orgID = 1",
        function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Posts returned are: ", res);
                result(null, res);
            }
        });
};

    Home.getBlogByID = function (orgNoteID, result) {
        sql.query("SELECT orgNote, datetime, userID " +
            "FROM OrgNote " +
            "WHERE orgNoteID = ?", orgNoteID,
        function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("Posts returned are: ", res);
                result(null, res);
            }
        });
};


module.exports = Home;