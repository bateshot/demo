(function(){
    'use strict'
    var colorsArray = require('../data/common.js').favoriteColors;

    var getColors = function getColors(req, res){

        if(colorsArray && colorsArray.length > 0){
            res.json({data: colorsArray});
        }
        else{
            res.json({error: 'Error getting colors!'});
        }
    }

    module.exports = {
        getColors: getColors
    };
}());
