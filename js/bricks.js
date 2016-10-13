/* Common table for show word */
showAreaWords3000 = function() {

    mainBody = '\
    <h4 class="maintitle"></h4>\
    <div class="areabuttons">\
        <input type="button" class="list" onclick="showWordList()" value="Whole List">\
        &nbsp&nbsp<input type="button" class="test" onclick="callTest(1)" value="Test">\
    </div>\
    <table class="maintable">\
        <tr><th class="maincolumn">\
            <div class="examination">\
                <input type="button" class="next" value="Next" onclick="goWord()" >&nbsp\
                <input type="button" class="start" value="Go" onclick="goNonStop(1)" >&nbsp\
                <input type="button" class="stop" value="Stop" onclick="stopShow()" >&nbsp\
            </div>\
            </th>\
            <th colspan="2" class="translateto">Ukrainian/Russian</th>\
        </tr>\
        <tr><td rowspan="4" class="englmain">\
            <div class="eng"></div>\
        <div class="imageword"></div>\
        <div class="linksword"></div>\
        </td>\
            <td class="ukr" colspan="1"></td>\
            <td class="links ukrlinks"></td>\
        </tr>\
        <tr class="rusline">\
            <td class="rus" colspan="1"></td>\
            <td class="links ruslinks"></td>\
        </tr>\
        <tr class="brickexam"><td class="example" colspan="2"></td></tr>\
        <tr class="bricksyn"><td class="phrasaladd">\
                <div class="syn"></div>\
                <div class="ant"></div>\
            </td>\
            <td class="links link-syn"></td>\
        </tr>\
    </table>';
};
/* Common table for show list of words */
showAreaTable = function(){
    foundTable.sort(function(a,b){
        if (a.eng > b.eng) { return  1; }
        if (b.eng > a.eng) { return -1; }
        return 0;
    });
    var langhead;
    langhead = (lang == 'ukr') ? "Ukrainian" : "Russian";
    //mainTable = "<table class='grupped'><thead><tr><th>#</th><th id='verbheader'>Verb</th><th class='verbrus'>" + langhead + "</th><th>Example</th></tr></thead><tbody>";
    mainTable = "<table id='myTable' class='tablesorter'><thead><tr><th>#</th><th id='verbheader'>Verb</th><th class='verbrus'>" + langhead + "</th><th>Example</th></tr></thead><tfoot><tr><th>#</th><th id='verbheader'>Verb</th><th class='verbrus'>" + langhead + "</th><th>Example</th></tr></tfoot><tbody>";
    for (i = 0; i < foundTable.length; i++){
        var isStudy = (foundTable[i].study)? " class='study' " : "";
        mainTable  += "<tr" + isStudy + "><td>"
            + (i+1) + "</td><td>"
            + foundTable[i].eng       + "</td><td>"
            + foundTable[i].transl    + "</td><td>"
            + foundTable[i].exam      + "</td></tr>";
    }
    mainTable += "</tbody></table>";
};
