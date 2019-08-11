'use strict';

var Org = require('../models/orgModel.js');

// Get org info
exports.list_org = function(req, res) {
    Org.getOrg(function(err, users) {
        if (err) { res.send(err); }
        res.send(Org);
    });
};

