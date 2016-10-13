switchView = function(typeView){

    switch(typeView){
        case "Short":
            showEngImage = 0;
            showEngLinks = 0;
            showTrRLinks = 0;
            showSynonyms = 0;
            showExamples = 0;
            showBothlang = 0;
            break;
        case "Deep":
            showEngImage = 1;
            showEngLinks = 1;
            showTrRLinks = 1;
            showSynonyms = 1;
            showExamples = 1;
            showBothlang = 1;
            break;
        case "Big":
            showEngImage = 1;
            showEngLinks = 0;
            showTrRLinks = 0;
            showSynonyms = 1;
            showExamples = 1;
            showBothlang = 0;
            break;
        case "Custom":
            myCookie = Cookies.get();
            showEngImage = myCookie.showEngImage;
            showEngLinks = myCookie.showEngLinks;
            showTrRLinks = myCookie.showTrRLinks;
            showSynonyms = myCookie.showSynonyms;
            showExamples = myCookie.showExamples;
            showBothlang = myCookie.showBothlang;
            break;
    }

    showSetupVariables(typeView);
}

/* совершенно не понятно, почему при перезапуске сайта все чекбоксы показываются как чекед, если я вытягиваю из куков нужное значение и оно фолс */
function showUnit(point,val){
    if (val == 1){
        console.warn(point +"  " + val);
        $(point).prop('checked', true);
    } else {
        console.info(point +"  " + val);
        $(point).prop('checked', false);
    }
}
/* Это мы показываем просто переключатели в сетапе - они установлены так от того как стоят куки
* Куки можно ставить и так - по умолчанию, тогда чекбоксы мы можем настраивать как угодно
* */
function showSetupVariables(typeView){
    showTypeView = typeView;
    allInputs = $(".blockofshow input");
    $("input[name='poweroftest']").val(powerOfTest);
    $("input[name='delayafter']").val(delayAfter);
    $("input[name='delaybefore']").val(delayBefore);

    showUnit('#showengimage',showEngImage);
    showUnit('#showenglinks',showEngLinks);
    showUnit('#showtrrlinks',showTrRLinks);
    showUnit('#showsynonyms',showSynonyms);
    showUnit('#showexamples',showExamples);
    showUnit('#showbothlang',showBothlang);
    console.log("+++++++++++");
    console.log(showTypeView,showEngImage, showEngLinks, showTrRLinks, showSynonyms, showExamples, showBothlang);
    console.log("+++++++++++");

    var setView = "input[value='" + showTypeView + "']";
    $(setView).attr('checked','checked');
    console.log(setView);
    if (showTypeView == "Custom"){
        $(".rightblock fieldset").removeClass("blockdisabled");
        for(var j=0; j<allInputs.length; j++){
            allInputs[j].disabled = false;
        }
    }else{
        $(".rightblock fieldset").addClass("blockdisabled");
        for(var j=0; j<allInputs.length; j++){
            allInputs[j].disabled = true;
        }
    }

    $("input[id='word1']").val(seekPrefWords[0]);
    $("input[id='word2']").val(seekPrefWords[1]);
    $("input[id='word3']").val(seekPrefWords[2]);
    $("input[id='word4']").val(seekPrefWords[3]);
    $("input[id='word5']").val(seekPrefWords[4]);

    $("input[id='phrl1']").val(seekPrefPhrasals[0]);
    $("input[id='phrl2']").val(seekPrefPhrasals[1]);
    $("input[id='phrl3']").val(seekPrefPhrasals[2]);
    $("input[id='phrl4']").val(seekPrefPhrasals[3]);
    $("input[id='phrl5']").val(seekPrefPhrasals[4]);

    $("input[id='irrg1']").val(seekPrefIrregulars[0]);
    $("input[id='irrg2']").val(seekPrefIrregulars[1]);
    $("input[id='irrg3']").val(seekPrefIrregulars[2]);
    $("input[id='irrg4']").val(seekPrefIrregulars[3]);
    $("input[id='irrg5']").val(seekPrefIrregulars[4]);
}
setVisible = function(who){
    // who 0 - w3000 1 - justlist 2 - setup 3 - phrasal 4-
    for (i = 0; i < testSelector.length; i++){
        whoSelector[i] = "div.self." + testSelector[i].classList[1];
        if (i == who) {
            $(whoSelector[i]).show();
        } else {
            $(whoSelector[i]).hide();
        }
    }
    if (who == 2){
        showSetupVariables(showTypeView);
    }
    document.title = 'Repetytor: '+mainTitle[who];
    switch(who){
        case 0:
            $("#www3000z").css("background-color","navajowhite");
            $("#phverbz").css("background-color","#fff5c3");
            $("#irverbz").css("background-color","#fff5c3");
            break;
        case 3:
            $("#www3000z").css("background-color","#fff5c3");
            $("#phverbz").css("background-color","navajowhite");
            $("#irverbz").css("background-color","#fff5c3");
            break;
        case 7:
            $("#www3000z").css("background-color","#fff5c3");
            $("#phverbz").css("background-color","#fff5c3");
            $("#irverbz").css("background-color","navajowhite");
            break;
    }
};

