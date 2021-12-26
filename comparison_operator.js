function testEqual(val) {
    if (val == 12) {
        return "equal";
    }
    return "not equal";
}

console.log(testEqual(10));

// Comparison with the Strict equality operator (===)
function testStrict(val) {
    if (val === 7) {
        return "equal";
    }
    return "not equal";
}
console.log(testStrict(7))


// Practice Comparing Different Values
function compareEquality(a,b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10,"10"));

function compareDquality(a,b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareDquality(10,"10"));


// Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));


// Strict Inequality operator
function testStrictNotEqual(val) {
    if (val !==17 ){
        return "not equal"
    }
    return "equal";
}
console.log(testStrictNotEqual(10));


