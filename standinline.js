// new items are added in the back of the que and old items are taken out from front of the que
var testArr = [1,2,3,4,5];

function nextInLine(arr,item) {
    arr.push(item);
    return arr.shift();
}
console.log("Before " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After " + JSON.stringify(testArr));