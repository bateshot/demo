'use strict';

var data = {
    // **************
    // set new person
    set: function(data, callback){
        $.post('/api/collection', data, function(res){
            if(res.error){
                toastr.error(res.error);
                callback('error');
            }
            else{
                toastr.success(res.data);
                callback('success');
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
    },
    getColors: function(callback){
        $.get('/api/colors', function(res){
            if(res.error){
                toastr.error(res.error);
            }
            else{
                callback(res.data);
            }
        });
    }
}

