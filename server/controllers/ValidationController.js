'use strict';

var LogIn = require('../models/LogInModel.js');

// Validate the user's log-in
exports.validate_login = function(req, res) {
    LogIn.validateUserLogIn(req.params.username, req.params.password, 
        function(err, login) {
        if (err) { res.send(err); }
        res.json(login);
    })
}