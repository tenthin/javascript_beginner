function testGreaterThan (val) {
    if (val > 100) {
        return "over 100";
    }

    if (val >10) {
        return "greater than 10";
    }
    return " 10 or under";
}
console.log(testGreaterThan(11));


// Greater than or Equal to Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    
    if (val >= 10) {
        return "10 or Over";
    }
    return "less than 10";
}
console.log(testGreaterOrEqual(9));