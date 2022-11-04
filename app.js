$(document).ready(function () {

    //div in the body
    $('body').append('<div></div>')
    //ul in the div
    $('body').append('<ul></ul>')

    
    
    // reference to submit button click event added
    $('#btnSubmit').click(function (e) {
        //stops the button from going back to default (not disabled) setting
        e.preventDefault();
        //sends and alert message with the text in the string
        alert("Don't Touch Me right THERE!");
        
        // alerts the value in the text input box
        alert($('#textbox').val());
        
        // creates an h2 element with the text value inside of it, h2 is inside the div
        // $('div').append('<h2>' + $('input').val() + '</h2>');
        $('ul').append('<li>' + $('input').val() + '</li>');
        
        
    });

    $('#textbox').keyup(function () {

       // changed the disabled attribute based on the value (>0) of the textbox
        if ($('#textbox').val().length > 0) {
            $('#btnSubmit').prop('disabled', false);
            
        };


    });
});





//$('#textbox').on('input change', function() {
    //       if($('#textbox').val().length ==  0) {
        //          $('#btnsubmit').prop('disabled', true);
  //      } else {
      //         $('#btnSubmit').prop('disabled', false);
  //      }
  //  });