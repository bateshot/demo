(function(){
    'use strict';
    var Person = require('mongoose').model('Person');

    function createPerson(person, callback){
        //User.create(user, callback);
    }

    function getPeople(options){
        //TODO

        // User
        //     .findOne({email : email}, function(err, user){
        //         if(err) return err;

        //         var newBest = {
        //             moves: moves,
        //             time: time
        //         };

        //         //update high score:
        //         user.best.splice(type, 1, newBest);


        //         //save user data
        //         user.save(function(err){
        //             if(err){
        //                 console.log('error updating new best');
        //                 return err;
        //             }
        //             console.log('Best score for ' + user.email + ' updated');
        //         });
        //     });
    }

    module.exports = {
        create: createPerson,
        find: getPeople
    };
}());
