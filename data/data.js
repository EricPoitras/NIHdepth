//Main variables to store and retrieve (learning outcomes and user identifier)

//Username and Password Login
var username, password;

// Baseline VASE-R scores: 'bas' for Baseline followed by number identifier: var bas1, bas2, bas3, bas4, bas5, bas6, bas7, bas8, bas9, bas10, bas11, bas12, bas13, bas14, bas15, bas16, bas17, bas18, bas19, bas20;

var bas = [19];
var basanswerkey1 = ["3","4","2"];
var basanswercorrect1 = [2];
var basjustification = ["","",""];

// Post-Treatment VASE-R scores: 'pos' for Post-Treatment followed by number identifier: var pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11, pos12, pos13, pos14, pos15, pos16, pos17, pos18, pos19, pos20;

var pos = [19];
var posanswerkey1 = ["3","4","2"];
var posanswercorrect1 = [2];
var posjustification = ["","",""];

// Post-Treatment VASE-R scores: 'pos' for Post-Treatment followed by number identifier: var pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11, pos12, pos13, pos14, pos15, pos16, pos17, pos18, pos19, pos20;

var fol1 = [19];
var fol1answerkey1 = ["3","4","2"];
var fol1answercorrect1 = [2];
var fol1justification = ["","",""];

// Post-Treatment VASE-R scores: 'pos' for Post-Treatment followed by number identifier: var pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11, pos12, pos13, pos14, pos15, pos16, pos17, pos18, pos19, pos20;

var fol2 = [19];
var fol2answerkey1 = ["3","4","2"];
var fol2answercorrect1 = [2];
var fol2justification = ["","",""];

// Definition and Spirit of MI: var miconv1, miconv2, miconv3, miconv4, miconv5, miconv6;

var mi = [5];

// OARS: var openorclose1, openorclose2, openorclose3, openorclose4, openorclose5, openorclose6, openorclose7, openorclose8, openorclose9, openorclose10; var opentoclose1, opentoclose2, opentoclose3, opentoclose4, opentoclose5, opentoclose6, opentoclose7, opentoclose8, opentoclose9, opentoclose10; var idstem1, idstem2, idstem3, idstem4, idstem5, idstem6, idstem7, idstem8, idstem9, idstem10, idstem11, idstem12, idstem13, idstem14, idstem15, idstem16, idstem17; var rephrase1, rephrase2; var crestem1, crestem2; var sil1, sil2, sil3, sil4, sil5, sil6, sil7;

var oars = [57];

// Answer key OARS - 1. Closed; 2. Closed; 3. went off - open (google search metformin - medicaton in the past); 4. Open; 5. Closed;  6. delete; 7. open; 8. closed; 9. open; 10. open; https://docs.google.com/document/d/1QIHY4s-6Yafmh-VW40WcFctEJp6qbpIm-hCtPQlohBg/edit

var oarsanswerkey1 = ["closed","closed","open","closed","open","closed","open","closed","open","open"];
// Open and Closed Questions; items are true and false
var oarsanswercorrect1 = [9];

var oarsanswerkey2 = ["closed","open","closed","open","closed","closed","closed","open","open","open","closed","closed","open","open","open","closed","closed"];
// Open and Closed Questions; items are true and false
var oarsanswercorrect2 = [16];

// Open and Closed Questions; items are true and false / 2 open ended items, scored as true and false
 var oarsanswercorrect3 = [11];

// Identify reflections, scored as true and false
var oarsanswercorrect4 = [11];
var oarsanswerkey4 = ["reflection","reflection","else","reflection","else","else","reflection","reflection","reflection","reflection","reflection","else"];

// Relections; items are open ended, scored as true and false
 var oarsanswercorrect5 = [1];

// Affirmations; items are open ended, scored as true and false
 var oarsanswercorrect6 = [6];

// Progress Indicators for each module - percentage completion rate

var baspro, pospro, fol1pro, fol2pro, mipro, oarspro;
var perbaspro, perpospro, perfol1pro, perfol2pro, permipro, peroarspro;

// Percentage score of correct responses per skill

var peropenclose, perreflect, peraffirm;

// API classification of utterances in MI skills

