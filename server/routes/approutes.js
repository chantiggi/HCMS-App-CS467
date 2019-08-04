'use strict';

module.exports = function(app) {
    // Controllers
    var HorseCtrl = require('../controllers/HorseController');

    // Horse Routes
    app.route('/restapi/horses')
        .get(HorseCtrl.list_all_horses)
        .post(HorseCtrl.add_horse);
    
    app.route('/restapi/horses/:horseID')
        .get(HorseCtrl.get_a_horse)
        .put(HorseCtrl.update_a_horse)
        .delete(HorseCtrl.delete_a_horse);

    /* Render the page using index.pug file*/
    app.get('*', (req, res) => {
        var sess = req.session;
        // use session variables here
        res.render('index');
    });

    //Still need to set up something as a failsafe for invalid URLs
    // to redirect to the home page, etc
}