var onlyWord = []; // Array of phrasal
var phrasalStat = []; // Array of object with this word
var wordCurrent;
var wordForTest;
var globalDirection;
var direction; // rus-eng /// eng-rus
var questions, rightAnswers, wrongAnswers;
var testAnswer, oldTestIndex;

function PartForTest(arrForObj){
	this.eng = arrForObj[0];
	this.ukr = arrForObj[1];
	this.rus = arrForObj[2];
	this.exam = arrForObj[3];
}
PartForTest.prototype.question = function(direct) {
	var quest;
	switch (direct) {
		case "ukreng":
			quest = this.ukr;
			break;
		case "ruseng":
			quest = this.rus;
			break;
		case "engukr":
			quest = this.eng;
			break;
		case "engrus":
			quest = this.eng;
	}
	return quest;
};

PartForTest.prototype.answer = function(direct){
	var answ;
	switch (direct) {
		case "ukreng":
			answ = this.eng;
			break;
		case "ruseng":
			answ = this.eng;
			break;
		case "engukr":
			answ = this.ukr;
			break;
		case "engrus":
			answ = this.rus;
	}
	return answ;
};

function TestObject(questions, answers, examples){
	this.questions = questions;
	this.answers = answers;
	this.examples = examples;
}
/* ---------------------------------------- Make array of answers and template ---------------------------------------------- */
/* это только инциализация массива в первый момент вызова теста он вызывается из callTest а после этого вызывается функция с передачей словаря
*/
function initTest(){
	var initUL = "";
	for (it = 0; it < powerOfTest; it++){
		initUL += '<li id="w' + it + '" onclick="checkAnswer(' + it + ')">myanswer ' + it + '</li>';
	}

	$("#initTest").html(initUL);
	$("#testword").text("Question");

	$("#variants").show();
	$("#shortTimeExample").hide();
	if (lang == 'ukr') {
		$("#engukr").show();
		$("#ukreng").show();
		$("#ruseng").hide();
		$("#engrus").hide();
	} else {
		$("#engukr").hide();
		$("#ukreng").hide();
		$("#ruseng").show();
		$("#engrus").show();
	}
}

/* ------------------------------------ Start of testing -------------------------------------------------- */

/* ----------------------------------------------------------------------
	Part of our vocabulary which was set in arr1 = ["call", "put", "get"]; 
	Внимание! мне все равно, какой тип входного массива используется! Я его все равно выделяю в данном методе в часть для тестирования
-------------------------------------------------------------------------- */

/* это тестирует слова - абсолютно совпадает по функционалу с Иррегулар Вербс */
filterTestGroup = function(fw,firstLetters, searchSuffixes){
	phrasalTest = [];
	/* Кручу внешний цикл по буквам - их всего несколько а в нем перебираю уже каждый раз полный массив
	* TODO - это переделать - получается полный мрак */
	firstLetters.forEach(function(item) {
		if (item != "") {
			matchWord = RegExp('^' + item, 'ig');
			for (f = 0; f < fw.length; f++) {
				showWord = (fw[f].eng.match(matchWord)) ? 1 : 0;
				/* примеряем строку поиска Вот это ключевое различие для разных словарей */
				if (showWord) {
					if (lang == 'ukr') {
						transl = fw[f].ukr;
					} else {
						transl = fw[f].rus;
					}
					examEmpty = (fw[f].exam) ? fw[f].exam : fw[f].eng + " - " + transl;
					arrForPart = [fw[f].eng, fw[f].ukr, fw[f].rus, examEmpty];
					phrasalTest[phrasalTest.length] = new PartForTest(arrForPart);
				}
			}
		}
	});
};

/* Мы просто включаем видимость теста и инициализируем - сколько вариантов ответа показывать, потом запускае функцию, которая из всего словаря выбирает только слова, соответствующие условию */
callTest = function(vocabulary){

	setVisible(5);

	initTest();
    if (vocabulary == 3) {
		var arr1 = seekPrefIrregulars;
        var arr2 = [];
        whoVisible = 7;
		filterTestGroup(irregular,arr1,arr2);
    }
	if (vocabulary == 2) {
		var arr1 = seekPrefPhrasals;
		var arr2 = [];
        whoVisible = 3;
		filterTestGroup(phrasal,arr1,arr2);
	}
	if (vocabulary == 1) {
		var arr1 = seekPrefWords;
		var arr2 = [];
        whoVisible = 0;
		filterTestGroup(words,arr1,arr2);
	}
};
function setTestHeader(direction){
	switch (direction){
        case "ukreng":
            $("#headquestion").html("&nbsp;Ukrainian Word&nbsp;");
            break;
        case "ruseng":
            $("#headquestion").html("&nbsp;Russian Word&nbsp;");
            break;
        case "engukr":
            $("#headquestion").html("&nbsp;English Word&nbsp;");
            break;
        case "engrus":
            $("#headquestion").html("&nbsp;English Word&nbsp;");
            break;
    }
}

