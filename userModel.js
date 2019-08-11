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


module.exports = User;