var dsf, nn;

// Agent response key for utterances and open-ended questions

var agentanswerkey = ["advise_wop","facilitate","advise_wp","reflection_complex","changetalk","confront","na_other","neutral","question_closed","structure","reflection_simple","affirm","givinginfo","question_open","sustain"];

// Add rest of variables once the content id updated - add event listeners
// Add function to track user progress and variables
// Add function to post and get data from database

// Update data in local storage
function UpdateLocalStorage(){
    localStorage.username = username;
    localStorage.password = password;
}

// Clear data from local storage
function ClearLocalStorage(){
    localStorage.clear();
}

// Get data from local storage
function GetDataFromLocalStorage(){
    if (localStorage.getItem("username") != null) {
        $(".usernameval").val(localStorage.username);
    }
    if (localStorage.getItem("password") != null) {
        $(".passwordval").val(localStorage.password);
    }
}

// Update progress indicator for module completion
function UpdateProgressIndicator(array){
    var count = 0;
    for (i = 0; i < array.length; i++){
        if(array[i] !== null){
            count++;
        }
    }
    return count;
}

// Update score of correct response array
function UpdateProgressResponseCorrect(array){
    var count = 0;
    for (i = 0; i < array.length; i++){
        if(array[i] === true){
            count++;
        }
    }
    return count;
}

// Update percentage of progress and response per skill
function UpdateProgressMetrics(){
    // Calculate percentage of module progress
    perbaspro = baspro/20*100;
    perpospro = pospro/20*100;
    perfol1pro = fol1pro/20*100;
    perfol2pro = fol2pro/20*100;
    permipro = mipro/6*100;
    peroarspro = oarspro/58*100;
    
    // Calculate percentage of skill acquisition based on correct items
    var affirmcount = UpdateProgressResponseCorrect(oarsanswercorrect5);
    peraffirm = affirmcount/8*100;
    
    var reflectcount = UpdateProgressResponseCorrect(oarsanswercorrect4);
    perreflect = reflectcount/2*100;
    
    var openclosecount = UpdateProgressResponseCorrect(oarsanswercorrect1) + UpdateProgressResponseCorrect(oarsanswercorrect2) + UpdateProgressResponseCorrect(oarsanswercorrect3);
    
    peropenclose = openclosecount/39*100;
    
    // Update local storage of each progress indicator
    localStorage.setItem("PercentageBaseline",perbaspro);
    localStorage.setItem("PercentagePostTreatment",perpospro);
    localStorage.setItem("PercentageFollowUp1",perfol1pro);
    localStorage.setItem("PercentageFollowUp2",perfol2pro);
    localStorage.setItem("PercentageMI",permipro);
    localStorage.setItem("PercentageOARS",peroarspro);
    localStorage.setItem("PercentageAffirm",peraffirm);
    localStorage.setItem("PercentageReflect",perreflect);
    localStorage.setItem("PercentageOpenClose",peropenclose);
}

// Correct answers submitted to each assessment item
function CorrectAnswer(answer, correct, keynumber, index){
    if(answer[keynumber] === correct[index]){
        return true;
    }
    else{
        return false;
    }
}

// Get item response from single textarea 
function GetItemResponseTextArea(){
    var val = $("#ResponseTextarea, #message").val();
    var returnval;
    if(val === null){
        returnval = "N/A";
    }
    else{
        returnval = val;
    }
    return returnval;
}

// Get item response from multiple textarea 
function GetItemResponseMultiTextArea(){
    var val1 = $("#FormControlTextarea1").val();
    var val2 = $("#FormControlTextarea2").val();
    var val3 = $("#FormControlTextarea3").val();
    var returnval1;
    var returnval2;
    var returnval3;
    if(val1 === null){
        returnval1 = "N/A";
    }
    else{
        returnval1 = val1;
    }
    if(val2 === null){
        returnval2 = "N/A";
    }
    else{
        returnval2 = val2;
    }
    if(val3 === null){
        returnval3 = "N/A";
    }
    else{
        returnval3 = val3;
    }
    return [returnval1,returnval2,returnval3];
}

