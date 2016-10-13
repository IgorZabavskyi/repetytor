
// http://www.multitran.ru/c/m.exe?l1=1&l2=2&s=get+out - идет на всех - в русский блок
// http://lingvolive.ru/translate/en-ru/get%20out - идет на всех - в русский блок
// http://www.oxfordlearnersdictionaries.com/us/definition/english/get-out_2?q=get+out English for all
// http://www.yourdictionary.com/get-out 
// http://www.bartleby.com/107/ Anatomy of the Human Body
// http://www.bartleby.com/151/ The World Factbook, 2008
// http://www.thesaurus.com/browse/carry%20out?s=t English for all - thesaurus-synonyms-anthonyms
// http://e2u.org.ua/s?w=understand&dicts=all&highlight=on - украинский на глаголах и словах... фразовые плохо
// https://www.ahdictionary.com/word/search.html?q=get+out English
// http://www.collinsdictionary.com/dictionary/american/get-out English
// https://www.wordnik.com/words/begin English - only word
// http://www.yourdictionary.com/career
// http://www.wordsmyth.net/?ent=career 
// http://translate.reference.com/english/ukrainian/get-out Українська
// http://www.etymonline.com/index.php?term=career 
// http://www.etymonline.com/index.php?allowed_in_frame=0&search=carry+out Phrasal - Etymology
// http://www.rhymezone.com/r/rhyme.cgi?Word=career 
// http://www.mnemonicdictionary.com/?word=get+out
// https://www.vocabulary.com/dictionary/bring%20out
// http://dictionary.infoplease.com/get-out простой английский
// http://www.correctenglish.ru/reference/proverbs-sayings/ пословицы и поговорки - перевод
// ==========
// http://www.infovisual.info/ - visual directory !!! много картинок редких слов
// http://www.rhymezone.com/r/rhyme.cgi?Word=finish&typeofrhyme=perfect&org1=syl&org2=l&org3=y рифмы
// http://www.usingenglish.com/reference/idioms/manna+from+heaven.html вот тут идиомы
// Проверить еще раз, как включаются селекторы для кнопок, чтобы не плодить имен для автотестов - как меняются и читаются атрибуты и значения элементов
// http://en.bab.la/phrases/application/reference-letter/english-russian/ - вот тут наиболее употребимые фразы
http://learnersdictionary.com/definition/take%20off Британская энциклопедия - есть все определения, даже фразовые глаголы
// http://translation.sensagent.com/get%20out/en-ru/
// TODO Надо для своего планшета сделать вариант, который НЕ обращается к базе, а на сервер выложить сайт, который читает из базы - таким образом мы перебиваем несанкционированное копирование
// FIXME - поставить проверку наличия интернета - чтобы с планшета можно было не получать ошибку об отсутствии сайта - ссылка нерабочая. Чтоб приличный отказ был
// http://www.alleng.ru/mybook/7phv170/TOP170_alph.htm  - list of verbs
// http://www.alleng.ru/mybook/6top2500/TOPalph_1-2500.htm 2500
// http://english.language.ru/lessons/verbs/verbs.html Irregular
// http://audio-class.ru/i-verbs.php произношение

