/* Определяем класс, который будет заполнять список слов */
function Showlist(eng,transl,exam,study){
    this.eng = eng;
    this.transl = transl;
    this.exam = exam;
    this.study = study;
}

/* Search Words Table */
searchWordTable = function() {
    foundTable = [];
    var ceng, ctransl, cexam, cstudy;
    var msel = $("#partsofwords").val();
    var sel = msel.substr(1);
    var selNew = new RegExp(sel +'$','ig');
    var showWord;
    $("#suffixdescr").html(jsarr[msel]); // Это - описание суффикса
    for (f = 0; f < wordsActual.length; f++) {
        showWord = 0;
        if (sel == "Full") {showWord = 1;}
        else {
            showWord = (wordsActual[f].eng.match(selNew)) ? 1 : 0;
        } // Тут мы проверяем, показывать слово или нет

        if (showWord) {
            ceng = wordsActual[f].eng;
            ctransl = (lang == 'ukr') ? wordsActual[f].ukr : wordsActual[f].rus;
            cexam = wordsActual[f].exam;
            testWord = wordsActual[f].eng;
            cstudy = seekPrefWords.some(isMatchPref);
            foundTable[foundTable.length] = new Showlist(ceng, ctransl, cexam, cstudy);
        }
    }
};
/* Search Phrasal Verbs Table */
searchPhrasalTable = function(numKey){
    foundTable = [];
    var ceng, ctransl, cexam, cstudy;
    if(numKey < 2) {
        etalon = (numKey)?  $("input#showkeys").val() :  $("input#showverbs").val();
        // etalon = phrasalActual[newIndex].key[numKey];
        et = $("input#showverbs").val();
        console.log("etalon:" + etalon);
        console.log("et:" + et);
    }


    for (f = 0; f < phrasalActual.length; f++) {
        ceng = phrasalActual[f].eng;
        ctransl = (lang == 'ukr') ? phrasalActual[f].ukr : phrasalActual[f].rus;
        cexam = phrasalActual[f].exam;
        testWord = phrasalActual[f].eng;
        cstudy = seekPrefPhrasals.some(isMatchPref);
        if(numKey < 2){
            if (etalon == phrasalActual[f].key[numKey]) { // Совпадение ключа
                foundTable[foundTable.length] = new Showlist(ceng,ctransl,cexam, cstudy);
            }
        }else{
            foundTable[foundTable.length] = new Showlist(ceng,ctransl,cexam, cstudy); // Бросаем полный список
        }
    }
};
/* Search Irregular Verbs Table */
searchIrregularTable = function(){
    foundTable = [];
    var ceng, ctransl, cexam, cstudy;
    for (f = 0; f < irregularActual.length; f++) {
        ceng = irregularActual[f].eng;
        ctransl = (lang == 'ukr') ? irregularActual[f].ukr : irregularActual[f].rus;
        cexam = irregularActual[f].exam;
        testWord = irregularActual[f].eng;
        cstudy = seekPrefIrregulars.some(isMatchPref);
        foundTable[foundTable.length] = new Showlist(ceng,ctransl,cexam, cstudy);
    }
};
/* Show List that was Found */
showWordList = function(){
    whoVisible = 1;
    var titleTable = ["First Condition", "Second Condition", "Full List"];
    searchWordTable(); //
    showAreaTable(); // Уже в Бриксе
    numKey = 2;
    $("h5").text(titleTable[numKey]);
    $("div.self.listofwords .tableplace").html(mainTable);
    setVisible(whoVisible);
};
/* Show List that was Found */
showPhrasalList = function(numKey){
    console.log(numKey);
    whoVisible = 4;
    var titleTable = ["Verbs", "Preposition", "Full List"];
    searchPhrasalTable(numKey);
    showAreaTable(); // Уже в Бриксе
    $("h5").text(titleTable[numKey]);
    $("div.self.listofphrasal .tableplace").html(mainTable);
    setVisible(whoVisible);
};
/* Show List that was Found */
showIrregularList = function(numKey){
    whoVisible = 8;
    var titleTable = ["First Condition", "Second Condition", "Full List"];
    searchIrregularTable(numKey);
    showAreaTable(); // Уже в Бриксе
    $("h5").text(titleTable[numKey]);
    $("div.self.listofirregular .tableplace").html(mainTable);
    setVisible(whoVisible);
};

$('#partsofwords').on('change', function(){
    showWordList();
});
backWords3000 = function(){
    setVisible(0);
};
backIrregular = function(){
    setVisible(7);
};
backPhrasal = function(){
    setVisible(3);
};
backTest = function(){
    setVisible(whoVisible);
};

