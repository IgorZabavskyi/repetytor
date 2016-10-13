/* === Switch to Words 3000 === */
function switchToWords(){

    showAreaWords3000();
    $("div.self.w3000").html(mainBody);
    $("div.self.w3000 h4").text("Study 3000 Words");
    $("div.self.w3000 .next").attr("onclick","goWord()");
    $("div.self.w3000 .list").attr("onclick","showWordList()");
    $("div.self.w3000 .test").attr("onclick","callTest(1)");
    $("div.self.w3000 .start").attr("onclick","goNonStop(1)");
    showBricks();
 /* */
    whoVisible = 0;
    setVisible(whoVisible);
}
/* === Switch to Phrasal Verbs === */
function switchToPhrasal(){

    showAreaWords3000();

    $("div.self.p3000").html(mainBody);
    $("div.self.p3000 h4").text("Phrasal Verbs");
    $("div.self.p3000 .next").attr("onclick","goPhrasal()");
    $("div.self.p3000 .list").attr("onclick","showPhrasalList(2)");
    $("div.self.p3000 .test").attr("onclick","callTest(2)");
    $("div.self.p3000 .start").attr("onclick","goNonStop(2)");

    showBricks();
    whoVisible = 3;
    setVisible(whoVisible);
    $(".filter-buttons").show();
}
/* === Switch to Irregular Verbs === */
function switchToIrregular(){

    showAreaWords3000();

    $("div.self.i3000").html(mainBody);
    $("div.self.i3000 h4").text("Irregular Verbs");
    $("div.self.i3000 .next").attr("onclick","goIrregular()");
    $("div.self.i3000 .list").attr("onclick","showIrregularList(2)");
    $("div.self.i3000 .test").attr("onclick","callTest(3)");
    $("div.self.i3000 .start").attr("onclick","goNonStop(3)");

    showBricks();
    whoVisible = 7;
    setVisible(whoVisible);
    $(".filter-buttons").show();
}
/* === Switch Language to Ukrainian === */
switchUkr = function() {
    fshowbothlang = $('input[type=checkbox]:checked#showbothlang').size();
    lang = 'ukr';
    $("input#ukr").css("border-color","red");
    $("input#rus").css("border-color","lightgoldenrodyellow");
    $("#engukr").show();
    $("#ukreng").show();
    $("#ruseng").hide();
    $("#engrus").hide();
    if (!fshowbothlang) $(".translateto").text("Ukrainian");
    switch(whoVisible) {
        case 0:
            showVerb(words[newIndex], "Word3000");
            break;
        case 1:
            showWordList();
            break;
        case 4:
            showPhrasalList(numBack);
            break;
        case 8:
            showIrregularList(2);
            break;
    }
};

/* === Switch Language to Russian === */
switchRus = function() {
    fshowbothlang = $('input[type=checkbox]:checked#showbothlang').size();
    lang = 'rus';
    $("input#ukr").css("border-color","lightgoldenrodyellow");
    $("input#rus").css("border-color","red");
    $("#engukr").hide();
    $("#ukreng").hide();
    $("#ruseng").show();
    $("#engrus").show();
    if (!fshowbothlang) $(".translateto").text("Russian");
    switch(whoVisible) {
        case 0:
            showVerb(words[newIndex], "Word3000");
            break;
        case 1:
            showWordList();
            break;
        case 4:
            showPhrasalList(numBack);
            break;
        case 8:
            showIrregularList(2);
            break;
    };
};

setVisible(whoVisible);
showFilters();
showLineSettings();
changeSetup(0);

//$("label[for='poweroftest'] .error").css("color","red");
//$(".textinput").css("background-color", "yellow");
$("input.textinput").blur(function(event){
    var selectorError = "label[for='" + event.target.id + "'] .errormessage";
    if (this.value ==""){
        this.classList.add("error");
        $(selectorError).css("color","red");
        $(selectorError).html("This field is mandatory");
        this.focus();
    } else {
        if (isNaN(this.value)) {
             this.classList.add("error");
             $(selectorError).css("color","red");
             $(selectorError).html("You must enter the number");
             this.focus();
        } else {
             $(selectorError).html("&nbsp;");
             this.classList.remove("error");
        }
    }
});
