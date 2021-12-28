// It takes strings and return integer
function converToInteger(str) {
    return parseInt(str);
}
console.log(converToInteger("56"));

// Use the paseInt funcitno with Radix = radix specifies the base of the number in the string
// such as base 2 or base 7. base 2 is for binary
function convertToInteger(str) {
    return parseInt(str,2);

}
console.log(convertToInteger("100011"));

// Use the conditional (Ternary) OPerator
// condition ? statement-if-true : statement-if-false;

function checkEqual (a,b) {
    // if(a == b) {
    //     return true;
    // } else {
    //     return false;
    // }
    return a === b ? true : false;
    return a === b;
}
console.log(checkEqual(2,3))


// Use Multiple Conditional (Ternary) Operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}
console.log(checkSign(-10));