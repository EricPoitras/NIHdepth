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

// Baseline HRQ: bashrq1submit, bashrq2submit ... bashrq6submit
var bashrq = [5];

// Post-Treatment HRQ: poshrq1submit, poshrq2submit ... poshrq6submit
var poshrq = [5];

// Follow up 1 HRQ: fol1hrq1submit, fol1hrq2submit ... fol1hrq6submit
var fol1hrq = [5];

// Follow up 2 HRQ: fol2hrq1submit, fol2hrq2submit ... fol2hrq6submit
var fol2hrq = [5];

// Baseline MITAK: basmitak1submit, basmitak2submit, ... basmitak10submit
var basmit = [36];

// Post-Treatment MITAK: posmitak1submit, posmitak2submit, ... posmitak10submit
var posmit = [36];

// Follow-Up 1 MITAK: fol1mitak1submit, fol1mitak2submit, ... fol1mitak10submit
var fol1mit = [36];

// Follow-Up 2 MITAK: fol2mitak1submit, fol2mitak2submit, ... fol2mitak10submit
var fol2mit = [36];

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

// Focusing
var target = [32];

// Answer keys identifying target behaviors, identifying target behaviors from client speech, practice summarizing

var targetanswerkey1 = ["target","else","target","target","target","else","else","target","else","else","target","target","target"];
var targetanswercorrect1 = [12];
var targetanswercorrect2 = [8];

// Evoking
var evok = [85]; // 
var evokanswercorrect1 = [24];
var evokanswercorrect2 = [24];
var evokanswerkey1 = ["else", "change", "change", "change", "else", "change", "else", "change", "change", "else", "else", "else", "else", "change", "change", "else", "change", "change", "change", "change", "change", "else", "change", "change"];
var evokanswerkey2 = ["N/A (Not Change Talk)", "Reasons", "Reasons", "Reasons", "N/A (Not Change Talk)", "Desire", "N/A (Not Change Talk)", "Need", "Reasons", "N/A (Not Change Talk)", "N/A (Not Change Talk)", "N/A (Not Change Talk)", "N/A (Not Change Talk)", "Need", "Reasons", "N/A (Not Change Talk)", "Desire", "Need", "Desire", "Commitment", "Taking Steps", "N/A (Not Change Talk)", "Commitment", "Desire"];
var evokanswerkey3 = [24];
var evokanswerkey4 = [7];


// Progress Indicators for each module - percentage completion rate

var baspro, pospro, fol1pro, fol2pro, bashrqpro, poshrqpro, fol1hrqpro, fol2hrqpro, basmitakpro, posmitakpro, fol1mitakpro, fol2mitakpro, mipro, oarspro, tarpro, evokpro;
var perbaspro, perpospro, perfol1pro, perfol2pro, perbashrqpro, perposhrqpro, perfol1hrqpro, perfol2hrqpro, perbasmitakpro, perposmitakpro, perfol1mitakpro, perfol2mitakpro, permipro, peroarspro, pertarpro, perevokpro;

// Percentage score of correct responses per skill
var affirmcount, reflectcount, openclosecount, targetcount, changetalkcount;
var peropenclose, perreflect, peraffirm, pertarget, perchangetalk;

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
        if(array[i] === "Correct"){
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
    perbashrqpro = bashrqpro/6*100;
    perposhrqpro = poshrqpro/6*100;
    perfol1hrqpro = fol1hrqpro/6*100;
    perfol2hrqpro = fol2hrqpro/6*100;
    perbasmitakpro = basmitakpro/39*100;
    perposmitakpro = posmitakpro/39*100;
    perfol1mitakpro = fol1mitakpro/39*100;
    perfol2mitakpro = fol2mitakpro/39*100;
    permipro = mipro/6*100;
    peroarspro = oarspro/58*100;
    pertarpro = tarpro/33*100;
    perevokpro = evokpro/86*100;
    
    // Calculate percentage of skill acquisition based on correct items
    affirmcount = UpdateProgressResponseCorrect(oarsanswercorrect5);
    peraffirm = affirmcount/8*100;
    
    reflectcount = UpdateProgressResponseCorrect(oarsanswercorrect4) + UpdateProgressResponseCorrect(targetanswercorrect2);
    perreflect = reflectcount/11*100;
    
    openclosecount = UpdateProgressResponseCorrect(oarsanswercorrect1) + UpdateProgressResponseCorrect(oarsanswercorrect2) + UpdateProgressResponseCorrect(oarsanswercorrect3);
    peropenclose = openclosecount/39*100;
    
    targetcount = UpdateProgressResponseCorrect(targetanswercorrect1);
    pertarget = targetcount/13*100;
    
    changetalkcount = UpdateProgressResponseCorrect(evokanswercorrect1) + UpdateProgressResponseCorrect(evokanswercorrect2) + UpdateProgressResponseCorrect(evokanswercorrect3) + UpdateProgressResponseCorrect(evokanswercorrect4);
    perchangetalk = changetalkcount/83*100;
   
    
    // Update local storage of each progress indicator
    localStorage.setItem("PercentageBaseline",Math.round(perbaspro));
    localStorage.setItem("PercentagePostTreatment",Math.round(perpospro));
    localStorage.setItem("PercentageFollowUp1",Math.round(perfol1pro));
    localStorage.setItem("PercentageFollowUp2",Math.round(perfol2pro));
    localStorage.setItem("PercentageBaselineHRQ",Math.round(perbashrqpro));
    localStorage.setItem("PercentagePostTreatmentHRQ",Math.round(perposhrqpro));
    localStorage.setItem("PercentageFollowUp1HRQ",Math.round(perfol1hrqpro));
    localStorage.setItem("PercentageFollowUp2HRQ",Math.round(perfol2hrqpro));
    localStorage.setItem("PercentageBaselineMITAK",Math.round(perbasmitakpro));
    localStorage.setItem("PercentagePostTreatmentMITAK",Math.round(perposmitakpro));
    localStorage.setItem("PercentageFollowUp1MITAK",Math.round(perfol1mitakpro));
    localStorage.setItem("PercentageFollowUp2MITAK",Math.round(perfol2mitakpro));
    localStorage.setItem("PercentageMI",Math.round(permipro));
    localStorage.setItem("PercentageOARS",Math.round(peroarspro));
    localStorage.setItem("PercentageFocusing",Math.round(pertarpro));
    localStorage.setItem("PercentageEvoking",Math.round(perevokpro));
    
    localStorage.setItem("PercentageAffirm",Math.round(peraffirm));
    localStorage.setItem("PercentageReflect",Math.round(perreflect));
    localStorage.setItem("PercentageOpenClose",Math.round(peropenclose));
    localStorage.setItem("PercentageTarget",Math.round(pertarget));
    localStorage.setItem("PercentageChangeTalk",Math.round(perchangetalk));
}

