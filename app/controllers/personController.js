(function(){
    'use strict'
    var person = require('../data/person.js');

    module.exports = {

        postPerson: function(req, res) {
            //console.log(req.body);
            person.create(req.body, function(err){
                if(err){
                    res.json({error: err.message});
                }
                else {
                    console.log('Before res end');
                    res.json({data: req.body.firstName + ' added successfully!'});
                }
            })

        },
        getPeople: function(req, res){
            res.json({data: 'respond future People list received'});
        }
    };
}());