/// --------------------- Build Words

showFilters = function(){
    var showSelect = "You can set filter:<select name='partsofwords' id='partsofwords'>";
    for(var key in jsarr){
        showSelect += "<option value='" + key + "'>" + key + "</option>";
    }
    showSelect += "</select>";
    $("#filters").html(showSelect);
};

// *** End Setting

showLineSettings = function(){
    testRight = (!testMode)? "Full":"Test";    
    orderRight = (!order)? "Alphabet":"Random";
    settingsRight = "Current (mode/order/delay): " + testRight + "/" + orderRight + "/" + delayBefore;
    $("#showlinesettings").html(settingsRight);
};
/* При клике на кнопке меняются установки и меняется надпись на кнопке. Она показывает, какая установка произойдет при следующем клике */
changeSettings = function(){
    testRight = (testMode)? "Full":"Test";
    buttonMode = '<input type="button" id="modetest" value="'+ testRight +'" onclick="changeSetup(2)">&nbsp';
    orderRight = (order)? "Alphabet":"Random";
    buttonOrder = '<input type="button" id="ordertest" value="'+ orderRight +'" onclick="changeSetup(1)">&nbsp';
    settingsRight = "You can set - mode: " + buttonMode + " - order: " + buttonOrder;
    $(".settings").html(settingsRight);   
};

/* Show parts of main screen */
function showBricks(){

    fshowexamples = $('input[type=checkbox]:checked#showexamples').size();
    fshowsynonyms = $('input[type=checkbox]:checked#showsynonyms').size();
    fshowengimage = $('input[type=checkbox]:checked#showengimage').size();
    fshowenglinks = $('input[type=checkbox]:checked#showenglinks').size();
    fshowtrrlinks = $('input[type=checkbox]:checked#showtrrlinks').size();
    fshowbothlang = $('input[type=checkbox]:checked#showbothlang').size();

    if (fshowexamples){$(".brickexam").removeClass("noshow");} else {$(".brickexam").addClass("noshow");}
    if (fshowsynonyms){$(".bricksyn").removeClass("noshow");} else {$(".bricksyn").addClass("noshow");}
    if (fshowengimage){$(".imageword").removeClass("noshow");} else {$(".imageword").addClass("noshow");}
    if (fshowenglinks){$(".linksword").removeClass("noshow");} else {$(".linksword").addClass("noshow");}
    if (fshowtrrlinks){$(".links").removeClass("noshow");} else {$(".links").addClass("noshow");}
    if (fshowbothlang){
        $(".rusline").removeClass("onelanguage");

    } else {
        $(".rusline").addClass("onelanguage");
        var langtitle = (lang == 'ukr')?"Ukrainian":"Russian";
        $(".translateto").text(langtitle);
    }
}

