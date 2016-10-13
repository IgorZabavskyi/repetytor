/**
 * All core functions
 */
arrtoString = function(arr){
    console.log(arr);
    var R = "";
    arr.forEach(function(item){
        R += item + "@";
    });
    R=R.slice(0,-1);
    return R;
};

function strtoArray(S) {
    S = S.split(/@/g);
    return S;
}
/* Поиск - подходит ли слово к массиву префиксов - функция используется как колбэк в some */
function isMatchPref(prefix){
    if (prefix != "") {
        return testWord.match(RegExp('^' + prefix, 'ig'));
    }
}
