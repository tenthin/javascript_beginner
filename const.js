// "const" is another way to declare variable.. It has all the feature of "let"
// also read only, you cannot reassign a "const"
function printManyTimes(str) {
    "use strict";
    var sentence = str + "is cool";

    sentence = str + "is amazing";

    for (var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp");