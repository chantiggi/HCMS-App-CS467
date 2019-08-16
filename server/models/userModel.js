'use strict';
var sql = require('./db.js');

//User object constructor
var User = function (user) {
    this.user = user.user;
    this.userID = user.userID;
    this.username = user.username;
    this.password = user.password;
    this.fname = user.fname;
    this.lname = user.lname;
    this.email = user.email;
    this.isAdmin = user.isAdmin;
    this.isActive = user.isActive;
    this.handlerLevelID = user.handlerLevelID;
}


    User.getAllUsers = function (result) {
    sql.query("SELECT User.userID, User.username, User.password, User.fname, User.lname, User.email, User.isAdmin, " +
        "User.isActive, User.handlerLevelID FROM User WHERE User.orgID = 1",
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

    //Add User
    User.createUser = function (newUser, result) {
    sql.query('INSERT INTO User SET ?', newUser, function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            console.log("The new user's ID is: ", res.insertId);
            result(null, res.insertId);
        }
    });
};

// Currently being used to display user information in the Edit Modal on Manage Users page, selects users with OrgID: 1
User.getUserById = function(userID, result) {
    sql.query("SELECT User.userID, User.username, User.password, User.fname, User.lname, User.email, User.isAdmin, " +
        "User.isActive, User.handlerLevelID, HandlerLevel.handlerLevelName, User.orgID, Organization.orgName " +
        "FROM User " +
        "LEFT JOIN HandlerLevel on User.handlerLevelID = HandlerLevel.handlerLevelID " +
        "LEFT JOIN Organization on User.orgID = Organization.orgID " +
        "WHERE User.userID = ?", userID, function (err, res) {
            if (err) {
                console.log("Error with SQL query: ", err);
                result(null, err);
            }
            else {
                console.log("User data returned is: ", res);
                result(null, res);
            }
        });
};


// This is based on horseModel.js's updateHorseById: Still needs to be updated with a real query
User.updateUserById = function (userID, user, result) {
    sql.query('UPDATE User SET User = ? WHERE userID = ?', [user.user, userID], function (err, res) {
        if (err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;
