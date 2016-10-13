Object.prototype.clone = function() {
	var newObj = (this instanceof Array) ? [] : {};
	for (i in this) {
		if (i == 'clone')
			continue;
		if (this[i] && typeof this[i] == "object"){
			newObj[i] = this[i].clone();
		}
		else
			newObj[i] = this[i]
	}
	return newObj;
};
//-----------------------------------
var wordsActual = words.clone();
var phrasalActual = phrasal.clone();
var irregularActual = irregular.clone();

var randIndex = function(sizeOfRandom){
  myVar = Math.floor(Math.random() * sizeOfRandom);
  return myVar;
};

/* --------------- Show message about example, synonym or anthonym ------------------ */
showYet = function(id,text,notext){
    if(text){
        $(id).html(text);
        $(id).removeClass("yet");
        $(id).addClass("yes");
    } else {
        $(id).html("There are no "+notext+" yet");
        $(id).removeClass("yes");
        $(id).addClass("yet");
    }
};
/* Показ одиночного слова при перелистывании*/
showVerb = function(fs, typeOfVoc){
    $(".eng").html(fs.eng + fs.tail);
    var translword, translinks;
    fshowbothlang = $('input[type=checkbox]:checked#showbothlang').size();
    if (fshowbothlang){
        translword = fs.ukr;
        translinks = fs.uklinks();
    } else {
        if (lang == 'ukr'){
            translword = fs.ukr;
            translinks = fs.uklinks();
        } else {
            translword = fs.rus;
            translinks = fs.rulinks();
        }
    }
    $(".ukr").html(translword);
    $(".links.ukrlinks").html(translinks);
    $(".rus").html(fs.rus);
    $(".links.ruslinks").html(fs.rulinks());
    $(".imageword").html(fs.image());
    $(".linksword").html(fs.elinks());
    var forexam ='';
    if (fs.exam){
        forexam = fs.descr+"<br>Example:<br>"+fs.exam;
    }else{
        forexam = fs.descr;
    }
    $(".example").html(fs.exam);
    showYet(".example",forexam,"examples");
    showYet(".syn",fs.syn,"synonyms");
    showYet(".ant",fs.ant,"antonyms");
    $(".links.link-syn").html(fs.thlinks());
    if (typeOfVoc == "Phrasal"){
        $("#showverbs").attr("value", fs.key[0]);
        $("#showkeys").attr("value", fs.key[1]);
    }
};

goWord = function(){
    var admitTest;
	words.forEach(function(item){
        if (item.doit == '1') {
            testWord = item.eng;
            isMatched = seekPrefWords.some(isMatchPref); // ***** Это отличие
            if (isMatched) {
                admitTest = 0;
                if (testMode) {
                    if (item.exam || item.descr || item.img) admitTest = 1;
                } else {admitTest = 1;}
                if (admitTest) wordsToDo[wordsToDo.length] = item;
            }
        }
	});

	words = wordsToDo;
    
    if (words.length) {    
        wordsToDo = [];	
        if (order) { newIndex = randIndex(words.length);  
        } else { newIndex = 0; } // just first element

        showVerb(words[newIndex], "Word3000");

        words[newIndex].doit = '0';		
        if (words.length == 1) { words = wordsActual.clone();}
    } else { alert("There is empty list for work"); }
};


/* --------------- end showWord ------------------ */

goPhrasal = function(){
    var admitTestP;
    phrasal.forEach(function(item){
        if (item.doit == '1') {
            testWord = item.eng;
            isMatched = seekPrefPhrasals.some(isMatchPref);
            if (isMatched){
                admitTestP = 0;
                if (testMode) {
                    if (item.exam || item.descr || item.img) admitTestP = 1;
                } else { admitTestP = 1;}
                if (admitTestP) phrasalToDo[phrasalToDo.length] = item;
            }
        }
    });

    phrasal = phrasalToDo;

    if (phrasal.length) {
        phrasalToDo = [];
        if (order) { newIndex = randIndex(phrasal.length);
        } else { newIndex = 0; } // just first element

        showVerb(phrasal[newIndex],"Phrasal");  // Show word which found

        phrasal[newIndex].doit = '0';
        if (phrasal.length == 1) { phrasal = phrasalActual.clone();}
    } else { alert("There is empty list for work"); }
};

goIrregular = function(){
    var admitTestP;
    irregular.forEach(function(item){
        if (item.doit == '1') {
            testWord = item.eng;
            isMatched = seekPrefIrregulars.some(isMatchPref);
            if (isMatched){
                admitTestP = 0;
                if (testMode) {
                    if (item.exam || item.descr || item.img) admitTestP = 1;
                } else { admitTestP = 1;}
                if (admitTestP) irregularToDo[irregularToDo.length] = item;
            }
        }
    });

    irregular = irregularToDo;

    if (irregular.length) {
        irregularToDo = [];
        if (order) { newIndex = randIndex(irregular.length);
        } else { newIndex = 0; } // just first element

        showVerb(irregular[newIndex],"Irregular");  // Show word which found

        irregular[newIndex].doit = '0';
        if (irregular.length == 1) { irregular = irregularActual.clone();}
    } else { alert("There is empty list for work"); }
};
stopShow = function(){
    setTimeout(function() {
        clearInterval(timerId);
    }, 1000);
};
/* Show vocabylaries non stop with delay */
goNonStop = function(area){
    timerId = setInterval(function() {
        switch (area) {
            case 1:
                goWord();
                break;
            case 2:
                goPhrasal();
                break;
            case 3:
                goIrregular();
                break;
        }
    },delayBefore);
};


