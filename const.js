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

function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + "is cool";

    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");


// Mutate an Array Declared with const
const s = [5,7,2];
function edidInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
edidInPlace();
console.log(s)

// Prevent object mutation
function freeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14;
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    }catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freeseObj();

// Use Arrow Functions to write concise anonymous function
var magic = function(){
    return new Date();
};

var magic = () => {
    return new Date();
}

var magic = () => new Date();

const magic = () => new Date();

// Write Arrow Function with parameters
// You can pass arguments to arrow funcitons
// var myConcat = function(arr1,arr2) {
var myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

// Write Higer Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntergers = arr;
    return squareIntergers;
}

const squareIntergers = squareList(realNumberArray);
console.log(squareIntergers)


// take functions as arguments for processing collections of data
// Whenever one function takes other function as an argument thats a good time for an arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntergers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squareIntergers;
}

const squareIntergers = squareList(realNumberArray);
console.log(squareIntergers)


// Write Higher Order Arrow Functions
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    }
})();
console.log(increment(5,2));
console.log(increment(5))


