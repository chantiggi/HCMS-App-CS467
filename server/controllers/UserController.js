'use strict';

var User = require('../models/userModel.js');

// Get all users
exports.list_all_users = function(req, res) {
    User.getAllUsers(function(err, users) {
        if (err) { res.send(err); }
        res.send(users);
    });
};


// Add a new user
exports.add_user = function(req, res) {
    var newUser = new User(req.body);

    // handles null error
    if (!newUser.fname || !newUser.lname || !newUser.email || 
        !newUser.handlerLevelID) {
        res.status(400).send({error: true, message: "Please enter all required fields."});
    }
    else {
        User.createUser(User, function(err, horse) {
            if (err) { res.send(err); }
            res.json(user);
        });
    }
};