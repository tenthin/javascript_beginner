function isLess(a, b) {
    if (a<b) {
        return true;
    }else {
        return false;
    }
}
console.log(isLess(4,5));


function isLess(a,b) {
    return a<b;
}
console.log(isLess(10,20));


// Using Return Function
function abTest (a,b) {

    if (a<0 || b<0) {
        return undefined;
    }


    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(abTest(1,2));


