(function($){
    'use strict';

    var data = {
        // **************
        // set new person
        set: function(data){
            $.post('/api/collection', data, function(res){
                console.log(res);
            })
        },
        // **********
        // get people
        get: function(filter){

        }
    }

}(jQuery));
