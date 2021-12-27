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

// Less Than or Equal to OPerator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val<55 ) {
        return "Under 55";
    }
    return "55 or OVer";
}
console.log(testLessThan(60));


// Less than and equal to operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or equal to 12";
    }
    if (val <= 24) {
        return "Smaller than or equal to 24";
    }
    return "More than 24";
}
console.log(testLessOrEqual(34));
