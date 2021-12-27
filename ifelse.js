function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }else{
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(9))


// Else if Statemetn
function testElseIf(val) {
    if (val > 10) {
        return "Greate than 10";
    }else if (val < 5) {
        return "Smaller than 5";
    }else{
        return "Between 5 and 10";    
    }    
}
console.log(testElseIf(6));

// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "less than 5";
    } else if (val < 10) {
        return "less than 10"
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));


// Chaining If Else Statement
function testSize(num) {
    if (num<5) {
        return "Tinny";
    }else if (num<10) {
        return "Small";
    }else if (num < 15) {
        return "Medium";
    }else if (num < 20) {
        return "Large";
    }else {
        return "Huge";
    }
}
console.log(testSize(19))