/* -------------------------------------------- Big main show of question and answers ------------------------------------------ */
showTest = function(direction){
	//console.info(direction);
	$("#variants").show();
	$("#shortTimeExample").hide();   

	globalDirection = direction;
	setTestHeader(direction);
	/* Right behavior */
	testAnswer = randIndex(phrasalTest.length);
	while (testAnswer == oldTestIndex) testAnswer = randIndex(phrasalTest.length); // need delete replicate
	oldTestIndex = testAnswer;
	if (powerOfTest > phrasalTest.length) {
		powerOfTest = phrasalTest.length;
		$(".smallerror").html("List for test contain less words then 'Number of answers for test'");
	} else {
		$(".smallerror").html("&nbsp;");
	}
	var powerBlock = [];
	// FIXME: Абсолютно неправильно работает статистика по тестам
  // получается, что тут крутимся пока не заполним - это очень дорогой способ
	for (j = 0; j < powerOfTest; j++) {
		found = true;
		/* Вот тут надо защита от дурака - если количество слов меньше чем POWER то мы получим бесконечный цикл*/
		while (found == true) {
			testIndex = randIndex(phrasalTest.length);
			newQuestion = phrasalTest[testIndex].question(direction);
			newAnswer = phrasalTest[testIndex].answer(direction);
			newExample = phrasalTest[testIndex].exam;	  
			found = false;
			for (f = 0; f < powerBlock.length; f++){
				if (powerBlock[f].answers == newAnswer) {
					found = true;
				}
			}
		}
		powerBlock[powerBlock.length] = new TestObject(newQuestion, newAnswer, newExample); 
	}

	randomQuestion = randIndex(powerOfTest);  // from 5
	wordForTest =  powerBlock[randomQuestion].questions;
	examForTest =  powerBlock[randomQuestion].examples;
	$("#testword").html(wordForTest);
	$("#testword").attr("answer", randomQuestion);
	$("#testword").attr("example", examForTest);

	wordCurrent = {word: '', count: 1, right: 0, wrong: 0, missed: 1}; 
	wordCurrent.word = wordForTest; // taken for block!!!
	/* 
	if there is our word in the array - add/ If no - push
	*/
	var avc = 0;
	avc = onlyWord.indexOf(wordForTest,avc); 
	if (avc < 0){
		onlyWord.push(wordForTest); 
		phrasalStat.push(wordCurrent);    
	} else {
		phrasalStat[avc].count++;
		phrasalStat[avc].missed++;
	}

	// Do we have a word in our base? 

	for (a = 0; a < powerOfTest; a++) {
		$("#w"+a).html(powerBlock[a].answers);
		$("#w"+a).css("color", "black");
	}
};
/* -------------------------------------------- Check answer and set statistics ------------------------------------------ */
checkAnswer = function(numAnswer){
	rightAnswer = $("#testword").attr("answer");  // answer from attribute
	exampleAfter = $("#testword").attr("example");  // answer from attribute
	questions++;

	var avArr = 0;
	avArr = onlyWord.indexOf(wordForTest,avArr);

	if (numAnswer == rightAnswer){
		$("#w"+numAnswer).css("color", "green");
		$("#testword").css("color", "green");
		$("#variants").hide();
		$("#shortTimeExample").html(exampleAfter);
		$("#shortTimeExample").show();
		setTimeout("showTest(globalDirection);$('#testword').css('color', 'blue')",delayAfter);

		rightAnswers++;
		phrasalStat[avArr].right++;
		phrasalStat[avArr].missed -= 1;
	} else {
		$("#w"+numAnswer).css("color", "red");
		$("#testword").css("color", "red");
		wrongAnswers++;
		phrasalStat[avArr].wrong++;    
	}
	$("#questions").html(questions);
	$("#rightanswers").html(rightAnswers);
	$("#wronganswers").html(wrongAnswers);

};
/* -------------------------------------------- Statystic ------------------------------------------ */ 
makeTableStat = function() {
	var i,outTable;   
 
	phrasalStatSort = phrasalStat.sort(function(a,b){
		if (a.word > b.word) { return 1; }
		if (b.word > a.word) { return -1;}
		return 0;
	});
	if (phrasalStat.length == 0) {
		outTable = "There is no statistics for the current session!";
	} else {
		outTable = "<table class='statistics-table'><tr><th id='stat-word'>Question</th><th id='stat-count'>Count</th><th id='stat-right'>Right</th><th id='stat-wrong'>Wrong</th><th id='stat-missed'>Missed</th></tr>";
		for (i = 0; i < phrasalStat.length; i++){
			if (phrasalStatSort[i].wrong > 0) { colorrezult = "wronganswer"; } 
										else  { colorrezult = "rightanswer"; }
			outTable  += "<tr class='" + colorrezult + "'><td>" 
					+ phrasalStatSort[i].word + "</td><td>" 
					+ phrasalStatSort[i].count + "</td><td>" 
					+ phrasalStatSort[i].right + "</td><td>" 
					+ phrasalStatSort[i].wrong + "</td><td>" 
					+ phrasalStatSort[i].missed + "</td></tr>";
		}
		outTable += "</table>";
  }  
  return outTable;  
};

showStat = function() {
    var outTableStat; 
    outTableStat = makeTableStat();  
    setVisible(6);
    $("#statfull").html(outTableStat);
};

doneStat = function(){
    setVisible(5);
};
function setStudyWord(){};