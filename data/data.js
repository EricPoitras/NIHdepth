//Main variables to store and retrieve (learning outcomes and user identifier)

//Username and Password Login
var username, password;

// Baseline VASE-R scores: 'bas' for Baseline followed by number identifier: var bas1, bas2, bas3, bas4, bas5, bas6, bas7, bas8, bas9, bas10, bas11, bas12, bas13, bas14, bas15, bas16, bas17, bas18, bas19, bas20;

var bas = [19];
var basanswerkey1 = ["3","4","1"];
var basanswercorrect1 = [2];
var basjustification = ["","",""];

// Post-Treatment VASE-R scores: 'pos' for Post-Treatment followed by number identifier: var pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11, pos12, pos13, pos14, pos15, pos16, pos17, pos18, pos19, pos20;

var pos = [19];
var posanswerkey1 = ["3","4","1"];
var posanswercorrect1 = [2];
var posjustification = ["","",""];

// Definition and Spirit of MI: var miconv1, miconv2, miconv3, miconv4, miconv5, miconv6;

var mi = [5];

// OARS: var openorclose1, openorclose2, openorclose3, openorclose4, openorclose5, openorclose6, openorclose7, openorclose8, openorclose9, openorclose10; var opentoclose1, opentoclose2, opentoclose3, opentoclose4, opentoclose5, opentoclose6, opentoclose7, opentoclose8, opentoclose9, opentoclose10; var idstem1, idstem2, idstem3, idstem4, idstem5, idstem6, idstem7, idstem8, idstem9, idstem10, idstem11, idstem12, idstem13, idstem14, idstem15, idstem16, idstem17; var rephrase1, rephrase2; var crestem1, crestem2; var sil1, sil2, sil3, sil4, sil5, sil6, sil7;

var oars = [47];

// Answer key OARS - 1. Closed; 2. Closed; 3. went off - open (google search metformin - medicaton in the past); 4. Open; 5. Closed;  6. delete; 7. open; 8. closed; 9. open; 10. open; https://docs.google.com/document/d/1QIHY4s-6Yafmh-VW40WcFctEJp6qbpIm-hCtPQlohBg/edit

var oarsanswerkey1 = ["closed","closed","open","closed","open","closed","open","closed","open","open"];
var oarsanswercorrect1 = [9];

var oarsanswerkey2 = ["closed","open","closed","open","closed","closed","closed","open","open","open","closed","closed","open","open","open","closed","closed"];
var oarsanswercorrect2 = [16];

// Progress Indicators for each module - percentage completion rate

var baspro, pospro, mipro, oarspro;

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

