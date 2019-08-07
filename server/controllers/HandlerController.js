'use strict';

var Handlers = require('../models/handlersModel.js');

// Get all available handler levels for dropdown lists
exports.get_all_handler_lvls = function(req, res) {
    Handlers.getAllPossibleHandlerLevels(function(err, handlers) {
        if (err) { res.send(err); }
        res.send(handlers);
    })
}