$(document).ready(function(){
    console.log("Feedback ready!");
    
    $(".alert-success").css("display","none");
    $(".alert-danger").css("display","none");
    $("#responsedisplayarea").css("display","none");
    
    $("#responsesubmitb").click(function(){
        var response = $('textarea#message').val();
        console.log(response);
        $(".responsecounsel").html("<em>Counselor: </em>"+response);
        
        //Send data to server and confirm response 
        
        //IF THEN rules to determine feedback
        
        $(".alert-success").fadeIn("fast");
        $(".alert-danger").fadeIn("fast");
        $("#responsedisplayarea").fadeIn("fast");
        $("#responsewritearea").fadeOut("fast");
    })
});