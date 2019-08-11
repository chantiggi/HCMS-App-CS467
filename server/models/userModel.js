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


module.exports = User;