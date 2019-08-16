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

// Add new blog
exports.add_blog = function(req, res) {
    let newHome = req.body;

    // handles null error
    if (!newHome.orgNote) {
        res.status(400).send({error: true, message: "Please enter all required fields."});
    }
    else {
        Home.createBlog(newHome, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    }
    
};

// Update an individual blog
exports.update_a_blog = function(req, res) {
    Home.updateBlogById(req.body, function(err, post) {
        if (err) { res.send(err); }
        res.json(post);
    });
};