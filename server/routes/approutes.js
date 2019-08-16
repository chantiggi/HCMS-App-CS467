'use strict';

module.exports = function(app) {
    // Controllers
    var ValidationCtrl = require('../controllers/ValidationController');
    var HorseCtrl = require('../controllers/HorseController');
    var HandlerCtrl = require('../controllers/HandlerController');
    var LocationsCtrl = require('../controllers/LocationsController');
    var AmtsCtrl = require('../controllers/AmountsController');
    var UnitsCtrl = require('../controllers/UnitsController');
    var FeedCtrl = require('../controllers/FeedController');
    var MedsCtrl = require('../controllers/MedsController');
    var UserCtrl = require('../controllers/UserController');
    var OrgCtrl = require('../controllers/OrgController');

    var HomeCtrl = require('../controllers/HomeController');

    var TimeCtrl = require('../controllers/TimeController');

    // LogIn Validation Routes
    app.route('/restapi/validateLogIn/:username/:password')
        .get(ValidationCtrl.validate_login);

    // Horse Routes
    app.route('/restapi/horses')
        .get(HorseCtrl.list_all_horses)
        .post(HorseCtrl.add_horse);    
    app.route('/restapi/horses/:horseID')
        .get(HorseCtrl.get_a_horse)
        .put(HorseCtrl.update_a_horse)
        .delete(HorseCtrl.delete_a_horse);

    // Feed Routes
    app.route('/restapi/allfeed')
        .get(FeedCtrl.get_all_feed);
    app.route('/restapi/feed/:horseID')
        .get(FeedCtrl.get_horse_feed);


    app.route('/restapi/meds/:horseID')
        .get(MedsCtrl.get_horse_meds);
    
    // Handler Routes
    app.route('/restapi/allhandlerlevels')
        .get(HandlerCtrl.get_all_handler_lvls); 

    // Location Routes    
    app.route('/restapi/alllocations')
        .get(LocationsCtrl.get_all_locations);
    
    app.route('/restapi/allamounts')
        .get(AmtsCtrl.get_all_amounts); 
    
    app.route('/restapi/allunits')
        .get(UnitsCtrl.get_all_units);      

    app.route('/restapi/allmeds')
        .get(MedsCtrl.get_all_meds);
    app.route('/restapi/am-meds')
        .get(MedsCtrl.list_all_horses_am_meds);
    app.route('/restapi/pm-meds')
        .get(MedsCtrl.list_all_horses_pm_meds);
    app.route('/restapi/am-meds/:horseID')
        .get(MedsCtrl.get_horse_am_meds);
    app.route('/restapi/pm-meds/:horseID')
        .get(MedsCtrl.get_horse_pm_meds);

    // Handler Routes
    app.route('/restapi/allhandlerlevels')
        .get(HandlerCtrl.get_all_handler_lvls);

    // Location Routes
    app.route('/restapi/alllocations')
        .get(LocationsCtrl.get_all_locations);

    // Amount Routes
    app.route('/restapi/allamounts')
        .get(AmtsCtrl.get_all_amounts); 
    
    // Unit Routes    
    app.route('/restapi/allunits')
        .get(UnitsCtrl.get_all_units);

    // Timing Routes
    app.route('/restapi/alltimes')
        .get(TimeCtrl.get_all_times);

    //User Routes
    app.route('/restapi/users')
        .get(UserCtrl.list_all_users)
        .post(UserCtrl.add_user);
    app.route('/restapi/users/:userID')
        .get(UserCtrl.get_a_user)
        .put(UserCtrl.update_a_user)

    //Org Routes
    app.route('/restapi/org')
        .get(OrgCtrl.list_org)
        .post(OrgCtrl.add_org);

    app.route('/restapi/org/:orgID')
        .get(OrgCtrl.get_org)
        .put(OrgCtrl.update_org);

    //Home Routes
    app.route('/restapi/home')
        .get(HomeCtrl.get_blog)
        .post(HomeCtrl.add_blog);  

    app.route('/restapi/home/:orgNoteID')
        .get(HomeCtrl.get_a_blog)  
        .put(HomeCtrl.update_a_blog)      

    /* Render the page using index.pug file*/
    app.get('*', (req, res) => {
        var sess = req.session;
        // use session variables here
        res.render('index');
    });

    //Still need to set up something as a failsafe for invalid URLs
    // to redirect to the home page, etc
}
