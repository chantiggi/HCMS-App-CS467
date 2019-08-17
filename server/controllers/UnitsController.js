'use strict';

var Units = require('../models/unitsModel.js');

// Get all available units for dropdown lists
exports.get_all_units = function(req, res) {
    Units.getAllPossibleUnits(function(err, units) {
        if (err) { res.send(err); }
        res.send(units);
    })
}

exports.get_unit_by_id = function(req, res) {
    Units.getUnitNameById(req.params.unitID, function(err, unit) {
        if(err) {res.send(err);}
        res.json(unit);
    })
}