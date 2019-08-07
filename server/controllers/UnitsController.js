'use strict';

var Units = require('../models/unitsModel.js');

// Get all available units for dropdown lists
exports.get_all_units = function(req, res) {
    Units.getAllPossibleUnits(function(err, units) {
        if (err) { res.send(err); }
        res.send(units);
    })
}