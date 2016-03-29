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
                    res.json({data: req.body.firstName + ' added successfully!'});
                }
            })

        },
        getPeople: function(req, res){

            person.find(req.query, function(err, people){
                if(err){
                    res.json({error: 'Error getting items!'});
                }
                else{
                    res.json({data: people});
                }
            })
        }
    };
}());
