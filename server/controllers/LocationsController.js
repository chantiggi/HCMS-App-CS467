'use strict';

var Locations = require('../models/locationsModel.js');

// Get all available locations for dropdown lists
exports.get_all_locations = function(req, res) {
    Locations.getAllPossibleLocations(function(err, locations) {
        if (err) { res.send(err); }
        res.send(locations);
    })
}