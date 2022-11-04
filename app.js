$(document).ready(function () {
    

    $('body').append('<div></div>')


    // reference to submit button click event added
    $('#btnSubmit').click(function () {
    
    //sends and alert message with the text in the string
    alert("Don't Touch Me right THERE!");
    
    // alerts the value in the text input box
    alert($('#textbox').val())
    return;
});

$('#textbox').keyup(function () {
    
    let blank = false;
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