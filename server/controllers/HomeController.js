'use strict';

var Home = require('../models/homeModel.js');

// Get blogs
exports.get_blog = function(req, res) {
    Home.getBlogPosts(function(err, home) {
        if (err) { res.send(err); }
        res.send(home);
    });
};

exports.get_a_blog = function(req, res) {
    Home.getBlogByID(req.params.orgNoteID, function(err, post) {
        if (err) { res.send(err); }
        res.json(post);
    });
};
