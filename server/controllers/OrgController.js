'use strict';

var Org = require('../models/orgModel.js');

// Get org info
exports.list_org = function(req, res) {
    Org.getOrg(function(err, org) {
        if (err) { res.send(err); }
        res.send(org);
    });
};

//Add new org
exports.add_org = function(req, res) {
    Org.addOrg(function(err, org) {
        if (err) { res.send(err); }
        res.send(org);
    });
};

//Get individual org info
exports.get_org = function(req, res) {
    Org.getOrgByID(req.params.orgID, function(err, org) {
        if (err) { res.send(err); }
        res.json(Org);
    });
};

//Update individual org
exports.update_org = function(req, res) {
    Org.updateOrgById(req.params.orgID, new Org(req.body), function(err, org) {
        if (err) { res.send(err); }
        res.json(Org);
    });
};
