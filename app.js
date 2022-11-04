$(document).ready(function () {

    $('body').append('<div></div>')

    
    
    // reference to submit button click event added
    $('#btnSubmit').click(function (e) {
         e.preventDefault();
        //sends and alert message with the text in the string
        alert("Don't Touch Me right THERE!");
        
        // alerts the value in the text input box
        alert($('#textbox').val());
        
        
        $('div').append('<h2>' + $('input').val() + '</h2>');
         
        
    });

    $('#textbox').keyup(function () {

       
        if ($('#textbox').val().length > 0) {
            $('#btnSubmit').prop('disabled', false);
            //return;
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