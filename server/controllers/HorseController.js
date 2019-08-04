'use strict';

var Horse = require('../models/horseModel.js');

// Get all horses
exports.list_all_horses = function(req, res) {
    Horse.getAllHorses(function(err, horses) {
        if (err) { res.send(err); }
        console.log('Successfully retrieved horses: ', horses);
        res.send(horses);
    });
};

// Add a new horse
exports.add_horse = function(req, res) {
    var newHorse = new Horse(req.body);

    // handles null error
    if (!newHorse.horseName || !newHorse.handlerLevelID || 
        !newHorse.dayLocationID || !newHorse.nightLocationID) {
        res.status(400).send({error: true, message: "Please enter all required fields."});
    }
    else {
        Horse.createHorse(newHorse, function(err, horse) {
            if (err) { res.send(err); }
            res.json(horse);
        });
    }
};

// Get an individual horse
exports.get_a_horse = function(req, res) {
    Horse.getHorseById(req.params.horseID, function(err, horse) {
        if (err) { res.send(err); }
        res.json(horse);
    });
};

// Update an individual horse
exports.update_a_horse = function(req, res) {
    Horse.updateHorseById(req.params.horseID, new Horse(req.body), function(err, horse) {
        if (err) { res.send(err); }
        res.json(horse);
    });
};

// Delete an individual horse
exports.delete_a_horse = function(req, res) {
    Horse.deleteHorseById(req.params.horseID, function(err, horse) {
        if (err) { res.send(err); }
        res.json({ message: "Horse successfully deleted" });
    });
}