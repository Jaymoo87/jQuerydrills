$(document).ready(function () {

    //div in the body
    $('body').append('<div><ul></ul></div>')
    //ul in the body
    

    
    
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
       
       // appends the 'li' element into the the ul item that is inside the div
        $('ul').append('<li>' + $('input').val() + '</li>');
        
        // for h2 mouseover event in drills
       //$('h2').mouseover(function () {


       //click event for list element random color
        $('li').click(function () {
           
        $('li').css({'color' : randomColor(), 'border-radius': '4em',})
           // randomly picks each value for rgb colors. (16.7 million variations)
        function randomColor() {
           const r = [Math.floor(Math.random() * 256)];
           const g = [Math.floor(Math.random() * 256)];
           const b = [Math.floor(Math.random() * 256)];
           
           const headColor = "rgb(" + r + " , " + g + " , " + b + ")"
           return headColor;
           };
       });
       // double click removes list item, 
       $('li').dblclick(function (){
        $('li').remove();
       })
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