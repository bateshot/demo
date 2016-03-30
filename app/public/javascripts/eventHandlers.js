(function($){
    'use strict';
    var $document = $(document);


    $document.ready(function(){
        toastr.success('toastr up and running');
        data.getColors(function(colors){
            console.log(colors);
        });
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
        if($.trim(formData.firstName) == '' || $.trim(formData.lastName) == ''){
            toastr.warning('Invalid names provided!');
            return;
        }
        //post here
        data.set(formData);
    });

    //GETTING PEOPLE AND FILTERING
    //custom event for the update table
    $document.on('updateTable', function(){
        var filter = {},
            $newRow = $('<tr>'),
            colorFilter = $('#filter select option:selected').text(),
            $tableBody = $('#mainTable tbody').first();

        $('#filter input').each(function(){
            if(this.value && this.value != ''){
                filter[this.name] = this.value;
            }
        });
        if(colorFilter != ''){
            console.log(colorFilter);
            filter['favoriteColor'] = colorFilter;
        }



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
        var $this = $(this),
            color = $this.text(),
            $parent = $this.parent();

        //Toggle color on DBclick
        if (!$parent.attr('style')){
            $parent.attr('style', 'background-color: ' + color);
        }
        else {
            $parent.removeAttr('style');
        }


    })


}(jQuery));
