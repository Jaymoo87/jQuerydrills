function disbutton() {
if ($('#textbox').val().length === 0) {
    
    $('#btnSubmit').attr('disabled', true);

} else {
    $('#btnSubmit').keyup('disabled', false)
}};


// reference to submit button click event added
$('#btnSubmit').click(function (){
    $(function () {
        //sends and alert message with the text in the string
        alert("Don't Touch Me right THERE!");
        //disbutton()
        // alerts the value in the text input box
        alert($('#textbox').val())
        
    });
});    
