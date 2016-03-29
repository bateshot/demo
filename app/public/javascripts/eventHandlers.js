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
            $newRow = $('<tr>'),
            $tableBody = $('#mainTable tbody').first();

        $('#filter input').each(function(){
            if(this.value && this.value != ''){
                filter[this.name] = this.value;
            }
        });



        //Reset body
        $tableBody.html('');


        //Generate table
        data.get(filter, function(people){
            $.each(people, function(index, person){
                $newRow = $('<tr>');
                $newRow.append('<td>' + (index + 1) + '</td>');
                $newRow.append('<td>' + person.firstName + '</td>');
                $newRow.append('<td>' + person.lastName + '</td>');
                $newRow.append('<td>' + person.favoriteColor + '</td>');
                $tableBody.append($newRow);
            })
        });
    });



    //FILTER CLICK EVENT
    $('#filter').on('submit', function(e){
        e.preventDefault();
        $(this).trigger('updateTable');
    })

    //Loading data getter
    $document.trigger('updateTable');


    //COLORING ROWS
    $('table').on('dblclick', 'td:last-child', function(){
        var $this = $(this);
        $this.parent().css('background-color', $this.text());
    })


}(jQuery));
