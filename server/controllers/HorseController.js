'use strict';

var Horse = require('../models/horseModel.js');

exports.list_all_horses = function(req, res) {
    Horse.getAllHorses(function(err, horses) {
        console.log('Now in horseController.js list_all_horses function');
        if (err) { res.send(err); }
        console.log('successfully retrieved horses: ', horses);
        res.send(horses);
    });
};

exports.get_a_horse = function(req, res) {
    Horse.getHorseById(req.params.horseID, function(err, horse) {
        if (err) { res.send(err); }
        res.json(horse);
    });
};