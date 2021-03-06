'use strict';

var Amounts = require('../models/amountsModel.js');

// Get all available amounts for dropdown lists
exports.get_all_amounts = function(req, res) {
    Amounts.getAllPossibleAmounts(function(err, amounts) {
        if (err) { res.send(err); }
        res.send(amounts);
    })
}

exports.get_amt_by_id = function(req, res) {
    Amounts.getAmountNameById(req.params.amountID, function(err, amount) {
        if(err) {res.send(err);}
        res.json(amount);
    })
}