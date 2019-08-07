'use strict';

module.exports = function(app) {
    // Controllers
    var HorseCtrl = require('../controllers/HorseController');
    var MedsCtrl = require('../controllers/MedsController');
    var FeedCtrl = require('../controllers/FeedController');

    // Horse Routes
    app.route('/restapi/horses')
        .get(HorseCtrl.list_all_horses)
        .post(HorseCtrl.add_horse);
    
    app.route('/restapi/horses/:horseID')
        .get(HorseCtrl.get_a_horse)
        .put(HorseCtrl.update_a_horse)
        .delete(HorseCtrl.delete_a_horse);

    app.route('/restapi/feed/:horseID')
        .get(FeedCtrl.get_horse_feed);
    
    app.route('/restapi/meds/:horseID')
        .get(MedsCtrl.get_horse_meds);

    app.route('/restapi/am-meds')
        .get(MedsCtrl.list_all_horses_am_meds);
    
    app.route('/restapi/pm-meds')
        .get(MedsCtrl.list_all_horses_pm_meds);
    
    app.route('/restapi/am-meds/:horseID')
        .get(MedsCtrl.get_horse_am_meds);
    
    app.route('/restapi/pm-meds/:horseID')
        .get(MedsCtrl.get_horse_pm_meds);

    /* Render the page using index.pug file*/
    app.get('*', (req, res) => {
        var sess = req.session;
        // use session variables here
        res.render('index');
    });

    //Still need to set up something as a failsafe for invalid URLs
    // to redirect to the home page, etc
}
