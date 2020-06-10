$(document).ready(function(){
    $("#newItem").focus();

    //When the new item form is submitted. 
    $("#newItemInput").submit(function( event ) {
        event.preventDefault();
        let newItemContent = $("#newItem").val();//Get the content of the input field.
        $("#newItem").val('');//Reset the input field for future input.
        AddItemToList(newItemContent, "#list");
    });

    $(document).on('change', '[type=checkbox]', function (){
        console.log ($(this));
        let parent = $(this).parent();
        if ($(this).is(":checked"))
        {
            $(this).siblings().addClass("checked");

        }
        else
        {
            $(this).siblings().removeClass("checked");
        }
    });


    let deleteHTML = '<i class="delete fa fa-trash" aria-hidden="true"></i>';

    //This will add the input item to the Todo List.
    //newItem: Content to be added into the todo list.
    //listID: Allow this function to add content to different lists, if I ever expand it to have such functionality.
    function AddItemToList(newItem, listID){
        let existingHtml = $(listID).html();
        $(listID).html(`${existingHtml}<li>${deleteHTML}<input type="checkbox"><label> ${newItem}</label></li>`);
    }

    $("body").on('click', '.delete', function(){
        $(this).parent().html(``);
    });
});