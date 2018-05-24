/*
The purpose of jQuery is to make it much easier to use JavaScript on your website.

jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.
*/

$(document).ready(function(){

   // jQuery methods go here...
    console.log("Hello world!");
    
    
    // Modules page 
    $("#vasercard").hover(function(){
        $(this).css("background-color", "lightgray");
    },function(){
        $(this).css("background-color", "white");
    });
    
    $("#vasercard").click(function(){
        window.open("modules/vase-r.html","_blank"); 
    });
    
    // Sub-module page
    $(".list-group-navcus .list-group-item").hover(function(){
        $(this).addClass("activecus");
    },function(){
        $(this).removeClass("activecus");
    });
    
    $(".list-group-navcus .list-group-item").click(function(){
        $(".list-group-navcus .list-group-item").removeClass("activecus");
        $(".list-group-navcus .list-group-item").removeClass("activecus2"); 
    });
    
    $(".list-group-navcus .list-group-item:nth-child(1)").click(function(){
        $(".list-group-1").removeClass("invisiblecus");
        $(".list-group-1").addClass("visiblecus");
        $(".list-group-2").removeClass("visiblecus");
        $(".list-group-2").addClass("invisiblecus");
        $(".list-group-3").removeClass("visiblecus");
        $(".list-group-3").addClass("invisiblecus");
        $(".list-group-4").removeClass("visiblecus");
        $(".list-group-4").addClass("invisiblecus");
        $(this).addClass("activecus2");
    });
    
     $(".list-group-navcus .list-group-item:nth-child(2)").click(function(){
        $(".list-group-2").removeClass("invisiblecus");
        $(".list-group-2").addClass("visiblecus");
        $(".list-group-1").removeClass("visiblecus");
        $(".list-group-1").addClass("invisiblecus");
        $(".list-group-3").removeClass("visiblecus");
        $(".list-group-3").addClass("invisiblecus");
        $(".list-group-4").removeClass("visiblecus");
        $(".list-group-4").addClass("invisiblecus");
         $(this).addClass("activecus2");
    });
    
     $(".list-group-navcus .list-group-item:nth-child(3)").click(function(){
        $(".list-group-3").removeClass("invisiblecus");
        $(".list-group-3").addClass("visiblecus");
        $(".list-group-2").removeClass("visiblecus");
        $(".list-group-2").addClass("invisiblecus");
        $(".list-group-1").removeClass("visiblecus");
        $(".list-group-1").addClass("invisiblecus");
        $(".list-group-4").removeClass("visiblecus");
        $(".list-group-4").addClass("invisiblecus");
         $(this).addClass("activecus2");
    });
    
     $(".list-group-navcus .list-group-item:nth-child(4)").click(function(){
        $(".list-group-4").removeClass("invisiblecus");
        $(".list-group-4").addClass("visiblecus");
        $(".list-group-2").removeClass("visiblecus");
        $(".list-group-2").addClass("invisiblecus");
        $(".list-group-3").removeClass("visiblecus");
        $(".list-group-3").addClass("invisiblecus");
        $(".list-group-1").removeClass("visiblecus");
        $(".list-group-1").addClass("invisiblecus");
         $(this).addClass("activecus2");
    });
    
});