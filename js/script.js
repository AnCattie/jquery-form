// Solution goes here
$(document).ready(function(){
    
// email
let testEmail = /^[A-Z0-9.._%+-]+@(([A-Z0-9-])+\.)+[A-Z]{2,4}$/i;

// function less then 5 characters 
    function checkl() {
        let name = $("#display-name").val();
        let emailinput = $("#email").val();
        if(name.length<5){
            $("#display-name").css("border-color","red");
        }
        else{
            $("#display-name").css("border-color","green")
        };
        if (testEmail.test(emailinput)){
        $("#email").css("border-color","green");
        }
        else {
            $("#email").css("border-color","red");
        }
    };

// function passwordvalidation
    function passwordconfirmation() {
        let password = $("#pass").val();
        let confirmPassword = $("#pass-confirm").val();
        if (password != confirmPassword || password === "" || password.length<6){
            $("#mistake").show();
            $("#pass, #pass-confirm").css("border-color","red");
        }
        else{
            $("#mistake").hide();
            $("#pass, #pass-confirm").css("border-color","green");
        }
    
    };

 $("#send").on("click",function(event){
     event.preventDefault()
     passwordconfirmation();
     checkl();
 });
});     