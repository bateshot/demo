(function(){
    'use strict';
    var PersonModel = require('./personModel.js'),
        mongoose = require('mongoose');

    PersonModel.init();
    module.exports = function(config) {
        mongoose.connect(config.db);
        var db = mongoose.connection;

        db.once('open', function(err) {
            if (err) {
                console.log('Database could not be opened: ' + err);
                return;
            }

            console.log('Database up and running...')
        });

        db.on('error', function(err){
            console.log('Database error: ' + err);
        });


    }
}());
