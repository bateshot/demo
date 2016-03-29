(function(){
    'use strict';
    var Person = require('mongoose').model('Person');
    var colors = require('./common.js').favoriteColors;

    function createPerson(person, callback){
        //Validation of input
        var error,
            newPerson;

        if(typeof person.firstName !== 'string'
            || person.firstName.length === 0) {
            error.message += ' Invalid first name.';
        }
        if(typeof person.lastName !== 'string'
            || person.lastName.length === 0) {
            error.message += ' Invalid last name.';
        }
        // if(!colors.some(function(color){
        //     return color.neme === person.favoriteColor;
        // })){
        //     error.message += ' Invalid color.';
        // }

        //Error checker
        if(error){
            callback(error);
            return;
        }

        newPerson = new Person(person);
        newPerson.save(function(err){
            if(err){
                error.message = 'The DB has experienced some issues!';
                callback(error);
            } else{
                console.log('New item added!');
            }
        });
    }

    function getPeople(options){
        //TODO
    }

    module.exports = {
        create: createPerson,
        find: getPeople
    };
}());
