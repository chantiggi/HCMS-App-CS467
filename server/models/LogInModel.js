'use strict';
var sql = require('./db.js');

// LogIn object constructor
var LogIn = function(login) {
    this.username = login.username;
    this.password = login.password;
}

LogIn.validateUserLogIn = function(username, password, result) {
    sql.query("SELECT * from User WHERE User.username = ?", username,
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ",  err);
            result(null, err);
        }
        else {
            console.log("SQL query result is: ", res);
            if (res[0] && res[0].password === password) {
                result(null, res);
            }
            else {
                result(null, false);
            }
        }
    })
}

module.exports = LogIn;