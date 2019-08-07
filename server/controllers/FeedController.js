'use strict';

var Feed = require('../models/feedModel.js');

// Get all possible feed options
exports.get_all_feed = function(req, res) {
    Feed.getAllPossibleFeed(function(err, feed) {
        if (err) { res.send(err); }
        res.json(feed);
    })
}

// Get feed for a single horse
exports.get_horse_feed = function(req, res) {
    Feed.getHorseFeed(req.params.horseID, function(err, feed) {
        if (err) { res.send(err); }
        res.json(feed);
    })
}