function makeLink (engl,point,typeOfLink){
    var showLink;
    switch(typeOfLink) {
        case "text":
            showLink = extLinks[point][1];
            break;
        case "icon":
            showLink = "<img src='" + extLinks[point][3] + "'>";
            break; 
        case "banner":
            showLink = "<img src='" + extLinks[point][4] + "'>";
            break;            
    }
    return "<a href='" + extLinks[point][0]+ engl.replace(/ /g,extLinks[point][5]) + extLinks[point][6] + "' target='_blank' title='" + extLinks[point][2] + "'>" + showLink + "</a>" ;
}
/* Методы присутствуют во всех трех словарях */
function commonMethods(){
    this.enWiktionary = function(){return makeLink(this.eng,'enWiktionary',"banner");};
    this.ukWiktionary = function(){return makeLink(this.eng,'ukWiktionary',"icon");};
    this.ruWiktionary = function(){return makeLink(this.eng,'ruWiktionary',"icon");};
    this.enTheFreeDictionary = function(){return makeLink(this.eng,'enTheFreeDictionary',"banner");};
    this.enMackmillan = function(){return makeLink(this.eng,'enMackmillan',"banner");};
    this.enUrban = function(){return makeLink(this.eng,'enUrban',"banner");};
    this.enDictionary = function(){return makeLink(this.eng,'enDictionary',"banner");};
    this.enOneLook = function(){return makeLink(this.eng,'enOneLook',"banner");};
    this.enFreeDictionary = function(){return makeLink(this.eng,'enFreeDictionary',"banner");};
    this.ukGoogle = function(){return makeLink(this.eng,'ukGoogle',"icon");};
    this.ukMTranslate = function(){return makeLink(this.eng,'ukMTranslate',"icon");};
    this.ukABBYYLingvo = function(){return makeLink(this.eng,'ukABBYYLingvo',"icon");}; 
    this.ruABBYYLingvo = function(){return makeLink(this.eng,'ruABBYYLingvo',"icon");}; 
    this.ruBabLa = function(){return makeLink(this.eng,'ruBabLa',"icon");};
    this.ruGoogle = function(){return makeLink(this.eng,'ruGoogle',"icon");};
    this.enReverso = function(){return makeLink(this.eng,'enReverso',"banner");};
    this.ruReverso = function(){return makeLink(this.eng,'ruReverso',"icon");};
    this.ruVocab = function(){return makeLink(this.eng,'ruVocab',"icon");};
    this.enWordreference = function(){return makeLink(this.eng,'enWordreference',"banner");};
    this.esWordthesaurus = function(){return makeLink(this.eng,'esWordthesaurus',"icon");};
    this.enThesaurus = function(){return makeLink(this.eng,'enThesaurus',"icon");};
    this.thSensAgent = function(){return makeLink(this.eng,'thSensAgent',"icon");};
    this.enSensAgent = function(){return makeLink(this.eng,'enSensAgent',"banner");};
    this.ruSensAgent = function(){return makeLink(this.eng,'ruSensAgent',"icon");};
    this.enMerriam = function(){return makeLink(this.eng,'enMerriam',"banner");}; // 
    this.thMerriam = function(){return makeLink(this.eng,'thMerriam',"icon");}; // 
// http://www.merriam-webster.com/dictionary/take%20off вот это просто определения - пойдет для всех в английский блок
// http://www.merriam-webster.com/thesaurus/take%20off а вот это синонимы и антонимы
}

/* Создаем класс для 3000 слов */
function Words(engArr){
	this.doit = engArr[0];
	this.eng = engArr[1];
	this.key = engArr[2];
	this.ukr = engArr[3];
	this.rus = engArr[4];
	this.descr = engArr[5];
	this.exam = engArr[6];
    this.syn = engArr[7];
    this.ant = engArr[8];
	this.img = engArr[9];
    this.tail = "";

    commonMethods.apply(this, arguments); // Добавляем общие методы
}

/* Создаем класс для фразовых глаголов */
function Phrasal(engArr){
    this.doit = engArr[0];
    this.eng = engArr[1];
    this.key = engArr[2];
    this.ukr = engArr[3];
    this.rus = engArr[4];
    this.descr = engArr[5];
    this.exam = engArr[6];
    this.syn = engArr[7];
    this.ant = engArr[8];
    this.img = engArr[9];
    this.tail = "";
	
    commonMethods.apply(this, arguments);  // Добавляем общие методы
}

/* Спочатку визначаємо чи є [ в слові - це означає що слово введене з транскрипцією*/
/* Создаем класс для неправильных глаголов */
function Irregular(engArr){
    var tail
	this.doit = engArr[0];
	bigeng = engArr[1].replace(/\n/g,'<br>');
    var whereBracket = bigeng.indexOf('[');
    eng1 = (whereBracket)?bigeng.substring(0,whereBracket):bigeng;
    this.eng = eng1.replace(/\s*$/,'');
    // str=str.replace(/^\s*/,'').replace(/\s*$/,''); убирает пробелы и в начале и в конце
    this.tail = " " + bigeng.substring(whereBracket,bigeng.length);
    this.key = engArr[2];
    this.ukr = engArr[3];
    this.rus = engArr[4];
    this.descr = engArr[5];
    this.exam = engArr[6];
    this.syn = engArr[7];
    this.ant = engArr[8];
    this.img = engArr[9];

    commonMethods.apply(this, arguments); // Добавляем общие методы
}

