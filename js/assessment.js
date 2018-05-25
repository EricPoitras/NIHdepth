$(document).ready(function(){
    $("#backnavigation").click(function(){
        window.onbeforeunload = function() {
            return "Are you sure you want to navigate away? Your responses to the VASE-R will now be saved, and you will be required to submit new responses to each client.";
        }
    });
});






