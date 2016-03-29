(function($){
    'use strict';
    var $document = $(document);


    $document.ready(function(){
        toastr.success('toastr up and running');
    });



    //ADDING A NEW PERSON
    $("#addNewPerson").on('submit', function(e) {
        var formData;
        //prevent Default functionality
        e.preventDefault();



        formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            favoriteColor: $('#favoriteColor').val()
        };

        //VALIDATION
        if(formData.firstName.length === 0 || formData.lastName.length === 0){
            toastr.warning('Invalid names provided!');
            return;
        }

        //TODO validate string with spaces only

        console.log(formData);
        //post here
        data.set(formData);
    });

    //GETTING PEOPLE AND FILTERING
    //custom event for the update table
    $document.on('updateTable', function(){
        var filter = {},
            $newRow = $('<tr>');

        $('#filter input').each(function(){
            if(this.value && this.value != ''){
                console.log(this.value)
                filter[this.name] = this.value;
            }
        });

        console.log(filter);
        data.get(filter);
    });



    //FILTER CLICK EVENT
    $('#filter').on('submit', function(e){
        e.preventDefault();
        $(this).trigger('updateTable');
    })

    //Loading data getter
    $document.trigger('updateTable');


    //COLORING ROWS
    //TODO

}(jQuery));
