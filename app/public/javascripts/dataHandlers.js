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
    get: function(filter, callback){
        var queryString = '';

        if(filter && filter.length !== 0){
            queryString = '?';
            $.each( filter, function( key, value ) {
                queryString += key;
                queryString += '=';
                queryString += value;
                queryString += '&';
            });
        }
        $.get('/api/collection' + queryString, function(res){
            if(res.error){
                toastr.error(res.error);
            }
            else{
                callback(res.data);
            }
        });
    }
}