// Correct answers submitted to each assessment item
function CorrectAnswer(answer, correct, keynumber, index){
    if(answer[keynumber] === correct[index]){
        return "Correct";
    }
    else{
        return "Incorrect";
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

// Get item response from radio button component
function GetItemRadioButton2(){
    var val1 = document.getElementById("exampleRadios1").checked;
    var val2 = document.getElementById("exampleRadios2").checked;
    var val3 = document.getElementById("exampleRadios3").checked;
    var val4 = document.getElementById("exampleRadios4").checked;
    var val5 = document.getElementById("exampleRadios5").checked;
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

// Get item response from radio button component
function GetItemRadioButton3(){
    var val1 = document.getElementById("exampleRadios1").checked;
    var val2 = document.getElementById("exampleRadios2").checked;
    var val3 = document.getElementById("exampleRadios3").checked;
    var val4 = document.getElementById("exampleRadios4").checked;
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
    else{
        returnval = "4";
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

function GetItemTrueFalseButton3(){
    var val1 = document.getElementById("radio1").checked;
    var val2 = document.getElementById("radio2").checked;
    var returnval;
    if(val1 === true){
        returnval = "target";
    }
    else{
        returnval = "else";
    }
    return returnval;
}

// Evoking true and false items
function GetItemTrueFalseButton4(){
    var val1 = document.getElementById("exampleRadios1").checked;
    var val2 = document.getElementById("exampleRadios2").checked;
    var returnval;
    if(val1 === true){
        returnval = "change";
    }
    else{
        returnval = "else";
    }
    return returnval;
}

// MIKAT True False Form at mikat1.html
function GetItemTrueFalseForm(){
    var val1 = document.getElementById("item1radio2").checked;
    var val2 = document.getElementById("item2radio2").checked;
    var val3 = document.getElementById("item3radio2").checked;
    var val4 = document.getElementById("item4radio1").checked;
    var val5 = document.getElementById("item5radio2").checked;
    var val6 = document.getElementById("item6radio2").checked;
    var val7 = document.getElementById("item7radio2").checked;
    var val8 = document.getElementById("item8radio1").checked;
    var val9 = document.getElementById("item9radio2").checked;
    var val10 = document.getElementById("item10radio1").checked;
    var val11 = document.getElementById("item11radio2").checked;
    var val12 = document.getElementById("item12radio2").checked;
    var val13 = document.getElementById("item13radio1").checked;
    var val14 = document.getElementById("item14radio2").checked;
    
    var returnval1;
    var returnval2;
    var returnval3;
    var returnval4;
    var returnval5;
    var returnval6;
    var returnval7;
    var returnval8;
    var returnval9;
    var returnval10;
    var returnval11;
    var returnval12;
    var returnval13;
    var returnval14;
    
    if(val1 == true){
        returnval1 = "False (Correct)";
    }else{
        returnval1 = "True (Incorrect)";
    }
    if(val2 == true){
        returnval2 = "False (Correct)";
    }else{
        returnval2 = "True (Incorrect)";
    }
    if(val3 == true){
        returnval3 = "False (Correct)";
    }else{
        returnval3 = "True (Incorrect)";
    }
    if(val4 == true){
        returnval4 = "True (Correct)";
    }else{
        returnval4 = "False (Incorrect)";
    }
    if(val5 == true){
        returnval5 = "False (Correct)";
    }else{
        returnval5 = "True (Incorrect)";
    }
    if(val6 == true){
        returnval6 = "False (Correct)";
    }else{
        returnval6 = "True (Incorrect)";
    }
    if(val7 == true){
        returnval7 = "False (Correct)";
    }else{
        returnval7 = "True (Incorrect)";
    }
    if(val8 == true){
        returnval8 = "True (Correct)";
    }else{
        returnval8 = "False (Incorrect)";
    }
    if(val9 == true){
        returnval9 = "False (Correct)";
    }else{
        returnval9 = "True (Incorrect)";
    }
    if(val10 == true){
        returnval10 = "True (Correct)";
    }else{
        returnval10 = "False (Incorrect)";
    }
    if(val11 == true){
        returnval11 = "False (Correct)";
    }else{
        returnval11 = "True (Incorrect)";
    }
    if(val12 == true){
        returnval12 = "False (Correct)";
    }else{
        returnval12 = "True (Incorrect)";
    }
    if(val13 == true){
        returnval13 = "True (Correct)";
    }else{
        returnval13 = "False (Incorrect)";
    }
    if(val14 == true){
        returnval14 = "False (Correct)";
    }else{
        returnval14 = "True (Incorrect)";
    }
    
    return [returnval1, returnval2, returnval3, returnval4, returnval5, returnval6, returnval7, returnval8, returnval9, returnval10, returnval11, returnval12, returnval13, returnval14];
}

// MIKAT check list form at mikat2.html
function GetItemTrueFalseForm2(){
    var val1 = document.getElementById("item1check").checked;
    var val2 = document.getElementById("item2check").checked;
    var val3 = document.getElementById("item3check").checked;
    var val4 = document.getElementById("item4check").checked;
    var val5 = document.getElementById("item5check").checked;
    var val6 = document.getElementById("item6check").checked;
    var val7 = document.getElementById("item7check").checked;
    var val8 = document.getElementById("item8check").checked;
    var val9 = document.getElementById("item9check").checked;
    var val10 = document.getElementById("item10check").checked;
    var val11 = document.getElementById("item11check").checked;
    var val12 = document.getElementById("item12check").checked;
    var val13 = document.getElementById("item13check").checked;
    var val14 = document.getElementById("item14check").checked;
    var val15 = document.getElementById("item15check").checked;
    
    var returnval1;
    var returnval2;
    var returnval3;
    var returnval4;
    var returnval5;
    var returnval6;
    var returnval7;
    var returnval8;
    var returnval9;
    var returnval10;
    var returnval11;
    var returnval12;
    var returnval13;
    var returnval14;
    var returnval15;
    
    if(val1 == true){
        returnval1 = "False (Correct)";
    }else{
        returnval1 = "True (Incorrect)";
    }
    if(val2 == true){
        returnval2 = "False (Incorrect)";
    }else{
        returnval2 = "True (Correct)";
    }
    if(val3 == true){
        returnval3 = "False (Correct)";
    }else{
        returnval3 = "True (Incorrect)";
    }
    if(val4 == true){
        returnval4 = "False (Incorrect)";
    }else{
        returnval4 = "True (Correct)";
    }
    if(val5 == true){
        returnval5 = "False (Correct)";
    }else{
        returnval5 = "True (Incorrect)";
    }
    if(val6 == true){
        returnval6 = "False (Correct)";
    }else{
        returnval6 = "True (Incorrect)";
    }
    if(val7 == true){
        returnval7 = "False (Correct)";
    }else{
        returnval7 = "True (Incorrect)";
    }
    if(val8 == true){
        returnval8 = "False (Correct)";
    }else{
        returnval8 = "True (Incorrect)";
    }
    if(val9 == true){
        returnval9 = "False (Incorrect)";
    }else{
        returnval9 = "True (Correct)";
    }
    if(val10 == true){
        returnval10 = "False (Incorrect)";
    }else{
        returnval10 = "True (Correct)";
    }
    if(val11 == true){
        returnval11 = "False (Correct)";
    }else{
        returnval11 = "True (Incorrect)";
    }
    if(val12 == true){
        returnval12 = "False (Correct)";
    }else{
        returnval12 = "True (Incorrect)";
    }
    if(val13 == true){
        returnval13 = "False (Correct)";
    }else{
        returnval13 = "True (Incorrect)";
    }
    if(val14 == true){
        returnval14 = "False (Correct)";
    }else{
        returnval14 = "True (Incorrect)";
    }
    if(val15 == true){
        returnval15 = "False (Incorrect)";
    }else{
        returnval15 = "True (Correct)";
    }
    
    return [returnval1, returnval2, returnval3, returnval4, returnval5, returnval6, returnval7, returnval8, returnval9, returnval10, returnval11, returnval12, returnval13, returnval14, returnval15];
}

//Evoking get selected item in listbox
function GetItemDropDownList(){
    var e = document.getElementById("SelectChangeTalk");
    var selecteditemtext = e.options[e.selectedIndex].text;
    return selecteditemtext;
}

// Evoking get selected span containers in changetalk2
function GetSelectedSpanContainers(){
    var container1 = document.getElementById("corcon1");
    var container2 = document.getElementById("corcon2");
    var container3 = document.getElementById("corcon3");
    var container4 = document.getElementById("corcon4");
    var container5 = document.getElementById("corcon5");
    var container6 = document.getElementById("corcon6");
    var container7 = document.getElementById("corcon7");
    var container8 = document.getElementById("corcon8");
    
    var returnval1;
    var returnval2;
    var returnval3;
    var returnval4;
    var returnval5;
    var returnval6;
    var returnval7;
    var returnval8;
    
    if(container1.classList.contains("segselected") == true){
        returnval1 = "Correct";
    }else{
        returnval1 = "Incorrect";
    }
    if(container2.classList.contains("segselected") == true){
        returnval2 = "Correct";
    }else{
        returnval2 = "Incorrect";
    }
    if(container3.classList.contains("segselected") == true){
        returnval3 = "Correct";
    }else{
        returnval3 = "Incorrect";
    }
    if(container4.classList.contains("segselected") == true){
        returnval4 = "Correct";
    }else{
        returnval4 = "Incorrect";
    }
    if(container5.classList.contains("segselected") == true){
        returnval5 = "Correct";
    }else{
        returnval5 = "Incorrect";
    }
    if(container6.classList.contains("segselected") == true){
        returnval6 = "Correct";
    }else{
        returnval6 = "Incorrect";
    }
    if(container7.classList.contains("segselected") == true){
        returnval7 = "Correct";
    }else{
        returnval7 = "Incorrect";
    }
    if(container8.classList.contains("segselected") == true){
        returnval8 = "Correct";
    }else{
        returnval8 = "Incorrect";
    }
    
    return [returnval1, returnval2, returnval3, returnval4, returnval5, returnval6, returnval7, returnval8];
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
            return "Correct";
        }else{
            // If answer is incorrect, then show negative feedback
            return "Incorrect";
        }
    }
    // Reflections, both simple and complex, are synonymous
    else if(correctresponse === "reflection_simple" || correctresponse === "reflection_complex"){
        var alterncorrect1 = "reflection_simple";
        var alterncorrect2 = "reflection_complex";
        if(dsf === alterncorrect1 || dsf === alterncorrect2){
            // If answer is correct, then show positive feedback
            return "Correct";
        }else{
            // If answer is incorrect, then show negative feedback
            return "Incorrect";
        }
    }   
    else if(dsf === correctresponse){
        // If answer is correct, then score as "Correct"
        return "Correct";
    }else{
        // If answer is incorrect, then score as "Incorrect"
        return "Incorrect";
    }
}

function AgentFeedback(correct, index){    
    // Get answer key data and compare to user response
    var scoredresponse = correct[index];
  
    if(scoredresponse === "Correct"){
        // If answer is correct, then show positive feedback
        $(".alert-success").fadeIn("fast");
    }else{
        // If answer is incorrect, then show negative feedback
        $(".alert-danger").fadeIn("fast");
    }
}

function AgentDefault(){
    $(".alert-success").fadeIn("fast");
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
    
    // Baseline HRQ
    $(".bashrq1submit").click(function(){
        bashrq[0] = GetItemResponseTextArea();
        bashrqpro = UpdateProgressIndicator(bashrq);
        UpdateProgressMetrics();
    });
    
    $(".bashrq2submit").click(function(){
        bashrq[1] = GetItemResponseTextArea();
        bashrqpro = UpdateProgressIndicator(bashrq);
        UpdateProgressMetrics();
    });
    
    $(".bashrq3submit").click(function(){
        bashrq[2] = GetItemResponseTextArea();
        bashrqpro = UpdateProgressIndicator(bashrq);
        UpdateProgressMetrics();
    });
    
    $(".bashrq4submit").click(function(){
        bashrq[3] = GetItemResponseTextArea();
        bashrqpro = UpdateProgressIndicator(bashrq);
        UpdateProgressMetrics();
    });
    
    $(".bashrq5submit").click(function(){
        bashrq[4] = GetItemResponseTextArea();
        bashrqpro = UpdateProgressIndicator(bashrq);
        UpdateProgressMetrics();
    });
    
    $(".bashrq6submit").click(function(){
        bashrq[5] = GetItemResponseTextArea();
        bashrqpro = UpdateProgressIndicator(bashrq);
        UpdateProgressMetrics();
    });
    
    // Post Treatment HRQ
    $(".poshrq1submit").click(function(){
        poshrq[0] = GetItemResponseTextArea();
        poshrqpro = UpdateProgressIndicator(poshrq);
        UpdateProgressMetrics();
    });
    
    $(".poshrq2submit").click(function(){
        poshrq[1] = GetItemResponseTextArea();
        poshrqpro = UpdateProgressIndicator(poshrq);
        UpdateProgressMetrics();
    });
    
    $(".poshrq3submit").click(function(){
        poshrq[2] = GetItemResponseTextArea();
        poshrqpro = UpdateProgressIndicator(poshrq);
        UpdateProgressMetrics();
    });
    
    $(".poshrq4submit").click(function(){
        poshrq[3] = GetItemResponseTextArea();
        poshrqpro = UpdateProgressIndicator(poshrq);
        UpdateProgressMetrics();
    });
    
    $(".poshrq5submit").click(function(){
        poshrq[4] = GetItemResponseTextArea();
        poshrqpro = UpdateProgressIndicator(poshrq);
        UpdateProgressMetrics();
    });
    
    $(".poshrq6submit").click(function(){
        poshrq[5] = GetItemResponseTextArea();
        poshrqpro = UpdateProgressIndicator(poshrq);
        UpdateProgressMetrics();
    });
    
    // Follow up 1 HRQ
    $(".fol1hrq1submit").click(function(){
        fol1hrq[0] = GetItemResponseTextArea();
        fol1hrqpro = UpdateProgressIndicator(fol1hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol1hrq2submit").click(function(){
        fol1hrq[1] = GetItemResponseTextArea();
        fol1hrqpro = UpdateProgressIndicator(fol1hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol1hrq3submit").click(function(){
        fol1hrq[2] = GetItemResponseTextArea();
        fol1hrqpro = UpdateProgressIndicator(fol1hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol1hrq4submit").click(function(){
        fol1hrq[3] = GetItemResponseTextArea();
        fol1hrqpro = UpdateProgressIndicator(fol1hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol1hrq5submit").click(function(){
        fol1hrq[4] = GetItemResponseTextArea();
        fol1hrqpro = UpdateProgressIndicator(fol1hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol1hrq6submit").click(function(){
        fol1hrq[5] = GetItemResponseTextArea();
        fol1hrqpro = UpdateProgressIndicator(fol1hrq);
        UpdateProgressMetrics();
    });
    
    // Follow Up 2 HRQ
    $(".fol2hrq1submit").click(function(){
        fol2hrq[0] = GetItemResponseTextArea();
        fol2hrqpro = UpdateProgressIndicator(fol2hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol2hrq2submit").click(function(){
        fol2hrq[1] = GetItemResponseTextArea();
        fol2hrqpro = UpdateProgressIndicator(fol2hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol2hrq3submit").click(function(){
        fol2hrq[2] = GetItemResponseTextArea();
        fol2hrqpro = UpdateProgressIndicator(fol2hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol2hrq4submit").click(function(){
        fol2hrq[3] = GetItemResponseTextArea();
        fol2hrqpro = UpdateProgressIndicator(fol2hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol2hrq5submit").click(function(){
        fol2hrq[4] = GetItemResponseTextArea();
        fol2hrqpro = UpdateProgressIndicator(fol2hrq);
        UpdateProgressMetrics();
    });
    
    $(".fol2hrq6submit").click(function(){
        fol2hrq[5] = GetItemResponseTextArea();
        fol2hrqpro = UpdateProgressIndicator(fol2hrq);
        UpdateProgressMetrics();
    });
    
    // Baseline MITAK
    $(".basmikat1submit").click(function(){
        basmit[0], basmit[1], basmit[2], basmit[3], basmit[4], basmit[5], basmit[6], basmit[7], basmit[8], basmit[9], basmit[10], basmit[11], basmit[12], basmit[13] = GetItemTrueFalseForm();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat2submit").click(function(){
        basmit[14], basmit[15], basmit[16], basmit[17], basmit[18], basmit[19], basmit[20], basmit[21], basmit[22], basmit[23], basmit[24], basmit[25], basmit[26], basmit[27], basmit[28] = GetItemTrueFalseForm2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat3submit").click(function(){
        basmit[29] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat4submit").click(function(){
        basmit[30] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat5submit").click(function(){
        basmit[31] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat6submit").click(function(){
        basmit[32] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat7submit").click(function(){
        basmit[33] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat8submit").click(function(){
        basmit[34] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat9submit").click(function(){
        basmit[35] = GetItemRadioButton3();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    $(".basmikat10submit").click(function(){
        basmit[36] = GetItemRadioButton2();
        basmitakpro = UpdateProgressIndicator(basmit);
        UpdateProgressMetrics();
    });
    
    //Post-Treatment MITAK
    $(".posmikat1submit").click(function(){
        posmit[0], posmit[1], posmit[2], posmit[3], posmit[4], posmit[5], posmit[6], posmit[7], posmit[8], posmit[9], posmit[10], posmit[11], posmit[12], posmit[13] = GetItemTrueFalseForm();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat2submit").click(function(){
        posmit[14], posmit[15], posmit[16], posmit[17], posmit[18], posmit[19], posmit[20], posmit[21], posmit[22], posmit[23], posmit[24], posmit[25], posmit[26], posmit[27], posmit[28] = GetItemTrueFalseForm2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat3submit").click(function(){
        posmit[29] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat4submit").click(function(){
        posmit[30] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat5submit").click(function(){
        posmit[31] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat6submit").click(function(){
        posmit[32] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat7submit").click(function(){
        posmit[33] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat8submit").click(function(){
        posmit[34] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat9submit").click(function(){
        posmit[35] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    $(".posmikat10submit").click(function(){
        posmit[36] = GetItemRadioButton2();
        posmitakpro = UpdateProgressIndicator(posmit);
        UpdateProgressMetrics();
    });
    
    // Follow-Up 1 MITAK
    $(".fol1mikat1submit").click(function(){
        fol1mit[0], fol1mit[1], fol1mit[2], fol1mit[3], fol1mit[4], fol1mit[5], fol1mit[6], fol1mit[7], fol1mit[8], fol1mit[9], fol1mit[10], fol1mit[11], fol1mit[12], fol1mit[13] = GetItemTrueFalseForm();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat2submit").click(function(){
        fol1mit[29] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat3submit").click(function(){
        fol1mit[29] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat4submit").click(function(){
        fol1mit[30] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat5submit").click(function(){
        fol1mit[31] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat6submit").click(function(){
        fol1mit[32] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat7submit").click(function(){
        fol1mit[33] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat8submit").click(function(){
        fol1mit[34] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat9submit").click(function(){
        fol1mit[35] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    $(".fol1mikat10submit").click(function(){
        fol1mit[36] = GetItemRadioButton2();
        fol1mitakpro = UpdateProgressIndicator(fol1mit);
        UpdateProgressMetrics();
    });
    
    // Follow-Up 2 MITAK
    $(".fol2mikat1submit").click(function(){
        fol2mit[0], fol2mit[1], fol2mit[2], fol2mit[3], fol2mit[4], fol2mit[5], fol2mit[6], fol2mit[7], fol2mit[8], fol2mit[9], fol2mit[10], fol2mit[11], fol2mit[12], fol2mit[13] = GetItemTrueFalseForm();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat2submit").click(function(){
        fol2mit[14], fol2mit[15], fol2mit[16], fol2mit[17], fol2mit[18], fol2mit[19], fol2mit[20], fol2mit[21], fol2mit[22], fol2mit[23], fol2mit[24], fol2mit[25], fol2mit[26], fol2mit[27], fol2mit[28] = GetItemTrueFalseForm2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat3submit").click(function(){
        fol2mit[29] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat4submit").click(function(){
        fol2mit[30] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat5submit").click(function(){
        fol2mit[31] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat6submit").click(function(){
        fol2mit[32] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat7submit").click(function(){
        fol2mit[33] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat8submit").click(function(){
        fol2mit[34] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat9submit").click(function(){
        fol2mit[35] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    $(".fol2mikat10submit").click(function(){
        fol2mit[36] = GetItemRadioButton2();
        fol2mitakpro = UpdateProgressIndicator(fol2mit);
        UpdateProgressMetrics();
    });
    
    // Motivational Interviewing Intro
    
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
    
    // Focusing 
    
    // Identifying Target Behavior Change from a List
    
    $(".focus1submit").click(function(){
        target[0] = GetItemTrueFalseButton3();
        targetanswercorrect1[0] = CorrectAnswer(target, targetanswerkey1, 0, 0);
        console.log(targetanswercorrect1[0]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,0);
        UpdateProgressMetrics();
    });
    
    $(".focus2submit").click(function(){
        target[1] = GetItemTrueFalseButton3();
        targetanswercorrect1[1] = CorrectAnswer(target, targetanswerkey1, 1, 1);
        console.log(targetanswercorrect1[1]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,1);
        UpdateProgressMetrics();
    });
    
    $(".focus3submit").click(function(){
        target[2] = GetItemTrueFalseButton3();
        targetanswercorrect1[2] = CorrectAnswer(target, targetanswerkey1, 2, 2);
        console.log(targetanswercorrect1[2]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,2);
        UpdateProgressMetrics();
    });
    
    $(".focus4submit").click(function(){
        target[3] = GetItemTrueFalseButton3();
        targetanswercorrect1[3] = CorrectAnswer(target, targetanswerkey1, 3, 3);
        console.log(targetanswercorrect1[3]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,3);
        UpdateProgressMetrics();
    });
    
    $(".focus5submit").click(function(){
        target[4] = GetItemTrueFalseButton3();
        targetanswercorrect1[4] = CorrectAnswer(target, targetanswerkey1, 4, 4);
        console.log(targetanswercorrect1[4]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,4);
        UpdateProgressMetrics();
    });
    
    $(".focus6submit").click(function(){
        target[5] = GetItemTrueFalseButton3();
        targetanswercorrect1[5] = CorrectAnswer(target, targetanswerkey1, 5, 5);
        console.log(targetanswercorrect1[5]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,5);
        UpdateProgressMetrics();
    });
    
    $(".focus7submit").click(function(){
        target[6] = GetItemTrueFalseButton3();
        targetanswercorrect1[6] = CorrectAnswer(target, targetanswerkey1, 6, 6);
        console.log(targetanswercorrect1[6]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,6);
        UpdateProgressMetrics();
    });
    
    $(".focus8submit").click(function(){
        target[7] = GetItemTrueFalseButton3();
        targetanswercorrect1[7] = CorrectAnswer(target, targetanswerkey1, 7, 7);
        console.log(targetanswercorrect1[7]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,7);
        UpdateProgressMetrics();
    });
    
    $(".focus9submit").click(function(){
        target[8] = GetItemTrueFalseButton3();
        targetanswercorrect1[8] = CorrectAnswer(target, targetanswerkey1, 8, 8);
        console.log(targetanswercorrect1[8]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,8);
        UpdateProgressMetrics();
    });
    
    $(".focus10submit").click(function(){
        target[9] = GetItemTrueFalseButton3();
        targetanswercorrect1[9] = CorrectAnswer(target, targetanswerkey1, 9, 9);
        console.log(targetanswercorrect1[9]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,9);
        UpdateProgressMetrics();
    });
    
    $(".focus11submit").click(function(){
        target[10] = GetItemTrueFalseButton3();
        targetanswercorrect1[10] = CorrectAnswer(target, targetanswerkey1, 10, 10);
        console.log(targetanswercorrect1[10]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,10);
        UpdateProgressMetrics();
    });
    
    $(".focus12submit").click(function(){
        target[11] = GetItemTrueFalseButton3();
        targetanswercorrect1[11] = CorrectAnswer(target, targetanswerkey1, 11, 11);
        console.log(targetanswercorrect1[11]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,11);
        UpdateProgressMetrics();
    });
    
    $(".focus13submit").click(function(){
        target[12] = GetItemTrueFalseButton3();
        targetanswercorrect1[12] = CorrectAnswer(target, targetanswerkey1, 12, 12);
        console.log(targetanswercorrect1[12]);
        tarpro = UpdateProgressIndicator(target);
        AgentFeedback(targetanswercorrect1,12);
        UpdateProgressMetrics();
    });
    
    $(".focus14submit").click(function(){
        [target[13], target[14], target[15]] = GetItemResponseMultiTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    $(".focus15submit").click(function(){
        target[16] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    $(".focus16submit").click(function(){
        [target[17], target[18], target[19]] = GetItemResponseMultiTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    $(".focus17submit").click(function(){
        target[20] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    $(".focus18asubmit").click(function(){
        target[21] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[0] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus18bsubmit").click(function(){
        target[22] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[1] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus18csubmit").click(function(){
        target[23] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[2] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus19submit").click(function(){
        target[24] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    $(".focus20asubmit").click(function(){
        target[25] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[3] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus20bsubmit").click(function(){
        target[26] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[4] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus20csubmit").click(function(){
        target[27] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[5] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus21submit").click(function(){
        target[28] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    $(".focus22asubmit").click(function(){
        target[29] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[6] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus22bsubmit").click(function(){
        target[30] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[7] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus22csubmit").click(function(){
        target[31] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 3);
        targetanswercorrect2[8] = CorrectOpenAnswer(agentanswerkey, 3);
        UpdateProgressMetrics();
    });
    
    $(".focus23submit").click(function(){
        target[32] = GetItemResponseTextArea();
        tarpro = UpdateProgressIndicator(target);
        AgentDefault();
        UpdateProgressMetrics();
    });
    
    // Evoking (Change Talk)
    $(".evok1submit").click(function(){
        evok[0] = GetItemTrueFalseButton4();
        evokanswercorrect1[0] = CorrectAnswer(evok, evokanswerkey1, 0, 0);
        evok[1] = GetItemDropDownList();
        evokanswercorrect2[0] = CorrectAnswer(evok, evokanswerkey2, 1, 0);
        evok[2] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[0] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok2submit").click(function(){
        evok[3] = GetItemTrueFalseButton4();
        evokanswercorrect1[1] = CorrectAnswer(evok, evokanswerkey1, 3, 1);
        evok[4] = GetItemDropDownList();
        evokanswercorrect2[1] = CorrectAnswer(evok, evokanswerkey2, 4, 1);
        evok[5] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[1] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok3submit").click(function(){
        evok[6] = GetItemTrueFalseButton4();
        evokanswercorrect1[2] = CorrectAnswer(evok, evokanswerkey1, 6, 2);
        evok[7] = GetItemDropDownList();
        evokanswercorrect2[2] = CorrectAnswer(evok, evokanswerkey2, 7, 2);
        evok[8] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[2] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok4submit").click(function(){
        evok[9] = GetItemTrueFalseButton4();
        evokanswercorrect1[3] = CorrectAnswer(evok, evokanswerkey1, 9, 3);
        evok[10] = GetItemDropDownList();
        evokanswercorrect2[3] = CorrectAnswer(evok, evokanswerkey2, 10, 3);
        evok[11] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[3] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok5submit").click(function(){
        evok[12] = GetItemTrueFalseButton4();
        evokanswercorrect1[4] = CorrectAnswer(evok, evokanswerkey1, 12, 4);
        evok[13] = GetItemDropDownList();
        evokanswercorrect2[4] = CorrectAnswer(evok, evokanswerkey2, 13, 4);
        evok[14] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[4] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok6submit").click(function(){
        evok[15] = GetItemTrueFalseButton4();
        evokanswercorrect1[5] = CorrectAnswer(evok, evokanswerkey1, 15, 5);
        evok[16] = GetItemDropDownList();
        evokanswercorrect2[5] = CorrectAnswer(evok, evokanswerkey2, 16, 5);
        evok[17] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[5] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok7submit").click(function(){
        evok[18] = GetItemTrueFalseButton4();
        evokanswercorrect1[6] = CorrectAnswer(evok, evokanswerkey1, 18, 6);
        evok[19] = GetItemDropDownList();
        evokanswercorrect2[6] = CorrectAnswer(evok, evokanswerkey2, 19, 6);
        evok[20] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[6] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok8submit").click(function(){
        evok[21] = GetItemTrueFalseButton4();
        evokanswercorrect1[7] = CorrectAnswer(evok, evokanswerkey1, 21, 7);
        evok[22] = GetItemDropDownList();
        evokanswercorrect2[7] = CorrectAnswer(evok, evokanswerkey2, 22, 7);
        evok[23] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[7] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok9submit").click(function(){
        evok[24] = GetItemTrueFalseButton4();
        evokanswercorrect1[8] = CorrectAnswer(evok, evokanswerkey1, 24, 8);
        evok[25] = GetItemDropDownList();
        evokanswercorrect2[8] = CorrectAnswer(evok, evokanswerkey2, 25, 8);
        evok[26] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[8] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok10submit").click(function(){
        evok[27] = GetItemTrueFalseButton4();
        evokanswercorrect1[9] = CorrectAnswer(evok, evokanswerkey1, 27, 9);
        evok[28] = GetItemDropDownList();
        evokanswercorrect2[9] = CorrectAnswer(evok, evokanswerkey2, 28, 9);
        evok[29] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[9] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok11submit").click(function(){
        evok[30] = GetItemTrueFalseButton4();
        evokanswercorrect1[10] = CorrectAnswer(evok, evokanswerkey1, 30, 10);
        evok[31] = GetItemDropDownList();
        evokanswercorrect2[10] = CorrectAnswer(evok, evokanswerkey2, 31, 10);
        evok[32] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[10] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok12submit").click(function(){
        evok[33] = GetItemTrueFalseButton4();
        evokanswercorrect1[11] = CorrectAnswer(evok, evokanswerkey1, 33, 11);
        evok[34] = GetItemDropDownList();
        evokanswercorrect2[11] = CorrectAnswer(evok, evokanswerkey2, 34, 11);
        evok[35] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[11] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok13submit").click(function(){
        evok[36] = GetItemTrueFalseButton4();
        evokanswercorrect1[12] = CorrectAnswer(evok, evokanswerkey1, 36, 12);
        evok[37] = GetItemDropDownList();
        evokanswercorrect2[12] = CorrectAnswer(evok, evokanswerkey2, 37, 12);
        evok[38] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[12] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok14submit").click(function(){
        evok[39] = GetItemTrueFalseButton4();
        evokanswercorrect1[13] = CorrectAnswer(evok, evokanswerkey1, 39, 13);
        evok[40] = GetItemDropDownList();
        evokanswercorrect2[13] = CorrectAnswer(evok, evokanswerkey2, 40, 13);
        evok[41] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[13] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok15submit").click(function(){
        evok[42] = GetItemTrueFalseButton4();
        evokanswercorrect1[14] = CorrectAnswer(evok, evokanswerkey1, 42, 14);
        evok[43] = GetItemDropDownList();
        evokanswercorrect2[14] = CorrectAnswer(evok, evokanswerkey2, 43, 14);
        evok[44] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[14] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok16submit").click(function(){
        evok[45] = GetItemTrueFalseButton4();
        evokanswercorrect1[15] = CorrectAnswer(evok, evokanswerkey1, 45, 15);
        evok[46] = GetItemDropDownList();
        evokanswercorrect2[15] = CorrectAnswer(evok, evokanswerkey2, 46, 15);
        evok[47] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[15] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok17submit").click(function(){
        evok[48] = GetItemTrueFalseButton4();
        evokanswercorrect1[16] = CorrectAnswer(evok, evokanswerkey1, 48, 16);
        evok[49] = GetItemDropDownList();
        evokanswercorrect2[16] = CorrectAnswer(evok, evokanswerkey2, 49, 16);
        evok[50] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[16] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok18submit").click(function(){
        evok[51] = GetItemTrueFalseButton4();
        evokanswercorrect1[17] = CorrectAnswer(evok, evokanswerkey1, 51, 17);
        evok[52] = GetItemDropDownList();
        evokanswercorrect2[17] = CorrectAnswer(evok, evokanswerkey2, 52, 17);
        evok[53] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[17] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok19submit").click(function(){
        evok[54] = GetItemTrueFalseButton4();
        evokanswercorrect1[18] = CorrectAnswer(evok, evokanswerkey1, 54, 18);
        evok[55] = GetItemDropDownList();
        evokanswercorrect2[18] = CorrectAnswer(evok, evokanswerkey2, 55, 18);
        evok[56] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[18] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok20submit").click(function(){
        evok[57] = GetItemTrueFalseButton4();
        evokanswercorrect1[19] = CorrectAnswer(evok, evokanswerkey1, 57, 19);
        evok[58] = GetItemDropDownList();
        evokanswercorrect2[19] = CorrectAnswer(evok, evokanswerkey2, 58, 19);
        evok[59] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[19] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok21submit").click(function(){
        evok[60] = GetItemTrueFalseButton4();
        evokanswercorrect1[20] = CorrectAnswer(evok, evokanswerkey1, 60, 20);
        evok[61] = GetItemDropDownList();
        evokanswercorrect2[20] = CorrectAnswer(evok, evokanswerkey2, 61, 20);
        evok[62] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[21] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok22submit").click(function(){
        evok[63] = GetItemTrueFalseButton4();
        evokanswercorrect1[21] = CorrectAnswer(evok, evokanswerkey1, 63, 21);
        evok[64] = GetItemDropDownList();
        evokanswercorrect2[21] = CorrectAnswer(evok, evokanswerkey2, 64, 21);
        evok[65] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[21] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok23submit").click(function(){
        evok[66] = GetItemTrueFalseButton4();
        evokanswercorrect1[22] = CorrectAnswer(evok, evokanswerkey1, 66, 22);
        evok[67] = GetItemDropDownList();
        evokanswercorrect2[22] = CorrectAnswer(evok, evokanswerkey2, 67, 22);
        evok[68] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[22] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok24submit").click(function(){
        evok[69] = GetItemTrueFalseButton4();
        evokanswercorrect1[23] = CorrectAnswer(evok, evokanswerkey1, 69, 23);
        evok[70] = GetItemDropDownList();
        evokanswercorrect2[23] = CorrectAnswer(evok, evokanswerkey2, 70, 23);
        evok[71] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[23] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok25submit").click(function(){
        evok[72] = GetItemTrueFalseButton4();
        evokanswercorrect1[24] = CorrectAnswer(evok, evokanswerkey1, 72, 24);
        evok[73] = GetItemDropDownList();
        evokanswercorrect2[24] = CorrectAnswer(evok, evokanswerkey2, 73, 24);
        evok[74] = GetItemResponseTextArea();
        CodeUtterances.codeTherapist();
        AgentResponse(agentanswerkey, 4);
        evokanswerkey3[24] = CorrectOpenAnswer(agentanswerkey, 4);
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok26submit").click(function(){
        evok[73], evok[74], evok[75], evok[76], evok[77], evok[78], evok[79], evok[80] = GetSelectedSpanContainers();
        evokanswercorrect4[0], evokanswercorrect4[1], evokanswercorrect4[2], evokanswercorrect4[3], evokanswercorrect4[4], evokanswercorrect4[5], evokanswercorrect4[6], evokanswercorrect4[7] = GetSelectedSpanContainers();   
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok27submit").click(function(){
        evok[81] = GetItemResponseTextArea();
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok28submit").click(function(){
        evok[82] = GetItemResponseTextArea();
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok29submit").click(function(){
        evok[83] = GetItemResponseTextArea();
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok30submit").click(function(){
        evok[84] = GetItemResponseTextArea();
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
    
    $(".evok31submit").click(function(){
        evok[85] = GetItemResponseTextArea();
        evokpro = UpdateProgressIndicator(evok);
        UpdateProgressMetrics();
    });
   
});