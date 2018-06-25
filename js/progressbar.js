$(document).ready(function(){
    console.log("Progress bar ready!");
    var baselineper;
    var posttreatper;
    if (localStorage.getItem("PercentageBaseline") === null || localStorage.getItem("PercentageBaseline") === "NaN") {
        baselineper = 0;    
    }else{
        baselineper = localStorage.getItem("PercentageBaseline");
    }
    if(localStorage.getItem("PercentagePostTreatment") === null || localStorage.getItem("PercentagePostTreatment") === "NaN"){
        posttreatper = 0;
    }else{
        posttreatper = localStorage.getItem("PercentagePostTreatment");
    }
    var percentagevaser = (baselineper + posttreatper)/200;
    $("#vasercard .progress-bar").text(percentagevaser+"%");
    $("#vasercard .progress-bar").css({"width":percentagevaser+"%"});
    $("#vasercard .progress-bar").attr("aria-valuenow",percentagevaser);
    
    if (localStorage.getItem("PercentageMI") === null || localStorage.getItem("PercentageMI") === "NaN") {
        $("#micard .progress-bar").text("0%");
        $("#micard .progress-bar").css({"width":"0%"});
        $("#micard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageMI");
        $("#micard .progress-bar").text(percentage+"%");
        $("#micard .progress-bar").css({"width":percentage+"%"});
        $("#micard .progress-bar").attr("aria-valuenow",percentage);
    }
    
    if (localStorage.getItem("PercentageOARS") === null || localStorage.getItem("PercentageOARS") === "NaN") {
        $("#oarscard .progress-bar").text("0%");
        $("#oarscard .progress-bar").css({"width":"0%"});
        $("#oarscard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageOARS");
        $("#oarscard .progress-bar").text(percentage+"%");
        $("#oarscard .progress-bar").css({"width":percentage+"%"});
        $("#oarscard .progress-bar").attr("aria-valuenow",percentage);
    }
});