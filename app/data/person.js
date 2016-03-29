(function(){
    'use strict';
    var Person = require('mongoose').model('Person');
    var colors = require('./common.js').favoriteColors;

    function createPerson(person, callback){
        //Validation of input
        var error = {
                message: ''
            },
            newPerson;

        if(typeof person.firstName !== 'string'
            || person.firstName.length === 0) {
            error.message += ' Invalid first name.';
        }
        if(typeof person.lastName !== 'string'
            || person.lastName.length === 0) {
            error.message += ' Invalid last name.';
        }
        console.log(colors);
        if(!colors.some(function(color){
            return color.name === person.favoriteColor;
        })){
            error.message += ' Invalid color.';
        }

        //Error checker
        if(error.message.length !== 0){
            callback(error);
            return;
        }

        //Adding new person to db
        newPerson = new Person(person);
        newPerson.save(function(err){
            if(err){
                error.message = 'The DB has experienced some issues!';
                callback(error);
            } else{
                console.log('New item added!');
                callback();
            }
        });
    }
    //Finds people based on input query string
    function getPeople(options, callback){
        Person.find(options, function(err, people){
            if(err){
                callback(err);
            }else{
                callback(err, people);
            }
        })
    }

    module.exports = {
        create: createPerson,
        find: getPeople
    };
}());
