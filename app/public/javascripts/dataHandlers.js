'use strict';

var data = {
    // **************
    // set new person
    set: function(data){
        $.post('/api/collection', data, function(res){
            if(res.error){
                toastr.error(res.error);
            }
            else{
                toastr.success(res.data);
            }
        })
    },
    // **********
    // get people
    get: function(filter){

    }
}

