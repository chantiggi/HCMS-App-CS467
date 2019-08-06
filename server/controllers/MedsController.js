'use strict';

var Meds = require('../models/medsModel.js');

// Get all horses AM meds
exports.list_all_horses_am_meds = function(req, res) {
    Meds.getAllHorsesAmMeds(function(err, meds) {
        if (err) { res.send(err); }
        res.send(meds);
    });
};

// Get all horses PM meds
exports.list_all_horses_pm_meds = function(req, res) {
    Meds.getAllHorsesPmMeds(function(err, meds) {
        if (err) { res.send(err); }
        res.send(meds);
    });
};

exports.get_horse_meds = function(req, res) {
    Meds.getHorseMeds(req.params.horseID, function(err, meds) {
        if (err) { res.send(err); }
        res.json(meds);
    });
};

exports.get_horse_am_meds = function(req, res) {
    Meds.getHorseAmMeds(req.params.horseID, function(err, meds) {
        if (err) { res.send(err); }
        res.json(meds);
    });
};

exports.get_horse_pm_meds = function(req, res) {
    Meds.getHorsePmMeds(req.params.horseID, function(err, meds) {
        if (err) { res.send(err); }
        res.json(meds);
    });
};