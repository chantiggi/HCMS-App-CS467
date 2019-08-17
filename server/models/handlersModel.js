'use strict';
var sql = require('./db.js');

//Handlers object constructor
var Handlers = function(handlers) {
    this.handlers = handlers.handlers;
    this.handlerID = handlers.handlerLevelID;
    this.handler = handlers.handlerLevelName;
}

//Need to update with org info
Handlers.getAllPossibleHandlerLevels = function(result) {
    sql.query("SELECT HandlerLevel.handlerLevelID, HandlerLevel.handlerLevelName FROM HandlerLevel WHERE HandlerLevel.orgID = 1",
    function(err, res) {
        if(err) {
            console.log("Error with SQL query: ", err);
            result(null, err);
        }
        else {
            //console.log("All available handlers for this org are: ", res);
            result(null, res);
        }
    })
}

module.exports = Handlers;