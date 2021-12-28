// Iterate with loops
 var myArray = [];
var i = 0;
 while(i < 5) {
     myArray.push(i);
     i++;
 }
 console.log(myArray);


//  For Loops
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray)


for (var i = 1; i < 6; i++) {
    myArray.push(i);
}
console.log(myArray);


// Iterate Odd Numbers with FOr loops
var ourArray = [];
 for (var i = 0; i < 10; i += 2) {
     ourArray.push(i);
 }
 console.log(ourArray)

 var myArray = [];

 for (var i = 1; i < 10; i += 2) {
     myArray.push(i);
 }
 console.log(myArray)

//  Count Backwards with Forloops
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);

myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray)


// Iterate through an Array with a For loops
var ourArr = [9,10,11,12];
var ourTotal = 0;

for(var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal)


var myArr = [2,3,4,5,6];
var myTotal = 0;
for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i];
}
console.log(myTotal);


// Nested For loops
function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i< arr.length; i++) {
        for(var j=0; j< arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
 
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);


// Iterate with Do...While loops
var myArray = [];
var i =10;

do {
    myArray.push(i);
    i++;
}while (i<5)
console.log(i,myArray)