/*---------------- Word only -----------*/
Words.prototype.enWikipedia = function(){return makeLink(this.eng,'enWikipedia',"banner");};
Words.prototype.enCambridge = function(){return makeLink(this.eng,'enCambridge',"banner");};
Words.prototype.enLongman = function(){return makeLink(this.eng,'enLongman',"banner");};
Words.prototype.ruCambridge = function(){return makeLink(this.eng,'ruCambridge',"icon");};
Words.prototype.ruWordreference = function(){return makeLink(this.eng,'ruWordreference',"icon");};

/*---------------- Phrasal only -----------*/
Phrasal.prototype.enPHUsingEnglish = function(){return makeLink(this.eng,'enPHUsingEnglish',"banner");}; 
Phrasal.prototype.ruCorrectEnglish = function(){return "<a href='http://www.correctenglish.ru/reference/phrasal-verbs/search/?idiom="+ this.eng.replace(/ /g,"+") + "&criteria=name' target='_blank' title='Correct English Translator (there is vocabulary of Idioms on this site)'>c</a>";};

/*---------------- Irregular only -----------*/
Irregular.prototype.ruCorrectEnglish = function(){return "<a href='http://www.correctenglish.ru/reference/phrasal-verbs/search/?idiom="+ this.eng.replace(/ /g,"+") + "&criteria=name' target='_blank' title='Irregular verb as phrase verb'>c</a>";};
/////////////////// Внимание - глагол может быть и в таблице фразовых и в таблице идиом - то есть 2 ссылки!!!!!! - по разному линки строятся и разные результаты поиска, и это идет в переводе на русский только - Фразовые, Идиомы, Слэнг, Пословицы ... Words светится в идиомах и пословицах. Irregular - еще и в фразовых, Phrase - только в фразовых. Это значит, что надо делать 4 иконки - с точкой, цветной например. Красная - фразовые, Фиолетовая - слэнг, Синяя - идиомы, Зеленая - пословицы
Irregular.prototype.enIRUsingEnglish = function(){return makeLink(this.eng,'enIRUsingEnglish',"banner");};
Irregular.prototype.enWikipedia = function(){return makeLink(this.eng,'enWikipedia',"banner");};
Irregular.prototype.enCambridge = function(){return makeLink(this.eng,'enCambridge',"banner");};
Irregular.prototype.enLongman = function(){return makeLink(this.eng,'enLongman',"banner");};
Irregular.prototype.ruCambridge = function(){return makeLink(this.eng,'ruCambridge',"icon");};
Irregular.prototype.ruWordreference = function(){return makeLink(this.eng,'ruWordreference',"icon");};

/* Common Image and Links*/

Words.prototype.imgfile = function(){return (this.img) ? "words/" + this.img : "znak_voprosa_01.jpg";};
Words.prototype.image = function(){return "<img src='images/" + this.imgfile() +"' alt='Vocabulary' width='180'>";};
Words.prototype.elinks = function(){return this.enWiktionary() + "<br>"+this.enWikipedia() + "<br>" + this.enTheFreeDictionary() + "<br>" + this.enMackmillan() + "<br>" + this.enCambridge() + "<br>" + this.enLongman() + "<br>" + this.enUrban() + "<br>" + this.enDictionary() + "<br>" +  this.enFreeDictionary() + "<br>" + this.enOneLook() + "<br>" + this.enWordreference() + "<br>"+this.enSensAgent() + "<br>" + this.enReverso() + "<br>" + this.enMerriam();};
Words.prototype.rulinks = function(){return this.ruGoogle() + " " + this.ruWiktionary() + "<br>" + this.ruCambridge() + " " + this.ruWordreference() + "<br>" + this.ruBabLa() + " " + this.ruVocab() + "<br>" + this.ruReverso() + " " + this.ruABBYYLingvo() + "<br>"+this.ruSensAgent();}; /* Вот это уже завершено под новое*/
Words.prototype.uklinks = function(){return this.ukGoogle() + "<br>"+this.ukWiktionary() + "<br>" + this.ukMTranslate() + "<br>" + this.ukABBYYLingvo();}; /* Вот это уже завершено под новое*/
Words.prototype.thlinks = function(){return this.enThesaurus() + "<br>" + this.esWordthesaurus() + "<br>" + this.thSensAgent() + "<br>" + this.thMerriam();}; /* Вот это уже завершено под новое*/

