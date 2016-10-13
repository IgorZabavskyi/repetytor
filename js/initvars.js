// *** Begin initVars

var testMode = 0;
var order = 1;
var admitTest;
var suffixes = [];
var delayBefore, delayAfter, powerOfTest ;
var showTypeView, showEngImage, showEngLinks, showTrRLinks, showSynonyms, showExamples, showBothlang;
var testSelector = $("div.self");
var whoSelector = [];
var whoVisible = 2; // Switch block of site
var mainTitle = ["Words3000", "List of Words3000", "Setup", "Phrasal Verbs", "List of Phrasal Verbs", "Test", "Statistics", "Irregular Verbs", "List of Irregular Verbs"];
var lang = 'ukr';
var mainBody = '';
var mainTable = '';
var seekPrefWords = [];
var seekPrefPhrasals = [];
var seekPrefIrregulars = [];
var toCookieWords, toCookiePhrasals, toCookieIrregulars;
var testWord;
var typeOfLinkAll = "banner"; // "banner", "text", "icon"
var viewWord; // - Short - английский + перевод - Deep - со всеми ссылками - Big - слово, картинка, перевод(ы), описание, синонимы Custom - выбор пользователя - и это должна быть радиокнопка
/* Если куки не установлены - установить значения умолчания и прописать куки на старте */

//Cookies.remove('toCookie');
var myCookie = Cookies.get();
/* Default Settings of variables */
delayBefore = (myCookie.delayBefore)? myCookie.delayBefore : 2000;
delayAfter = (myCookie.delayAfter)? myCookie.delayAfter : 3000;
powerOfTest = (myCookie.powerOfTest)? myCookie.powerOfTest : 5;

toCookieWords = (myCookie.toCookieWords)? myCookie.toCookieWords : "an@be@co@@d@@g@@";
toCookiePhrasals = (myCookie.toCookiePhrasals)? myCookie.toCookiePhrasals : "get@put@come@@";
toCookieIrregulars = (myCookie.toCookieIrregulars)? myCookie.toCookieIrregulars : "a@b@c@@";
seekPrefWords = strtoArray(toCookieWords);
seekPrefPhrasals = strtoArray(toCookiePhrasals);
seekPrefIrregulars = strtoArray(toCookieIrregulars);
toCookieWords = arrtoString(seekPrefWords);
toCookiePhrasals = arrtoString(seekPrefPhrasals);
toCookieIrregulars = arrtoString(seekPrefIrregulars);

showTypeView = (myCookie.showTypeView)? myCookie.showTypeView : "Big";
showEngImage = (myCookie.showEngImage)? myCookie.showEngImage : 0;
showEngLinks = (myCookie.showEngLinks)? myCookie.showEngLinks : 1;
showTrRLinks = (myCookie.showTrRLinks)? myCookie.showTrRLinks : 1;
showSynonyms = (myCookie.showSynonyms)? myCookie.showSynonyms : 1;
showExamples = (myCookie.showExamples)? myCookie.showExamples : 1;
showBothlang = (myCookie.showBothlang)? myCookie.showBothlang : 1;

/* Write default Cookies */
Cookies.set('delayBefore', delayBefore, { expires: 7 });
Cookies.set('delayAfter', delayAfter, { expires: 7 });
Cookies.set('powerOfTest', powerOfTest, { expires: 7 });

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

console.groupCollapsed("Arrays of preffixes");
console.log(toCookieWords);
console.log(toCookiePhrasals);
console.log(toCookieIrregulars);
console.log(seekPrefWords);
console.log(seekPrefPhrasals);
console.log(seekPrefIrregulars);
myCookie = Cookies.get(); // Это просто повторно - для того чтобы обновить
console.log(myCookie);
console.groupEnd();
//Cookies.remove('showImage');

var wordsToDo = [];
var phrasalToDo = [];
var irregularToDo = [];

var timerId;
var trigger = 0;

/*
 This script may be useful for learning English
 */
//var available = ["put", "come", "call", "throw"];
var numBack;
var prepareTest = [];
for (f = 0; f < phrasal.length; f++){
    if (prepareTest.indexOf(phrasal[f].key[0]) < 0){
        prepareTest.push(phrasal[f].key[0]);
    }
}

var myVar, oldIndex, newIndex, randomQuestion;
var foundTable = [];
questions = 0;
rightAnswers = 0;
wrongAnswers = 0;
oldIndex = 0;
var found = false;
