$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
    });
});

$("#email").on("input", function() {
    let email = $("#email").val()
    $.post(
        "check_email.php",
        {email: email},
        function (data) {
            if (data == 1) {
                $("#email_error").html("<span class='text-success'>Available</span>")
            }else{
                $("#email_error").html("<span class='text-danger'>Already Taken</span>")
            }
        }
        )
})