Phrasal.prototype.imgfile = function(){return (this.img) ? "phrasal/" + this.img : "znak_voprosa_01.jpg";};
Phrasal.prototype.image = function(){return "<img src='images/" + this.imgfile() +"' alt='Vocabulary' width='180'>";};
Phrasal.prototype.elinks = function(){return this.enWiktionary() + "<br>" + this.enTheFreeDictionary() + "<br>" + this.enMackmillan() + "<br>" + this.enUrban() + "<br>" + this.enDictionary() + "<br>" + this.enOneLook() + "<br>" + this.enFreeDictionary() + "<br>" + this.enPHUsingEnglish() + "<br>" + this.enWordreference() + "<br>"+this.enSensAgent() + "<br>" + this.enReverso() + "<br>" + this.enMerriam();};
Phrasal.prototype.rulinks = function(){return this.ruGoogle() + " " + this.ruWiktionary() + "<br>" + this.ruBabLa() + " " + this.ruVocab() + "<br>" + this.ruCorrectEnglish() + " " + this.ruReverso() + "<br>" + this.ruABBYYLingvo() + " "+this.ruSensAgent();};
Phrasal.prototype.uklinks = function(){return this.ukGoogle() + "<br>" + this.ukWiktionary() + "<br>" + this.ukMTranslate() + "<br>" + this.ukABBYYLingvo();}; /* Вот это уже завершено под новое*/
Phrasal.prototype.thlinks = function(){return this.enThesaurus() + "<br>" + this.esWordthesaurus() + "<br>" + this.thSensAgent() + "<br>" + this.thMerriam();}; /* Вот это уже завершено под новое*/

Irregular.prototype.imgfile = function(){return (this.img) ? "irregular/" + this.img : "znak_voprosa_01.jpg";};
Irregular.prototype.image = function(){return "<img src='images/" + this.imgfile() +"' alt='Vocabulary' width='180'>";};
// "<br>"  + this.enThesaurus() + 
Irregular.prototype.elinks = function(){return this.enWiktionary() + "<br>"+this.enWikipedia() + "<br>" + this.enTheFreeDictionary() + "<br>" + this.enMackmillan() + "<br>" + this.enCambridge() + "<br>" + this.enLongman() + "<br>" + this.enUrban() + "<br>" + this.enDictionary() + "<br>" + this.enFreeDictionary() + "<br>" + this.enOneLook() + "<br>" + this.enIRUsingEnglish() + "<br>" + this.enWordreference() + "<br>"+this.enSensAgent() + "<br>" + this.enReverso() + "<br>" + this.enMerriam();};
Irregular.prototype.rulinks = function(){return this.ruGoogle() + " " + this.ruWiktionary() + "<br>" + this.ruCambridge() + " " + this.ruWordreference() + "<br>"+this.ruBabLa() + " " + this.ruVocab() + "<br>" + this.ruCorrectEnglish() + " " + this.ruReverso() + "<br>" + this.ruABBYYLingvo() + " " + this.ruSensAgent();}; /* Вот это уже завершено под новое*/
Irregular.prototype.uklinks = function(){return this.ukGoogle() + "<br>"+this.ukWiktionary() + "<br>" + this.ukMTranslate() + "<br>" + this.ukABBYYLingvo();};
Irregular.prototype.thlinks = function(){return this.enThesaurus() + "<br>" + this.esWordthesaurus() + "<br>"+this.thSensAgent() + "<br>" + this.thMerriam();}; /* Вот это уже завершено под новое*/

var words = [];
warr.forEach(function(item){
    words[words.length] = new Words(item);
});

var phrasal = [];
parr.forEach(function(item){
    phrasal[phrasal.length] = new Phrasal(item);
});

var irregular = [];
iarr.forEach(function(item){
    irregular[irregular.length] = new Irregular(item);
});