doneSetup = function(){
    powerOfTest = Number($("input[name='poweroftest']").val());
    delayAfter = Number($("input[name='delayafter']").val());
    delayBefore = Number($("input[name='delaybefore']").val());

    seekPrefWords[0] = $("input[id='word1']").val();
    seekPrefWords[1] = $("input[id='word2']").val();
    seekPrefWords[2] = $("input[id='word3']").val();
    seekPrefWords[3] = $("input[id='word4']").val();
    seekPrefWords[4] = $("input[id='word5']").val();

    seekPrefPhrasals[0] = $("input[id='phrl1']").val();
    seekPrefPhrasals[1] = $("input[id='phrl2']").val();
    seekPrefPhrasals[2] = $("input[id='phrl3']").val();
    seekPrefPhrasals[3] = $("input[id='phrl4']").val();
    seekPrefPhrasals[4] = $("input[id='phrl5']").val();

    seekPrefIrregulars[0] = $("input[id='irrg1']").val();
    seekPrefIrregulars[1] = $("input[id='irrg2']").val();
    seekPrefIrregulars[2] = $("input[id='irrg3']").val();
    seekPrefIrregulars[3] = $("input[id='irrg4']").val();
    seekPrefIrregulars[4] = $("input[id='irrg5']").val();

    showEngImage = ($("input[name='showengimage']").is(":checked"))?1:0;
    showEngLinks = ($("input[name='showenglinks']").is(":checked"))?1:0;
    showTrRLinks = ($("input[name='showtrrlinks']").is(":checked"))?1:0;
    showSynonyms = ($("input[name='showsynonyms']").is(":checked"))?1:0;
    showExamples = ($("input[name='showexamples']").is(":checked"))?1:0;
    showBothlang = ($("input[name='showbothlang']").is(":checked"))?1:0;
    showTypeView = $('input[name=viewword]:checked').val();

    if (powerOfTest > 10) {
        powerOfTest = 10;
    } else if (powerOfTest <= 2){
        powerOfTest = 2;
    }
    Cookies.set('delayBefore', delayBefore, { expires: 7 });
    Cookies.set('delayAfter', delayAfter, { expires: 7 });
    Cookies.set('powerOfTest', powerOfTest, { expires: 7 });
/**/
    toCookieWords = arrtoString(seekPrefWords);
    toCookiePhrasals = arrtoString(seekPrefPhrasals);
    toCookieIrregulars = arrtoString(seekPrefIrregulars);
    Cookies.set('toCookieWords', toCookieWords, { expires: 7 });
    Cookies.set('toCookiePhrasals', toCookiePhrasals, { expires: 7 });
    Cookies.set('toCookieIrregulars', toCookieIrregulars, { expires: 7 });

    Cookies.set('showTypeView', showTypeView, { expires: 7 });
    Cookies.set('showEngImage', showEngImage, { expires: 7 });
    Cookies.set('showEngLinks', showEngLinks, { expires: 7 });
    Cookies.set('showTrRLinks', showTrRLinks, { expires: 7 });
    Cookies.set('showSynonyms', showSynonyms, { expires: 7 });
    Cookies.set('showExamples', showExamples, { expires: 7 });
    Cookies.set('showBothlang', showBothlang, { expires: 7 });

    initTest();
    showLineSettings();
    switch (whoVisible){
        case 0:
            switchToWords();
            break;
        case 3:
            switchToPhrasal();
            break;
        case 7:
            switchToIrregular();
            break;
    }
    setVisible(whoVisible);
};

callSetup = function(){
    setVisible(2);
};

changeSetup = function(whereChanged){
    switch(whereChanged){
        case 1: // Alphabet\Random
            order = (order) ? 0 : 1;
            break;
        case 2: // Test\Full
            testMode = (testMode)? 0 : 1;
            break;
    }
    changeSettings();
    showLineSettings();
};

