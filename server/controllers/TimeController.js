'use strict';

var Time = require('../models/TimeModel.js');

// Get all available times for dropdown lists
exports.get_all_times = function(req, res) {
    Time.getAllPossibleTimes(function(err, times) {
        if (err) { res.send(err); }
        res.send(times);
    })
}