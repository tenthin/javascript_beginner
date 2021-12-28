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

// 