// Correct answers submitted to each assessment item
function CorrectAnswer(answer, correct, keynumber, index){
    if(answer[keynumber] === correct[index]){
        return true;
    }else{
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

// Request response from agent and return it to deliver feedback
function AgentResponse(query){
    
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
    $(".bas0submit").click(function(){
        bas[0] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas1submit").click(function(){
        bas[1] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas2submit").click(function(){
        bas[2] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas3submit").click(function(){
        bas[3] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas4submit").click(function(){
        bas[4] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas5submit").click(function(){
        bas[5] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas6submit").click(function(){
        bas[6] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas7submit").click(function(){
        bas[7] = GetItemRadioButton();
        basjustification[0] = GetItemResponseTextArea();
        basanswercorrect1[0] = CorrectAnswer(bas, basanswerkey1, 7, 0);
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas8submit").click(function(){
        bas[8] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas9submit").click(function(){
        bas[9] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas10submit").click(function(){
        bas[10] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas11submit").click(function(){
        bas[11] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas12submit").click(function(){
        bas[12] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas13submit").click(function(){
        bas[13] = GetItemRadioButton();
        basjustification[1] = GetItemResponseTextArea();
        basanswercorrect1[1] = CorrectAnswer(bas, basanswerkey1, 13, 1);
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas14submit").click(function(){
        bas[14] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas15submit").click(function(){
        bas[15] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas16submit").click(function(){
        bas[16] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas17submit").click(function(){
        bas[17] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas18submit").click(function(){
        bas[18] = GetItemResponseTextArea();
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".bas19submit").click(function(){
        bas[19] = GetItemRadioButton();
        basjustification[2] = GetItemResponseTextArea();
        basanswercorrect1[2] = CorrectAnswer(bas, basanswerkey1, 19, 2);
        baspro = UpdateProgressIndicator(bas);
    });
    
    $(".pos0submit").click(function(){
        pos[0] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos1submit").click(function(){
        pos[1] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos2submit").click(function(){
        pos[2] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos3submit").click(function(){
        pos[3] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos4submit").click(function(){
        pos[4] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos5submit").click(function(){
        pos[5] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos6submit").click(function(){
        pos[6] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos7submit").click(function(){
        pos[7] = GetItemRadioButton();
        posjustification[0] = GetItemResponseTextArea();
        posanswercorrect1[0] = CorrectAnswer(pos, posanswerkey1, 7, 0);
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos8submit").click(function(){
        pos[8] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos9submit").click(function(){
        pos[9] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos10submit").click(function(){
        pos[10] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos11submit").click(function(){
        pos[11] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos12submit").click(function(){
        pos[12] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos13submit").click(function(){
        pos[13] = GetItemRadioButton();
        posjustification[1] = GetItemResponseTextArea();
        posanswercorrect1[1] = CorrectAnswer(pos, posanswerkey1, 13, 1);
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos14submit").click(function(){
        pos[14] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos15submit").click(function(){
        pos[15] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos16submit").click(function(){
        pos[16] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos17submit").click(function(){
        pos[17] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos18submit").click(function(){
        pos[18] = GetItemResponseTextArea();
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".pos19submit").click(function(){
        pos[19] = GetItemRadioButton();
        posjustification[2] = GetItemResponseTextArea();
        posanswercorrect1[2] = CorrectAnswer(pos, posanswerkey1, 19, 2);
        pospro = UpdateProgressIndicator(pos);
    });
    
    $(".mi1submit").click(function(){
        [mi[0], mi[1], mi[2]] = GetItemResponseMultiTextArea();
        mipro = UpdateProgressIndicator(mi);
    });
    
    $(".mi2submit").click(function(){
        [mi[3], mi[4], mi[5]] = GetItemResponseMultiTextArea();
        mipro = UpdateProgressIndicator(mi);
    });
    
    $(".oars1submit").click(function(){
        oars[0] = GetItemTrueFalseButton();
        oarsanswercorrect1[0] = CorrectAnswer(oars, oarsanswerkey1, 0, 0);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars2submit").click(function(){
        oars[1] = GetItemTrueFalseButton();
        oarsanswercorrect1[1] = CorrectAnswer(oars, oarsanswerkey1, 1, 1);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars3submit").click(function(){
        oars[2] = GetItemTrueFalseButton();
        oarsanswercorrect1[2] = CorrectAnswer(oars, oarsanswerkey1, 2, 2);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars4submit").click(function(){
        oars[3] = GetItemTrueFalseButton();
        oarsanswercorrect1[3] = CorrectAnswer(oars, oarsanswerkey1, 3, 3);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars5submit").click(function(){
        oars[4] = GetItemTrueFalseButton();
        oarsanswercorrect1[4] = CorrectAnswer(oars, oarsanswerkey1, 4, 4);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars6submit").click(function(){
        oars[5] = GetItemTrueFalseButton();
        oarsanswercorrect1[5] = CorrectAnswer(oars, oarsanswerkey1, 5, 5);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars7submit").click(function(){
        oars[6] = GetItemTrueFalseButton();
        oarsanswercorrect1[6] = CorrectAnswer(oars, oarsanswerkey1, 6, 6);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars8submit").click(function(){
        oars[7] = GetItemTrueFalseButton();
        oarsanswercorrect1[7] = CorrectAnswer(oars, oarsanswerkey1, 7, 7);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars9submit").click(function(){
        oars[8] = GetItemTrueFalseButton();
        oarsanswercorrect1[8] = CorrectAnswer(oars, oarsanswerkey1, 8, 8);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars10submit").click(function(){
        oars[9] = GetItemTrueFalseButton();
        oarsanswercorrect1[9] = CorrectAnswer(oars, oarsanswerkey1, 9, 9);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars11submit").click(function(){
        oars[10] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars12submit").click(function(){
        oars[11] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars13submit").click(function(){
        oars[12] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars14submit").click(function(){
        oars[13] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars15submit").click(function(){
        oars[14] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars16submit").click(function(){
        oars[15] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars17submit").click(function(){
        oars[16] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars18submit").click(function(){
        oars[17] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars19submit").click(function(){
        oars[18] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars20submit").click(function(){
        oars[19] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars21submit").click(function(){
        oars[20] = GetItemTrueFalseButton();
        oarsanswercorrect2[0] = CorrectAnswer(oars, oarsanswerkey2, 20, 0);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars22submit").click(function(){
        oars[21] = GetItemTrueFalseButton();
        oarsanswercorrect2[1] = CorrectAnswer(oars, oarsanswerkey2, 21, 1);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars23submit").click(function(){
        oars[22] = GetItemTrueFalseButton();
        oarsanswercorrect2[2] = CorrectAnswer(oars, oarsanswerkey2, 22, 2);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars24submit").click(function(){
        oars[23] = GetItemTrueFalseButton();
        oarsanswercorrect2[3] = CorrectAnswer(oars, oarsanswerkey2, 23, 3);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars25submit").click(function(){
        oars[24] = GetItemTrueFalseButton();
        oarsanswercorrect2[4] = CorrectAnswer(oars, oarsanswerkey2, 24, 4);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars26submit").click(function(){
        oars[25] = GetItemTrueFalseButton();
        oarsanswercorrect2[5] = CorrectAnswer(oars, oarsanswerkey2, 25, 5);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars27submit").click(function(){
        oars[26] = GetItemTrueFalseButton();
        oarsanswercorrect2[6] = CorrectAnswer(oars, oarsanswerkey2, 26, 6);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars28submit").click(function(){
        oars[27] = GetItemTrueFalseButton();
        oarsanswercorrect2[7] = CorrectAnswer(oars, oarsanswerkey2, 27, 7);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars29submit").click(function(){
        oars[28] = GetItemTrueFalseButton();
        oarsanswercorrect2[8] = CorrectAnswer(oars, oarsanswerkey2, 28, 8);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars30submit").click(function(){
        oars[29] = GetItemTrueFalseButton();
        oarsanswercorrect2[9] = CorrectAnswer(oars, oarsanswerkey2, 29, 9);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars31submit").click(function(){
        oars[30] = GetItemTrueFalseButton();
        oarsanswercorrect2[10] = CorrectAnswer(oars, oarsanswerkey2, 30, 10);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars32submit").click(function(){
        oars[31] = GetItemTrueFalseButton();
        oarsanswercorrect2[11] = CorrectAnswer(oars, oarsanswerkey2, 31, 11);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars33submit").click(function(){
        oars[32] = GetItemTrueFalseButton();
        oarsanswercorrect2[12] = CorrectAnswer(oars, oarsanswerkey2, 32, 12);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars34submit").click(function(){
        oars[33] = GetItemTrueFalseButton();
        oarsanswercorrect2[13] = CorrectAnswer(oars, oarsanswerkey2, 33, 13);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars35submit").click(function(){
        oars[34] = GetItemTrueFalseButton();
        oarsanswercorrect2[14] = CorrectAnswer(oars, oarsanswerkey2, 34, 14);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars36submit").click(function(){
        oars[35] = GetItemTrueFalseButton();
        oarsanswercorrect2[15] = CorrectAnswer(oars, oarsanswerkey2, 35, 15);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars37submit").click(function(){
        oars[36] = GetItemTrueFalseButton();
        oarsanswercorrect2[16] = CorrectAnswer(oars, oarsanswerkey2, 36, 16);
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars38submit").click(function(){
        oars[37] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars39submit").click(function(){
        oars[38] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars40submit").click(function(){
        oars[39] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars41submit").click(function(){
        oars[40] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars42submit").click(function(){
        oars[41] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars43submit").click(function(){
        oars[42] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars44submit").click(function(){
        oars[43] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars45submit").click(function(){
        oars[44] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars46submit").click(function(){
        oars[45] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars47submit").click(function(){
        oars[46] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
    
    $(".oars48submit").click(function(){
        oars[47] = GetItemResponseTextArea();
        oarspro = UpdateProgressIndicator(oars);
    });
});