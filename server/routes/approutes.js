'use strict';

module.exports = function(app) {
    var HorseCtrl = require('../controllers/HorseController');

    //Horse Routes
    app.route('/restapi/allhorses')
        .get(HorseCtrl.list_all_horses);
    
    app.route('/restapi/onehorse/:horseID')
        .get(HorseCtrl.get_a_horse);

}