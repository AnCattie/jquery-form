// Solution goes here
$(document).ready(function(){
    
// submit-button
$("send").on("click",function(){
    
})
function check() {
    var name= $('.form-control').val();
    if(name){
        if(name.length>5){
            for(var i=0;i<name.length;i++) {
                if(name.length<5){
                    $('#mistake').text('Please enter your name - at least 5 characters ');
                    $('#mistake').css('color','red');
                    return false;
                }
            }
                alert('form is going to be submitted');
                $(".form-control").css("color", "green");
                return true;
        }
    }
     $('#error').text('Name cant be blank');
     $('#error').css('display','inline-block');
    return false;
}
    // function less then 5 characters 
    function check() {
        var name= $('#display-name').val();
            if(name.length<5){
                $("#display-name").css("color","red");
                alert($("#mistake"));
                    }
            else(
                $("#display-name").css("color","green")
            );
            };

    // function passwordvalidation
        function passwordconfirmation() {
            let password = $("#pass").val();
            let confirmPassword = $("#pass-confirm").val();
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            else (
                alert("Passwords are correct")
            );
        };

    // function for empty input
        $("#send").click(function(){
            if($(".form-control").val() == ""){
                alert('Input can not be left blank');
            }
        });

    // function for reset button 
        $('#reset').click(function(e){
            $(".form-control")[0].reset();
        });






});