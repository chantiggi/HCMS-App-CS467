'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'horse-care-mgmt-db.cwljx58pk2d6.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'cs467-summer2019',
    database: 'hcmsdb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database is connected!");
})

module.exports = connection;