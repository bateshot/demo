(function($){
    'use strict';
    $(document).ready(function(){
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
    //TODO


    //COLORING ROWS
    //TODO

}(jQuery));
