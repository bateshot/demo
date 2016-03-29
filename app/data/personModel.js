(function(){
    'use strict';
    var mongoose = require('mongoose');


    //Person Schema
    module.exports.init = function() {
        var personSchema = mongoose.Schema({
            firstName: {type: String, required: true},
            lastName: {type: String, required: true},
            favoriteColor: {type: String,
                            required: true } //TO DO validation
        });

        var Person = mongoose.model('Person', personSchema);
    };

}());
