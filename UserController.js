'use strict';

var User = require('../models/userModel.js');

// Get all horses
exports.list_all_users = function(req, res) {
    User.getAllUsers(function(err, users) {
        if (err) { res.send(err); }
        res.send(users);
    });
};

