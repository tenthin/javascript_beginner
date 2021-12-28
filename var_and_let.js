// Difference between the var and let keyword
// ******** "let" does not let you declare variable twice
var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + "says Meow!";
}
console.log(catTalk())


let catName = "Quincy";
let quote;

let catName = "Beau";

function catTalk() {
    "use strict";   // this line of code is used to find common coding code mistaek

    catName = "Oliver";
    quote = catName + "says Meow!";
}
console.log(catTalk())


//COmpare Scopes of the var and let keyword

function checkScope() {
"use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}
checkScope("function scope");