// Get item response from radio button component
function GetItemRadioButton(){
    var val1 = document.getElementById("radio1").checked;
    var val2 = document.getElementById("radio2").checked;
    var val3 = document.getElementById("radio3").checked;
    var val4 = document.getElementById("radio4").checked;
    var val5 = document.getElementById("radio5").checked;
    var returnval;
    if(val1 === true){
        returnval = "1";
    }
    else if(val2 === true){
        returnval = "2";
    }
    else if(val3 === true){
        returnval = "3";
    }
    else if(val4 === true){
        returnval = "4";
    }
    else{
        returnval = "5";
    }
    return returnval;
}

// Get item response from radio button - True/False component
function GetItemTrueFalseButton(){
    var val1 = document.getElementById("radio1").checked;
    var val2 = document.getElementById("radio2").checked;
    var returnval;
    if(val1 === true){
        returnval = "open";
    }
    else{
        returnval = "closed";
    }
    return returnval;
}

function GetItemTrueFalseButton2(){
    var val1 = document.getElementById("exampleRadios1").checked;
    var val2 = document.getElementById("exampleRadios2").checked;
    var returnval;
    if(val1 === true){
        returnval = "reflection";
    }
    else{
        returnval = "else";
    }
    return returnval;
}

// Request response from agent and return it to deliver feedback
function AgentResponse(answerkey, index){
    // Show animated icon for processing feedback during 2 seconds
    $("#loading").fadeIn("fast");
   
    setTimeout(
    function() 
    {
    // Get the data from the CodeUtterances.js script
    dsf = sessionStorage.getItem("utterrnn");
    nn = sessionStorage.getItem("utterdsf");
    
    // Hide animated icon for processing feedback
     $("#loading").fadeOut("fast");
    
    // Get answer key data and compare to user response
    var correctresponse = answerkey[index];
    // Affirmations are synonymous to reflection_simple and reflection_complex
    if(correctresponse === "affirm"){
        var alterncorrect1 = "reflection_simple";
        var alterncorrect2 = "reflection_complex";
        if(dsf === correctresponse || dsf === alterncorrect1 || dsf === alterncorrect2){
            // If answer is correct, then show positive feedback
            $(".alert-success").fadeIn("fast");
        }else{
            // If answer is incorrect, then show negative feedback
            $(".alert-danger").fadeIn("fast");
        }
    }
    // Reflections, both simple and complex, are synonymous
    else if(correctresponse === "reflection_simple" || correctresponse === "reflection_complex"){
        var alterncorrect1 = "reflection_simple";
        var alterncorrect2 = "reflection_complex";
        if(dsf === alterncorrect1 || dsf === alterncorrect2){
            // If answer is correct, then show positive feedback
            $(".alert-success").fadeIn("fast");
        }else{
            // If answer is incorrect, then show negative feedback
            $(".alert-danger").fadeIn("fast");
        }
    }   
    else if(dsf === correctresponse){
        // If answer is correct, then show positive feedback
        $(".alert-success").fadeIn("fast");
    }
    else{
        // If answer is incorrect, then show negative feedback
        $(".alert-danger").fadeIn("fast");
    }
     
    // End of conditional rules - delay created through the setTimeout function    
    }, 2000);
}

function CorrectOpenAnswer(answerkey, index){
    // Get the data from the CodeUtterances.js script
    dsf = sessionStorage.getItem("utterrnn");
    nn = sessionStorage.getItem("utterdsf");
    
    // Get answer key data and compare to user response
    var correctresponse = answerkey[index];
    // Affirmations are synonymous to reflection_simple and reflection_complex
    if(correctresponse === "affirm"){
        var alterncorrect1 = "reflection_simple";
        var alterncorrect2 = "reflection_complex";
        if(dsf === correctresponse || dsf === alterncorrect1 || dsf === alterncorrect2){
            // If answer is correct, then show positive feedback
            return true;
        }else{
            // If answer is incorrect, then show negative feedback
            return false;
        }
    }
    // Reflections, both simple and complex, are synonymous
    else if(correctresponse === "reflection_simple" || correctresponse === "reflection_complex"){
        var alterncorrect1 = "reflection_simple";
        var alterncorrect2 = "reflection_complex";
        if(dsf === alterncorrect1 || dsf === alterncorrect2){
            // If answer is correct, then show positive feedback
            return true;
        }else{
            // If answer is incorrect, then show negative feedback
            return false;
        }
    }   
    else if(dsf === correctresponse){
        // If answer is correct, then score as true
        return true;
    }else{
        // If answer is incorrect, then score as false
        return false;
    }
}

function AgentFeedback(correct, index){    
    // Get answer key data and compare to user response
    var scoredresponse = correct[index];
  
    if(scoredresponse === true){
        // If answer is correct, then show positive feedback
        $(".alert-success").fadeIn("fast");
    }else{
        // If answer is incorrect, then show negative feedback
        $(".alert-danger").fadeIn("fast");
    }
}

$(document).ready(function(){
    
    // Set variable for username and password 
    $(".usernamesubmit").click(function(){
        username = $(".usernameval").val();
        UpdateLocalStorage();
    });
    
    $(".passwordsubmit").click(function(){
        password = $(".passwordval").val();
        UpdateLocalStorage();
    });
    
    // Event listeners assessment item submission
    
    // Baseline VASE-R
    $(".bas0submit").click(function(){
        bas[0] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas1submit").click(function(){
        bas[1] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas2submit").click(function(){
        bas[2] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas3submit").click(function(){
        bas[3] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas4submit").click(function(){
        bas[4] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas5submit").click(function(){
        bas[5] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas6submit").click(function(){
        bas[6] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas7submit").click(function(){
        bas[7] = GetItemRadioButton();
        basjustification[0] = GetItemResponseTextArea();
        basanswercorrect1[0] = CorrectAnswer(bas, basanswerkey1, 7, 0);
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas8submit").click(function(){
        bas[8] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas9submit").click(function(){
        bas[9] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas10submit").click(function(){
        bas[10] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas11submit").click(function(){
        bas[11] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas12submit").click(function(){
        bas[12] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas13submit").click(function(){
        bas[13] = GetItemRadioButton();
        basjustification[1] = GetItemResponseTextArea();
        basanswercorrect1[1] = CorrectAnswer(bas, basanswerkey1, 13, 1);
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas14submit").click(function(){
        bas[14] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas15submit").click(function(){
        bas[15] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas16submit").click(function(){
        bas[16] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas17submit").click(function(){
        bas[17] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas18submit").click(function(){
        bas[18] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    $(".bas19submit").click(function(){
        bas[19] = GetItemRadioButton();
        basjustification[2] = GetItemResponseTextArea();
        basanswercorrect1[2] = CorrectAnswer(bas, basanswerkey1, 19, 2);
        baspro = UpdateProgressIndicator(bas);
        UpdateProgressMetrics();
    });
    
    // Post-Treatment VASE-R
    
    $(".pos0submit").click(function(){
        pos[0] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos1submit").click(function(){
        pos[1] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos2submit").click(function(){
        pos[2] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos3submit").click(function(){
        pos[3] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos4submit").click(function(){
        pos[4] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos5submit").click(function(){
        pos[5] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos6submit").click(function(){
        pos[6] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos7submit").click(function(){
        pos[7] = GetItemRadioButton();
        posjustification[0] = GetItemResponseTextArea();
        posanswercorrect1[0] = CorrectAnswer(pos, posanswerkey1, 7, 0);
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos8submit").click(function(){
        pos[8] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos9submit").click(function(){
        pos[9] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos10submit").click(function(){
        pos[10] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos11submit").click(function(){
        pos[11] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos12submit").click(function(){
        pos[12] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos13submit").click(function(){
        pos[13] = GetItemRadioButton();
        posjustification[1] = GetItemResponseTextArea();
        posanswercorrect1[1] = CorrectAnswer(pos, posanswerkey1, 13, 1);
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos14submit").click(function(){
        pos[14] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos15submit").click(function(){
        pos[15] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos16submit").click(function(){
        pos[16] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos17submit").click(function(){
        pos[17] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos18submit").click(function(){
        pos[18] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    $(".pos19submit").click(function(){
        pos[19] = GetItemRadioButton();
        posjustification[2] = GetItemResponseTextArea();
        posanswercorrect1[2] = CorrectAnswer(pos, posanswerkey1, 19, 2);
        pospro = UpdateProgressIndicator(pos);
        UpdateProgressMetrics();
    });
    
    // Follow-Up 1 VASE-R
    
    $(".fol10submit").click(function(){
        fol1[0] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol11submit").click(function(){
        fol1[1] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol12submit").click(function(){
        fol1[2] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol13submit").click(function(){
        fol1[3] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol14submit").click(function(){
        fol1[4] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol15submit").click(function(){
        fol1[5] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol16submit").click(function(){
        fol1[6] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol17submit").click(function(){
        fol1[7] = GetItemRadioButton();
        fol1justification[0] = GetItemResponseTextArea();
        fol1answercorrect1[0] = CorrectAnswer(fol1, fol1answerkey1, 7, 0);
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol18submit").click(function(){
        fol1[8] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol19submit").click(function(){
        fol1[9] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol110submit").click(function(){
        fol1[10] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol111submit").click(function(){
        fol1[11] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol112submit").click(function(){
        fol1[12] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol113submit").click(function(){
        fol1[13] = GetItemRadioButton();
        fol1justification[1] = GetItemResponseTextArea();
        fol1answercorrect1[1] = CorrectAnswer(fol1, fol1answerkey1, 13, 1);
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol114submit").click(function(){
        fol1[14] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol115submit").click(function(){
        fol1[15] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol116submit").click(function(){
        fol1[16] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol117submit").click(function(){
        fol1[17] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol118submit").click(function(){
        fol1[18] = GetItemResponseTextArea();
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    $(".fol119submit").click(function(){
        fol1[19] = GetItemRadioButton();
        fol1justification[2] = GetItemResponseTextArea();
        fol1answercorrect1[2] = CorrectAnswer(fol1, fol1answerkey1, 19, 2);
        fol1pro = UpdateProgressIndicator(fol1);
        UpdateProgressMetrics();
    });
    
    // Follow-Up 2 VASE-R
    
    $(".fol20submit").click(function(){
        fol2[0] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol21submit").click(function(){
        fol2[1] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol22submit").click(function(){
        fol2[2] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol23submit").click(function(){
        fol2[3] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol24submit").click(function(){
        fol2[4] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol25submit").click(function(){
        fol2[5] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol26submit").click(function(){
        fol2[6] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol27submit").click(function(){
        fol2[7] = GetItemRadioButton();
        fol2justification[0] = GetItemResponseTextArea();
        fol2answercorrect1[0] = CorrectAnswer(fol2, fol2answerkey1, 7, 0);
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol28submit").click(function(){
        fol2[8] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol29submit").click(function(){
        fol2[9] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol210submit").click(function(){
        fol2[10] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol211submit").click(function(){
        fol2[11] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol212submit").click(function(){
        fol2[12] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol213submit").click(function(){
        fol2[13] = GetItemRadioButton();
        fol2justification[1] = GetItemResponseTextArea();
        fol2answercorrect1[1] = CorrectAnswer(fol2, fol2answerkey1, 13, 1);
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol214submit").click(function(){
        fol2[14] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol215submit").click(function(){
        fol2[15] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol216submit").click(function(){
        fol2[16] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol217submit").click(function(){
        fol2[17] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol218submit").click(function(){
        fol2[18] = GetItemResponseTextArea();
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".fol219submit").click(function(){
        fol2[19] = GetItemRadioButton();
        fol2justification[2] = GetItemResponseTextArea();
        fol2answercorrect1[2] = CorrectAnswer(fol2, fol2answerkey1, 19, 2);
        fol2pro = UpdateProgressIndicator(fol2);
        UpdateProgressMetrics();
    });
    
    $(".mi1submit").click(function(){
        [mi[0], mi[1], mi[2]] = GetItemResponseMultiTextArea();
        mipro = UpdateProgressIndicator(mi);
        UpdateProgressMetrics();
    });
    
    $(".mi2submit").click(function(){
        [mi[3], mi[4], mi[5]] = GetItemResponseMultiTextArea();
        mipro = UpdateProgressIndicator(mi);
        UpdateProgressMetrics();
    });
    
    // Open or Close 1 to 10 
    
    $(".oars1submit").click(function(){
        oars[0] = GetItemTrueFalseButton();
        oarsanswercorrect1[0] = CorrectAnswer(oars, oarsanswerkey1, 0, 0);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,0);
        UpdateProgressMetrics();
    });
    
    $(".oars2submit").click(function(){
        oars[1] = GetItemTrueFalseButton();
        oarsanswercorrect1[1] = CorrectAnswer(oars, oarsanswerkey1, 1, 1);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,1);
        UpdateProgressMetrics();
    });
    
    $(".oars3submit").click(function(){
        oars[2] = GetItemTrueFalseButton();
        oarsanswercorrect1[2] = CorrectAnswer(oars, oarsanswerkey1, 2, 2);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,2);
        UpdateProgressMetrics();
    });
    
    $(".oars4submit").click(function(){
        oars[3] = GetItemTrueFalseButton();
        oarsanswercorrect1[3] = CorrectAnswer(oars, oarsanswerkey1, 3, 3);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,3);
        UpdateProgressMetrics();
    });
    
    $(".oars5submit").click(function(){
        oars[4] = GetItemTrueFalseButton();
        oarsanswercorrect1[4] = CorrectAnswer(oars, oarsanswerkey1, 4, 4);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,4);
        UpdateProgressMetrics();
    });
    
    $(".oars6submit").click(function(){
        oars[5] = GetItemTrueFalseButton();
        oarsanswercorrect1[5] = CorrectAnswer(oars, oarsanswerkey1, 5, 5);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,5);
        UpdateProgressMetrics();
    });
    
    $(".oars7submit").click(function(){
        oars[6] = GetItemTrueFalseButton();
        oarsanswercorrect1[6] = CorrectAnswer(oars, oarsanswerkey1, 6, 6);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,6);
        UpdateProgressMetrics();
    });
    
    $(".oars8submit").click(function(){
        oars[7] = GetItemTrueFalseButton();
        oarsanswercorrect1[7] = CorrectAnswer(oars, oarsanswerkey1, 7, 7);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,7);
        UpdateProgressMetrics();
    });
    
    $(".oars9submit").click(function(){
        oars[8] = GetItemTrueFalseButton();
        oarsanswercorrect1[8] = CorrectAnswer(oars, oarsanswerkey1, 8, 8);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,8);
        UpdateProgressMetrics();
    });
    
    $(".oars10submit").click(function(){
        oars[9] = GetItemTrueFalseButton();
        oarsanswercorrect1[9] = CorrectAnswer(oars, oarsanswerkey1, 9, 9);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect1,9);
        UpdateProgressMetrics();
    });
    
    // Identify Stem 1 to 17
    
    $(".oars11submit").click(function(){
        oars[10] = GetItemTrueFalseButton();
        oarsanswercorrect2[0] = CorrectAnswer(oars, oarsanswerkey2, 10, 0);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,0);
        UpdateProgressMetrics();
    });
    
    $(".oars12submit").click(function(){
        oars[11] = GetItemTrueFalseButton();
        oarsanswercorrect2[1] = CorrectAnswer(oars, oarsanswerkey2, 11, 1);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,1);
        UpdateProgressMetrics();
    });
    
    $(".oars13submit").click(function(){
        oars[12] = GetItemTrueFalseButton();
        oarsanswercorrect2[2] = CorrectAnswer(oars, oarsanswerkey2, 12, 2);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,2);
        UpdateProgressMetrics();
    });
    
    $(".oars14submit").click(function(){
        oars[13] = GetItemTrueFalseButton();
        oarsanswercorrect2[3] = CorrectAnswer(oars, oarsanswerkey2, 13, 3);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,3);
        UpdateProgressMetrics();
    });
    
    $(".oars15submit").click(function(){
        oars[14] = GetItemTrueFalseButton();
        oarsanswercorrect2[4] = CorrectAnswer(oars, oarsanswerkey2, 14, 4);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,4);
        UpdateProgressMetrics();
    });
    
    $(".oars16submit").click(function(){
        oars[15] = GetItemTrueFalseButton();
        oarsanswercorrect2[5] = CorrectAnswer(oars, oarsanswerkey2, 15, 5);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,5);
        UpdateProgressMetrics();
    });
    
    $(".oars17submit").click(function(){
        oars[16] = GetItemTrueFalseButton();
        oarsanswercorrect2[6] = CorrectAnswer(oars, oarsanswerkey2, 16, 6);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,6);
        UpdateProgressMetrics();
    });
    
    $(".oars18submit").click(function(){
        oars[17] = GetItemTrueFalseButton();
        oarsanswercorrect2[7] = CorrectAnswer(oars, oarsanswerkey2, 17, 7);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,7);
        UpdateProgressMetrics();
    });
    
    $(".oars19submit").click(function(){
        oars[18] = GetItemTrueFalseButton();
        oarsanswercorrect2[8] = CorrectAnswer(oars, oarsanswerkey2, 18, 8);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,8);
        UpdateProgressMetrics();
    });
    
    $(".oars20submit").click(function(){
        oars[19] = GetItemTrueFalseButton();
        oarsanswercorrect2[9] = CorrectAnswer(oars, oarsanswerkey2, 19, 9);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,9);
        UpdateProgressMetrics();
    });
    
    $(".oars21submit").click(function(){
        oars[20] = GetItemTrueFalseButton();
        oarsanswercorrect2[10] = CorrectAnswer(oars, oarsanswerkey2, 20, 10);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,10);
        UpdateProgressMetrics();
    });
    
    $(".oars22submit").click(function(){
        oars[21] = GetItemTrueFalseButton();
        oarsanswercorrect2[11] = CorrectAnswer(oars, oarsanswerkey2, 21, 11);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,11);
        UpdateProgressMetrics();
    });
    
    $(".oars23submit").click(function(){
        oars[22] = GetItemTrueFalseButton();
        oarsanswercorrect2[12] = CorrectAnswer(oars, oarsanswerkey2, 22, 12);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,12);
        UpdateProgressMetrics();
    });
    
    $(".oars24submit").click(function(){
        oars[23] = GetItemTrueFalseButton();
        oarsanswercorrect2[13] = CorrectAnswer(oars, oarsanswerkey2, 23, 13);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,13);
        UpdateProgressMetrics();
    });
    
    $(".oars25submit").click(function(){
        oars[24] = GetItemTrueFalseButton();
        oarsanswercorrect2[14] = CorrectAnswer(oars, oarsanswerkey2, 24, 14);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,14);
        UpdateProgressMetrics();
    });
    
    $(".oars26submit").click(function(){
        oars[25] = GetItemTrueFalseButton();
        oarsanswercorrect2[15] = CorrectAnswer(oars, oarsanswerkey2, 25, 15);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,15);
        UpdateProgressMetrics();
    });
    
    $(".oars27submit").click(function(){
        oars[26] = GetItemTrueFalseButton();
        oarsanswercorrect2[16] = CorrectAnswer(oars, oarsanswerkey2, 26, 16);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect2,16);
        UpdateProgressMetrics();
    });
    
    // Open to Close 1 to 10
    
    $(".oars28submit").click(function(){
        oars[27] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[0] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars29submit").click(function(){
        oars[28] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[1] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars30submit").click(function(){
        oars[29] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[2] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars31submit").click(function(){
        oars[30] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[3] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars32submit").click(function(){
        oars[31] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[4] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars33submit").click(function(){
        oars[32] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[5] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars34submit").click(function(){
        oars[33] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[6] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars35submit").click(function(){
        oars[34] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[7] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars36submit").click(function(){
        oars[35] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[8] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars37submit").click(function(){
        oars[36] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[9] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    // These were deleted from a previous version
    /*
    $(".oars38submit").click(function(){
        oars[37] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[10] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });
    
    $(".oars39submit").click(function(){
        oars[38] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 13);
        oarsanswercorrect3[11] = CorrectOpenAnswer(agentanswerkey, 13);
        UpdateProgressMetrics();
    });*/
    
    // Identify Reflections 1 to 12
    
    $(".oars38submit").click(function(){
        oars[37] = GetItemTrueFalseButton2();
        oarsanswercorrect4[0] = CorrectAnswer(oars, oarsanswerkey4, 37, 0);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,0);
        UpdateProgressMetrics();
    });
                             
    $(".oars39submit").click(function(){
        oars[38] = GetItemTrueFalseButton2();
        oarsanswercorrect4[1] = CorrectAnswer(oars, oarsanswerkey4, 38, 1);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,1);
        UpdateProgressMetrics();
    });
                             
    $(".oars40submit").click(function(){
        oars[39] = GetItemTrueFalseButton2();
        oarsanswercorrect4[2] = CorrectAnswer(oars, oarsanswerkey4, 39, 2);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,2);
        UpdateProgressMetrics();
    });
    
    $(".oars41submit").click(function(){
        oars[40] = GetItemTrueFalseButton2();
        oarsanswercorrect4[3] = CorrectAnswer(oars, oarsanswerkey4, 40, 3);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,3);
        UpdateProgressMetrics();
    });
    
    $(".oars42submit").click(function(){
        oars[41] = GetItemTrueFalseButton2();
        oarsanswercorrect4[4] = CorrectAnswer(oars, oarsanswerkey4, 41, 4);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,4);
        UpdateProgressMetrics();
    });
                             
    $(".oars43submit").click(function(){
        oars[42] = GetItemTrueFalseButton2();
        oarsanswercorrect4[5] = CorrectAnswer(oars, oarsanswerkey4, 42, 5);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,5);
        UpdateProgressMetrics();
    });
                             
    $(".oars44submit").click(function(){
        oars[43] = GetItemTrueFalseButton2();
        oarsanswercorrect4[6] = CorrectAnswer(oars, oarsanswerkey4, 43, 6);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,6);
        UpdateProgressMetrics();
    });
    
    $(".oars45submit").click(function(){
        oars[44] = GetItemTrueFalseButton2();
        oarsanswercorrect4[7] = CorrectAnswer(oars, oarsanswerkey4, 44, 7);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,7);
        UpdateProgressMetrics();
    });
    
    $(".oars46submit").click(function(){
        oars[45] = GetItemTrueFalseButton2();
        oarsanswercorrect4[8] = CorrectAnswer(oars, oarsanswerkey4, 45, 8);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,8);
        UpdateProgressMetrics();
    });
                             
    $(".oars47submit").click(function(){
        oars[46] = GetItemTrueFalseButton2();
        oarsanswercorrect4[9] = CorrectAnswer(oars, oarsanswerkey4, 46, 9);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,9);
        UpdateProgressMetrics();
    });
                             
    $(".oars48submit").click(function(){
        oars[47] = GetItemTrueFalseButton2();
        oarsanswercorrect4[10] = CorrectAnswer(oars, oarsanswerkey4, 47, 10);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,10);
        UpdateProgressMetrics();
    });
    
    $(".oars49submit").click(function(){
        oars[48] = GetItemTrueFalseButton2();
        oarsanswercorrect4[11] = CorrectAnswer(oars, oarsanswerkey4, 48, 11);
        oarspro = UpdateProgressIndicator(oars);
        AgentFeedback(oarsanswercorrect4,11);
        UpdateProgressMetrics();
    });
    
    // Create stem 1 and 2
    
    $(".oars50submit").click(function(){
        oars[49] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        oarsanswercorrect5[0] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".oars51submit").click(function(){
        oars[50] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        oarsanswercorrect5[1] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    // Silver Lining
    
    $(".oars52submit").click(function(){
        oars[51] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[0] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
    
    $(".oars53submit").click(function(){
        oars[52] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[1] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
    
    $(".oars54submit").click(function(){
        oars[53] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[2] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
    
    $(".oars55submit").click(function(){
        oars[54] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[3] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
    
    $(".oars56submit").click(function(){
        oars[55] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[4] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
    
    $(".oars57submit").click(function(){
        oars[56] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[5] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
    
    $(".oars58submit").click(function(){
        oars[57] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 11);
        oarsanswercorrect6[6] = CorrectOpenAnswer(agentanswerkey, 11);
        UpdateProgressMetrics();
    });
});